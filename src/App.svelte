<script>
  import { onMount } from 'svelte';
  import MainMenuSection from './components/sections/MainMenuSection.svelte';
  import JobsSection from './components/sections/JobsSection.svelte';
  import AbilitiesSection from './components/sections/AbilitiesSection.svelte';
  import EquipmentSection from './components/sections/EquipmentSection.svelte';
  import CharactersSection from './components/sections/CharactersSection.svelte';
  import MonstersSection from './components/sections/MonstersSection.svelte';
  import BossesSection from './components/sections/BossesSection.svelte';
  import MapsSection from './components/sections/MapsSection.svelte';
  import ZodiacSection from './components/sections/ZodiacSection.svelte';
  import ComponentShowcase from './components/sections/ComponentShowcase.svelte';

  let currentSection = $state('main-menu');
  let jobSearch = $state('');
  let abilitySearch = $state('');
  let equipmentSearch = $state('');

  // Valid sections for routing
  const validSections = [
    'main-menu',
    'jobs',
    'abilities',
    'equipment',
    'characters',
    'monsters',
    'bosses',
    'maps',
    'zodiac',
    'showcase'
  ];

  // Get section from URL hash
  function getSectionFromHash() {
    const hash = window.location.hash.slice(1); // Remove #
    return validSections.includes(hash) ? hash : 'main-menu';
  }

  // Update section and URL
  function showSection(section, updateHistory = true) {
    if (!validSections.includes(section)) {
      section = 'main-menu';
    }

    currentSection = section;

    if (updateHistory) {
      // Update URL without reloading page
      window.history.pushState({ section }, '', `#${section}`);
    }

    window.scrollTo(0, 0);
  }

  // Handle browser back/forward buttons
  function handlePopState(event) {
    const section = getSectionFromHash();
    currentSection = section;
    window.scrollTo(0, 0);
  }

  // Initialize on mount
  onMount(() => {
    // Load initial section from URL
    const initialSection = getSectionFromHash();

    // If URL has no hash or invalid hash, set to main-menu
    if (!window.location.hash || initialSection === 'main-menu') {
      window.history.replaceState({ section: 'main-menu' }, '', '#main-menu');
    } else {
      showSection(initialSection, false);
    }

    // Listen for browser back/forward
    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  });

  function filterJobs() {
    const searchText = jobSearch.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(searchText) ? 'block' : 'none';
    });
  }

  function filterAbilities() {
    const searchText = abilitySearch.toLowerCase();
    const abilityItems = document.querySelectorAll('#abilities .ability-item');
    abilityItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
  }

  function filterEquipment() {
    const searchText = equipmentSearch.toLowerCase();
    const equipmentItems = document.querySelectorAll('#equipment .equipment-item');
    equipmentItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
  }
</script>

<div class="container">
  <!-- MENÚ PRINCIPAL -->
  <div id="main-menu" class="section" class:active={currentSection === 'main-menu'}>
    <MainMenuSection {showSection} />
  </div>

  <!-- SECCIONES -->
  <div id="jobs" class="section" class:active={currentSection === 'jobs'}>
    <JobsSection {showSection} bind:searchValue={jobSearch} onkeyup={filterJobs} />
  </div>

  <div id="abilities" class="section" class:active={currentSection === 'abilities'}>
    <AbilitiesSection {showSection} bind:searchValue={abilitySearch} onkeyup={filterAbilities} />
  </div>

  <div id="equipment" class="section" class:active={currentSection === 'equipment'}>
    <EquipmentSection {showSection} bind:searchValue={equipmentSearch} onkeyup={filterEquipment} />
  </div>

  <div id="characters" class="section" class:active={currentSection === 'characters'}>
    <CharactersSection {showSection} />
  </div>

  <div id="monsters" class="section" class:active={currentSection === 'monsters'}>
    <MonstersSection {showSection} />
  </div>

  <div id="bosses" class="section" class:active={currentSection === 'bosses'}>
    <BossesSection {showSection} />
  </div>

  <div id="maps" class="section" class:active={currentSection === 'maps'}>
    <MapsSection {showSection} />
  </div>

  <div id="zodiac" class="section" class:active={currentSection === 'zodiac'}>
    <ZodiacSection {showSection} />
  </div>

  <div id="showcase" class="section" class:active={currentSection === 'showcase'}>
    <ComponentShowcase {showSection} />
  </div>
</div>
