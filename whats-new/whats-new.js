// whats-new.js - Logic for release notes page

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // ── Apply language ──────────────────────────────────────────────────
    if (window.I18N) {
      chrome.storage.sync.get({ language: "auto" }, (s) => {
        window.I18N.setLanguage((s && s.language) || "auto");
        applyTranslations();
      });
    }

    // ── Download Desktop button ─────────────────────────────────────────
    const btnDownloadDesktop = document.getElementById("btnDownloadDesktop");
    if (btnDownloadDesktop) {
      btnDownloadDesktop.addEventListener("click", () => {
        const directUrl = "https://raw.githubusercontent.com/sxmishra17/Magnifier-Chrome/main/Magnifier-Desktop.zip";
        const a = document.createElement("a");
        a.href = directUrl;
        a.download = "Magnifier-Desktop.zip";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    }

    // ── Open PDF Viewer button ──────────────────────────────────────────
    const btnOpenPdf = document.getElementById("btnOpenPdf");
    if (btnOpenPdf) {
      btnOpenPdf.addEventListener("click", () => {
        const url = chrome.runtime.getURL("pdf-viewer/viewer.html");
        chrome.tabs.create({ url });
      });
    }
  });

  function applyTranslations() {
    if (!window.I18N) return;
    const t = window.I18N.t;

    const setTxt = (id, key) => {
      const el = document.getElementById(id);
      if (el) el.textContent = t(key);
    };

    if (t("downloadDesktop")) setTxt("txtBtnDownloadDesktop", "downloadDesktop");
    if (t("openPdfViewer")) setTxt("txtBtnOpenPdf", "openPdfViewer");
  }
})();
