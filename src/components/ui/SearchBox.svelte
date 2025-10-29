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
