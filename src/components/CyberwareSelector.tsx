import React from 'react';
import { Cyberware } from '../types/cyberware';

interface CyberwareSelectorProps {
  category: string;
  cyberware: Cyberware[];
  onSelect: (cyberware: Cyberware) => void;
  onClose: () => void;
}

export const CyberwareSelector: React.FC<CyberwareSelectorProps> = ({
  category,
  cyberware,
  onSelect,
  onClose
}) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-green-400 text-green-400';
      case 'Uncommon': return 'border-blue-400 text-blue-400';
      case 'Rare': return 'border-purple-400 text-purple-400';
      case 'Epic': return 'border-yellow-400 text-yellow-400';
      case 'Legendary': return 'border-orange-400 text-orange-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 border-2 border-red-400 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-mono text-red-400">{category} Cyberware</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* Cyberware list */}
        <div className="space-y-4">
          {cyberware.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className={`
                border-2 rounded-lg p-4 cursor-pointer transition-all duration-300
                hover:bg-gray-800/50 hover:scale-105
                ${getRarityColor(item.rarity)}
              `}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-mono text-lg">{item.name}</h3>
                <span className={`text-sm font-mono px-2 py-1 rounded ${getRarityColor(item.rarity)}`}>
                  {item.rarity}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-3">{item.description}</p>
              
              <div className="space-y-1">
                {item.stats.map((stat, index) => (
                  <div key={index} className="text-xs text-yellow-400 font-mono">
                    • {stat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};