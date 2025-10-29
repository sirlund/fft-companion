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
    border-radius: var(--radius-md);
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
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
  }

  /* Color variants - Default */
  .badge-default {
    background: rgba(139, 111, 71, 0.25);
    border: var(--border-thin) solid var(--color-brown-light);
    color: var(--color-brown-dark);
  }

  /* Color variants - Special/Unique */
  .badge-special {
    background: var(--color-red);
    color: #fff;
  }

  .badge-unique {
    background: var(--color-gold);
    color: var(--color-brown-darkest);
  }

  /* Rating badges - FFT style gradient bars */
  .badge-rating-s {
    background: linear-gradient(180deg, var(--color-rating-s) 0%, var(--color-rating-s-accent) 100%);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-a {
    background: linear-gradient(180deg, var(--color-rating-a) 0%, var(--color-rating-a-accent) 100%);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-b {
    background: linear-gradient(180deg, var(--color-rating-b) 0%, var(--color-rating-b-accent) 100%);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-c {
    background: linear-gradient(180deg, var(--color-rating-c) 0%, var(--color-rating-c-accent) 100%);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }

  .badge-rating-d {
    background: linear-gradient(180deg, var(--color-rating-d) 0%, var(--color-rating-d-accent) 100%);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
