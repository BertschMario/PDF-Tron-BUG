# PDF-Tron WebViewer BUG

---

### Install

1. Run `npm install` to install all dependencies
2. Run `node tools/copy-webviewer-files.js` to copy the webviewer files to 'src/assets'

---

### Run
- Run `ng serve` to start the dev server

---

### Bug

The code gets Stuck at `await PDFNet.initialize();` (src/webviewer/web-viewer.component.ts)

**Webviewer NOT works on**
- iPad (9. Generation) => iPadOS-Version 16.6.1
- iPhone 11 Pro Max => iOS-Version 16.6.1

**Webviewer works on**
- iPhone 11 => iOS-Version 17.0.3
- Android => 11, 12, 13
- Windows => 10, 11
- Linux => Ubuntu, Arch

**Tested Browsers**
```text
Apple devices tested with Safari and Chrome
Android devices tested with preinstalled browser and Chrome
Windows tested with Chrome, Firefox and Edge
Linux tested with Chrome and Firefox
```

**What Happens**
```text
The code gets stuck at await PDFNet.initialize();
After about 30 - 60 seconds the site reloads.
After another 30 - 60 seconds the site crashes.
```
