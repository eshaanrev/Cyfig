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
      case 'Common': return 'border-green-400 text-green-400 bg-green-400/10';
      case 'Uncommon': return 'border-blue-400 text-blue-400 bg-blue-400/10';
      case 'Rare': return 'border-purple-400 text-purple-400 bg-purple-400/10';
      case 'Epic': return 'border-yellow-400 text-yellow-400 bg-yellow-400/10';
      case 'Legendary': return 'border-orange-400 text-orange-400 bg-orange-400/10';
      default: return 'border-gray-400 text-gray-400 bg-gray-400/10';
    }
  };

  const getCapacityColor = (capacity: number) => {
    if (capacity >= 40) return 'text-red-400';
    if (capacity >= 20) return 'text-yellow-400';
    if (capacity >= 10) return 'text-blue-400';
    return 'text-green-400';
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 border-2 border-red-400 rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-mono text-red-400">{category} Cyberware</h2>
            <p className="text-sm text-gray-400 font-mono mt-1">
              Choose cyberware to install in this slot
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200 w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Cyberware grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cyberware.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className={`
                border-2 rounded-lg p-4 cursor-pointer transition-all duration-300
                hover:scale-102 hover:shadow-lg
                ${getRarityColor(item.rarity)}
              `}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-mono text-lg font-bold leading-tight">
                  {item.name}
                </h3>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`text-xs font-mono px-2 py-1 rounded ${getRarityColor(item.rarity)}`}>
                    {item.rarity}
                  </span>
                  <span className={`text-xs font-mono ${getCapacityColor(item.capacity)}`}>
                    {item.capacity} CAP
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              
              {/* Stats */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400 font-mono mb-1">EFFECTS:</div>
                {item.stats.map((stat, index) => (
                  <div key={index} className="text-xs text-cyan-400 font-mono leading-relaxed">
                    • {stat}
                  </div>
                ))}
              </div>

              {/* Hover indicator */}
              <div className="mt-4 pt-3 border-t border-gray-700/50">
                <div className="text-xs text-gray-500 font-mono">
                  Click to install
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-500 font-mono">
            Cyberware data accurate to Cyberpunk 2077 v2.1 • {cyberware.length} items available
          </div>
        </div>
      </div>
    </div>
  );
};
