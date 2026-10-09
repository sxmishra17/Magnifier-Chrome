@echo off
setlocal
echo Packaging Chrome Extension v1.3.0 for Distribution...

python -c "import zipfile, os; files=['manifest.json','background.js','content.js','content.css','locales.js']; dirs=['icons','popup','pdf-viewer','whats-new']; packages=['magnifier-chrome-1.3.0.zip']; [(lambda z: [[z.write(f, f) for f in files if os.path.exists(f)], [z.write(os.path.join(r, fn), os.path.relpath(os.path.join(r, fn), '.')) for d in dirs for r, _, fl in os.walk(d) for fn in fl], z.close()])(zipfile.ZipFile(pkg, 'w', zipfile.ZIP_DEFLATED)) for pkg in packages]"

if %ERRORLEVEL% equ 0 (
    echo.
    echo =========================================================
    echo  Successfully created:
    echo    - magnifier-chrome-1.3.0.zip (Chrome Web Store / Release package)
    echo.
    echo  To load unpacked in Chrome:
    echo  1. Open Chrome and navigate to: chrome://extensions/
    echo  2. Enable "Developer mode"
    echo  3. Click "Load unpacked" and select this repository folder
    echo =========================================================
    goto end
)

echo.
echo Packaging failed with error %ERRORLEVEL%.

:end
endlocal
