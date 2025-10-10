import React, { useState } from 'react';
import { CyberwareSlot } from '../types/cyberware';
import { BarChart3, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface StatsSidebarProps {
  slots: CyberwareSlot[];
  attributes: {
    body: number;
    reflexes: number;
    technicalAbility: number;
    intelligence: number;
    cool: number;
  };
}

interface ParsedStat {
  type: string;
  value: number;
  unit: string;
}

export const StatsSidebar: React.FC<StatsSidebarProps> = ({ slots, attributes }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const parseStats = (): Record<string, ParsedStat> => {
    const aggregatedStats: Record<string, ParsedStat> = {};

    slots.forEach(slot => {
      if (slot.installedCyberware) {
        slot.installedCyberware.stats.forEach(stat => {
          // Handle attribute-based dynamic stats
          const attributeMatch = stat.match(/For each point in (Body|Reflexes|Technical Ability|Intelligence|Cool):\s*\+(\d+(?:\.\d+)?)(%?)\s+(.+)/i);
          if (attributeMatch) {
            const attributeName = attributeMatch[1].trim();
            const valuePerPoint = parseFloat(attributeMatch[2]);
            const isPercentage = attributeMatch[3] === '%';
            const statType = attributeMatch[4].trim();

            // Map attribute name to actual value
            let attributeValue = 0;
            switch (attributeName.toLowerCase()) {
              case 'body':
                attributeValue = attributes.body;
                break;
              case 'reflexes':
                attributeValue = attributes.reflexes;
                break;
              case 'technical ability':
                attributeValue = attributes.technicalAbility;
                break;
              case 'intelligence':
                attributeValue = attributes.intelligence;
                break;
              case 'cool':
                attributeValue = attributes.cool;
                break;
            }

            const totalValue = valuePerPoint * attributeValue;

            // Normalize stat names
            let normalizedStatType = statType
              .replace(/\b(explosion resistance)\b/gi, 'Explosion Resistance')
              .replace(/\b(tech weapon damage)\b/gi, 'Tech Weapon Damage')
              .replace(/\b(health item recharge speed)\b/gi, 'Health Item Recharge Speed')
              .replace(/\b(grenade recharge speed)\b/gi, 'Grenade Recharge Speed')
              .trim();

            if (aggregatedStats[normalizedStatType]) {
              aggregatedStats[normalizedStatType].value += totalValue;
            } else {
              aggregatedStats[normalizedStatType] = {
                type: normalizedStatType,
                value: totalValue,
                unit: isPercentage ? '%' : ''
              };
            }
            return;
          }

          // Handle per-attribute cooldown reduction (e.g., "-3 sec Cooldown per Intelligence point")
          const perAttributeMatch = stat.match(/(-?\d+(?:\.\d+)?)\s+sec\s+(.+?)\s+per\s+(Body|Reflexes|Technical Ability|Intelligence|Cool)\s+point/i);
          if (perAttributeMatch) {
            const valuePerPoint = parseFloat(perAttributeMatch[1]);
            const statType = perAttributeMatch[2].trim();
            const attributeName = perAttributeMatch[3].trim();

            let attributeValue = 0;
            switch (attributeName.toLowerCase()) {
              case 'body':
                attributeValue = attributes.body;
                break;
              case 'reflexes':
                attributeValue = attributes.reflexes;
                break;
              case 'technical ability':
                attributeValue = attributes.technicalAbility;
                break;
              case 'intelligence':
                attributeValue = attributes.intelligence;
                break;
              case 'cool':
                attributeValue = attributes.cool;
                break;
            }

            const totalValue = valuePerPoint * attributeValue;

            // Normalize stat names
            let normalizedStatType = statType
              .replace(/\b(cooldown)\b/gi, 'Cooldown')
              .trim();

            normalizedStatType += ' (from INT)';

            if (aggregatedStats[normalizedStatType]) {
              aggregatedStats[normalizedStatType].value += totalValue;
            } else {
              aggregatedStats[normalizedStatType] = {
                type: normalizedStatType,
                value: totalValue,
                unit: ' sec'
              };
            }
            return;
          }
          // Parse different stat formats
          const patterns = [
            // +X% format (percentages)
            { regex: /\+(\d+(?:\.\d+)?)%\s+(.+)/i, isPercentage: true },
            // -X% format (negative percentages)
            { regex: /-(\d+(?:\.\d+)?)%\s+(.+)/i, isPercentage: true, isNegative: true },
            // +X format (flat bonuses)
            { regex: /\+(\d+(?:\.\d+)?)\s+(.+)/i, isPercentage: false },
            // -X format (flat penalties)
            { regex: /-(\d+(?:\.\d+)?)\s+(.+)/i, isPercentage: false, isNegative: true },
            // X format (standalone numbers with description)
            { regex: /(\d+(?:\.\d+)?)\s+(.+)/i, isPercentage: false }
          ];
          
          for (const pattern of patterns) {
            const match = stat.match(pattern.regex);
            if (match) {
              let value = parseFloat(match[1]);
              if (pattern.isNegative) value = -value;
              
              let statType = match[2].trim();
              
              // Normalize stat names
              statType = statType
                .replace(/\b(damage|dmg)\b/gi, 'Damage')
                .replace(/\b(armor|armour)\b/gi, 'Armor')
                .replace(/\b(health|hp)\b/gi, 'Health')
                .replace(/\b(crit chance|critical chance)\b/gi, 'Crit Chance')
                .replace(/\b(crit damage|critical damage)\b/gi, 'Crit Damage')
                .replace(/\b(movement speed|move speed)\b/gi, 'Movement Speed')
                .replace(/\b(attack speed)\b/gi, 'Attack Speed')
                .replace(/\b(recoil)\b/gi, 'Recoil')
                .replace(/\b(max ram|ram)\b/gi, 'Max RAM')
                .replace(/\b(mitigation chance)\b/gi, 'Mitigation Chance')
                .replace(/\b(mitigation strength)\b/gi, 'Mitigation Strength')
                .replace(/\b(stamina cost)\b/gi, 'Stamina Cost')
                .replace(/\b(cooldown)\b/gi, 'Cooldown')
                .replace(/\b(upload speed)\b/gi, 'Upload Speed')
                .replace(/\b(xp gain|experience)\b/gi, 'XP Gain')
                .replace(/\b(fall damage)\b/gi, 'Fall Damage')
                .replace(/\b(bullet spread|spread)\b/gi, 'Bullet Spread')
                .replace(/vs\s+.+/gi, '') // Remove "vs enemies" type suffixes
                .replace(/when\s+.+/gi, '') // Remove conditional suffixes
                .replace(/at\s+.+/gi, '') // Remove "at X distance" suffixes
                .replace(/with\s+.+/gi, '') // Remove "with weapons" suffixes
                .replace(/for\s+.+/gi, '') // Remove "for all cyberware" suffixes
                .trim();
              
              // Skip very specific or conditional stats
              if (statType.length < 3 || 
                  statType.toLowerCase().includes('trigger') ||
                  statType.toLowerCase().includes('auto') ||
                  statType.toLowerCase().includes('slot') ||
                  statType.toLowerCase().includes('duration') ||
                  statType.toLowerCase().includes('range') ||
                  statType.toLowerCase().includes('sec') ||
                  statType.toLowerCase().includes('effect')) {
                continue;
              }
              
              const unit = pattern.isPercentage ? '%' : '';
              
              if (aggregatedStats[statType]) {
                aggregatedStats[statType].value += value;
              } else {
                aggregatedStats[statType] = {
                  type: statType,
                  value: value,
                  unit: unit
                };
              }
              break;
            }
          }
        });
      }
    });
    
    return aggregatedStats;
  };

  const stats = parseStats();
  const statEntries = Object.values(stats).sort((a, b) => a.type.localeCompare(b.type));

  const getStatColor = (statType: string, value: number) => {
    const lowerType = statType.toLowerCase();

    // Positive stats (green when positive)
    if (lowerType.includes('damage') ||
        lowerType.includes('armor') ||
        lowerType.includes('health') ||
        lowerType.includes('crit') ||
        lowerType.includes('speed') ||
        lowerType.includes('ram') ||
        lowerType.includes('mitigation') ||
        lowerType.includes('xp') ||
        lowerType.includes('resistance') ||
        lowerType.includes('recharge')) {
      return value > 0 ? 'text-green-400' : 'text-red-400';
    }

    // Negative stats (green when negative)
    if (lowerType.includes('recoil') ||
        lowerType.includes('cost') ||
        lowerType.includes('cooldown') ||
        lowerType.includes('spread') ||
        lowerType.includes('fall damage')) {
      return value < 0 ? 'text-green-400' : 'text-red-400';
    }

    return 'text-blue-400';
  };

  const formatValue = (stat: ParsedStat) => {
    const sign = stat.value > 0 ? '+' : '';
    return `${sign}${stat.value}${stat.unit}`;
  };

  return (
    <div className="bg-gray-900/90 backdrop-blur-sm border border-cyan-400/40 rounded-lg p-4 w-64 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 animate-slideIn">
      <div
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-cyan-400 transition-transform duration-300 hover:rotate-12" />
          <span className="text-cyan-400 font-mono text-sm">COMBINED STATS</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-cyan-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        )}
      </div>

      {isExpanded && statEntries.length > 0 ? (
        <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-thin">
          {statEntries.map((stat, index) => (
            <div key={index} className="flex justify-between items-center text-xs transition-all duration-200 hover:scale-105 hover:bg-gray-800/50 p-1 rounded animate-fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
              <span className="text-gray-300 font-mono flex-1 pr-2">
                {stat.type}
              </span>
              <span className={`font-mono font-bold ${getStatColor(stat.type, stat.value)}`}>
                {formatValue(stat)}
              </span>
            </div>
          ))}
        </div>
      ) : isExpanded ? (
        <div className="text-center py-8">
          <TrendingUp className="w-8 h-8 text-gray-600 mx-auto mb-2" />
          <div className="text-gray-500 text-xs font-mono">
            No cyberware installed
          </div>
        </div>
      ) : null}

      {isExpanded && (
        <div className="mt-4 pt-3 border-t border-gray-700/50">
          <div className="text-xs text-gray-500 font-mono">
            {statEntries.length} stat{statEntries.length !== 1 ? 's' : ''} active
          </div>
        </div>
      )}
    </div>
  );
};