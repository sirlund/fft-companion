import { writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';

// Character name mapping (JobsSection component → videogamesprites.net)
const characterMapping = {
  // From the code, these are the special character jobs
  'agrias': 'Agrias',           // Holy Knight
  'delita': 'Delita',           // Holy Knight (shares with Agrias)
  'meliadoul': 'Meliadoul',     // Divine Knight
  'orlandeau': 'Orlandeau',     // Sword Saint (Thunder God Cid)
  'balthier': 'Balthier',       // Sky Pirate
  'beowulf': 'Beowulf',         // Templar
  'mustadio': 'Mustadio',       // Machinist
  'rafa': 'Rapha',              // Skyseer (note: spelled "Rapha" on site)
  'malak': 'Marach',            // Netherseer (note: spelled "Marach" on site)
  'reis': 'Reis2',              // Dragonkin (note: uses "Reis2" not "Reis")
  'luso': 'Luso',               // Game Hunter
  'cloud': 'Cloud'              // Soldier
};

const baseUrl = 'https://www.videogamesprites.net/FinalFantasyTactics/Party';

// Special cases with different paths
const specialCases = {
  'delita': 'https://www.videogamesprites.net/FinalFantasyTactics/NPCs/Families/Delita3.gif'
};

// Create directory
mkdirSync('tmp/character-portraits', { recursive: true });

console.log('📥 Descargando character portraits...\n');

let successCount = 0;
let failCount = 0;

for (const [localName, spriteName] of Object.entries(characterMapping)) {
  console.log(`⚔️  ${localName} (${spriteName})...`);

  // Check for special case URL
  const url = specialCases[localName] || `${baseUrl}/${spriteName}.gif`;
  const outputPath = `tmp/character-portraits/${localName}.gif`;

  try {
    // Download using curl
    execSync(`curl -s -f "${url}" -o "${outputPath}"`, { stdio: 'pipe' });
    console.log(`  ✅ Downloaded: ${spriteName}.gif`);
    successCount++;
  } catch (error) {
    console.log(`  ❌ Failed: ${url}`);
    failCount++;
  }
}

console.log(`\n📊 Resumen:`);
console.log(`  ✅ Éxitos: ${successCount}`);
console.log(`  ❌ Fallos: ${failCount}`);
console.log(`\n💡 Siguiente paso: Copiar a public/assets/jobs/ con:`);
console.log(`  cp tmp/character-portraits/*.gif public/assets/jobs/\n`);
