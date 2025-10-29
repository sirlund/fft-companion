import { readFileSync, writeFileSync } from 'fs';

const appContent = readFileSync('src/App.svelte', 'utf-8');
const lines = appContent.split('\n');

// Encontrar los índices de cada sección
const sectionMarkers = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<!-- SECCIÓN:') || lines[i].includes('<div id="jobs"') ||
      lines[i].includes('<div id="abilities"') || lines[i].includes('<div id="equipment"') ||
      lines[i].includes('<div id="characters"') || lines[i].includes('<div id="monsters"') ||
      lines[i].includes('<div id="bosses"') || lines[i].includes('<div id="maps"') ||
      lines[i].includes('<div id="zodiac"') || lines[i].includes('</div>') && lines[i].trim() === '</div>') {

    // Detectar qué sección es
    const line = lines[i];
    if (line.includes('id="jobs"')) {
      sectionMarkers.push({ type: 'start', id: 'jobs', line: i, name: 'JobsSection' });
    } else if (line.includes('id="abilities"')) {
      sectionMarkers.push({ type: 'start', id: 'abilities', line: i, name: 'AbilitiesSection' });
    } else if (line.includes('id="equipment"')) {
      sectionMarkers.push({ type: 'start', id: 'equipment', line: i, name: 'EquipmentSection' });
    } else if (line.includes('id="characters"')) {
      sectionMarkers.push({ type: 'start', id: 'characters', line: i, name: 'CharactersSection' });
    } else if (line.includes('id="monsters"')) {
      sectionMarkers.push({ type: 'start', id: 'monsters', line: i, name: 'MonstersSection' });
    } else if (line.includes('id="bosses"')) {
      sectionMarkers.push({ type: 'start', id: 'bosses', line: i, name: 'BossesSection' });
    } else if (line.includes('id="maps"')) {
      sectionMarkers.push({ type: 'start', id: 'maps', line: i, name: 'MapsSection' });
    } else if (line.includes('id="zodiac"')) {
      sectionMarkers.push({ type: 'start', id: 'zodiac', line: i, name: 'ZodiacSection' });
    }
  }
}

// Extraer cada sección manualmente buscando el cierre del div
sectionMarkers.forEach((marker, index) => {
  const startLine = marker.line;

  // Buscar el cierre del div contando profundidad
  let depth = 0;
  let endLine = -1;

  for (let i = startLine; i < lines.length; i++) {
    const line = lines[i];

    // Contar divs abiertos
    const openMatches = (line.match(/<div/g) || []).length;
    const closeMatches = (line.match(/<\/div>/g) || []).length;

    depth += openMatches - closeMatches;

    if (i > startLine && depth === 0) {
      endLine = i;
      break;
    }
  }

  if (endLine === -1) {
    console.log(`⚠️  No se encontró cierre para: ${marker.id}`);
    return;
  }

  // Extraer contenido (sin el div wrapper)
  const sectionLines = lines.slice(startLine + 1, endLine);
  let sectionContent = sectionLines.join('\n').trim();

  // Reemplazar referencias a funciones y búsquedas
  let needsShowSection = sectionContent.includes('showSection');
  let needsSearch = false;
  let searchFunctionName = '';

  if (marker.id === 'jobs') {
    needsSearch = true;
    searchFunctionName = 'filterJobs';
    sectionContent = sectionContent.replace(/on:keyup=\{filterJobs\}/g, 'onkeyup={onSearch}');
    sectionContent = sectionContent.replace(/id="job-search"/g, '');
  } else if (marker.id === 'abilities') {
    needsSearch = true;
    searchFunctionName = 'filterAbilities';
    sectionContent = sectionContent.replace(/on:keyup=\{filterAbilities\}/g, 'onkeyup={onSearch}');
  } else if (marker.id === 'equipment') {
    needsSearch = true;
    searchFunctionName = 'filterEquipment';
    sectionContent = sectionContent.replace(/on:keyup=\{filterEquipment\}/g, 'onkeyup={onSearch}');
  }

  // Reemplazar botón de back
  sectionContent = sectionContent.replace(
    /<button class="back-button" on:click=\{\(\) => showSection\('main-menu'\)\}>← Volver al Menú<\/button>/g,
    '<BackButton onclick={() => showSection(\'main-menu\')} />'
  );

  // Reemplazar search boxes
  sectionContent = sectionContent.replace(
    /<input type="text" class="search-box"[^>]*placeholder="([^"]*)"[^>]*>/g,
    (match, placeholder) => {
      if (needsSearch) {
        return `<SearchBox placeholder="${placeholder}" bind:value={searchValue} {onkeyup} />`;
      }
      return match;
    }
  );

  // Crear el componente
  let propsLine = `let { showSection`;
  if (needsSearch) {
    propsLine += `, searchValue = $bindable(''), onkeyup`;
  }
  propsLine += ` } = $props();`;

  const componentContent = `<script>
  import BackButton from '../ui/BackButton.svelte';
  import SearchBox from '../ui/SearchBox.svelte';

  ${propsLine}
</script>

${sectionContent}
`;

  // Guardar el archivo
  writeFileSync(`src/components/sections/${marker.name}.svelte`, componentContent, 'utf-8');
  console.log(`✅ Creado: ${marker.name}.svelte (líneas ${startLine}-${endLine})`);
});

console.log('\n✨ Extracción completa!');
