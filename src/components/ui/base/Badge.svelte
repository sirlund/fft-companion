<script>
  let {
    size = 'medium', // small, medium, large
    variant = 'default', // default, special, unique, rating-s, rating-a, rating-b, rating-c, rating-d
    children
  } = $props();
</script>

<span class="badge badge-{size} badge-{variant}">
  {@render children()}
</span>

<style>
  .badge {
    display: inline-block;
    border-radius: var(--radius-sm);
    font-family: var(--font-serif);
    font-weight: var(--font-weight-bold);
    text-align: center;
    white-space: nowrap;
  }

  /* Sizes */
  .badge-small {
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    letter-spacing: 1px;
  }

  .badge-medium {
    padding: 3px var(--spacing-sm);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
  }

  .badge-large {
    padding: 6px var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
  }

  /* Color variants - Default */
  .badge-default {
    background: rgba(139, 111, 71, 0.25);
    border: var(--border-thin) solid var(--color-brown-400);
    color: var(--color-brown-700);
  }

  /* Color variants - Special/Unique */
  .badge-special {
    background: var(--color-red-500);
    color: #fff;
  }

  .badge-unique {
    background: var(--color-gold-500);
    color: var(--color-brown-900);
  }

  /* Rating badges - FFT style gradient bars */
  .badge-rating-s {
    background: var(--gradient-rating-s);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-a {
    background: var(--gradient-rating-a);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-b {
    background: var(--gradient-rating-b);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-c {
    background: var(--gradient-rating-c);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-d {
    background: var(--gradient-rating-d);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
