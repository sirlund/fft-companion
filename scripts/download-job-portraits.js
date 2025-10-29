import { writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';

// Mapeo de nombres de jobs (como están en nuestro código -> como están en videogamesprites.net)
const jobMapping = {
  'squire': 'Squire',
  'chemist': 'Chemist',
  'knight': 'Knight',
  'archer': 'Archer',
  'black_mage': 'BlackMage',
  'white_mage': 'WhiteMage',
  'monk': 'Monk',
  'thief': 'Thief',
  'time_mage': 'TimeMage',
  'mystic': 'Mystic',
  'geomancer': 'Geomancer',
  'dragoon': 'Dragoon',
  'summoner': 'Summoner',
  'orator': 'Orator',
  'samurai': 'Samurai',
  'ninja': 'Ninja',
  'arithmetician': 'Arithmetician',
  'dancer': 'Dancer',
  'bard': 'Bard',
  'mime': 'Mime',
  'onion_knight': 'OnionKnight',
  'dark_knight': 'DarkKnight',

  // Special/Unique jobs (si los encuentras en el sitio)
  'holy_knight': 'HolyKnight',
  'divine_knight': 'DivineKnight',
  'templar': 'Templar',
  'sky_pirate': 'SkyPirate',
  'dragonkin': 'Dragonkin',
  'game_hunter': 'GameHunter',
  'sword_saint': 'SwordSaint',
  'netherseer': 'Netherseer',
  'skyseer': 'Skyseer',
  'machinist': 'Machinist',
  'soldier': 'Soldier',
  'gallant_knight': 'GallantKnight'
};

const baseUrl = 'https://www.videogamesprites.net/FinalFantasyTactics/Jobs';

// Crear directorio temporal para downloads
mkdirSync('tmp/portraits', { recursive: true });

console.log('📥 Descargando job portraits...\n');

let successCount = 0;
let failCount = 0;

for (const [localName, spriteName] of Object.entries(jobMapping)) {
  console.log(`⚔️  ${localName} (${spriteName})...`);

  // Descargar Male y Female
  for (const gender of ['M', 'F']) {
    const filename = `${spriteName}1${gender}.gif`;
    const url = `${baseUrl}/${spriteName}/${filename}`;
    const outputPath = `tmp/portraits/${localName}_${gender.toLowerCase()}.gif`;

    try {
      // Usar curl para descargar
      execSync(`curl -s -f "${url}" -o "${outputPath}"`, { stdio: 'pipe' });
      console.log(`  ✅ Downloaded ${gender}: ${filename}`);
      successCount++;
    } catch (error) {
      console.log(`  ❌ Failed ${gender}: ${url}`);
      failCount++;
    }
  }
}

console.log(`\n📊 Resumen:`);
console.log(`  ✅ Éxitos: ${successCount}`);
console.log(`  ❌ Fallos: ${failCount}`);
console.log(`\n💡 Siguiente paso: Convertir GIF → WebP con:`);
console.log(`  npm run convert-portraits\n`);
