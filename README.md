# FFT Companion - War of the Lions (iOS)

A comprehensive companion guide for Final Fantasy Tactics: War of the Lions (iOS/iPadOS version).

Built with **Svelte 5** and **Vite** for a fast, modern user experience.

## Features

- **Jobs**: Complete job tree with requirements, stats, and abilities
- **Abilities**: Searchable database of all job abilities
- **Equipment**: Weapons, armor, and accessories with stats
- **Characters**: Story characters and special units
- **Monsters**: Enemy types and poaching information
- **Bosses**: Strategy guides for difficult encounters
- **Maps**: Battle locations and treasure information
- **Zodiac Compatibility**: Complete compatibility system

## Tech Stack

- **Svelte 5** - Reactive UI framework with runes
- **Vite 7** - Fast development server with HMR
- **Modern JavaScript** - ES modules and modern syntax
- **CSS** - Custom styling inspired by FFT aesthetic

## Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or pnpm

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open: **http://localhost:5173**

The app will automatically reload when you make changes thanks to Vite's Hot Module Replacement (HMR).

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Version Information

This guide is specifically for **FFT: War of the Lions iOS/iPadOS**.

**Features included:**
- WOTL exclusive jobs (Dark Knight, Onion Knight)
- Multiplayer items accessible via Trapper's Den
- Updated ability names and translations
- iOS-specific performance improvements

**Not compatible with:**
- Final Fantasy Tactics (PS1 original)
- Final Fantasy Tactics: The Ivalice Chronicles (2025 remaster)

## Project Structure

```
fft-companion/
├── public/                    # Static assets
│   └── assets/
│       ├── jobs/              # Job icon images (34 webp)
│       └── ref/               # Design reference images
├── scripts/                   # Build & migration scripts
│   ├── convert-to-svelte.js
│   └── extract-sections.js
├── src/
│   ├── assets/
│   │   └── styles/            # CSS styles
│   │       └── styles.css
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── MenuCard.svelte
│   │   │   ├── BackButton.svelte
│   │   │   └── SearchBox.svelte
│   │   └── sections/          # Section components
│   │       ├── JobsSection.svelte
│   │       ├── AbilitiesSection.svelte
│   │       ├── EquipmentSection.svelte
│   │       ├── CharactersSection.svelte
│   │       ├── MonstersSection.svelte
│   │       ├── BossesSection.svelte
│   │       ├── MapsSection.svelte
│   │       └── ZodiacSection.svelte
│   ├── App.svelte             # Root component
│   └── main.js                # Application entry point
├── index.html                 # HTML template
├── package.json
├── vite.config.js             # Vite configuration
├── svelte.config.js           # Svelte configuration
└── README.md
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Key Components

- **MenuCard** - Reusable card component for main menu
- **BackButton** - Navigation back button
- **SearchBox** - Search input with two-way binding
- **Section Components** - Each game feature (Jobs, Abilities, etc.) as a separate component

### Styling

The app uses a custom FFT-inspired theme with:
- Medieval/fantasy color palette (golds, browns, dark backgrounds)
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-friendly design

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Hot Module Replacement Not Working

1. Make sure you're running `npm run dev`
2. Check that no other Vite instances are running
3. Clear Vite cache: `rm -rf node_modules/.vite`

For more details, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## References

Based on verified information from:
- just_call_me_ash's Complete Guide (GameFAQs v1.06, 2025)
- Final Fantasy Wiki - Version Differences
- RPG Site - FFT Version Comparison
- Arqade/Stack Exchange discussions

## Contributing

This is a personal project, but suggestions and bug reports are welcome via GitHub issues.

## License

MIT License

---

**Note:** This is an unofficial fan-made companion guide. Final Fantasy Tactics and all related materials are property of Square Enix.
