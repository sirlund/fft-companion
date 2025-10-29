<script>
  let { title, description, buttonText, onclick } = $props();
</script>

<div class="card" {onclick}>
  <h2>{title}</h2>
  <p>{description}</p>
  <span class="card-button">{buttonText}</span>
</div>
