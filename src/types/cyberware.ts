export interface Cyberware {
  id: string;
  name: string;
  category: string;
  description: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Iconic';
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