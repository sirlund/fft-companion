<script>
  import Button from './base/Button.svelte';

  let { title, description, buttonText, onclick } = $props();
</script>

<div class="card" {onclick}>
  <h2>{title}</h2>
  <p>{description}</p>
  <Button size="md">{buttonText}</Button>
</div>

<style>
  .card {
    background: linear-gradient(135deg, var(--color-parchment-300) 0%, var(--color-parchment-500) 50%, var(--color-parchment-600) 100%);
    border: var(--border-thick) solid var(--color-brown-400);
    border-radius: var(--radius-md);
    padding: 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow:
      inset 0 0 0 1px var(--color-brown-300),
      inset 0 0 0 2px var(--color-parchment-300),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .card:hover {
    transform: translateY(-3px);
    box-shadow:
      inset 0 0 0 1px var(--color-gold-500),
      inset 0 0 0 2px var(--color-gold-300),
      0 8px 20px rgba(212, 175, 55, 0.5);
  }

  .card h2 {
    color: var(--color-brown-700);
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: var(--border-base) solid var(--color-brown-400);
    padding-bottom: 15px;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
    font-family: var(--font-serif);
    line-height: var(--line-height-tight);
  }

  .card p {
    text-align: center;
    color: var(--color-brown-700);
    margin-bottom: 25px;
    min-height: 60px;
    line-height: var(--line-height-relaxed);
  }

  .card :global(button) {
    display: block;
    width: 100%;
  }
</style>
