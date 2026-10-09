# Magnifier — Chrome Extension & Windows Desktop Application v1.3.0

![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Chrome%20%7C%20Windows-brightgreen.svg)
![Developer](https://img.shields.io/badge/developer-Yuvatech%20Solution%20USA%2C%20LLC-orange.svg)

> Hover over any text, image, screen region, or PDF to magnify it with a customizable lens. Includes both a **Chrome Web Extension (Manifest V3)** and a standalone **Windows Desktop Executable (`Magnifier.exe`)**!

---

## 🚀 Quick Download

- 📦 **[Download Windows Desktop App (`Magnifier-Desktop.zip`)](https://raw.githubusercontent.com/sxmishra17/Magnifier-Chrome/main/Magnifier-Desktop.zip)** — *Contains Magnifier.exe standalone executable*
- 💻 **[Download Direct Executable (`Magnifier.exe`)](https://raw.githubusercontent.com/sxmishra17/Magnifier-Chrome/main/Magnifier.exe)** — *Click-and-play portable Windows app*
- 🧩 **[Download Chrome Extension Package (`magnifier-chrome-1.3.0.zip`)](https://raw.githubusercontent.com/sxmishra17/Magnifier-Chrome/main/magnifier-chrome-1.3.0.zip)** — *Chrome extension distribution archive*

---

## 🌟 Key Features

### 🖥️ Windows Standalone App (`Magnifier.exe`)
- ⚡ **Zero Installation & Click-and-Play** — Lightweight (~75 KB), single-file portable Windows executable.
- 🎯 **Flicker-Free 60 FPS Real-Time Screen Lens** — Powered by GDI+ layered rendering with native `WDA_EXCLUDEFROMCAPTURE` exclusion.
- ⌨️ **System-Wide Global Hotkey (`Ctrl+M`)** — Toggle the lens anywhere across Windows. Includes an interactive Hotkey Recorder dialog.
- 📌 **System Tray Toolbar Integration** — Minimizes cleanly to the system tray taskbar menu.
- 🏢 **Enhanced About Dialog** — Includes direct navigation buttons to **Visit Us (yuvatechsolutionsusa.com)**, **View Other Extensions for Chrome**, **View Other Extensions on Firefox**, and the **GitHub Repository**.
- ☕ **Contribute & Support Options** — Integrated PayPal and Buy Me a Coffee support buttons in the Settings window.
- 🌐 **Multi-Language Auto-Detection** — System language default on initial startup with support for 11+ languages.

### 🧩 Chrome Web Extension (Manifest V3)
- 🔍 **Text & Image Magnification** — Hover over any webpage text or image for real-time magnified preview.
- 📄 **PDF Support** — Built-in localized PDF viewer with magnifier integration and bundled local PDF.js.
- 📢 **Interactive What's New Release Page** — Dedicated page detailing updates, feature guides, contact email, rate link, and feedback channels (`whats-new/whats-new.html`).
- ☕ **Contribute Buttons** — PayPal and Buy Me a Coffee icon buttons directly in the popup footer.
- 🏢 **Company Link & Branding** — Clickable Yuvatech Solution USA, LLC branding directing to the official website.
- ⭕ **Circle or Rectangle Shapes** — Choose circle or rectangle lens shapes with 3 lens sizes (Small, Medium, Large) and 5 cursor positions.
- 🌐 **11+ Supported Languages** — Auto-detects browser/system language by default.
- 📱 **Anti-Clipping Warm Theme GUI** — Compact dark glassmorphism layout with smooth scrollbar failsafe.

---

## ☕ Support Free Development

If you find Magnifier helpful, consider supporting its continued development:
- ☕ **[Buy Me a Coffee](https://buymeacoffee.com/satishmishra17)**
- 💳 **[Donate with PayPal](https://www.paypal.com/donate/?business=YMZRV5ZW4QJ8U&no_recurring=0&item_name=I+love+to+serve+the+community+for+betterment.+A+small+contribution+can+get+the+development+going+free+of+charge.&currency_code=USD)**
- ⭐ **[Rate on Chrome Web Store](https://chrome.google.com/webstore)**
- 🧩 **[Explore Other Extensions on Chrome](https://chrome-stats.com/a/c2F0aXNobWlzaHJhMTc)**
- 🦊 **[Explore Other Extensions on Firefox](https://addons.mozilla.org/en-US/firefox/user/14938505/)**

---

## 🌐 Supported Languages

Both the Windows app and the Chrome extension feature complete localization:

| Code | Language | Native Name |
|---|---|---|
| `auto` | Auto-detect (Default) | System / Browser Default |
| `en` | English | English |
| `es` | Spanish | Español |
| `fr` | French | Français |
| `de` | German | Deutsch |
| `ja` | Japanese | 日本語 |
| `zh` | Chinese | 中文 |
| `hi` | Hindi | हिन्दी |
| `pt` | Portuguese | Português |
| `it` | Italian | Italiano |
| `ru` | Russian | Русский |

---

## 📁 Repository Structure

```
├── Magnifier.exe               # Standalone Windows Desktop Executable
├── Magnifier-Desktop.zip       # Windows Desktop Package (Magnifier.exe inside)
├── magnifier-chrome-1.3.0.zip  # Packaged Chrome Extension (v1.3.0)
├── magnifier-chrome.zip        # Chrome Web Store Package
├── package-extension.bat       # Chrome extension packager script
├── build.bat                   # Windows application C# compiler script
├── manifest.json               # Chrome WebExtension MV3 Manifest
├── background.js               # Service Worker background state management
├── content.js                  # Content script lens rendering
├── content.css                 # Extension lens overlay styles
├── locales.js                  # Multi-language translation engine
├── popup/
│   ├── popup.html              # Settings popup UI with branding & donate buttons
│   ├── popup.css               # Compact warm dark settings layout
│   └── popup.js                # Live popup settings logic & localization
├── whats-new/
│   ├── whats-new.html          # Interactive release notes & community feedback page
│   ├── whats-new.css           # Modern release notes styling
│   └── whats-new.js            # Release page interactive logic
├── pdf-viewer/
│   ├── viewer.html             # Localized PDF viewer (uses local pdf.js)
│   ├── viewer.css              # PDF viewer styles
│   ├── viewer.js               # PDF rendering with magnifier integration
│   ├── pdf.min.js              # Bundled PDF.js engine (no remote scripts)
│   └── pdf.worker.min.js       # Bundled PDF.js Web Worker
├── icons/                      # Extension icons (48, 96, 128px) & yuvatechlogo.png
└── src/                        # C# Desktop App Source Code
    ├── Program.cs              # Entry point & Tray NotifyIcon
    ├── MagnifierLens.cs        # Layered window GDI+ screen capture lens
    ├── SettingsForm.cs         # Settings panel GUI with donate buttons
    ├── AboutDialog.cs          # Company modal with Visit Us & GitHub Link
    ├── Localization.cs        # C# Multi-language engine
    ├── HotkeyRecorderDialog.cs # Global hotkey configuration dialog
    ├── PdfViewerForm.cs        # Desktop PDF viewer integration
    └── NativeMethods.cs        # Windows API P/Invoke declarations
```

---

## 📬 Contact & Feedback

- 🌐 **Company Website**: [yuvatechsolutionsusa.com](https://yuvatechsolutionsusa.com)
- ✉️ **Email**: [satishmishra17@gmail.com](mailto:satishmishra17@gmail.com)

---

## 🔒 Privacy

**No data leaves your device.** Settings are stored locally using `chrome.storage.sync`. No external network requests are made.

[Full Privacy Policy](https://sxmishra17.github.io/Magnifier-Chrome/privacy-policy.html)

---

## 📄 License

All Rights Reserved © 2026 Yuvatech Solution USA, LLC.
