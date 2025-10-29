<script>
  import MenuCard from '../ui/MenuCard.svelte';

  let { showSection } = $props();

  const menuItems = [
    {
      title: 'Jobs',
      description: 'Explora clases genéricas y especiales. Ver stats, requisitos, equipamiento y más.',
      buttonText: 'Ver Jobs',
      section: 'jobs'
    },
    {
      title: 'Abilities',
      description: 'Explora datos completos de habilidades incluyendo efectos, daño, cálculos de éxito, rango y área de efecto.',
      buttonText: 'Ver Abilities',
      section: 'abilities'
    },
    {
      title: 'Equipment',
      description: 'Navega armas, armaduras y accesorios. Filtra por stats, efectos y disponibilidad.',
      buttonText: 'Ver Equipment',
      section: 'equipment'
    },
    {
      title: 'Personajes Únicos',
      description: 'Información detallada de personajes especiales: stats base, clases disponibles y misiones de reclutamiento.',
      buttonText: 'Ver Personajes',
      section: 'characters'
    },
    {
      title: 'Monsters',
      description: '¿Quieres saber dónde aparece un monstruo? Revisa sus stats, habilidades y ubicación.',
      buttonText: 'Ver Monsters',
      section: 'monsters'
    },
    {
      title: 'Bosses',
      description: 'Descubre inmunidades, debilidades, stats y detalles de unidades para prepararte para cada batalla.',
      buttonText: 'Ver Bosses',
      section: 'bosses'
    },
    {
      title: 'Maps',
      description: 'Explora el diseño de mapas. Ver tesoros, trampas y ubicaciones de salida.',
      buttonText: 'Ver Maps',
      section: 'maps'
    },
    {
      title: 'Zodiac Compatibility',
      description: '¿Curioso sobre cómo tu signo se empareja? Sumérgete en la tabla de compatibilidad zodiacal para descubrir qué aliados te empoderan y qué enemigos debes vigilar.',
      buttonText: 'Ver Zodiac',
      section: 'zodiac'
    },
    {
      title: 'Component Showcase',
      description: 'Biblioteca de componentes de la interfaz. Vista previa de todos los elementos de diseño disponibles.',
      buttonText: 'Ver Showcase',
      section: 'showcase'
    }
  ];
</script>

<header>
  <h1>FFT COMPANION</h1>
  <div class="subtitle">FFT Compendium</div>
  <div class="version-info">
    <h3>⚔️ Versión: War of the Lions (iOS/iPadOS)</h3>
    <p><strong>Importante:</strong> Esta guía está diseñada específicamente para la versión móvil de FFT: War of the Lions (iOS/iPadOS), que incluye mejoras de rendimiento, cámara 360°, y acceso a items exclusivos de multiplayer a través de Trapper's Den. No es compatible con Ivalice Chronicles (2025 remaster).</p>
  </div>
</header>

<div class="grid">
  {#each menuItems as item}
    <MenuCard
      title={item.title}
      description={item.description}
      buttonText={item.buttonText}
      onclick={() => showSection(item.section)}
    />
  {/each}
</div>

<style>
  header {
    text-align: center;
    padding: 30px 0 50px 0;
    border-bottom: var(--border-thick) solid var(--color-brown-400);
    margin-bottom: 40px;
    background: linear-gradient(180deg, rgba(139, 111, 71, 0.2) 0%, transparent 100%);
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 3.5em;
    color: var(--color-gold-300);
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.7),
      0 0 20px rgba(212, 175, 55, 0.5);
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1.3em;
    color: var(--color-parchment-500);
    letter-spacing: 2px;
    font-style: italic;
  }

  .version-info {
    background: linear-gradient(135deg, var(--color-parchment-300) 0%, var(--color-parchment-500) 50%, var(--color-parchment-600) 100%);
    border: var(--border-thick) solid var(--color-brown-400);
    border-radius: var(--radius-md);
    padding: 15px;
    margin: 20px 0;
    font-size: 0.9em;
    color: var(--color-brown-900);
    box-shadow:
      inset 0 0 0 1px var(--color-brown-300),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .version-info h3 {
    color: var(--color-brown-700);
    margin-bottom: 10px;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
    line-height: var(--line-height-tight);
  }

  .version-info p {
    color: inherit;
    line-height: var(--line-height-relaxed);
    text-align: left;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 2.5em;
    }
  }
</style>
