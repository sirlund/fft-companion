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

- **Svelte 5** - Reactive UI framework with runes ($props, $derived)
- **Vite 7** - Fast development server with HMR
- **Modern JavaScript** - ES modules and modern syntax
- **CSS Design System** - Custom properties, design tokens, modular architecture
- **SVG Filters** - Procedural noise textures for authentic paper/parchment feel

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
│       ├── characters/        # Character portraits
│       ├── noise.svg          # SVG noise texture filter
│       ├── watercolor.jpg     # Background texture
│       └── ref/               # Design reference images
├── scripts/                   # Build & migration scripts
│   ├── convert-to-svelte.js
│   ├── extract-sections.js
│   ├── download-job-portraits.js
│   └── download-character-portraits.js
├── src/
│   ├── assets/
│   │   ├── fonts/             # Custom font files (Altima, Georgia)
│   │   └── styles/            # Modular CSS architecture
│   │       ├── fonts.css      # Font declarations
│   │       ├── variables.css  # Design tokens & CSS custom properties
│   │       └── styles.css     # General styles & imports
│   ├── components/
│   │   ├── ui/
│   │   │   ├── base/          # Base UI primitives
│   │   │   │   ├── Avatar.svelte
│   │   │   │   ├── Badge.svelte
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Heading.svelte
│   │   │   │   └── SectionDivider.svelte
│   │   │   ├── BackButton.svelte
│   │   │   ├── JobCard.svelte
│   │   │   ├── MenuCard.svelte
│   │   │   ├── Notice.svelte
│   │   │   ├── RequirementList.svelte
│   │   │   ├── SearchBox.svelte
│   │   │   └── StatDisplay.svelte
│   │   └── sections/          # Section components
│   │       ├── ComponentShowcase.svelte
│   │       ├── JobsSection.svelte
│   │       ├── MainMenuSection.svelte
│   │       └── [other sections...]
│   ├── data/                  # Game data
│   │   └── jobs.js            # Job definitions & stats
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

#### Base Components
- **Avatar** - Character/job portraits with size variants
- **Badge** - Labels for requirements, ratings (S/A/B/C/D)
- **Button** - Primary/ghost variants with hover states
- **Heading** - Semantic headings (h1-h4) with tier/section variants
- **SectionDivider** - Horizontal dividers with centered text

#### Composite Components
- **JobCard** - Displays job info with stats, requirements, abilities, and bonuses
- **MenuCard** - Reusable card component for main menu navigation
- **Notice** - Alert/info boxes (info, warning, success, error variants)
- **RequirementList** - Displays job prerequisites with badges
- **SearchBox** - Search input with two-way binding ($bindable)
- **StatDisplay** - Compact stat display with rating badges

### Design System

The app uses a comprehensive design token system:

#### CSS Architecture
- **fonts.css** - Font-face declarations (Altima, Georgia variants)
- **variables.css** - Single source of truth for all design tokens
- **styles.css** - Global styles with modular imports

#### Design Tokens (in variables.css)
- **Spacing** - 8pt grid system (xs/sm/md/lg/xl/xxl)
- **Colors** - 9-level palettes (100-900) for parchment, brown, gold, red, green, yellow
- **Typography** - Font families, sizes, weights, line heights
- **Sizing** - Consistent size scale (xs/sm/md/lg/xl)
- **Border Radius** - 4 levels of rounding (xs/sm/md/lg)
- **Gradients** - Reusable gradient definitions for backgrounds
- **Status Colors** - Semantic colors for notices/alerts

#### Visual Effects
- **SVG Noise Texture** - Procedural feTurbulence filter for paper grain
  - Customizable via `public/assets/noise.svg`
  - Parameters: baseFrequency, numOctaves, blur, contrast
  - Applied to job cards, notices, and tier headings
- **Watercolor Background** - Textured background with color-burn blend mode
- **Gradient Overlays** - Layer gradients with noise for depth

#### Theme Aesthetic
- Medieval/fantasy color palette (golds, browns, parchment tones)
- Paper/parchment texture effects
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-friendly design (8pt grid system)

### Customizing the Noise Texture

The SVG noise texture can be customized by editing `public/assets/noise.svg`:

```xml
<feTurbulence
  type='fractalNoise'     <!-- or 'turbulence' for sharper noise -->
  baseFrequency='0.5'     <!-- 0.3-2.0: grain size (lower=coarser) -->
  numOctaves='5'          <!-- 1-8: detail complexity -->
  seed='1'                <!-- 0-999: random variation -->
  stitchTiles='stitch'/>  <!-- makes texture seamlessly tileable -->
```

Additional optional filters (uncomment in the SVG):
- **feGaussianBlur** - Smooths/softens the texture
- **feColorMatrix** - Adjusts contrast and saturation
- **feComponentTransfer** - Fine-tune RGB channels

See comments in `noise.svg` for detailed customization examples.

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
