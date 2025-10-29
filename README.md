# FFT Companion - War of the Lions (iOS)

A comprehensive companion guide for Final Fantasy Tactics: War of the Lions (iOS/iPadOS version).

## Features

- **Jobs**: Complete job tree with requirements, stats, and abilities
- **Abilities**: Searchable database of all job abilities
- **Equipment**: Weapons, armor, and accessories with stats
- **Characters**: Story characters and special units
- **Monsters**: Enemy types and poaching information
- **Bosses**: Strategy guides for difficult encounters
- **Maps**: Battle locations and treasure information
- **Zodiac Compatibility**: Complete compatibility system

## Quick Start

**⚠️ IMPORTANT:** You must run this app with a local HTTP server. Do not open `index.html` directly.

### Running the App

```bash
# Python (easiest)
python3 -m http.server 8080

# Node.js
npx http-server -p 8080

# NPM
npm run dev
```

Then open: **http://localhost:8080**

### Why a server?

Modern browsers block loading external CSS/JS files from `file://` URLs for security reasons (CORS). Using a local HTTP server solves this.

## Version Information

This guide is specifically for **FFT: War of the Lions iOS/iPadOS**, which includes:

- ✅ Better performance than PSP
- ✅ 360° camera rotation
- ✅ Multiplayer items available through Trapper's Den
- ✅ Auto-save functionality
- ✅ High-resolution sprites

**Not compatible with:**
- Final Fantasy Tactics (PS1 original)
- Final Fantasy Tactics: The Ivalice Chronicles (2025)

## Project Structure

```
fft-companion/
├── index.html              # Main application
├── src/
│   ├── css/styles.css     # Styling
│   └── js/app.js          # Navigation & search
├── package.json
└── README.md
```

## Troubleshooting

**Problem:** All sections appear at once instead of just the main menu.

**Solution:** You're opening `index.html` directly. Use a local HTTP server (see Quick Start above).

For more details, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## References

Based on verified information from:
- just_call_me_ash's Complete Guide (GameFAQs v1.06, 2025)
- Final Fantasy Wiki - Version Differences
- RPG Site - FFT Version Comparison
- Arqade/Stack Exchange discussions

## License

MIT License

---

**Note:** This is an unofficial fan-made companion guide. Final Fantasy Tactics and all related materials are property of Square Enix.
