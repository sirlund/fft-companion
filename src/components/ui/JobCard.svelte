<script>
  import Avatar from './base/Avatar.svelte';
  import Badge from './base/Badge.svelte';
  import Heading from './base/Heading.svelte';
  import Label from './base/Label.svelte';
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
</script>

<div
  class="job-card {isExclusiveWotl ? 'exclusive-wotl' : ''}"
  style={isSpecialCharacter ? 'border-color: var(--color-gold); box-shadow: inset 0 0 0 1px var(--color-gold), inset 0 0 0 2px var(--color-gold-light), 0 4px 8px rgba(212, 175, 55, 0.5);' : ''}
>
  <div class="job-header">
    <div class="job-title-section">
      <Heading level={3}>{name}</Heading>
      {#if isExclusiveWotl}
        <Badge size="small" variant="special">WotL</Badge>
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

  <RequirementList {requirements} />

  {#if Object.keys(stats).length > 0}
    <div class="stats-section">
      <Label>Stats</Label>
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
    <div class="job-abilities">
      <Label>Habilidad</Label>
      <div class="ability-name">{ability.name}</div>
      {#if ability.description}
        <div class="ability-description">{ability.description}</div>
      {/if}
    </div>
  {/if}

  {#if bonuses.length > 0}
    <div class="job-bonuses">
      <Label>{bonuses[0].isCharacteristic ? 'Características' : 'Bonos Especiales'}</Label>
      {#each bonuses as bonus}
        <div class="bonus-item">{bonus.text}</div>
      {/each}
    </div>
  {/if}

  {#if description}
    <div class="job-description">{description}</div>
  {/if}
</div>

<style>
  .job-card {
    background: linear-gradient(135deg, var(--color-parchment-light) 0%, var(--color-parchment-base) 50%, var(--color-parchment-dark) 100%);
    border: var(--border-thick) solid var(--color-brown-light);
    border-radius: var(--radius-md);
    padding: var(--spacing-lg);
    width: 320px;
    flex-shrink: 0;
    margin-bottom: var(--spacing-lg);
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow:
      inset 0 0 0 1px var(--color-brown-lightest),
      inset 0 0 0 2px var(--color-parchment-light),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .job-card:hover {
    transform: translateY(-3px);
    box-shadow:
      inset 0 0 0 1px var(--color-gold),
      inset 0 0 0 2px var(--color-gold-light),
      0 8px 20px rgba(212, 175, 55, 0.5);
  }

  .job-card.exclusive-wotl {
    border-color: var(--color-red-dark);
    background: linear-gradient(135deg, #e8c4c0 0%, #d4a4a0 50%, #c49490 100%);
    box-shadow:
      inset 0 0 0 1px var(--color-red-dark),
      inset 0 0 0 2px #e8c4c0,
      0 4px 8px rgba(184, 50, 40, 0.3);
  }

  .job-card.exclusive-wotl::before {
    content: "WOTL EXCLUSIVE";
    position: absolute;
    top: -12px;
    right: 10px;
    background: var(--color-red);
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
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: var(--border-base) solid var(--color-brown-light);
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
    color: var(--color-brown-light);
    font-size: 0.9em;
    margin-bottom: var(--spacing-md);
    font-weight: var(--font-weight-bold);
  }

  .stats-section {
    margin: var(--spacing-md) 0;
    padding-top: var(--spacing-md);
    border-top: var(--border-base) solid var(--color-brown-light);
  }

  .stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-sm) var(--spacing-lg);
    margin-top: var(--spacing-sm);
  }

  .job-abilities {
    margin: var(--spacing-md) 0;
    padding-top: var(--spacing-md);
    border-top: var(--border-base) solid var(--color-brown-light);
  }

  .ability-name {
    font-weight: var(--font-weight-bold);
    color: var(--color-brown-dark);
    margin-bottom: 5px;
    font-size: var(--font-size-base);
  }

  .ability-description {
    font-size: var(--font-size-sm);
    color: var(--color-brown-base);
    line-height: 1.4;
  }

  .job-bonuses {
    margin: var(--spacing-md) 0;
    padding-top: var(--spacing-md);
    border-top: var(--border-base) solid var(--color-brown-light);
  }

  .bonus-item {
    font-size: var(--font-size-sm);
    color: var(--color-brown-dark);
    padding: var(--spacing-xs) 0;
    line-height: 1.4;
  }

  .bonus-item:before {
    content: "⭐ ";
    color: var(--color-gold);
  }

  .job-description {
    font-size: var(--font-size-sm);
    color: var(--color-brown-base);
    line-height: 1.5;
    margin-top: var(--spacing-md);
    padding-top: var(--spacing-md);
    border-top: var(--border-thin) solid var(--color-brown-light);
  }

  @media (max-width: 768px) {
    .job-card {
      /* width: 100%; */
    }
  }
</style>
