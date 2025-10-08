import React from 'react';

export const HumanSilhouette: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-fadeIn">
      <svg
        width="200"
        height="400"
        viewBox="0 0 200 400"
        className="opacity-20 transition-opacity duration-500 hover:opacity-30"
      >
        {/* Human silhouette */}
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Head */}
        <ellipse cx="100" cy="50" rx="35" ry="45" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" className="transition-all duration-300" />
        
        {/* Neck */}
        <rect x="90" y="90" width="20" height="25" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" />
        
        {/* Torso */}
        <ellipse cx="100" cy="180" rx="50" ry="70" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" />
        
        {/* Arms */}
        <ellipse cx="65" cy="150" rx="15" ry="50" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" />
        <ellipse cx="135" cy="150" rx="15" ry="50" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" />
        
        {/* Legs */}
        <ellipse cx="80" cy="300" rx="18" ry="75" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" />
        <ellipse cx="120" cy="300" rx="18" ry="75" fill="url(#bodyGradient)" stroke="rgb(59, 130, 246)" strokeWidth="1" />
        
        {/* Tech lines overlay */}
        <line x1="100" y1="30" x2="100" y2="370" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" className="animate-pulse-slow" />
        <line x1="30" y1="200" x2="170" y2="200" stroke="rgb(59, 130, 246)" strokeWidth="0.5" opacity="0.5" strokeDasharray="2,2" className="animate-pulse-slow" />
      </svg>
    </div>
  );
};