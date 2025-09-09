import React, { useState } from 'react';
import { CyberwareSlot } from './components/CyberwareSlot';
import { CyberwareSelector } from './components/CyberwareSelector';
import { HumanSilhouette } from './components/HumanSilhouette';
import { cyberwareSlots } from './data/slots';
import { cyberwareData } from './data/cyberware';
import { CyberwareSlot as SlotType, Cyberware } from './types/cyberware';
import { Cpu, Zap, Shield, User, Activity, Gauge } from 'lucide-react';

function App() {
  const [slots, setSlots] = useState<SlotType[]>(cyberwareSlots);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSlotClick = (slotId: string) => {
    setSelectedSlot(slotId);
  };

  const handleCyberwareSelect = (cyberware: Cyberware) => {
    if (selectedSlot) {
      setSlots(prevSlots =>
        prevSlots.map(slot =>
          slot.id === selectedSlot
            ? { ...slot, installedCyberware: cyberware }
            : slot
        )
      );
      setSelectedSlot(null);
    }
  };

  const handleCyberwareRemove = (slotId: string) => {
    setSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === slotId
          ? { ...slot, installedCyberware: undefined }
          : slot
      )
    );
  };

  const handleClose = () => {
    setSelectedSlot(null);
  };

  const selectedSlotData = slots.find(slot => slot.id === selectedSlot);
  const availableCyberware = selectedSlotData ? cyberwareData[selectedSlotData.category] || [] : [];

  const installedCount = slots.filter(slot => slot.installedCyberware).length;
  const totalSlots = slots.length;
  
  // Calculate cyberware capacity usage (more accurate system)
  const maxCapacity = 286; // Base capacity in CP2077
  const usedCapacity = slots.reduce((acc, slot) => {
    if (slot.installedCyberware) {
      return acc + slot.installedCyberware.capacity;
    }
    return acc;
  }, 0);

  // Calculate armor from cyberware
  const totalArmor = slots.reduce((acc, slot) => {
    if (slot.installedCyberware) {
      // Look for armor values in stats
      const armorMatch = slot.installedCyberware.stats.find(stat => 
        stat.includes('Armor') && /\d+/.test(stat)
      );
      if (armorMatch) {
        const armorValue = parseInt(armorMatch.match(/\d+/)?.[0] || '0');
        return acc + armorValue;
      }
    }
    return acc;
  }, 0);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4">
        <div className="w-8 h-8 border-t-2 border-l-2 border-blue-400"></div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 border-t-2 border-r-2 border-red-400"></div>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="w-8 h-8 border-b-2 border-l-2 border-blue-400"></div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-8 h-8 border-b-2 border-r-2 border-red-400"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <User className="w-8 h-8 text-red-400" />
            <div>
              <h1 className="text-3xl font-mono text-red-400 tracking-wider">CYFIG</h1>
              <p className="text-sm text-blue-400 font-mono">CYBERWARE CONFIGURATOR v2077</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-white font-mono">
                {installedCount}/{totalSlots} INSTALLED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Side panels */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 space-y-6 z-10">
        {/* Armor display */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-blue-400/40 rounded-lg p-4 w-48">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">ARMOR</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Current</span>
              <span className="text-white">{totalArmor}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((totalArmor / 1000) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-400 font-mono">From Cyberware</div>
          </div>
        </div>

        {/* Cyberware capacity meter */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-red-400/40 rounded-lg p-4 w-48">
          <div className="flex items-center space-x-2 mb-3">
            <Activity className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-mono text-sm">CAPACITY</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Used</span>
              <span className="text-white">{usedCapacity}/{maxCapacity}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  usedCapacity > maxCapacity 
                    ? 'bg-gradient-to-r from-red-600 to-red-500'
                    : usedCapacity > maxCapacity * 0.8 
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-400'
                    : 'bg-gradient-to-r from-green-600 to-green-400'
                }`}
                style={{ width: `${Math.min((usedCapacity / maxCapacity) * 100, 100)}%` }}
              ></div>
            </div>
            {usedCapacity > maxCapacity && (
              <div className="text-xs text-red-400 font-mono">OVERCAPACITY!</div>
            )}
          </div>
        </div>

        {/* Rarity legend */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-400/40 rounded-lg p-4 w-48">
          <div className="text-gray-400 font-mono text-sm mb-2">RARITY LEVELS</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-orange-400">Legendary</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              All cyberware shown at maximum tier for late-game builds
            </div>
          </div>
        </div>
      </div>

      {/* Main configurator area */}
      <div className="relative w-full h-[calc(100vh-120px)]">
        {/* Human silhouette */}
        <HumanSilhouette />
        
        {/* Cyberware slots */}
        {slots.map(slot => (
          <CyberwareSlot
            key={slot.id}
            slot={slot}
            isSelected={selectedSlot === slot.id}
            onClick={() => handleSlotClick(slot.id)}
            onRemove={() => handleCyberwareRemove(slot.id)}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 pointer-events-none opacity-20">
          {slots.map(slot => (
            <line
              key={`line-${slot.id}`}
              x1="50%"
              y1="50%"
              x2={slot.position.left}
              y2={slot.position.top}
              stroke="rgb(239, 68, 68)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          ))}
        </svg>
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-red-400/40 p-3">
        <div className="flex justify-between items-center text-sm font-mono">
          <span className="text-red-400">
            {selectedSlot ? `Configuring: ${selectedSlotData?.name}` : 'Select a slot to install cyberware'}
          </span>
          <span className="text-blue-400">
            Cyberpunk 2077 Accurate Data
          </span>
        </div>
      </div>

      {/* Cyberware selector modal */}
      {selectedSlot && selectedSlotData && (
        <CyberwareSelector
          category={selectedSlotData.category}
          cyberware={availableCyberware}
          onSelect={handleCyberwareSelect}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default App;
