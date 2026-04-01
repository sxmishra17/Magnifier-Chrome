// background.js - Sets default settings on first install

// Per-tab enabled state (in-memory; cleared if service worker restarts)
const tabEnabled = new Map();

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    // "enabled" is intentionally omitted — it is tab-local, not shared
    chrome.storage.sync.set({ zoom: 1.5, lensSize: "medium", lensPosition: "right", lensShape: "rect" });
  }
});

// Clean up when a tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  tabEnabled.delete(tabId);
});

// Message hub for popup ↔ background ↔ content-script coordination
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg) return;

  // Popup requests the enabled state for a specific tab
  if (msg.type === "get-tab-enabled") {
    sendResponse({ enabled: tabEnabled.get(msg.tabId) === true });
    return true;
  }

  // Popup sets the enabled state for a specific tab and relays to content script
  if (msg.type === "set-tab-enabled") {
    const { tabId, enabled } = msg;
    tabEnabled.set(tabId, enabled);

    // Try sending to the content script; if it isn't injected yet, inject it first.
    chrome.tabs
      .sendMessage(tabId, { type: "settings-update", patch: { enabled } })
      .catch(() => {
        // Content script not present — inject it now, then send the message.
        chrome.scripting
          .executeScript({
            target: { tabId },
            files: ["content.js"],
          })
          .then(() =>
            chrome.scripting.insertCSS({
              target: { tabId },
              files: ["content.css"],
            })
          )
          .then(() =>
            chrome.tabs
              .sendMessage(tabId, { type: "settings-update", patch: { enabled } })
              .catch(() => {})
          )
          .catch(() => {});
      });

    sendResponse({ ok: true });
    return true;
  }

  // Content script toggled via Ctrl+M — sync background map (no relay needed)
  if (msg.type === "set-enabled" && sender && sender.tab) {
    tabEnabled.set(sender.tab.id, msg.enabled);
    sendResponse({ ok: true });
    return true;
  }
});
