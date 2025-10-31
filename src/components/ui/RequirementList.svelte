<script>
  import SectionDivider from './base/SectionDivider.svelte';
  import Badge from './base/Badge.svelte';

  let {
    requirements = []
  } = $props();
</script>

{#if requirements.length > 0}
  <div>
    <SectionDivider>REQUIREMENTS</SectionDivider>
    <div class="req-badges">
      {#each requirements.filter(r => !r.special && !r.genderLock) as req}
        <Badge size="small">
          {req.label}
          {#if req.level}
            <span class="level">{req.level}</span>
          {/if}
        </Badge>
      {/each}
    </div>

    {#if requirements.some(r => r.special)}
      {#each requirements.filter(r => r.special) as special}
        <div class="special-req">
          {special.label}
        </div>
      {/each}
    {/if}

    {#if requirements.some(r => r.genderLock)}
      {#each requirements.filter(r => r.genderLock) as genderLock}
        <div class="gender-lock" style="color: {genderLock.color}">
          {genderLock.label}
        </div>
      {/each}
    {/if}
  </div>
{/if}

<style>
  .req-badges {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
  }

  .special-req {
    font-size: var(--font-size-sm);
    color: var(--color-red-700);
    margin-top: 5px;
  }

  .gender-lock {
    font-size: var(--font-size-sm);
    margin-top: 5px;
    color: var(--color-red-700);
  }

  .level {
    color: var(--color-brown-400);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-serif);
  }
</style>
