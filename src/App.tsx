import React, { useState } from 'react';
import { CyberwareSlot } from './components/CyberwareSlot';
import { CyberwareSelector } from './components/CyberwareSelector';
import { HumanSilhouette } from './components/HumanSilhouette';
import { StatsSidebar } from './components/StatsSidebar';
import { cyberwareSlots } from './data/slots';
import { cyberwareData } from './data/cyberware';
import { CyberwareSlot as SlotType, Cyberware } from './types/cyberware';
import { Cpu, Zap, Shield, User, Activity, Gauge } from 'lucide-react';

function App() {
  const [slots, setSlots] = useState<SlotType[]>(cyberwareSlots);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [edgerunnerPerk, setEdgerunnerPerk] = useState<boolean>(false);
  const [attributes, setAttributes] = useState({
    body: 20,
    reflexes: 20,
    technicalAbility: 20,
    intelligence: 20,
    cool: 20
  });

  const updateAttribute = (attr: keyof typeof attributes, value: number) => {
    setAttributes(prev => ({
      ...prev,
      [attr]: Math.min(60, Math.max(3, value))
    }));
  };

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
  const baseCapacity = 286; // Base capacity in CP2077
  const maxCapacity = baseCapacity + (edgerunnerPerk ? 50 : 0); // +50 with Edgerunner perk
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
      <div className="relative z-10 p-6 animate-slideIn">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <User className="w-8 h-8 text-red-400 animate-pulse-slow" />
            <div>
              <h1 className="text-3xl font-mono text-red-400 tracking-wider">CYFIG</h1>
              <p className="text-sm text-blue-400 font-mono">CYBERWARE CONFIGURATOR v2077</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
              <Cpu className="w-5 h-5 text-blue-400 transition-transform duration-300 hover:rotate-12" />
              <span className="text-white font-mono">
                {installedCount}/{totalSlots} INSTALLED
              </span>
            </div>
            
            {/* Edgerunner perk toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setEdgerunnerPerk(!edgerunnerPerk)}
                className={`
                  px-3 py-1 rounded border font-mono text-sm transition-all duration-300 hover:scale-105
                  ${edgerunnerPerk
                    ? 'bg-orange-600/20 border-orange-400 text-orange-400 shadow-md shadow-orange-400/20 animate-pulse-slow'
                    : 'bg-gray-800/50 border-gray-600 text-gray-400 hover:border-orange-400 hover:text-orange-400 hover:shadow-orange-400/10'
                  }
                `}
              >
                EDGERUNNER {edgerunnerPerk ? 'ON' : 'OFF'}
              </button>
              <div className="text-xs text-gray-400 font-mono">
                +50 CAP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side panels */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 space-y-4 z-10 animate-slideIn">
        {/* Attributes panel */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-cyan-400/40 rounded-lg p-4 w-64 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
          <div className="flex items-center space-x-2 mb-3">
            <Gauge className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">ATTRIBUTES</span>
          </div>
          <div className="space-y-3">
            {/* Body */}
            <div className="space-y-1">
              <div className="text-xs text-red-400 font-mono">BODY</div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => updateAttribute('body', attributes.body - 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-red-400/40 rounded text-red-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  -
                </button>
                <input
                  type="number"
                  min="3"
                  max="60"
                  value={attributes.body}
                  onChange={(e) => updateAttribute('body', parseInt(e.target.value) || 3)}
                  className="w-14 text-center bg-gray-800 border border-red-400/40 rounded text-white font-mono focus:outline-none focus:border-red-400"
                />
                <button
                  onClick={() => updateAttribute('body', attributes.body + 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-red-400/40 rounded text-red-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            {/* Reflexes */}
            <div className="space-y-1">
              <div className="text-xs text-green-400 font-mono">REFLEXES</div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => updateAttribute('reflexes', attributes.reflexes - 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-green-400/40 rounded text-green-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  -
                </button>
                <input
                  type="number"
                  min="3"
                  max="60"
                  value={attributes.reflexes}
                  onChange={(e) => updateAttribute('reflexes', parseInt(e.target.value) || 3)}
                  className="w-14 text-center bg-gray-800 border border-green-400/40 rounded text-white font-mono focus:outline-none focus:border-green-400"
                />
                <button
                  onClick={() => updateAttribute('reflexes', attributes.reflexes + 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-green-400/40 rounded text-green-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            {/* Technical Ability */}
            <div className="space-y-1">
              <div className="text-xs text-yellow-400 font-mono">TECHNICAL ABILITY</div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => updateAttribute('technicalAbility', attributes.technicalAbility - 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-yellow-400/40 rounded text-yellow-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  -
                </button>
                <input
                  type="number"
                  min="3"
                  max="60"
                  value={attributes.technicalAbility}
                  onChange={(e) => updateAttribute('technicalAbility', parseInt(e.target.value) || 3)}
                  className="w-14 text-center bg-gray-800 border border-yellow-400/40 rounded text-white font-mono focus:outline-none focus:border-yellow-400"
                />
                <button
                  onClick={() => updateAttribute('technicalAbility', attributes.technicalAbility + 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-yellow-400/40 rounded text-yellow-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            {/* Intelligence */}
            <div className="space-y-1">
              <div className="text-xs text-blue-400 font-mono">INTELLIGENCE</div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => updateAttribute('intelligence', attributes.intelligence - 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-blue-400/40 rounded text-blue-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  -
                </button>
                <input
                  type="number"
                  min="3"
                  max="60"
                  value={attributes.intelligence}
                  onChange={(e) => updateAttribute('intelligence', parseInt(e.target.value) || 3)}
                  className="w-14 text-center bg-gray-800 border border-blue-400/40 rounded text-white font-mono focus:outline-none focus:border-blue-400"
                />
                <button
                  onClick={() => updateAttribute('intelligence', attributes.intelligence + 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-blue-400/40 rounded text-blue-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            {/* Cool */}
            <div className="space-y-1">
              <div className="text-xs text-purple-400 font-mono">COOL</div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => updateAttribute('cool', attributes.cool - 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-purple-400/40 rounded text-purple-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  -
                </button>
                <input
                  type="number"
                  min="3"
                  max="60"
                  value={attributes.cool}
                  onChange={(e) => updateAttribute('cool', parseInt(e.target.value) || 3)}
                  className="w-14 text-center bg-gray-800 border border-purple-400/40 rounded text-white font-mono focus:outline-none focus:border-purple-400"
                />
                <button
                  onClick={() => updateAttribute('cool', attributes.cool + 1)}
                  className="w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-purple-400/40 rounded text-purple-400 font-mono text-sm transition-all duration-200 hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-400 font-mono text-center pt-2 border-t border-gray-700/50">
              Range: 3-60 per attribute
            </div>
          </div>
        </div>

        {/* Armor display */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-blue-400/40 rounded-lg p-4 w-48 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">ARMOR</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Current</span>
              <span className="text-white">{totalArmor}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full transition-all duration-500 relative"
                style={{ width: `${Math.min((totalArmor / 1000) * 100, 100)}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div className="text-xs text-gray-400 font-mono">From Cyberware</div>
          </div>
        </div>

        {/* Cyberware capacity meter */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-red-400/40 rounded-lg p-4 w-48 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-400/20">
          <div className="flex items-center space-x-2 mb-3">
            <Activity className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-mono text-sm">CAPACITY</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-400">Used</span>
              <span className="text-white">
                {usedCapacity}/{maxCapacity}
                {edgerunnerPerk && <span className="text-orange-400 ml-1">(+50)</span>}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-500 relative ${
                  usedCapacity > maxCapacity
                    ? 'bg-gradient-to-r from-red-600 to-red-500'
                    : usedCapacity > maxCapacity * 0.8
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-400'
                    : 'bg-gradient-to-r from-green-600 to-green-400'
                }`}
                style={{ width: `${Math.min((usedCapacity / maxCapacity) * 100, 100)}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            {usedCapacity > maxCapacity && (
              <div className="text-xs text-red-400 font-mono animate-pulse">OVERCAPACITY!</div>
            )}
            {edgerunnerPerk && (
              <div className="text-xs text-orange-400 font-mono">EDGERUNNER ACTIVE</div>
            )}
          </div>
        </div>

        {/* Rarity legend */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-400/40 rounded-lg p-4 w-48 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/10">
          <div className="text-gray-400 font-mono text-sm mb-2">RARITY LEVELS</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400">Iconic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-400">Legendary</span>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              All cyberware at maximum rarity
            </div>
          </div>
        </div>
      </div>

      {/* Right side stats panel */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10">
        <StatsSidebar slots={slots} attributes={attributes} />
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
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-red-400/40 p-3 transition-all duration-300">
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
