<script>
  let { placeholder, value = $bindable(''), onkeyup } = $props();
</script>

<input
  type="text"
  class="search-box"
  {placeholder}
  bind:value={value}
  {onkeyup}
>

<style>
  .search-box {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md);
    background: linear-gradient(135deg, var(--color-parchment-lightest) 0%, var(--color-parchment-light) 100%);
    border: var(--border-base) solid var(--color-brown-light);
    border-radius: var(--radius-md);
    font-family: var(--font-serif);
    font-size: var(--font-size-base);
    color: var(--color-brown-dark);
    box-shadow:
      inset 0 0 0 1px var(--color-brown-lightest),
      0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .search-box::placeholder {
    color: var(--color-brown-light);
    opacity: 0.7;
  }

  .search-box:focus {
    outline: none;
    border-color: var(--color-gold);
    box-shadow:
      inset 0 0 0 1px var(--color-gold),
      0 0 8px rgba(212, 175, 55, 0.3);
  }
</style>
