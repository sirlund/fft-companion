<script>
  let {
    src,
    alt = '',
    size = 'md' // sm, md, lg
  } = $props();
</script>

<div class="avatar avatar-{size}">
  <img {src} {alt} />
</div>

<style>
  .avatar {
    background: rgba(139, 111, 71, 0.15);
    border: var(--border-base) solid var(--color-brown-light);
    border-radius: var(--radius-md);
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .avatar img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Sizes */
  .avatar-sm {
    width: 40px;
    height: 50px;
  }

  .avatar-md {
    width: 60px;
    height: 80px;
  }

  .avatar-lg {
    width: 80px;
    height: 100px;
  }
</style>
