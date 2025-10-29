<script>
  import MenuCard from './components/ui/MenuCard.svelte';
  import JobsSection from './components/sections/JobsSection.svelte';
  import AbilitiesSection from './components/sections/AbilitiesSection.svelte';
  import EquipmentSection from './components/sections/EquipmentSection.svelte';
  import CharactersSection from './components/sections/CharactersSection.svelte';
  import MonstersSection from './components/sections/MonstersSection.svelte';
  import BossesSection from './components/sections/BossesSection.svelte';
  import MapsSection from './components/sections/MapsSection.svelte';
  import ZodiacSection from './components/sections/ZodiacSection.svelte';

  let currentSection = $state('main-menu');
  let jobSearch = $state('');
  let abilitySearch = $state('');
  let equipmentSearch = $state('');

  function showSection(section) {
    currentSection = section;
    window.scrollTo(0, 0);
  }

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
  <header>
    <h1>FFT COMPANION</h1>
    <div class="subtitle">FFT Compendium</div>
    <div class="version-info">
      <h3>⚔️ Versión: War of the Lions (iOS/iPadOS)</h3>
      <p><strong>Importante:</strong> Esta guía está diseñada específicamente para la versión móvil de FFT: War of the Lions (iOS/iPadOS), que incluye mejoras de rendimiento, cámara 360°, y acceso a items exclusivos de multiplayer a través de Trapper's Den. No es compatible con Ivalice Chronicles (2025 remaster).</p>
    </div>
  </header>

  <!-- MENÚ PRINCIPAL -->
  <div id="main-menu" class="section" class:active={currentSection === 'main-menu'}>
    <div class="grid">
      <MenuCard
        title="Jobs"
        description="Explora clases genéricas y especiales. Ver stats, requisitos, equipamiento y más."
        buttonText="Ver Jobs"
        onclick={() => showSection('jobs')}
      />

      <MenuCard
        title="Abilities"
        description="Explora datos completos de habilidades incluyendo efectos, daño, cálculos de éxito, rango y área de efecto."
        buttonText="Ver Abilities"
        onclick={() => showSection('abilities')}
      />

      <MenuCard
        title="Equipment"
        description="Navega armas, armaduras y accesorios. Filtra por stats, efectos y disponibilidad."
        buttonText="Ver Equipment"
        onclick={() => showSection('equipment')}
      />

      <MenuCard
        title="Personajes Únicos"
        description="Información detallada de personajes especiales: stats base, clases disponibles y misiones de reclutamiento."
        buttonText="Ver Personajes"
        onclick={() => showSection('characters')}
      />

      <MenuCard
        title="Monsters"
        description="¿Quieres saber dónde aparece un monstruo? Revisa sus stats, habilidades y ubicación."
        buttonText="Ver Monsters"
        onclick={() => showSection('monsters')}
      />

      <MenuCard
        title="Bosses"
        description="Descubre inmunidades, debilidades, stats y detalles de unidades para prepararte para cada batalla."
        buttonText="Ver Bosses"
        onclick={() => showSection('bosses')}
      />

      <MenuCard
        title="Maps"
        description="Explora el diseño de mapas. Ver tesoros, trampas y ubicaciones de salida."
        buttonText="Ver Maps"
        onclick={() => showSection('maps')}
      />

      <MenuCard
        title="Zodiac Compatibility"
        description="¿Curioso sobre cómo tu signo se empareja? Sumérgete en la tabla de compatibilidad zodiacal para descubrir qué aliados te empoderan y qué enemigos debes vigilar."
        buttonText="Ver Zodiac"
        onclick={() => showSection('zodiac')}
      />
    </div>
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
</div>
