# Troubleshooting Guide

## Common Issue: All Sections Visible at Once

### Symptom
When you open the app, you see all sections (Jobs, Abilities, Equipment, etc.) stacked on top of each other instead of just the main menu.

### Cause
You're opening `index.html` directly from the file system (`file://` protocol). Modern browsers block external CSS/JS files for security (CORS policy).

When CSS doesn't load:
- `.section { display: none; }` rule doesn't apply
- All sections become visible
- App appears broken

### ✅ Solution

**Use a local HTTP server:**

```bash
# Python (recommended)
python3 -m http.server 8080

# Then open: http://localhost:8080
```

Alternative methods:
```bash
# Node.js
npm run dev

# npx
npx http-server -p 8080

# PHP
php -S localhost:8080
```

### ✅ VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Other Issues

### JavaScript Not Working

**Symptom:** Can't navigate between sections, buttons don't work.

**Solution:** Same as above - use a local HTTP server.

### Styles Look Broken

**Symptom:** No colors, unstyled text, broken layout.

**Solution:** CSS file isn't loading. Use a local HTTP server.

### Verify Files Are Loading

Open Browser DevTools (F12):

1. **Console Tab**: Should show no errors
2. **Network Tab**: Both `styles.css` and `app.js` should show "200 OK"

Quick test in console:
```javascript
console.log(typeof showSection);
// Should output: "function"
// If "undefined" → JS not loaded
```

## Why This Happens

Browsers implement CORS security policies that restrict what files can load from `file://` URLs. This protects your system from malicious scripts.

HTTP servers (even local ones) serve files with proper headers, allowing browsers to load resources without security restrictions.

## Still Having Issues?

1. Check browser version (use latest)
2. Clear browser cache
3. Verify you're in the correct directory (`fft-companion/`)
4. Check that files exist:
   - `src/css/styles.css`
   - `src/js/app.js`

---

Last updated: October 2025
