<script>
  let {
    variant = 'primary', // primary, ghost
    size = 'md', // sm, md, lg
    onclick,
    type = 'button',
    children
  } = $props();
</script>

<button
  {type}
  class="btn btn-{variant} btn-{size}"
  {onclick}
>
  {@render children()}
</button>

<style>
  .btn {
    display: inline-block;
    padding: var(--spacing-md) var(--spacing-xl);
    border: var(--border-base) solid var(--color-brown-600);
    border-radius: var(--radius-md);
    cursor: pointer;
    font-size: var(--font-size-base);
    font-family: var(--font-serif);
    font-weight: var(--font-weight-bold);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
  }

  /* Variants */
  .btn-primary {
    background: linear-gradient(135deg, var(--color-parchment-300) 0%, var(--color-parchment-500) 100%);
    color: var(--color-brown-700);
    border-color: var(--color-brown-400);
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, var(--color-gold-300) 0%, var(--color-parchment-300) 100%);
    border-color: var(--color-gold-500);
  }

  .btn-ghost {
    background: transparent;
    color: var(--color-parchment-500);
    border-color: var(--color-brown-400);
  }

  .btn-ghost:hover {
    background: rgba(139, 111, 71, 0.2);
    border-color: var(--color-gold-500);
    color: var(--color-gold-300);
  }

  /* Sizes */
  .btn-sm {
    padding: var(--spacing-sm) 20px;
    font-size: 0.9em;
  }

  .btn-md {
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: var(--font-size-base);
  }

  .btn-lg {
    padding: var(--spacing-md) 40px;
    font-size: 1.2em;
  }
</style>
