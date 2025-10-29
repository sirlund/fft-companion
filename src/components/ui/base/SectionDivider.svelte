<script>
  let { children } = $props();
</script>

<div class="section-divider">
  {@render children()}
</div>

<style>
  .section-divider {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 0.75em;
    font-weight: var(--font-weight-bold);
    letter-spacing: 1px;
    color: var(--color-brown-400);
    margin: var(--spacing-sm) 0;
  }

  .section-divider::before,
  .section-divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--color-brown-400);
  }

  .section-divider::before {
    margin-right: 10px;
  }

  .section-divider::after {
    margin-left: 10px;
  }
</style>
