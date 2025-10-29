<script>
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
  style={isSpecialCharacter ? 'border-color: #f4cf67;' : ''}
>
  <div class="job-header">
    <div class="job-name">{name}</div>
    <div class="job-icon">
      <img src={iconSrc} alt={name} style="width: 100%; height: auto;">
    </div>
  </div>

  {#if characterName}
    <div style="text-align: center; color: #f4cf67; font-size: 0.9em; margin-bottom: 10px; font-weight: bold;">
      {characterName}
    </div>
  {/if}

  {#if requirements.length > 0}
    <div class="requirements-section">
      <div class="req-title">Requisitos:</div>
      <div class="req-badges">
        {#each requirements as req}
          <span class="req-badge {req.none ? 'none' : ''}">
            {req.label}
            {#if req.level}
              <span class="level">{req.level}</span>
            {/if}
          </span>
        {/each}
      </div>
      {#if requirements.some(r => r.special)}
        {#each requirements.filter(r => r.special) as special}
          <div style="font-size: 0.8em; color: #e74c3c; margin-top: 5px;">
            {special.label}
          </div>
        {/each}
      {/if}
      {#if requirements.some(r => r.genderLock)}
        {#each requirements.filter(r => r.genderLock) as genderLock}
          <div style="font-size: 0.8em; color: {genderLock.color}; margin-top: 5px;">
            {genderLock.label}
          </div>
        {/each}
      {/if}
    </div>
  {/if}

  {#if Object.keys(stats).length > 0}
    <div class="stats-grid">
      {#if stats.hp}
        <div class="stat-item-grid">
          <span class="stat-label-grid">HP:</span>
          <span class="stat-value-grid">{stats.hp.value} <span class="stat-rating {stats.hp.rating}">●</span></span>
        </div>
      {/if}
      {#if stats.mp}
        <div class="stat-item-grid">
          <span class="stat-label-grid">MP:</span>
          <span class="stat-value-grid">{stats.mp.value} <span class="stat-rating {stats.mp.rating}">●</span></span>
        </div>
      {/if}
      {#if stats.speed}
        <div class="stat-item-grid">
          <span class="stat-label-grid">Speed:</span>
          <span class="stat-value-grid">{stats.speed.value} <span class="stat-rating {stats.speed.rating}">●</span></span>
        </div>
      {/if}
      {#if stats.pa}
        <div class="stat-item-grid">
          <span class="stat-label-grid">PA:</span>
          <span class="stat-value-grid">{stats.pa.value} <span class="stat-rating {stats.pa.rating}">●</span></span>
        </div>
      {/if}
      {#if stats.ma}
        <div class="stat-item-grid">
          <span class="stat-label-grid">MA:</span>
          <span class="stat-value-grid">{stats.ma.value} <span class="stat-rating {stats.ma.rating}">●</span></span>
        </div>
      {/if}
    </div>
  {/if}

  {#if ability.name}
    <div class="job-abilities">
      <div class="ability-name">{ability.name}</div>
      {#if ability.description}
        <div style="font-size: 0.8em; color: #c4b5a0;">{ability.description}</div>
      {/if}
    </div>
  {/if}

  {#if bonuses.length > 0}
    <div class="job-bonuses">
      <div class="bonus-title">⭐ {bonuses[0].isCharacteristic ? 'Características' : 'Bonos Especiales'}</div>
      {#each bonuses as bonus}
        <div class="bonus-item">{bonus.text}</div>
      {/each}
    </div>
  {/if}

  {#if description}
    <div class="job-description">{description}</div>
  {/if}
</div>
