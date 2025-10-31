<script>
  let {
    variant = 'info', // info, warning, success, error
    title = '',
    children
  } = $props();
</script>

<div class="notice notice-{variant} addNoise">
  {#if title}
    <h3 class="notice-title">{title}</h3>
  {/if}
  <div class="notice-content">
    {@render children()}
  </div>
</div>

<style>
  .notice {
    background: var(--gradient-parchment-default);
    border: var(--border-thick) solid var(--color-brown-400);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    color: var(--color-brown-900);
    box-shadow:
      inset 0 0 0 1px var(--color-brown-300),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .notice-title {
    font-family: var(--font-serif);
    color: var(--color-brown-700);
    margin-bottom: 10px;
    font-size: 1.2em;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
    line-height: var(--line-height-tight);
  }

  .notice-content {
    font-size: 0.9em;
    line-height: var(--line-height-relaxed);
  }

  /* Variants */
  .notice-info {
    background: var(--gradient-status-info);
    border-color: var(--color-status-info-border);
    box-shadow:
      inset 0 0 0 1px var(--color-status-info-border),
      inset 0 0 0 2px var(--color-status-info-light),
      0 4px 8px rgba(144, 164, 174, 0.4);
  }

  .notice-warning {
    background: var(--gradient-status-warning);
    border-color: var(--color-status-warning-border);
    box-shadow:
      inset 0 0 0 1px var(--color-status-warning-border),
      inset 0 0 0 2px var(--color-status-warning-light),
      0 4px 8px rgba(253, 216, 53, 0.4);
  }

  .notice-success {
    background: var(--gradient-status-success);
    border-color: var(--color-status-success-border);
    box-shadow:
      inset 0 0 0 1px var(--color-status-success-border),
      inset 0 0 0 2px var(--color-status-success-light),
      0 4px 8px rgba(76, 175, 80, 0.4);
  }

  .notice-error {
    background: var(--gradient-status-error);
    border-color: var(--color-status-error-border);
    box-shadow:
      inset 0 0 0 1px var(--color-status-error-border),
      inset 0 0 0 2px var(--color-status-error-light),
      0 4px 8px rgba(212, 63, 47, 0.4);
  }
</style>
