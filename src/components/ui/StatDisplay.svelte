<script>
  import Badge from './base/Badge.svelte';

  let {
    label,
    value,
    rating // s, a, b, c, d
  } = $props();

  // Remove any rating letter from the value (e.g., "120-150 A" -> "120-150")
  const cleanValue = rating ? value.replace(new RegExp(`\\s*${rating.toUpperCase()}\\s*$`), '') : value;
</script>

<div class="stat-item">
  <span class="stat-label">{label}:</span>
  <span class="stat-value">
    {cleanValue}
    {#if rating}
      <Badge variant="rating-{rating.toLowerCase()}">{rating.toUpperCase()}</Badge>
    {/if}
  </span>
</div>

<style>
  .stat-item {
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-sm);
    padding: var(--spacing-xs) 0;
  }

  .stat-label {
    color: var(--color-brown-base);
    font-weight: var(--font-weight-bold);
  }

  .stat-value {
    color: var(--color-brown-darkest);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-serif);
    font-variant-numeric: tabular-nums;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
</style>
