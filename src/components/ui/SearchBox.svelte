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
    background: linear-gradient(135deg, var(--color-parchment-200) 0%, var(--color-parchment-300) 100%);
    border: var(--border-base) solid var(--color-brown-400);
    border-radius: var(--radius-md);
    font-family: var(--font-serif);
    font-size: var(--font-size-base);
    color: var(--color-brown-700);
    box-shadow:
      inset 0 0 0 1px var(--color-brown-300),
      0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .search-box::placeholder {
    color: var(--color-brown-400);
    opacity: 0.7;
  }

  .search-box:focus {
    outline: none;
    border-color: var(--color-gold-500);
    box-shadow:
      inset 0 0 0 1px var(--color-gold-500),
      0 0 8px rgba(212, 175, 55, 0.3);
  }
</style>
