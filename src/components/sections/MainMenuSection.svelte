<script>
  import MenuCard from '../ui/MenuCard.svelte';

  let { showSection } = $props();

  const menuItems = [
    {
      title: 'Jobs',
      description: 'Explore generic and special jobs. View stats, requirements, equipment, and more.',
      buttonText: 'View Jobs',
      section: 'jobs'
    },
    {
      title: 'Abilities',
      description: 'Explore complete ability data including effects, damage, hit chance, range, and area.',
      buttonText: 'View Abilities',
      section: 'abilities'
    },
    {
      title: 'Equipment',
      description: 'Browse weapons, armor, and accessories. Filter by stats, effects, and availability.',
      buttonText: 'View Equipment',
      section: 'equipment'
    },
    {
      title: 'Unique Characters',
      description: 'Detailed info on special characters: base stats, available jobs, and recruitment quests.',
      buttonText: 'View Characters',
      section: 'characters'
    },
    {
      title: 'Monsters',
      description: 'Want to know where a monster appears? Check their stats, abilities, and location.',
      buttonText: 'View Monsters',
      section: 'monsters'
    },
    {
      title: 'Bosses',
      description: 'Discover immunities, weaknesses, stats, and unit details to prepare for each battle.',
      buttonText: 'View Bosses',
      section: 'bosses'
    },
    {
      title: 'Maps',
      description: 'Explore map layouts. View treasures, traps, and exit locations.',
      buttonText: 'View Maps',
      section: 'maps'
    },
    {
      title: 'Zodiac Compatibility',
      description: 'Curious how your sign matches up? Dive into zodiac compatibility to discover which allies empower you and which enemies to watch.',
      buttonText: 'View Zodiac',
      section: 'zodiac'
    },
    {
      title: 'Component Showcase',
      description: 'UI component library. Preview all available design elements.',
      buttonText: 'View Showcase',
      section: 'showcase'
    }
  ];
</script>

<header>
  <h1>FFT COMPANION</h1>
  <div class="subtitle">FFT Compendium</div>
  <div class="version-info">
    <h3>⚔️ Version: War of the Lions (iOS/iPadOS)</h3>
    <p><strong>Important:</strong> This guide is designed specifically for the mobile version of FFT: War of the Lions (iOS/iPadOS), which includes performance improvements, 360° camera, and access to exclusive multiplayer items through Trapper's Den. Not compatible with Ivalice Chronicles (2025 remaster).</p>
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
