<script>
  let {
    variant = 'info', // info, warning, success, error
    title = '',
    children
  } = $props();
</script>

<div class="notice notice-{variant}">
  {#if title}
    <h3 class="notice-title">{title}</h3>
  {/if}
  <div class="notice-content">
    {@render children()}
  </div>
</div>

<style>
  .notice {
    background: linear-gradient(135deg, var(--color-parchment-light) 0%, var(--color-parchment-base) 50%, var(--color-parchment-dark) 100%);
    border: var(--border-thick) solid var(--color-brown-light);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    color: var(--color-brown-darkest);
    box-shadow:
      inset 0 0 0 1px var(--color-brown-lightest),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .notice-title {
    font-family: var(--font-serif);
    color: var(--color-brown-dark);
    margin-bottom: 10px;
    font-size: 1.2em;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
  }

  .notice-content {
    font-size: 0.9em;
    line-height: 1.6;
  }

  /* Variants */
  .notice-warning {
    background: linear-gradient(135deg, var(--color-gold-light) 0%, #e8d4b0 50%, var(--color-parchment-base) 100%);
    border-color: var(--color-gold);
    box-shadow:
      inset 0 0 0 1px var(--color-gold),
      inset 0 0 0 2px var(--color-gold-light),
      0 4px 8px rgba(212, 175, 55, 0.4);
  }

  .notice-success {
    background: linear-gradient(135deg, #e8f4e8 0%, #d4e8d4 50%, #c4dcc4 100%);
    border-color: #4caf50;
    box-shadow:
      inset 0 0 0 1px #4caf50,
      inset 0 0 0 2px #e8f4e8,
      0 4px 8px rgba(76, 175, 80, 0.4);
  }

  .notice-error {
    background: linear-gradient(135deg, #f4e8e8 0%, #e8d4d4 50%, #dcc4c4 100%);
    border-color: var(--color-red);
    box-shadow:
      inset 0 0 0 1px var(--color-red),
      inset 0 0 0 2px #f4e8e8,
      0 4px 8px rgba(231, 76, 60, 0.4);
  }
</style>
