<script>
  let {
    children
  } = $props();
</script>

<div class="label">
  {@render children()}
</div>

<style>
  .label {
    color: var(--color-brown-600);
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: var(--spacing-sm);
    font-weight: var(--font-weight-bold);
  }
</style>
