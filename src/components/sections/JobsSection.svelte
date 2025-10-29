<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';
  import JobCard from '../ui/JobCard.svelte';
  import { jobTiers, specialCharacterJobs } from '../../data/jobs.js';

  let { showSection, searchValue = $bindable(''), onkeyup } = $props();

  // Random gender selection for job portraits (Male or Female)
  const randomGender = () => Math.random() < 0.5 ? 'm' : 'f';

  // Generate gender for each job card (called once on mount)
  const jobGenders = {
    squire: randomGender(),
    chemist: randomGender(),
    knight: randomGender(),
    archer: randomGender(),
    white_mage: randomGender(),
    black_mage: randomGender(),
    monk: randomGender(),
    thief: randomGender(),
    time_mage: randomGender(),
    mystic: randomGender(),
    geomancer: randomGender(),
    dragoon: randomGender(),
    summoner: randomGender(),
    orator: randomGender(),
    samurai: randomGender(),
    ninja: randomGender(),
    arithmetician: randomGender(),
    bard: 'm', // Gender-locked: Male only
    dancer: 'f', // Gender-locked: Female only
    mime: randomGender(),
    dark_knight: randomGender(),
    onion_knight: randomGender()
  };

  // Get icon path for a job (handles both generic and special character jobs)
  function getJobIcon(jobId) {
    // Special character jobs use their character name directly
    if (['agrias', 'meliadoul', 'orlandeau', 'balthier', 'beowulf', 'mustadio', 'rafa', 'malak', 'reis', 'luso', 'cloud'].includes(jobId)) {
      return `assets/jobs/${jobId}.gif`;
    }
    // Gender-locked jobs use single sprite (no M/F variants)
    if (['bard', 'dancer'].includes(jobId)) {
      return `assets/jobs/${jobId}.gif`;
    }
    // Generic jobs use gender-based sprites
    return `assets/jobs/${jobId}_${jobGenders[jobId]}.gif`;
  }
</script>

<BackButton onclick={() => showSection('main-menu')} />
<h2 style="color: #d4af37; font-size: 2.5em; margin-bottom: 20px;">Jobs</h2>
<SearchBox placeholder="Buscar job..." bind:value={searchValue} {onkeyup} />

<!-- LEYENDA DE RATINGS -->
<div class="content-box" style="margin-bottom: 30px; background: rgba(212, 175, 55, 0.1);">
  <h3 style="font-size: 1.2em; margin-bottom: 10px;">📊 Leyenda de Stats</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; font-size: 0.9em;">
    <div><span class="stat-rating s" style="font-size: 1.2em;">S</span> = Excepcional (raro)</div>
    <div><span class="stat-rating a" style="font-size: 1.2em;">A</span> = Excelente</div>
    <div><span class="stat-rating b" style="font-size: 1.2em;">B</span> = Bueno</div>
    <div><span class="stat-rating c" style="font-size: 1.2em;">C</span> = Promedio</div>
    <div><span class="stat-rating d" style="font-size: 1.2em;">D</span> = Bajo</div>
  </div>
  <p style="margin-top: 10px; font-size: 0.85em; font-style: italic; color: #b8a080;">
    Los ratings indican el crecimiento de stats al subir de nivel. <strong>A</strong> significa alto crecimiento, <strong>D</strong> significa bajo crecimiento.
  </p>
</div>

<!-- GENERIC JOBS TIERS -->
{#each Object.values(jobTiers) as tier}
  <div class="job-tier">
    <h3 class="tier-title">{tier.title}</h3>
    <div class="jobs-row">
      {#each tier.jobs as job}
        <JobCard
          name={job.name}
          iconSrc={getJobIcon(job.id)}
          requirements={job.requirements}
          stats={job.stats}
          ability={job.ability}
          bonuses={job.bonuses || []}
          description={job.description}
          isExclusiveWotl={job.isExclusiveWotl || false}
        />
      {/each}
    </div>
  </div>
{/each}

<!-- SPECIAL CHARACTER JOBS -->
<div class="job-tier" style="margin-top: 60px; border-top: 3px solid #d4af37; padding-top: 40px;">
  <h3 class="tier-title" style="color: #f4cf67; font-size: 2em;">⭐ Special Character Jobs (Unique)</h3>
  <p style="text-align: center; color: #b8a080; margin-bottom: 30px; font-style: italic;">
    Jobs exclusivos de personajes únicos. No se pueden desbloquear para unidades genéricas.
  </p>
  <div class="jobs-row">
    {#each specialCharacterJobs as job}
      <JobCard
        name={job.name}
        iconSrc={getJobIcon(job.id)}
        requirements={job.requirements || []}
        stats={job.stats}
        ability={job.ability}
        bonuses={job.bonuses || []}
        description={job.description}
        characterName={job.characterName}
        isExclusiveWotl={job.isExclusiveWotl || false}
        isSpecialCharacter={true}
      />
    {/each}
  </div>
</div>
