import { Cyberware } from '../types/cyberware';

export const cyberwareData: Record<string, Cyberware[]> = {
  'Frontal Cortex': [
    {
      id: 'memory-boost',
      name: 'Memory Boost',
      category: 'Frontal Cortex',
      description: 'Increases memory capacity and recall speed',
      rarity: 'Common',
      stats: ['+10% XP Gain', '+5% Breach Protocol Duration']
    },
    {
      id: 'ex-disk',
      name: 'Ex-Disk',
      category: 'Frontal Cortex',
      description: 'Additional storage for quickhacks',
      rarity: 'Uncommon',
      stats: ['+1 Quickhack Slot', '+10% Upload Speed']
    }
  ],
  'Ocular System': [
    {
      id: 'kiroshi-optics',
      name: 'Kiroshi Optics Mk.3',
      category: 'Ocular System',
      description: 'Advanced optical enhancement system',
      rarity: 'Epic',
      stats: ['+15% Headshot Damage', 'Zoom Enhancement', 'Threat Detection']
    }
  ],
  'Circulatory System': [
    {
      id: 'biomonitor',
      name: 'Biomonitor',
      category: 'Circulatory System',
      description: 'Automatically applies health items when low',
      rarity: 'Uncommon',
      stats: ['Auto-Heal at 15% HP', '+25% Health Item Effectiveness']
    },
    {
      id: 'bioconductor',
      name: 'Bioconductor',
      category: 'Circulatory System',
      description: 'Reduces cyberware cooldowns',
      rarity: 'Epic',
      stats: ['-30% Cyberware Cooldown', '+15% Max Health']
    }
  ],
  'Immune System': [
    {
      id: 'detoxifier',
      name: 'Detoxifier',
      category: 'Immune System',
      description: 'Reduces poison and chemical damage',
      rarity: 'Common',
      stats: ['+50% Poison Resistance', '+25% Chemical Resistance']
    },
    {
      id: 'pain-editor',
      name: 'Pain Editor',
      category: 'Immune System',
      description: 'Blocks pain signals, increases damage threshold',
      rarity: 'Legendary',
      stats: ['+50% Damage Resistance', 'Immunity to Stagger', '+100% Pain Tolerance']
    }
  ],
  'Nervous System': [
    {
      id: 'kerenzikov',
      name: 'Kerenzikov',
      category: 'Nervous System',
      description: 'Slows time when dodging or sliding',
      rarity: 'Rare',
      stats: ['Time Dilation on Slide/Dodge', '+15% Movement Speed']
    },
    {
      id: 'sandevistan',
      name: 'Sandevistan Mk.4',
      category: 'Nervous System',
      description: 'Advanced time dilation system',
      rarity: 'Legendary',
      stats: ['70% Time Dilation', '16 Second Duration', '+25% Crit Damage']
    }
  ],
  'Integumentary System': [
    {
      id: 'subdermal-armor',
      name: 'Subdermal Armor',
      category: 'Integumentary System',
      description: 'Armor plating beneath the skin',
      rarity: 'Common',
      stats: ['+50 Armor', '+10% Physical Resistance']
    },
    {
      id: 'optical-camo',
      name: 'Optical Camo',
      category: 'Integumentary System',
      description: 'Active camouflage system',
      rarity: 'Epic',
      stats: ['15 Second Invisibility', '+30% Stealth Damage']
    }
  ],
  'Arms': [
    {
      id: 'gorilla-arms',
      name: 'Gorilla Arms',
      category: 'Arms',
      description: 'Cybernetic arms with enhanced strength',
      rarity: 'Epic',
      stats: ['+100% Melee Damage', 'Force Open Doors', '+50% Carrying Capacity']
    },
    {
      id: 'mantis-blades',
      name: 'Mantis Blades',
      category: 'Arms',
      description: 'Retractable blade weapons',
      rarity: 'Legendary',
      stats: ['Blade Weapons', '+200% Blade Damage', 'Leap Attack']
    }
  ],
  'Hands': [
    {
      id: 'smart-link',
      name: 'Smart Link',
      category: 'Hands',
      description: 'Interface for smart weapons',
      rarity: 'Uncommon',
      stats: ['+15% Smart Weapon Accuracy', 'Target Tracking']
    },
    {
      id: 'ballistic-coprocessor',
      name: 'Ballistic Coprocessor',
      category: 'Hands',
      description: 'Enhanced weapon handling',
      rarity: 'Rare',
      stats: ['+25% Reload Speed', '+10% Weapon Handling']
    }
  ],
  'Legs': [
    {
      id: 'reinforced-tendons',
      name: 'Reinforced Tendons',
      category: 'Legs',
      description: 'Enhanced leg strength and jumping ability',
      rarity: 'Epic',
      stats: ['+50% Jump Height', '+25% Movement Speed', 'Double Jump']
    },
    {
      id: 'lynx-paws',
      name: 'Lynx Paws',
      category: 'Legs',
      description: 'Silent movement enhancement',
      rarity: 'Rare',
      stats: ['Silent Movement', '+30% Crouch Speed', 'No Fall Damage']
    }
  ],
  'Operating System': [
    {
      id: 'militech-falcon',
      name: 'Militech Falcon',
      category: 'Operating System',
      description: 'Military-grade combat OS',
      rarity: 'Epic',
      stats: ['+3 Quickhack Slots', '+25% Quickhack Damage', 'Combat Protocols']
    },
    {
      id: 'netwatch-netdriver',
      name: 'NetWatch NetDriver Mk.5',
      category: 'Operating System',
      description: 'Advanced netrunning interface',
      rarity: 'Legendary',
      stats: ['+4 Quickhack Slots', '+40% Breach Protocol Speed', 'Deep Network Access']
    }
  ],
  'Skeleton': [
    {
      id: 'titanium-bones',
      name: 'Titanium Bone Lacing',
      category: 'Skeleton',
      description: 'Reinforced skeletal structure',
      rarity: 'Uncommon',
      stats: ['+25% Melee Damage', '+50 Health', 'Fall Damage Immunity']
    },
    {
      id: 'dense-marrow',
      name: 'Dense Marrow',
      category: 'Skeleton',
      description: 'Enhanced bone density and strength',
      rarity: 'Rare',
      stats: ['+100 Health', '+20% Carrying Capacity', '+15% Stamina']
    }
  ]
};
