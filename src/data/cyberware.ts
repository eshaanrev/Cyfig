import { Cyberware } from '../types/cyberware';

export const cyberwareData: Record<string, Cyberware[]> = {
  'Frontal Cortex': [
    {
      id: 'axolotl',
      name: 'Axolotl',
      category: 'Frontal Cortex',
      description: 'Reduces cooldown for all cyberware after neutralizing an enemy',
      rarity: 'Legendary',
      stats: ['-5.0-7.5% Cooldown for all cyberware', 'Triggers on enemy kill'],
      capacity: 48
    },
    {
      id: 'bioconductor',
      name: 'Bioconductor',
      category: 'Frontal Cortex',
      description: 'Allows quickhacks to deal critical hits',
      rarity: 'Common',
      stats: ['+15-35% Crit Chance with quickhacks', '-4 Max RAM'],
      capacity: 20
    },
    {
      id: 'cox-2-cybersomatic',
      name: 'COX-2 Cybersomatic Optimizer',
      category: 'Frontal Cortex',
      description: 'Enhanced version that allows quickhacks to crit',
      rarity: 'Legendary',
      stats: ['+80-100% Crit Chance with quickhacks', '-8-4 Max RAM'],
      capacity: 50
    },
    {
      id: 'camillo-ram-manager',
      name: 'Camillo RAM Manager',
      category: 'Frontal Cortex',
      description: 'Recovers RAM when it falls below threshold',
      rarity: 'Epic',
      stats: ['Recovers 20-23% Max RAM when below 15-20%', '+2 Max RAM', '80 sec cooldown'],
      capacity: 10
    },
    {
      id: 'ex-disk',
      name: 'Ex-Disk',
      category: 'Frontal Cortex',
      description: 'Increases RAM and upload speed for quickhacks',
      rarity: 'Rare',
      stats: ['+4-6 Max RAM', '+20-35% upload speed'],
      capacity: 10
    },
    {
      id: 'kerenzikov-boost',
      name: 'Kerenzikov Boost System',
      category: 'Frontal Cortex',
      description: 'Improves Kerenzikov performance',
      rarity: 'Rare',
      stats: ['-100% Stamina cost when shooting', '+5-15 time slow enhancement'],
      capacity: 3
    },
    {
      id: 'mechatronic-core',
      name: 'Mechatronic Core',
      category: 'Frontal Cortex',
      description: 'Increases damage against mechanical enemies',
      rarity: 'Common',
      stats: ['+15-40% damage vs drones/robots/mechs', '+1-2 Max RAM'],
      capacity: 5
    },
    {
      id: 'memory-boost',
      name: 'Memory Boost',
      category: 'Frontal Cortex',
      description: 'Enhances memory and learning capabilities',
      rarity: 'Uncommon',
      stats: ['+10% XP Gain', '+5% Breach Protocol Duration'],
      capacity: 18
    },
    {
      id: 'quantum-tuner',
      name: 'Quantum Tuner',
      category: 'Frontal Cortex',
      description: 'Instantly restores cooldown for other cyberware',
      rarity: 'Legendary',
      stats: ['Restores cyberware cooldown (max 30-50 sec)', '-10-15% Cooldown for all cyberware'],
      capacity: 45
    },
    {
      id: 'self-ice',
      name: 'Self-ICE',
      category: 'Frontal Cortex',
      description: 'Automatically negates enemy quickhacks',
      rarity: 'Rare',
      stats: ['Auto-negate quickhack', '+1-2 Max RAM', '45-20 sec cooldown'],
      capacity: 5
    }
  ],
  'Operating System': [
    // Cyberdecks
    {
      id: 'arasaka-mk4',
      name: 'Arasaka Mk.4',
      category: 'Operating System',
      description: 'Advanced netrunning cyberdeck with stealth capabilities',
      rarity: 'Epic',
      stats: ['6-16 RAM', '5-8 Slots', '-2 RAM cost Covert quickhacks', '+5 RAM after takedown'],
      capacity: 14
    },
    {
      id: 'biotech-sigma',
      name: 'Biotech Σ Mk.4',
      category: 'Operating System',
      description: 'Combat-focused cyberdeck with DOT bonuses',
      rarity: 'Epic',
      stats: ['6-16 RAM', '5-8 Slots', '+15% Combat quickhack duration', '+25% Monowire vs DOT'],
      capacity: 16
    },
    {
      id: 'militech-paraline',
      name: 'Militech Paraline Mk.5',
      category: 'Operating System',
      description: 'Military cyberdeck with Smart weapon synergy',
      rarity: 'Epic',
      stats: ['5-9 RAM', '4-8 Slots', '+10% quickhack damage', 'Smart weapon acceleration'],
      capacity: 14
    },
    {
      id: 'netwatch-netdriver',
      name: 'NetWatch Netdriver Mk.1',
      category: 'Operating System',
      description: 'Professional netrunning interface',
      rarity: 'Legendary',
      stats: ['13 RAM', '8 Slots', '-20% trace through cameras', '+15-30% device quickhack damage'],
      capacity: 25
    },
    // Sandevistan
    {
      id: 'militech-falcon',
      name: 'Militech "Falcon" Sandevistan',
      category: 'Operating System',
      description: 'Time-dilating combat enhancement system',
      rarity: 'Epic',
      stats: ['70% time slow', '+5-15% Crit Chance', '+10-12% Health on kill', '9-10 sec duration'],
      capacity: 39
    },
    {
      id: 'militech-apogee',
      name: 'Militech "Apogee" Sandevistan',
      category: 'Operating System',
      description: 'Military-grade time dilation system',
      rarity: 'Legendary',
      stats: ['85% time slow', '+15-20% headshot damage', '10% duration extension on kill'],
      capacity: 44
    },
    {
      id: 'zetatech-sandevistan',
      name: 'Zetatech Sandevistan',
      category: 'Operating System',
      description: 'Aerial combat-focused time dilation',
      rarity: 'Uncommon',
      stats: ['30% time slow (60% midair)', '+6-24% damage midair', '-30% fall damage'],
      capacity: 20
    },
    // Berserk
    {
      id: 'militech-berserk',
      name: 'Militech Berserk',
      category: 'Operating System',
      description: 'Combat stimulant system with damage immunity',
      rarity: 'Legendary',
      stats: ['Invulnerable to damage', 'Melee weapons only', '+25-30% attack speed', '+50% damage at low health'],
      capacity: 35
    },
    {
      id: 'zetatech-berserk',
      name: 'Zetatech Berserk',
      category: 'Operating System',
      description: 'Enhanced combat system with fall damage reduction',
      rarity: 'Rare',
      stats: ['+35-50% damage reduction', 'Health cannot drop below 25%', '+10-20% attack speed'],
      capacity: 16
    }
  ],
  'Arms': [
    {
      id: 'gorilla-arms',
      name: 'Gorilla Arms',
      category: 'Arms',
      description: 'Cybernetic arms with enhanced strength for Body checks',
      rarity: 'Uncommon',
      stats: ['+4 Body Attribute checks', 'Force open doors', 'Enhanced melee damage'],
      capacity: 8
    },
    {
      id: 'mantis-blades',
      name: 'Mantis Blades',
      category: 'Arms',
      description: 'Retractable blade weapons for swift combat',
      rarity: 'Uncommon',
      stats: ['Blade weapons', 'Leap attack ability', 'Swift slashing attacks'],
      capacity: 8
    },
    {
      id: 'mantis-blades-thermal',
      name: 'Thermal Mantis Blades',
      category: 'Arms',
      description: 'Heat-enhanced mantis blades',
      rarity: 'Rare',
      stats: ['Thermal damage', 'Burn chance', 'Leap attack'],
      capacity: 8
    },
    {
      id: 'mantis-blades-electric',
      name: 'Electrifying Mantis Blades',
      category: 'Arms',
      description: 'Electrically enhanced mantis blades',
      rarity: 'Rare',
      stats: ['Electrical damage', '10-20% Shock chance', 'Leap attack'],
      capacity: 8
    },
    {
      id: 'monowire',
      name: 'Monowire',
      category: 'Arms',
      description: 'Monofilament whip weapon with quickhack slot',
      rarity: 'Uncommon',
      stats: ['Physical damage', 'Empty quickhack slot', 'Whip attacks'],
      capacity: 8
    },
    {
      id: 'monowire-thermal',
      name: 'Thermal Monowire',
      category: 'Arms',
      description: 'Heat-enhanced monowire',
      rarity: 'Rare',
      stats: ['Thermal damage', 'Empty quickhack slot'],
      capacity: 8
    },
    {
      id: 'projectile-launcher',
      name: 'Projectile Launch System',
      category: 'Arms',
      description: 'Explosive projectile launcher',
      rarity: 'Uncommon',
      stats: ['Explosive projectiles', '+30% charged damage', '+25% explosion radius'],
      capacity: 8
    }
  ],
  'Face': [
    {
      id: 'basic-kiroshi-optics',
      name: 'Basic Kiroshi Optics',
      category: 'Face',
      description: 'Standard optical enhancement with zoom',
      rarity: 'Common',
      stats: ['-20-44% camera detection speed', '4-10x optical zoom'],
      capacity: 1
    },
    {
      id: 'kiroshi-clairvoyant',
      name: 'Kiroshi "Clairvoyant" Optics',
      category: 'Face',
      description: 'Advanced enemy detection system',
      rarity: 'Rare',
      stats: ['Highlights enemies within 12.5-19.5m', '60 sec effect duration', '6-10x zoom'],
      capacity: 8
    },
    {
      id: 'kiroshi-cockatrice',
      name: 'Kiroshi "Cockatrice" Optics',
      category: 'Face',
      description: 'Crit-focused optical enhancement',
      rarity: 'Legendary',
      stats: ['+25-35% Crit Chance', '10x optical zoom'],
      capacity: 30
    },
    {
      id: 'kiroshi-oracle',
      name: 'Kiroshi "The Oracle" Optics',
      category: 'Face',
      description: 'Ultimate tactical awareness system',
      rarity: 'Legendary',
      stats: ['Highlights enemies, cameras, explosives', '15-39m range', '8-10x zoom'],
      capacity: 10
    },
    {
      id: 'kiroshi-stalker',
      name: 'Kiroshi "Stalker" Optics',
      category: 'Face',
      description: 'Tech weapon targeting system',
      rarity: 'Common',
      stats: ['Highlights enemies behind cover', 'Tech weapon integration', '15-53m range'],
      capacity: 2
    },
    {
      id: 'behavioral-faceplate',
      name: 'Behavioral Imprint-synced Faceplate',
      category: 'Face',
      description: 'Identity-altering faceplate for evading law enforcement',
      rarity: 'Legendary',
      stats: ['Escape Law up to Bounty 4', '1500 sec cooldown', 'Digital identity masking'],
      capacity: 0
    }
  ],
  'Skeleton': [
    {
      id: 'bone-lacing',
      name: 'Bone Lacing',
      category: 'Skeleton',
      description: 'Basic armor reinforcement',
      rarity: 'Common',
      stats: ['+17-49 Armor', 'Simple but effective'],
      capacity: 8
    },
    {
      id: 'dense-marrow',
      name: 'Dense Marrow',
      category: 'Skeleton',
      description: 'Enhanced bone density for melee combat',
      rarity: 'Uncommon',
      stats: ['+15-27% melee damage', '+20% melee stamina cost'],
      capacity: 16
    },
    {
      id: 'epimorphic-skeleton',
      name: 'Epimorphic Skeleton',
      category: 'Skeleton',
      description: 'Advanced skeletal enhancement',
      rarity: 'Legendary',
      stats: ['+10-13% Max Health'],
      capacity: 40
    },
    {
      id: 'titanium-bones',
      name: 'Titanium Bones',
      category: 'Skeleton',
      description: 'Lightweight but strong bone replacement',
      rarity: 'Common',
      stats: ['+30-62% Carrying Capacity'],
      capacity: 5
    },
    {
      id: 'kinetic-frame',
      name: 'Kinetic Frame',
      category: 'Skeleton',
      description: 'Movement-based damage mitigation',
      rarity: 'Common',
      stats: ['+8-16% Mitigation Chance when Stamina above 85%'],
      capacity: 16
    },
    {
      id: 'para-bellum',
      name: 'Para Bellum',
      category: 'Skeleton',
      description: 'Military-grade armor enhancement',
      rarity: 'Rare',
      stats: ['+8-13% Armor'],
      capacity: 25
    },
    {
      id: 'rara-avis',
      name: 'Rara Avis',
      category: 'Skeleton',
      description: 'Exceptional armor plating',
      rarity: 'Legendary',
      stats: ['+30-40% Armor'],
      capacity: 45
    },
    {
      id: 'spring-joints',
      name: 'Spring Joints',
      category: 'Skeleton',
      description: 'Enhanced joint flexibility for damage mitigation',
      rarity: 'Uncommon',
      stats: ['+10-16% Mitigation Strength'],
      capacity: 16
    }
  ],
  'Hands': [
    {
      id: 'ballistic-coprocessor',
      name: 'Ballistic Coprocessor',
      category: 'Hands',
      description: 'Enhanced weapon handling and ricochet control',
      rarity: 'Common',
      stats: ['+8-30% ricochet damage', 'Ricochet trajectory preview'],
      capacity: 2
    },
    {
      id: 'smart-link',
      name: 'Smart Link',
      category: 'Hands',
      description: 'Interface for smart weapon targeting',
      rarity: 'Common',
      stats: ['Smart weapon targeting', '+10-20% target-lock duration', '+1-2 Max RAM'],
      capacity: 4
    },
    {
      id: 'shock-absorber',
      name: 'Shock Absorber',
      category: 'Hands',
      description: 'Reduces weapon recoil',
      rarity: 'Common',
      stats: ['-8-24% recoil'],
      capacity: 12
    },
    {
      id: 'microgenerator',
      name: 'Microgenerator',
      category: 'Hands',
      description: 'Electrical discharge on reload',
      rarity: 'Uncommon',
      stats: ['75-250 Electrical damage on reload', 'Damage scales with bullets reloaded'],
      capacity: 9
    },
    {
      id: 'handle-wrap',
      name: 'Handle Wrap',
      category: 'Hands',
      description: 'Enhanced throwing weapon handling',
      rarity: 'Rare',
      stats: ['+8-27% Crit Chance with throwables', '6 sec duration'],
      capacity: 8
    },
    {
      id: 'immovable-force',
      name: 'Immovable Force',
      category: 'Hands',
      description: 'Ultimate weapon stability system',
      rarity: 'Legendary',
      stats: ['-18-35% recoil', '-25% bullet spread', 'Auto cover effects'],
      capacity: 35
    }
  ],
  'Nervous System': [
    {
      id: 'adrenaline-rush',
      name: 'Adrenaline Rush',
      category: 'Nervous System',
      description: 'Combat movement speed boost',
      rarity: 'Common',
      stats: ['+20-40% movement speed', '3-9 sec duration on combat entry'],
      capacity: 6
    },
    {
      id: 'adreno-trigger',
      name: 'Adreno-trigger',
      category: 'Nervous System',
      description: 'Enhanced combat movement system',
      rarity: 'Uncommon',
      stats: ['+20-30% movement speed', '10-35 sec duration'],
      capacity: 20
    },
    {
      id: 'kerenzikov',
      name: 'Kerenzikov',
      category: 'Nervous System',
      description: 'Time dilation during evasive maneuvers',
      rarity: 'Uncommon',
      stats: ['60% time slow during slide/dodge/dash', '2-3.75 sec duration', '8-6 sec cooldown'],
      capacity: 12
    },
    {
      id: 'reflex-tuner',
      name: 'Reflex Tuner',
      category: 'Nervous System',
      description: 'Emergency time dilation at low health',
      rarity: 'Common',
      stats: ['20-60% time slow at <25% health', '2-4.5 sec duration', '60-35 sec cooldown'],
      capacity: 5
    },
    {
      id: 'synaptic-accelerator',
      name: 'Synaptic Accelerator',
      category: 'Nervous System',
      description: 'Pre-combat time dilation',
      rarity: 'Uncommon',
      stats: ['20-50% time slow at 50% detection', '2-4.5 sec duration', '60 sec cooldown'],
      capacity: 5
    },
    {
      id: 'neofiber',
      name: 'NeoFiber',
      category: 'Nervous System',
      description: 'Damage mitigation enhancement',
      rarity: 'Rare',
      stats: ['+8-11% Mitigation Chance', '+5-11% Mitigation Strength'],
      capacity: 14
    },
    {
      id: 'visual-cortex-support',
      name: 'Visual Cortex Support',
      category: 'Nervous System',
      description: 'Distance-based critical hit enhancement',
      rarity: 'Common',
      stats: ['+16-30% Crit Chance at 30m', 'Distance scaling'],
      capacity: 20
    }
  ],
  'Circulatory System': [
    {
      id: 'adrenaline-booster',
      name: 'Adrenaline Booster',
      category: 'Circulatory System',
      description: 'Stamina recovery from melee kills',
      rarity: 'Common',
      stats: ['+10-25% Stamina on melee kill'],
      capacity: 14
    },
    {
      id: 'biomonitor',
      name: 'Biomonitor',
      category: 'Circulatory System',
      description: 'Automatic health item usage',
      rarity: 'Common',
      stats: ['Auto-heal at 50% HP', '+2-16% health item effectiveness'],
      capacity: 14
    },
    {
      id: 'second-heart',
      name: 'Second Heart',
      category: 'Circulatory System',
      description: 'Emergency revival system',
      rarity: 'Legendary',
      stats: ['+100% Health when reaching 0 HP', '300-220 sec cooldown'],
      capacity: 30
    },
    {
      id: 'blood-pump',
      name: 'Blood Pump',
      category: 'Circulatory System',
      description: 'Powerful health restoration device',
      rarity: 'Uncommon',
      stats: ['45-110 instant Health', '9-23 Health/sec regen', '6 sec duration'],
      capacity: 15
    },
    {
      id: 'heal-on-kill',
      name: 'Heal-On-Kill',
      category: 'Circulatory System',
      description: 'Health recovery from eliminations',
      rarity: 'Common',
      stats: ['Health restored on enemy kill'],
      capacity: 10
    },
    {
      id: 'microrotors',
      name: 'Microrotors',
      category: 'Circulatory System',
      description: 'Enhanced melee attack speed',
      rarity: 'Common',
      stats: ['+10-25% melee attack speed'],
      capacity: 12
    },
    {
      id: 'threat-evac',
      name: 'ThreatEvac',
      category: 'Circulatory System',
      description: 'Emergency movement boost at low health',
      rarity: 'Common',
      stats: ['+5-29% movement speed at 25% HP', 'Scales with health loss'],
      capacity: 5
    }
  ],
  'Integumentary System': [
    {
      id: 'armadillo',
      name: 'Armadillo',
      category: 'Integumentary System',
      description: 'Enhanced rear and side protection',
      rarity: 'Uncommon',
      stats: ['38-94 Armor', '+20-32% Armor vs side/rear attacks'],
      capacity: 16
    },
    {
      id: 'subdermal-armor',
      name: 'Subdermal Armor',
      category: 'Integumentary System',
      description: 'Basic armor plating beneath skin',
      rarity: 'Common',
      stats: ['17-49 Armor', 'Simple but effective'],
      capacity: 5
    },
    {
      id: 'optical-camo',
      name: 'Optical Camo',
      category: 'Integumentary System',
      description: 'Active camouflage system',
      rarity: 'Uncommon',
      stats: ['-30-90% visibility to enemies', '4-7 sec duration', '70-50 sec cooldown'],
      capacity: 20
    },
    {
      id: 'cogito-lattice',
      name: 'Cogito Lattice',
      category: 'Integumentary System',
      description: 'Armor with RAM-based bonus',
      rarity: 'Common',
      stats: ['18-54 Armor', '+200-240% Armor when RAM below 2-10'],
      capacity: 12
    },
    {
      id: 'pain-editor',
      name: 'Pain Editor',
      category: 'Integumentary System',
      description: 'Advanced damage reduction system',
      rarity: 'Legendary',
      stats: ['88-108 Armor', '-6-7% all incoming damage'],
      capacity: 35
    },
    {
      id: 'chitin',
      name: 'Chitin',
      category: 'Integumentary System',
      description: 'Biological armor with health regen',
      rarity: 'Legendary',
      stats: ['140-200 Armor', 'Additional Health Regen'],
      capacity: 50
    },
    {
      id: 'shock-n-awe',
      name: 'Shock-n-Awe',
      category: 'Integumentary System',
      description: 'Electrical discharge when taking damage',
      rarity: 'Common',
      stats: ['44-92 Armor', '10% chance for 135-500 electrical damage'],
      capacity: 25
    }
  ],
  'Legs': [
    {
      id: 'fortified-ankles',
      name: 'Fortified Ankles',
      category: 'Legs',
      description: 'Enhanced jumping with charge capability',
      rarity: 'Common',
      stats: ['Charge jumps for distance', 'Hold to charge jump'],
      capacity: 6
    },
    {
      id: 'reinforced-tendons',
      name: 'Reinforced Tendons',
      category: 'Legs',
      description: 'Double jump capability',
      rarity: 'Uncommon',
      stats: ['Double jump in midair', 'Enhanced mobility'],
      capacity: 8
    },
    {
      id: 'jenkins-tendons',
      name: "Jenkins' Tendons",
      category: 'Legs',
      description: 'Variable sprint speed enhancement',
      rarity: 'Uncommon',
      stats: ['+30% sprint speed (tapering to +10%)', '5 sec duration'],
      capacity: 6
    },
    {
      id: 'leeroy-ligament',
      name: 'Leeroy Ligament System',
      category: 'Legs',
      description: 'Constant movement speed boost',
      rarity: 'Rare',
      stats: ['+12-20% Movement Speed'],
      capacity: 8
    },
    {
      id: 'lynx-paws',
      name: 'Lynx Paws',
      category: 'Legs',
      description: 'Stealth-focused movement enhancement',
      rarity: 'Uncommon',
      stats: ['+50% quieter movement', '+6-12% crouched speed', '-20% fall damage'],
      capacity: 5
    }
  ]
};
