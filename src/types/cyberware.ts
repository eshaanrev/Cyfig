export interface Cyberware {
  id: string;
  name: string;
  category: string;
  description: string;
  rarity: 'Legendary' | 'Iconic';
  stats: string[];
  capacity: number;
}

export interface CyberwareSlot {
  id: string;
  name: string;
  category: string;
  position: {
    top: string;
    left: string;
  };
  installedCyberware?: Cyberware;
}
