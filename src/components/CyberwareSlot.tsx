import React from 'react';
import { CyberwareSlot as SlotType } from '../types/cyberware';

interface CyberwareSlotProps {
  slot: SlotType;
  isSelected: boolean;
  onClick: () => void;
  onRemove: () => void;
}

export const CyberwareSlot: React.FC<CyberwareSlotProps> = ({
  slot,
  isSelected,
  onClick,
  onRemove
}) => {
  const getRarityColor = (rarity?: string) => {
    switch (rarity) {
      case 'Iconic': return 'border-orange-400';
      case 'Legendary': return 'border-orange-400';
      default: return 'border-gray-500';
    }
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-105 animate-fadeIn"
      style={{ top: slot.position.top, left: slot.position.left }}
      onClick={onClick}
    >
      <div
        className={`
          relative w-24 h-24 border-2 rounded-lg bg-gray-900/80 backdrop-blur-sm
          hover:bg-gray-800/90 transition-all duration-300 hover:shadow-xl
          ${isSelected
            ? 'border-red-400 shadow-lg shadow-red-400/50 scale-110 animate-glow'
            : slot.installedCyberware
              ? `${getRarityColor(slot.installedCyberware.rarity)} shadow-md hover:shadow-lg`
              : 'border-gray-600 hover:border-blue-400 hover:shadow-blue-400/20'
          }
        `}
      >
        {/* Slot label */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-blue-400 font-mono whitespace-nowrap transition-all duration-200 group-hover:text-blue-300">
          {slot.name}
        </div>
        
        {/* Installed cyberware or empty slot */}
        <div className="w-full h-full flex items-center justify-center p-2">
          {slot.installedCyberware ? (
            <div className="text-center">
              <div className="text-xs text-white font-mono leading-tight">
                {slot.installedCyberware.name}
              </div>
              <div className={`text-xs mt-1 ${
                slot.installedCyberware.rarity === 'Legendary' ? 'text-orange-400' : 'text-gray-400'
              }`}>
                {slot.installedCyberware.rarity}
              </div>
              {/* Remove button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove();
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 hover:bg-red-500 text-white text-xs rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-90 shadow-lg hover:shadow-red-500/50"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="text-gray-500 text-2xl">+</div>
          )}
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-400/30 transition-all duration-300 hover:border-red-400/60"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-400/30 transition-all duration-300 hover:border-red-400/60"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-400/30 transition-all duration-300 hover:border-red-400/60"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-400/30 transition-all duration-300 hover:border-red-400/60"></div>

        {/* Pulse effect for selected slot */}
        {isSelected && (
          <div className="absolute inset-0 border-2 border-red-400 rounded-lg animate-ping opacity-20"></div>
        )}
      </div>
    </div>
  );
};
