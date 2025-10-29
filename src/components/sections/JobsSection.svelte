<script>
  import Button from '../ui/base/Button.svelte';
  import Heading from '../ui/base/Heading.svelte';
  import Badge from '../ui/base/Badge.svelte';
  import Notice from '../ui/Notice.svelte';
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

  // Filter function for jobs - searches all content in job cards
  function filterJob(job) {
    if (!searchValue) return true;
    const search = searchValue.toLowerCase();

    // Search in name
    if (job.name.toLowerCase().includes(search)) return true;

    // Search in character name
    if (job.characterName?.toLowerCase().includes(search)) return true;

    // Search in requirements
    if (job.requirements?.some(r => r.label.toLowerCase().includes(search))) return true;

    // Search in stats
    if (job.stats) {
      const statValues = Object.values(job.stats)
        .map(s => s.value?.toString().toLowerCase())
        .filter(Boolean);
      if (statValues.some(v => v.includes(search))) return true;
    }

    // Search in ability
    if (job.ability?.name?.toLowerCase().includes(search)) return true;
    if (job.ability?.description?.toLowerCase().includes(search)) return true;

    // Search in bonuses
    if (job.bonuses?.some(b => b.text.toLowerCase().includes(search))) return true;

    // Search in description
    if (job.description?.toLowerCase().includes(search)) return true;

    return false;
  }

  // Derived filtered special jobs
  let filteredSpecialJobs = $derived(specialCharacterJobs.filter(filterJob));
</script>

<Button variant="secondary" onclick={() => showSection('main-menu')}>
  ← Volver
</Button>

<div style="margin: 20px 0;">
  <Heading level={1}>Jobs</Heading>
</div>

<SearchBox placeholder="Buscar job..." bind:value={searchValue} {onkeyup} />

<!-- LEYENDA DE RATINGS -->
<Notice variant="info" title="📊 Leyenda de Stats">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 15px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge variant="rating-s">S</Badge>
      <span>Excepcional (raro)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge variant="rating-a">A</Badge>
      <span>Excelente</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge variant="rating-b">B</Badge>
      <span>Bueno</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge variant="rating-c">C</Badge>
      <span>Promedio</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Badge variant="rating-d">D</Badge>
      <span>Bajo</span>
    </div>
  </div>
  <p style="font-size: 0.9em; font-style: italic;">
    Los ratings indican el crecimiento de stats al subir de nivel. <strong>A</strong> significa alto crecimiento, <strong>D</strong> significa bajo crecimiento.
  </p>
</Notice>

<!-- GENERIC JOBS TIERS -->
{#each Object.values(jobTiers) as tier}
  {@const filteredJobs = tier.jobs.filter(filterJob)}
  {#if filteredJobs.length > 0}
    <div class="job-tier">
      <Heading level={2} variant="tier">{tier.title}</Heading>
      <div class="jobs-row">
        {#each filteredJobs as job}
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
  {/if}
{/each}

<!-- SPECIAL CHARACTER JOBS -->
{#if filteredSpecialJobs.length > 0}
  <div class="job-tier special-section">
    <Heading level={2} variant="tier">⭐ Special Character Jobs (Unique)</Heading>
    <p class="special-description">
      Jobs exclusivos de personajes únicos. No se pueden desbloquear para unidades genéricas.
    </p>
    <div class="jobs-row">
      {#each filteredSpecialJobs as job}
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
{/if}

<style>
  .special-section {
    margin-top: 60px;
    border-top: 3px solid #d4af37;
    padding-top: 40px;
  }

  .special-description {
    text-align: center;
    color: #5a4530;
    margin: 15px 0 30px;
    font-style: italic;
    font-size: 1em;
    line-height: var(--line-height-relaxed);
  }
</style>
