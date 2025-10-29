// FFT Jobs Data
// This file contains all job information for the companion app

export const jobTiers = {
  tier1: {
    title: '⚔️ Tier 1: Clases Iniciales',
    jobs: [
      {
        id: 'squire',
        name: 'Squire',
        requirements: [{ label: '✓ Inicial', none: true }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'D', rating: 'd' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'C', rating: 'c' },
          ma: { value: 'D', rating: 'd' }
        },
        ability: {
          name: '🎯 Fundaments',
          description: 'Item, Throw Stone, Heal, Dash'
        },
        description: 'Clase inicial básica. Desbloquea otras clases.'
      },
      {
        id: 'chemist',
        name: 'Chemist',
        requirements: [{ label: '✓ Inicial', none: true }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'C', rating: 'c' }
        },
        ability: {
          name: '💊 Item',
          description: 'Uso de items con rango extendido'
        },
        description: 'Excelente velocidad. Items a distancia. Soporte inicial.'
      }
    ]
  },
  tier2: {
    title: '⚔️ Tier 2: Clases Básicas',
    jobs: [
      {
        id: 'knight',
        name: 'Knight',
        requirements: [{ label: 'Squire', level: 'Lv.2' }],
        stats: {
          hp: { value: 'A', rating: 'a' },
          mp: { value: 'D', rating: 'd' },
          speed: { value: 'D', rating: 'd' },
          pa: { value: 'A', rating: 'a' },
          ma: { value: 'D', rating: 'd' }
        },
        ability: {
          name: '💥 Ruin (Break)',
          description: 'Destruye equipo enemigo'
        },
        bonuses: [
          { text: 'Acceso a las mejores armaduras del juego' },
          { text: 'Puede usar Heavy Armor y Shields' }
        ],
        description: 'Tank físico. Alto HP y PA. Mejores armaduras.'
      },
      {
        id: 'archer',
        name: 'Archer',
        requirements: [{ label: 'Squire', level: 'Lv.2' }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'D', rating: 'd' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'B', rating: 'b' },
          ma: { value: 'D', rating: 'd' }
        },
        ability: {
          name: '🎯 Aim',
          description: 'Ataques de status a distancia'
        },
        bonuses: [
          { text: 'Charge +1: Aumenta rango de arcos y crossbows' }
        ],
        description: 'Rango largo. Charge +1. Control de campo.'
      },
      {
        id: 'white_mage',
        name: 'White Mage',
        requirements: [{ label: 'Chemist', level: 'Lv.2' }],
        stats: {
          hp: { value: 'D', rating: 'd' },
          mp: { value: 'A', rating: 'a' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'A', rating: 'a' }
        },
        ability: {
          name: '✨ White Magick',
          description: 'Cure, Raise, Reraise, Holy'
        },
        description: 'Curación principal. Fundamental para supervivencia.'
      },
      {
        id: 'black_mage',
        name: 'Black Mage',
        requirements: [{ label: 'Chemist', level: 'Lv.2' }],
        stats: {
          hp: { value: 'D', rating: 'd' },
          mp: { value: 'A', rating: 'a' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'A', rating: 'a' }
        },
        ability: {
          name: '🔥 Black Magick',
          description: 'Fire, Ice, Thunder, Flare series'
        },
        description: 'Daño mágico elemental. Alto MA.'
      }
    ]
  },
  tier3: {
    title: '⚔️ Tier 3: Clases Intermedias',
    jobs: [
      {
        id: 'monk',
        name: 'Monk',
        requirements: [{ label: 'Knight', level: 'Lv.3' }],
        stats: {
          hp: { value: 'A', rating: 'a' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'A', rating: 'a' },
          ma: { value: 'C', rating: 'c' }
        },
        ability: {
          name: '👊 Martial Arts',
          description: 'Chakra, Wave Fist, Earth Slash'
        },
        bonuses: [
          { text: 'Martial Arts: Daño sin arma = PA × (PA/2)' }
        ],
        description: 'Combate cuerpo a cuerpo. Revive aliados, excelente PA y Speed.'
      },
      {
        id: 'thief',
        name: 'Thief',
        requirements: [{ label: 'Archer', level: 'Lv.3' }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'D', rating: 'd' },
          speed: { value: 'A', rating: 'a' },
          pa: { value: 'C', rating: 'c' },
          ma: { value: 'D', rating: 'd' }
        },
        ability: {
          name: '💰 Steal',
          description: 'Steal Heart, Steal Weapon, Gil'
        },
        bonuses: [
          { text: 'Move +2' },
          { text: 'Innate: Treasure Hunter' }
        ],
        description: 'Velocidad máxima. Útil para conseguir items raros.'
      },
      {
        id: 'time_mage',
        name: 'Time Mage',
        requirements: [{ label: 'Black Mage', level: 'Lv.2' }],
        stats: {
          hp: { value: 'D', rating: 'd' },
          mp: { value: 'A', rating: 'a' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '⏱️ Time Magick',
          description: 'Haste, Slow, Stop, Quick'
        },
        description: 'Control de velocidad. Crítico para estrategia.'
      },
      {
        id: 'mystic',
        name: 'Mystic',
        requirements: [{ label: 'White Mage', level: 'Lv.2' }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'A', rating: 'a' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '🔮 Mystic Arts',
          description: 'Confuse, Silence, Blind, Sleep'
        },
        description: 'Status ailments. Control de enemigos.'
      },
      {
        id: 'geomancer',
        name: 'Geomancer',
        requirements: [{ label: 'Monk', level: 'Lv.2' }],
        stats: {
          hp: { value: 'B', rating: 'b' },
          mp: { value: 'B', rating: 'b' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'C', rating: 'c' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '🌍 Elemental',
          description: 'Magia sin MP, basada en terreno'
        },
        bonuses: [
          { text: 'Ignora terreno (Move on Lava/Water)' }
        ],
        description: 'Magia sin costo de MP. Dependiente del terreno.'
      },
      {
        id: 'dragoon',
        name: 'Dragoon',
        requirements: [{ label: 'Thief', level: 'Lv.4' }],
        stats: {
          hp: { value: 'A', rating: 'a' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'A', rating: 'a' },
          ma: { value: 'D', rating: 'd' }
        },
        ability: {
          name: '🐉 Jump',
          description: 'Ataques aéreos, ignora evasión'
        },
        bonuses: [
          { text: 'Jump +3 (Vertical Jump 8 total)' },
          { text: 'Los ataques Jump ignoran evasión completamente' }
        ],
        description: 'Jump ignora evasión. Vertical Jump 8. Anti-voladores.'
      },
      {
        id: 'summoner',
        name: 'Summoner',
        requirements: [{ label: 'Time Mage', level: 'Lv.3' }],
        stats: {
          hp: { value: 'D', rating: 'd' },
          mp: { value: 'S', rating: 's' },
          speed: { value: 'D', rating: 'd' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'A', rating: 'a' }
        },
        ability: {
          name: '✨ Summon',
          description: 'Shiva, Ifrit, Ramuh, Bahamut, Odin'
        },
        bonuses: [
          { text: 'MP Growth #1 del juego (125%)' },
          { text: 'Summons ignoran friendly fire (no dañan aliados)' }
        ],
        description: 'Daño de área masivo. AoE gigante. Alto costo de MP.'
      },
      {
        id: 'orator',
        name: 'Orator',
        requirements: [{ label: 'Mystic', level: 'Lv.3' }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'B', rating: 'b' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'C', rating: 'c' }
        },
        ability: {
          name: '📢 Speechcraft',
          description: 'Praise/Brave, Preach/Faith, Recruit'
        },
        bonuses: [
          { text: 'Manipula Brave/Faith permanentemente' },
          { text: 'Puede reclutar enemigos humanos y monstruos' },
          { text: 'Innate: Beast Tongue (hablar con monstruos)' }
        ],
        description: 'Útil para recruiting. Cambia stats permanentemente. Sin costo de MP.'
      }
    ]
  },
  tier4: {
    title: '⚔️ Tier 4: Clases Avanzadas',
    jobs: [
      {
        id: 'samurai',
        name: 'Samurai',
        requirements: [
          { label: 'Knight', level: 'Lv.4' },
          { label: 'Monk', level: 'Lv.5' },
          { label: 'Dragoon', level: 'Lv.2' }
        ],
        stats: {
          hp: { value: 'A', rating: 'a' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'A', rating: 'a' },
          ma: { value: 'C', rating: 'c' }
        },
        ability: {
          name: '⚡ Iaido',
          description: 'Muramasa, Chirijiraden'
        },
        bonuses: [
          { text: 'Shirahadori: Puede esquivar ataques físicos (Brave-based)' }
        ],
        description: 'Daño masivo. Shirahadori (esquiva físicos).'
      },
      {
        id: 'ninja',
        name: 'Ninja',
        requirements: [
          { label: 'Archer', level: 'Lv.4' },
          { label: 'Thief', level: 'Lv.5' },
          { label: 'Geomancer', level: 'Lv.2' }
        ],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'A', rating: 'a' },
          pa: { value: 'B', rating: 'b' },
          ma: { value: 'C', rating: 'c' }
        },
        ability: {
          name: '🥷 Throw',
          description: 'Lanzar armas y shurikens'
        },
        bonuses: [
          { text: 'Two Swords (Dual Wield): Ataca dos veces por turno' },
          { text: 'Innate: Sunken State (inmune a trampas de terreno)' }
        ],
        description: 'Velocidad máxima. Two Swords. Evasión excelente.'
      },
      {
        id: 'arithmetician',
        name: 'Calculator',
        requirements: [
          { label: 'White Mage', level: 'Lv.4' },
          { label: 'Black Mage', level: 'Lv.4' },
          { label: 'Mystic', level: 'Lv.2' },
          { label: 'Time Mage', level: 'Lv.2' }
        ],
        stats: {
          hp: { value: 'D', rating: 'd' },
          mp: { value: 'A', rating: 'a' },
          speed: { value: 'D', rating: 'd' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'A', rating: 'a' }
        },
        ability: {
          name: '🧮 Math Skill',
          description: 'CT5 Holy, Level 4 Holy'
        },
        description: '⚠️ GAMEBREAKING. Magia sin charge basada en números.'
      },
      {
        id: 'bard',
        name: 'Bard',
        requirements: [
          { label: 'Summoner', level: 'Lv.5' },
          { label: 'Orator', level: 'Lv.5' },
          { label: '♂️ Solo Masculino', genderLock: true, color: '#f39c12' }
        ],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'B', rating: 'b' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'C', rating: 'c' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '🎵 Sing',
          description: 'Battle Song, Nameless Song'
        },
        description: 'Buffs de área permanentes hasta muerte/silence.'
      },
      {
        id: 'dancer',
        name: 'Dancer',
        requirements: [
          { label: 'Geomancer', level: 'Lv.5' },
          { label: 'Dragoon', level: 'Lv.5' },
          { label: '♀️ Solo Femenino', genderLock: true, color: '#e91e63' }
        ],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'B', rating: 'b' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'C', rating: 'c' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '💃 Dance',
          description: 'Slow Dance, Polka, Nameless'
        },
        description: 'Status ailments aleatorios de área.'
      },
      {
        id: 'mime',
        name: 'Mime',
        requirements: [
          { label: 'Squire', level: 'Lv.8' },
          { label: 'Chemist', level: 'Lv.8' },
          { label: 'Summoner', level: 'Lv.5' },
          { label: 'Orator', level: 'Lv.5' },
          { label: 'Dragoon', level: 'Lv.5' }
        ],
        stats: {
          hp: { value: 'B', rating: 'b' },
          mp: { value: 'B', rating: 'b' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'B', rating: 'b' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '🎭 Mimic',
          description: 'Copia última acción ejecutada'
        },
        bonuses: [
          { text: 'Puede equipar TODO el equipo del juego (sin restricciones)' },
          { text: 'Mimic no consume MP ni items' }
        ],
        description: 'Versátil. Copia sin costo. Equipa TODO.'
      },
      {
        id: 'dark_knight',
        name: 'Dark Knight',
        isExclusiveWotl: true,
        requirements: [
          { label: 'Knight', level: 'Lv.8' },
          { label: 'Black Mage', level: 'Lv.8' },
          { label: 'Dragoon', level: 'Lv.8' },
          { label: 'Samurai', level: 'Lv.8' },
          { label: 'Ninja', level: 'Lv.8' },
          { label: 'Geomancer', level: 'Lv.8' },
          { label: '⚠️ + 20 Kills (human enemies)', special: true }
        ],
        stats: {
          hp: { value: 'A', rating: 'a' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'C', rating: 'c' },
          pa: { value: 'A', rating: 'a' },
          ma: { value: 'B', rating: 'b' }
        },
        ability: {
          name: '🌑 Darkness',
          description: 'Dark Sword, Night Sword (consume HP)'
        },
        description: '⚠️ Daño masivo a costa de HP propio. Muy poderoso.'
      },
      {
        id: 'onion_knight',
        name: 'Onion Knight',
        isExclusiveWotl: true,
        requirements: [
          { label: 'Squire', level: 'Lv.6' },
          { label: 'Chemist', level: 'Lv.6' },
          { label: '⚠️ Requiere masterizar 14 jobs para máximo poder', special: true }
        ],
        stats: {
          hp: { value: 'Variable', rating: 's' },
          mp: { value: 'Variable', rating: 'a' },
          speed: { value: '100', rating: 'a' },
          pa: { value: 'Variable', rating: 's' },
          ma: { value: 'Variable', rating: 'a' }
        },
        ability: {
          name: '🧅 None',
          description: 'Sin habilidades propias (usa equipo)'
        },
        bonuses: [
          { text: 'Poder escala con jobs masterizados (2 jobs = 1 nivel OK)' },
          { text: 'Puede equipar TODO (incluso equipo de género opuesto)' },
          { text: 'Acceso a Onion Equipment (extremadamente poderoso)' },
          { text: '❌ No cuentan: Squire, Chemist, Mime, Dark Knight' }
        ],
        description: '⭐ Endgame job. Débil al inicio, extremadamente poderoso con 14 jobs masterizados.'
      }
    ]
  }
};

export const specialCharacterJobs = [
  {
    id: 'agrias',
    name: 'Holy Knight',
    characterName: 'Agrias Oaks / Delita Heiral',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'A', rating: 'a' },
      mp: { value: 'B', rating: 'b' },
      speed: { value: 'B', rating: 'b' },
      pa: { value: 'A', rating: 'a' },
      ma: { value: 'B', rating: 'b' }
    },
    ability: {
      name: '⚔️ Holy Sword',
      description: 'Judgment Blade, Hallowed Bolt, Divine Ruination'
    },
    bonuses: [
      { text: '100% Hit Rate en Holy Sword abilities', isCharacteristic: true },
      { text: '25% chance de status secundario (Stop, Silence)', isCharacteristic: true },
      { text: 'Requiere Knight Sword o Sword equipado', isCharacteristic: true }
    ],
    description: 'Elite knight con Holy-elemental abilities. Agrias se une en Ch.2.'
  },
  {
    id: 'meliadoul',
    name: 'Divine Knight',
    characterName: 'Meliadoul Tingel',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'B', rating: 'b' },
      mp: { value: 'C', rating: 'c' },
      speed: { value: 'B', rating: 'b' },
      pa: { value: 'A', rating: 'a' },
      ma: { value: 'C', rating: 'c' }
    },
    ability: {
      name: '🗡️ Mighty Sword',
      description: 'Shellburst Stab, Hellcry Punch, Icewolf Bite'
    },
    bonuses: [
      { text: '100% Success Rate al romper equipo', isCharacteristic: true },
      { text: 'Daña HP + Destruye Armor/Weapon/Accessory/Helmet', isCharacteristic: true },
      { text: 'Inútil contra monstruos (no tienen equipo)', isCharacteristic: true }
    ],
    description: 'Equipment breaker definitivo. Se une en Ch.4 en Limberry Castle.'
  },
  {
    id: 'orlandeau',
    name: 'Sword Saint',
    characterName: 'Cidolfus Orlandeau (Thunder God Cid)',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'S', rating: 's' },
      mp: { value: 'A', rating: 'a' },
      speed: { value: 'A', rating: 'a' },
      pa: { value: 'S', rating: 's' },
      ma: { value: 'A', rating: 'a' }
    },
    ability: {
      name: '⚡ All Swordskill',
      description: 'Holy Sword, Iaido, Mighty Sword combinados'
    },
    bonuses: [
      { text: '⚠️ GAMEBREAKING: El personaje más fuerte del juego', isCharacteristic: true },
      { text: 'Tiene TODAS las habilidades de espada (3 sets completos)', isCharacteristic: true },
      { text: 'Stats superiores a cualquier generic job', isCharacteristic: true }
    ],
    description: 'Legendario "Thunder God". Se une en Ch.4. Rompe el balance del juego.'
  },
  {
    id: 'balthier',
    name: 'Sky Pirate',
    characterName: 'Balthier (FF12 Guest)',
    isSpecialCharacter: true,
    isExclusiveWotl: true,
    stats: {
      hp: { value: 'B', rating: 'b' },
      mp: { value: 'C', rating: 'c' },
      speed: { value: 'S', rating: 's' },
      pa: { value: 'B', rating: 'b' },
      ma: { value: 'C', rating: 'c' }
    },
    ability: {
      name: '🏴‍☠️ Plunder',
      description: 'Versión mejorada de Steal + Guns'
    },
    bonuses: [
      { text: '+10% Success Rate vs Steal normal', isCharacteristic: true },
      { text: 'Speed Growth #1 (mejor que todos los jobs)', isCharacteristic: true },
      { text: 'Innate: Safeguard (inmune a Steal/Plunder)', isCharacteristic: true }
    ],
    description: 'WotL exclusive guest. Machinist mejorado + Thief. Sidequest opcional.'
  },
  {
    id: 'beowulf',
    name: 'Templar',
    characterName: 'Beowulf Cadmus',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'A', rating: 'a' },
      mp: { value: 'B', rating: 'b' },
      speed: { value: 'C', rating: 'c' },
      pa: { value: 'A', rating: 'a' },
      ma: { value: 'A', rating: 'a' }
    },
    ability: {
      name: '🛡️ Magick Break',
      description: 'Chicken, Toad, Stone, Stop status'
    },
    bonuses: [
      { text: 'Status ailments permanentes (no temporales)', isCharacteristic: true },
      { text: 'Rango largo sin necesidad de armas especiales', isCharacteristic: true },
      { text: 'Reclutable en sidequest después de Lesalia', isCharacteristic: true }
    ],
    description: 'Status breaker definitivo. Pareja de Reis. Sidequest Ch.4.'
  },
  {
    id: 'mustadio',
    name: 'Machinist',
    characterName: 'Mustadio Bunansa',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'C', rating: 'c' },
      mp: { value: 'C', rating: 'c' },
      speed: { value: 'B', rating: 'b' },
      pa: { value: 'B', rating: 'b' },
      ma: { value: 'C', rating: 'c' }
    },
    ability: {
      name: '🔫 Aimed Shot',
      description: 'Arm Aim, Leg Aim, Seal Evil'
    },
    bonuses: [
      { text: 'Guns ignoran evasión y terreno', isCharacteristic: true },
      { text: 'Status ailments a partes del cuerpo específicas', isCharacteristic: true },
      { text: 'Se une permanentemente en Ch.2 (Goug)', isCharacteristic: true }
    ],
    description: 'Ingeniero con armas de fuego. Útil early-game para control.'
  },
  {
    id: 'rafa',
    name: 'Skyseer',
    characterName: 'Rafa Galthena (Heaven Knight)',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'C', rating: 'c' },
      mp: { value: 'B', rating: 'b' },
      speed: { value: 'A', rating: 'a' },
      pa: { value: 'C', rating: 'c' },
      ma: { value: 'B', rating: 'b' }
    },
    ability: {
      name: '☁️ Sky Mantra (Truth)',
      description: 'Heaven Thunder, Asura, Diamond Sword, Celestial Void'
    },
    bonuses: [
      { text: '⚠️ RANDOM: Golpea entre 1-10 veces por cast', isCharacteristic: true },
      { text: 'Ignora Faith y Reflect, sin costo de MP', isCharacteristic: true },
      { text: 'Daño elemental de área (Fire/Lightning/Wind/Water/Earth)', isCharacteristic: true },
      { text: 'Se une en Ch.3 (Riovanes Castle)', isCharacteristic: true }
    ],
    description: 'Heaven Knight. Hermana de Malak. Hechizos "Truth" random pero poderosos.'
  },
  {
    id: 'malak',
    name: 'Netherseer',
    characterName: 'Malak Galthena (Hell Knight)',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'B', rating: 'b' },
      mp: { value: 'B', rating: 'b' },
      speed: { value: 'A', rating: 'a' },
      pa: { value: 'B', rating: 'b' },
      ma: { value: 'C', rating: 'c' }
    },
    ability: {
      name: '🌑 Nether Mantra (Untruth)',
      description: "Hell's Wrath, Nether Blade, Nether Ashura, Corporeal Void"
    },
    bonuses: [
      { text: '⚠️ RANDOM: Golpea entre 1-10 veces por cast', isCharacteristic: true },
      { text: 'Daño INVERSO a Faith (menor Faith = más daño)', isCharacteristic: true },
      { text: 'Mejor PA que Rafa, peor MA (necesita MA Boost)', isCharacteristic: true },
      { text: 'Se une en Ch.3 (Riovanes Castle)', isCharacteristic: true }
    ],
    description: 'Hell Knight. Hermano de Rafa. "Untruth" basado en falta de fe.'
  },
  {
    id: 'reis',
    name: 'Dragonkin',
    characterName: 'Reis Duelar (Holy Dragon)',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'A', rating: 'a' },
      mp: { value: 'A', rating: 'a' },
      speed: { value: 'B', rating: 'b' },
      pa: { value: 'A', rating: 'a' },
      ma: { value: 'A', rating: 'a' }
    },
    ability: {
      name: '🐲 Dragon Magicks',
      description: "Reis's Breath, Dragon's Gift, Dragon's Charm"
    },
    bonuses: [
      { text: 'Único hybrid humano-dragón del juego', isCharacteristic: true },
      { text: 'Buffs de área + daño elemental + curación', isCharacteristic: true },
      { text: 'Reclutable en sidequest Ch.4 (con Beowulf)', isCharacteristic: true }
    ],
    description: 'Ex-Holy Dragon transformada en humana. Support + offense hybrid.'
  },
  {
    id: 'luso',
    name: 'Game Hunter',
    characterName: 'Luso Clemens (FFTA2 Guest)',
    isSpecialCharacter: true,
    isExclusiveWotl: true,
    stats: {
      hp: { value: 'B', rating: 'b' },
      mp: { value: 'C', rating: 'c' },
      speed: { value: 'A', rating: 'a' },
      pa: { value: 'B', rating: 'b' },
      ma: { value: 'C', rating: 'c' }
    },
    ability: {
      name: '🎯 Hunt',
      description: 'Abilities especializadas en cacería'
    },
    bonuses: [
      { text: 'WotL exclusive character (crossover FFTA2)', isCharacteristic: true },
      { text: 'Versátil: combat + soporte', isCharacteristic: true },
      { text: 'Sidequest opcional en WotL', isCharacteristic: true }
    ],
    description: 'WotL exclusive. Joven cazador del mundo de Ivalice.'
  },
  {
    id: 'cloud',
    name: 'Soldier',
    characterName: 'Cloud Strife (FF7 Guest)',
    isSpecialCharacter: true,
    stats: {
      hp: { value: 'A', rating: 'a' },
      mp: { value: 'B', rating: 'b' },
      speed: { value: 'C', rating: 'c' },
      pa: { value: 'A', rating: 'a' },
      ma: { value: 'A', rating: 'a' }
    },
    ability: {
      name: '⚡ Limit',
      description: 'Braver, Cross-Slash, Meteorain, Finishing Touch, Omnislash'
    },
    bonuses: [
      { text: '⚠️ REQUIERE: Materia Blade equipado para usar Limit', isCharacteristic: true },
      { text: 'Límit Breaks de FF7 + Cherry Blossom (único de FFT)', isCharacteristic: true },
      { text: 'Daño basado en MA (no PA), largo Charge Time', isCharacteristic: true },
      { text: '⚠️ Empieza nivel 1 (mejorado en Ivalice Chronicles)', isCharacteristic: true }
    ],
    description: 'Crossover FF7. Sidequest complejo: Mustadio → Goug Machine → Sal Ghidos.'
  }
];
