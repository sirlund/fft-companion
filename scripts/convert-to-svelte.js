import { readFileSync, writeFileSync } from 'fs';

const html = readFileSync('index.html.backup', 'utf-8');

// Extract body content (skip <!DOCTYPE>, <html>, <head>, <body> tags)
const bodyStart = html.indexOf('<div class="container">');
const bodyEnd = html.lastIndexOf('</body>');
let content = html.slice(bodyStart, bodyEnd);

// Convert onclick to Svelte syntax
content = content.replace(/onclick="showSection\('([^']+)'\)"/g, 'on:click={() => showSection(\'$1\')}');
content = content.replace(/onkeyup="filterJobs\(\)"/g, 'on:keyup={filterJobs}');
content = content.replace(/onkeyup="filterAbilities\(\)"/g, 'on:keyup={filterAbilities}');
content = content.replace(/onkeyup="filterEquipment\(\)"/g, 'on:keyup={filterEquipment}');

// Remove the <script> tag at the end
content = content.replace(/<script src="src\/js\/app.js"><\/script>/g, '');

// Create Svelte component
const svelteComponent = `<script>
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

${content}
`;

writeFileSync('src/App.svelte', svelteComponent, 'utf-8');
console.log('✅ Converted! Check src/App.svelte');
