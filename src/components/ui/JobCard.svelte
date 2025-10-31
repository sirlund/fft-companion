<script>
  import Avatar from './base/Avatar.svelte';
  import Badge from './base/Badge.svelte';
  import Heading from './base/Heading.svelte';
  import SectionDivider from './base/SectionDivider.svelte';
  import StatDisplay from './StatDisplay.svelte';
  import RequirementList from './RequirementList.svelte';

  // Props for the job card
  let {
    name,
    iconSrc,
    requirements = [],
    stats = {},
    ability = {},
    bonuses = [],
    description,
    characterName = null,
    isExclusiveWotl = false,
    isSpecialCharacter = false
  } = $props();

  // Convert description into tags (split by periods)
  const descriptionTags = $derived(
    description
      ? description.split('.').map(s => s.trim()).filter(s => s.length > 0)
      : []
  );
</script>

<div
  class="job-card addNoise {isExclusiveWotl ? 'exclusive-wotl' : ''}"
  style={isSpecialCharacter ? 'border-color: var(--color-gold); box-shadow: inset 0 0 0 1px var(--color-gold), inset 0 0 0 2px var(--color-gold-light), 0 4px 8px rgba(212, 175, 55, 0.5);' : ''}
>
  <div class="job-header">
    <div class="job-title-section">
      <Heading level={3}>{name}</Heading>
      {#if descriptionTags.length > 0}
        <div class="description-tags">
          {#each descriptionTags as tag}
            <span class="desc-tag">{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
    <div class="job-icon-wrapper">
      <Avatar size="md" src={iconSrc} alt={name} />
    </div>
  </div>

  {#if characterName}
    <div class="character-name">
      {characterName}
    </div>
  {/if}

  <div class="card-section">
    <RequirementList {requirements} />
  </div>

  {#if Object.keys(stats).length > 0}
    <div class="card-section stats-section">
      <SectionDivider>STATS</SectionDivider>
      <div class="stats-container">
        {#if stats.hp}
          <StatDisplay label="HP" value={stats.hp.value} rating={stats.hp.rating} />
        {/if}
        {#if stats.mp}
          <StatDisplay label="MP" value={stats.mp.value} rating={stats.mp.rating} />
        {/if}
        {#if stats.speed}
          <StatDisplay label="Speed" value={stats.speed.value} rating={stats.speed.rating} />
        {/if}
        {#if stats.pa}
          <StatDisplay label="PA" value={stats.pa.value} rating={stats.pa.rating} />
        {/if}
        {#if stats.ma}
          <StatDisplay label="MA" value={stats.ma.value} rating={stats.ma.rating} />
        {/if}
      </div>
    </div>
  {/if}

  {#if ability.name}
    <div class="card-section job-abilities">
      <SectionDivider>ABILITY</SectionDivider>
      <div class="ability-name">{ability.name}</div>
      {#if ability.description}
        <div class="ability-description">{ability.description}</div>
      {/if}
    </div>
  {/if}

  {#if bonuses.length > 0}
    <div class="card-section job-bonuses">
      <SectionDivider>{bonuses[0].isCharacteristic ? 'CHARACTERISTICS' : 'SPECIAL BONUSES'}</SectionDivider>
      {#each bonuses as bonus}
        <div class="bonus-item">{bonus.text}</div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .job-card {
    background: var(--gradient-parchment-default);
    border: var(--border-thick) solid var(--color-brown-400);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    width: 320px;
    flex-shrink: 0;
    margin-bottom: var(--spacing-md);
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow:
      inset 0 0 0 1px var(--color-brown-300),
      inset 0 0 0 2px var(--color-parchment-300),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .job-card:hover {
    transform: translateY(-3px);
    box-shadow:
      inset 0 0 0 1px var(--color-gold-500),
      inset 0 0 0 2px var(--color-gold-300),
      0 8px 20px rgba(212, 175, 55, 0.5);
  }

  .job-card.exclusive-wotl {
    border-color: var(--color-red-700);
    background: var(--gradient-parchment-wotl);
    box-shadow:
      inset 0 0 0 1px var(--color-red-700),
      inset 0 0 0 2px #e8c4c0,
      0 4px 8px rgba(184, 50, 40, 0.3);
  }

  .job-card.exclusive-wotl::before {
    content: "WOTL EXCLUSIVE";
    position: absolute;
    top: -12px;
    right: 10px;
    background: var(--color-red-500);
    color: #fff;
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: 1px;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: var(--spacing-sm);
    position: relative;
    z-index: 1;
  }
  .card-section {
    margin: var(--spacing-md) 0 var(--spacing-sm);
    position: relative;
    z-index: 1;
  }

  .job-title-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    flex: 1;
  }

  .job-icon-wrapper {
    margin-left: var(--spacing-md);
  }

  .character-name {
    text-align: center;
    color: var(--color-brown-400);
    font-size: 0.9em;
    margin-bottom: var(--spacing-sm);
    font-weight: var(--font-weight-bold);
  }

  

  .stats-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    margin-top: var(--spacing-xs);
    align-items: center;
  }

  .ability-name {
    font-weight: var(--font-weight-bold);
    color: var(--color-brown-700);
    margin-bottom: 4px;
    font-size: var(--font-size-base);
  }

  .ability-description {
    font-size: var(--font-size-sm);
    color: var(--color-brown-600);
    line-height: var(--line-height-normal);
  }

  .bonus-item {
    font-size: var(--font-size-sm);
    color: var(--color-brown-700);
    padding: 2px 0;
    line-height: var(--line-height-normal);
  }

  .bonus-item:before {
    content: "⭐ ";
    color: var(--color-gold-500);
  }

  .description-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }

  .desc-tag {
    font-size: 0.7em;
    color: var(--color-brown-700);
    background: rgba(139, 111, 71, 0.15);
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-brown-400);
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    .job-card {
      /* width: 100%; */
    }
  }
</style>
