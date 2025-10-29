// FFT Jobs Data
// This file contains all job information for the companion app

export const jobTiers = {
  tier1: {
    title: '⚔️ Tier 1: Starting Jobs',
    jobs: [
      {
        id: 'squire',
        name: 'Squire',
        requirements: [{ label: '✓ Starting', none: true }],
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
        description: 'Starter. Unlocks jobs'
      },
      {
        id: 'chemist',
        name: 'Chemist',
        requirements: [{ label: '✓ Starting', none: true }],
        stats: {
          hp: { value: 'C', rating: 'c' },
          mp: { value: 'C', rating: 'c' },
          speed: { value: 'B', rating: 'b' },
          pa: { value: 'D', rating: 'd' },
          ma: { value: 'C', rating: 'c' }
        },
        ability: {
          name: '💊 Item',
          description: 'Use items with extended range'
        },
        description: 'High Speed. Ranged items. Support'
      }
    ]
  },
  tier2: {
    title: '⚔️ Tier 2: Basic Jobs',
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
          description: 'Destroys enemy equipment'
        },
        bonuses: [
          { text: 'Best armor access' },
          { text: 'Heavy Armor & Shields' }
        ],
        description: 'Tank. High HP/PA. Best armor'
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
          description: 'Ranged status attacks'
        },
        bonuses: [
          { text: 'Charge +1 (bow/crossbow range)' }
        ],
        description: 'Long range. Charge +1. Control'
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
        description: 'Healing. Support'
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
        description: 'Elemental dmg. High MA'
      }
    ]
  },
  tier3: {
    title: '⚔️ Tier 3: Intermediate Jobs',
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
          { text: 'Martial Arts: Unarmed damage = PA × (PA/2)' }
        ],
        description: 'Melee. Revives. High PA/Speed'
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
        description: 'Max Speed. Item farming'
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
        description: 'Speed control. Strategy'
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
        description: 'Status. Control'
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
          description: 'MP-free magic, terrain-based'
        },
        bonuses: [
          { text: 'Ignores terrain' }
        ],
        description: 'No MP. Terrain-based'
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
          description: 'Aerial attacks, ignores evasion'
        },
        bonuses: [
          { text: 'Jump +3 (Vertical 8)' },
          { text: 'Jump ignores evasion' }
        ],
        description: 'Jump. Ignores evasion. Anti-air'
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
          { text: 'Best MP Growth (125%)' },
          { text: 'No friendly fire' }
        ],
        description: 'Massive AoE. High MP cost'
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
          { text: 'Permanent Brave/Faith changes' },
          { text: 'Recruits humans & monsters' },
          { text: 'Beast Tongue (talk to monsters)' }
        ],
        description: 'Recruiting. Permanent buffs. No MP'
      }
    ]
  },
  tier4: {
    title: '⚔️ Tier 4: Advanced Jobs',
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
          { text: 'Shirahadori (evade physical)' }
        ],
        description: 'Massive dmg. Shirahadori (evade physical)'
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
          description: 'Throw weapons & shurikens'
        },
        bonuses: [
          { text: 'Dual Wield (2x attacks)' },
          { text: 'Sunken State (terrain immune)' }
        ],
        description: 'Max Speed. Dual Wield. High evasion'
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
        description: '⚠️ GAMEBREAKING. Math-based magic'
      },
      {
        id: 'bard',
        name: 'Bard',
        requirements: [
          { label: 'Summoner', level: 'Lv.5' },
          { label: 'Orator', level: 'Lv.5' },
          { label: '♂️ Male Only', genderLock: true, color: '#f39c12' }
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
        description: 'Permanent AoE buffs'
      },
      {
        id: 'dancer',
        name: 'Dancer',
        requirements: [
          { label: 'Geomancer', level: 'Lv.5' },
          { label: 'Dragoon', level: 'Lv.5' },
          { label: '♀️ Female Only', genderLock: true, color: '#e91e63' }
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
        description: 'Random AoE status'
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
          description: 'Copies last action executed'
        },
        bonuses: [
          { text: 'Equips all gear' },
          { text: 'Mimic: No MP/item cost' }
        ],
        description: 'Versatile. Mimics. Equips all'
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
        description: '⚠️ Massive dmg. Costs HP'
      },
      {
        id: 'onion_knight',
        name: 'Onion Knight',
        isExclusiveWotl: true,
        requirements: [
          { label: 'Squire', level: 'Lv.6' },
          { label: 'Chemist', level: 'Lv.6' },
          { label: '⚠️ Requires mastering 14 jobs for maximum power', special: true }
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
          description: 'No innate abilities (uses equipment)'
        },
        bonuses: [
          { text: 'Scales with mastered jobs' },
          { text: 'Equips all gear (any gender)' },
          { text: 'Onion Equipment access' },
          { text: '❌ Excludes: Squire/Chemist/Mime/Dark Knight' }
        ],
        description: '⭐ Endgame. Very powerful'
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
      { text: '100% hit rate', isCharacteristic: true },
      { text: '25% secondary status', isCharacteristic: true },
      { text: 'Requires Knight Sword/Sword', isCharacteristic: true }
    ],
    description: 'Elite knight. Holy element. Joins Ch2'
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
      { text: '100% break rate', isCharacteristic: true },
      { text: 'Damages HP + breaks gear', isCharacteristic: true },
      { text: 'Useless vs monsters', isCharacteristic: true }
    ],
    description: 'Equipment breaker. Joins Ch4'
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
      description: 'Holy Sword, Iaido, Mighty Sword combined'
    },
    bonuses: [
      { text: '⚠️ GAMEBREAKING: Strongest character', isCharacteristic: true },
      { text: 'All sword abilities (3 sets)', isCharacteristic: true },
      { text: 'Best stats', isCharacteristic: true }
    ],
    description: 'Thunder God. Joins Ch4. Breaks balance'
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
      description: 'Improved version of Steal + Guns'
    },
    bonuses: [
      { text: '+10% steal rate', isCharacteristic: true },
      { text: 'Best Speed growth', isCharacteristic: true },
      { text: 'Safeguard (steal immune)', isCharacteristic: true }
    ],
    description: 'WotL exclusive. Machinist/Thief. Sidequest'
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
      { text: 'Permanent status', isCharacteristic: true },
      { text: 'Long range', isCharacteristic: true },
      { text: 'Sidequest (after Lesalia)', isCharacteristic: true }
    ],
    description: 'Status breaker. Sidequest Ch4'
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
      { text: 'Guns ignore evasion/terrain', isCharacteristic: true },
      { text: 'Targets body parts', isCharacteristic: true },
      { text: 'Joins Ch2 (Goug)', isCharacteristic: true }
    ],
    description: 'Engineer. Firearms. Joins Ch2'
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
      { text: '⚠️ RANDOM: 1-10 hits', isCharacteristic: true },
      { text: 'Ignores Faith/Reflect. No MP', isCharacteristic: true },
      { text: 'AoE elemental dmg', isCharacteristic: true },
      { text: 'Joins Ch3 (Riovanes)', isCharacteristic: true }
    ],
    description: 'Heaven Knight. Random Truth spells'
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
      { text: '⚠️ RANDOM: 1-10 hits', isCharacteristic: true },
      { text: 'INVERSE Faith (lower = more dmg)', isCharacteristic: true },
      { text: 'Better PA than Rafa', isCharacteristic: true },
      { text: 'Joins Ch3 (Riovanes)', isCharacteristic: true }
    ],
    description: 'Hell Knight. Untruth spells'
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
      { text: 'Human-dragon hybrid', isCharacteristic: true },
      { text: 'AoE buffs/dmg/healing', isCharacteristic: true },
      { text: 'Sidequest Ch4 (w/ Beowulf)', isCharacteristic: true }
    ],
    description: 'Holy Dragon. Support/offense hybrid'
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
      description: 'Specialized hunting abilities'
    },
    bonuses: [
      { text: 'WotL exclusive (FFTA2)', isCharacteristic: true },
      { text: 'Combat + support', isCharacteristic: true },
      { text: 'Optional sidequest', isCharacteristic: true }
    ],
    description: 'WotL exclusive. Hunter'
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
      { text: '⚠️ Requires Materia Blade', isCharacteristic: true },
      { text: 'FF7 Limit Breaks + Cherry Blossom', isCharacteristic: true },
      { text: 'MA-based. Long charge', isCharacteristic: true },
      { text: '⚠️ Starts at Lv1', isCharacteristic: true }
    ],
    description: 'FF7 crossover. Complex sidequest'
  }
];
