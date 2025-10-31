<script>
  let {
    level = 2, // 1, 2, 3, 4
    variant = 'default', // default, tier, section
    class: className = '', // Accept class prop
    children
  } = $props();

  const Tag = `h${level}`;
  const shouldAddNoise = variant === 'tier';
</script>

<svelte:element this={Tag} class="heading heading-{variant} {className}" class:addNoise={shouldAddNoise}>
  {@render children()}
</svelte:element>

<style>
  .heading {
    font-family: var(--font-serif);
    line-height: var(--line-height-tight);
    margin: 0;
  }

  /* Default heading styles */
  :global(h1.heading) {
    font-size: 3.5em;
    color: var(--color-gold-light);
    text-shadow:
      2px 2px 4px rgba(0,0,0,0.7),
      0 0 20px rgba(212, 175, 55, 0.5);
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  :global(h2.heading) {
    font-size: 2.5em;
    color: var(--color-gold-300);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    margin-bottom: 20px;
  }

  :global(h3.heading) {
    font-size: 1.8em;
    color: var(--color-brown-700);
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
    margin-bottom: var(--spacing-md);
  }

  :global(h4.heading) {
    font-size: 1.2em;
    color: var(--color-brown-600);
    margin-bottom: 10px;
  }

  /* Tier variant (for job tiers) */
  .heading-tier {
    text-align: center;
    color: var(--color-gold-300) !important;
    font-size: 1.8em !important;
    margin-bottom: var(--spacing-xl);
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: var(--border-thick) solid var(--color-brown-400);
    padding: var(--spacing-md);
    background: var(--gradient-brown-header);
    border-radius: var(--radius-md);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  /* Section variant */
  .heading-section {
    color: var(--color-brown-700) !important;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
  }
</style>
