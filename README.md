# Magnifier — Chrome Extension

> Magnify text, images, and PDFs with a customizable lens. Zoom 1×–10×, three sizes, circle or rectangle, five cursor positions.

---

## Features

- 🔍 **Text Magnification** — Hover over any text on a webpage to see it enlarged in a floating lens
- 🖼️ **Image Magnification** — Works on images and inline graphics
- 📄 **PDF Support** — Built-in PDF viewer with magnifier support for local PDF files
- ⭕ **Circle or Rectangle** — Choose your preferred lens shape
- 🔎 **Zoom 1×–10×** — Fine-grained zoom control from 1× up to 10×
- 📐 **Three Lens Sizes** — Small, medium, and large lens options
- 🖱️ **Five Cursor Positions** — Position the lens relative to your cursor
- 💾 **Persistent Settings** — All preferences are saved across sessions
- 🔘 **On/Off Toggle** — Enable or disable the magnifier with one click

---

## Installation

### From Chrome Web Store
Search **"Magnifier"** on the [Chrome Web Store](https://chrome.google.com/webstore)

### Developer Install
1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select this project folder
5. The extension icon will appear in your toolbar

---

## How to Use

1. Click the **Magnifier** icon in the Chrome toolbar to open settings
2. Toggle the magnifier **ON**
3. Choose your preferred **zoom level**, **lens shape**, and **size**
4. Hover over any text or image on the page — a magnified view appears
5. For PDFs, use the built-in viewer for best results

---

## Project Structure

```
├── manifest.json          # MV3 manifest
├── background.js          # Service worker — state management
├── content.js             # Content script — lens rendering and mouse tracking
├── content.css            # Lens styles and animations
├── popup/
│   ├── popup.html         # Settings popup UI
│   ├── popup.css          # Popup styles
│   └── popup.js           # Settings controls
├── pdf-viewer/
│   ├── viewer.html        # Built-in PDF viewer
│   ├── viewer.css         # PDF viewer styles
│   ├── viewer.js          # PDF viewer logic with magnifier integration
│   └── lib/
│       ├── pdf.min.js     # PDF.js library
│       └── pdf.worker.min.js
├── icons/                 # Extension icons (48, 96, 128px)
└── docs/
    ├── index.html         # GitHub Pages landing page
    └── privacy-policy.html
```

---

## Third-Party Libraries

| Library | License | Purpose |
|---------|---------|---------|
| [PDF.js](https://github.com/mozilla/pdf.js) | Apache 2.0 | PDF rendering in the built-in viewer |

---

## Privacy

**No data leaves your device.** Settings are stored locally using `chrome.storage.sync`. No external network requests are made.

[Full Privacy Policy](https://sxmishra17.github.io/Magnifier-Chrome/privacy-policy.html)

---

## Developer

**YuvaTech**

---

## License

All Rights Reserved.
