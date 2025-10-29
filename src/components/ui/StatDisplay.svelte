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

<span class="stat-item">
  <span class="stat-label">{label}:</span>
  {#if rating}
    <Badge variant="rating-{rating.toLowerCase()}" size="small">{rating.toUpperCase()}</Badge>
  {:else}
    <span class="stat-value">{cleanValue}</span>
  {/if}
</span>

<style>
  .stat-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: var(--font-size-sm);
  }

  .stat-label {
    color: var(--color-brown-600);
    font-weight: var(--font-weight-bold);
  }

  .stat-value {
    color: var(--color-brown-900);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-serif);
  }
</style>
