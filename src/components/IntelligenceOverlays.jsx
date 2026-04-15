import { useEffect, useState, useMemo } from 'react';
import './IntelligenceOverlays.css';

const IntelligenceOverlays = ({ scrollProgress }) => {
  // Progressive layer appearance
  // Layer 1: Parcels (0.78-0.83)
  // Layer 2: Buildings (0.83-0.88)
  // Layer 3: Roads (0.88-0.93)
  // Layer 4: Hotspots (0.93-0.98)

  const layerOpacities = useMemo(() => {
    const layers = {
      parcels: 0,
      buildings: 0,
      roads: 0,
      hotspots: 0
    };

    if (scrollProgress < 0.78) return layers;

    // Layer 1: Parcels
    if (scrollProgress >= 0.78) {
      layers.parcels = Math.min((scrollProgress - 0.78) / 0.05, 1);
    }

    // Layer 2: Buildings
    if (scrollProgress >= 0.83) {
      layers.buildings = Math.min((scrollProgress - 0.83) / 0.05, 1);
    }

    // Layer 3: Roads
    if (scrollProgress >= 0.88) {
      layers.roads = Math.min((scrollProgress - 0.88) / 0.05, 1);
    }

    // Layer 4: Hotspots
    if (scrollProgress >= 0.93) {
      layers.hotspots = Math.min((scrollProgress - 0.93) / 0.05, 1);
    }

    return layers;
  }, [scrollProgress]);

  if (scrollProgress < 0.78) return null;

  return (
    <div className="intelligence-overlays">
      <svg className="overlay-svg" viewBox="0 0 100 100" preserveAspectRatio="none">

        {/* LAYER 1: PARCEL / REGION BOUNDARIES */}
        {layerOpacities.parcels > 0 && (
          <g className="parcel-layer" style={{ opacity: layerOpacities.parcels }}>
            {/* Large region boundaries with glow */}
            <path
              className="region-boundary"
              d="M 20,25 L 45,25 L 45,55 L 20,55 Z"
              fill="none"
              stroke="rgba(34, 211, 238, 0.4)"
              strokeWidth="0.15"
              filter="url(#glow1)"
            />
            <path
              className="region-boundary"
              d="M 48,25 L 80,25 L 80,48 L 48,48 Z"
              fill="none"
              stroke="rgba(34, 211, 238, 0.4)"
              strokeWidth="0.15"
              filter="url(#glow1)"
              style={{ animationDelay: '0.1s' }}
            />
            <path
              className="region-boundary"
              d="M 48,51 L 80,51 L 80,70 L 48,70 Z"
              fill="none"
              stroke="rgba(34, 211, 238, 0.4)"
              strokeWidth="0.15"
              filter="url(#glow1)"
              style={{ animationDelay: '0.2s' }}
            />
          </g>
        )}

        {/* LAYER 2: BUILDING FOOTPRINTS */}
        {layerOpacities.buildings > 0 && (
          <g className="building-layer" style={{ opacity: layerOpacities.buildings }}>
            {/* Small building rectangles */}
            <rect className="building" x="22" y="28" width="4" height="6" />
            <rect className="building" x="28" y="28" width="3" height="5" style={{ animationDelay: '0.05s' }} />
            <rect className="building" x="22" y="36" width="5" height="7" style={{ animationDelay: '0.1s' }} />
            <rect className="building" x="29" y="36" width="3" height="4" style={{ animationDelay: '0.15s' }} />
            <rect className="building" x="33" y="28" width="6" height="9" style={{ animationDelay: '0.2s' }} />
            <rect className="building" x="28" y="44" width="4" height="5" style={{ animationDelay: '0.25s' }} />
            <rect className="building" x="34" y="39" width="5" height="6" style={{ animationDelay: '0.3s' }} />

            <rect className="building" x="51" y="28" width="5" height="7" style={{ animationDelay: '0.35s' }} />
            <rect className="building" x="58" y="28" width="4" height="6" style={{ animationDelay: '0.4s' }} />
            <rect className="building" x="64" y="28" width="6" height="8" style={{ animationDelay: '0.45s' }} />
            <rect className="building" x="72" y="28" width="4" height="5" style={{ animationDelay: '0.5s' }} />
            <rect className="building" x="51" y="37" width="7" height="8" style={{ animationDelay: '0.55s' }} />
            <rect className="building" x="60" y="36" width="5" height="6" style={{ animationDelay: '0.6s' }} />
            <rect className="building" x="67" y="37" width="6" height="7" style={{ animationDelay: '0.65s' }} />

            <rect className="building" x="51" y="54" width="5" height="7" style={{ animationDelay: '0.7s' }} />
            <rect className="building" x="58" y="54" width="6" height="8" style={{ animationDelay: '0.75s' }} />
            <rect className="building" x="66" y="54" width="4" height="6" style={{ animationDelay: '0.8s' }} />
            <rect className="building" x="51" y="63" width="7" height="5" style={{ animationDelay: '0.85s' }} />
            <rect className="building" x="60" y="63" width="5" height="4" style={{ animationDelay: '0.9s' }} />
          </g>
        )}

        {/* LAYER 3: ROAD NETWORK */}
        {layerOpacities.roads > 0 && (
          <g className="road-layer" style={{ opacity: layerOpacities.roads }}>
            {/* Main arterials */}
            <polyline
              className="road-line main-road"
              points="15,40 42,40"
              stroke="rgba(124, 58, 237, 0.5)"
              strokeWidth="0.4"
              filter="url(#glow2)"
            />
            <polyline
              className="road-line main-road"
              points="45,22 45,73"
              stroke="rgba(124, 58, 237, 0.5)"
              strokeWidth="0.4"
              filter="url(#glow2)"
              style={{ animationDelay: '0.1s' }}
            />
            <polyline
              className="road-line main-road"
              points="48,60 85,60"
              stroke="rgba(124, 58, 237, 0.5)"
              strokeWidth="0.4"
              filter="url(#glow2)"
              style={{ animationDelay: '0.2s' }}
            />

            {/* Secondary roads */}
            <line className="road-line" x1="32" y1="25" x2="32" y2="53" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.3s' }} />
            <line className="road-line" x1="20" y1="34" x2="43" y2="34" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.4s' }} />
            <line className="road-line" x1="20" y1="48" x2="43" y2="48" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.5s' }} />

            <line className="road-line" x1="58" y1="25" x2="58" y2="70" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.6s' }} />
            <line className="road-line" x1="70" y1="25" x2="70" y2="70" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.7s' }} />
            <line className="road-line" x1="48" y1="35" x2="80" y2="35" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.8s' }} />
            <line className="road-line" x1="48" y1="45" x2="80" y2="45" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.2" style={{ animationDelay: '0.9s' }} />
          </g>
        )}

        {/* LAYER 4: ACTIVITY HOTSPOTS */}
        {layerOpacities.hotspots > 0 && (
          <g className="hotspot-layer" style={{ opacity: layerOpacities.hotspots }}>
            {/* Infrastructure nodes */}
            <circle className="hotspot" cx="28" cy="40" r="1.2" fill="rgba(236, 72, 153, 0.8)" filter="url(#glow3)" />
            <circle className="hotspot-ring" cx="28" cy="40" r="2.5" fill="none" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="0.2" />

            <circle className="hotspot" cx="62" cy="32" r="1.2" fill="rgba(236, 72, 153, 0.8)" filter="url(#glow3)" style={{ animationDelay: '0.2s' }} />
            <circle className="hotspot-ring" cx="62" cy="32" r="2.5" fill="none" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="0.2" style={{ animationDelay: '0.2s' }} />

            <circle className="hotspot" cx="72" cy="56" r="1.2" fill="rgba(236, 72, 153, 0.8)" filter="url(#glow3)" style={{ animationDelay: '0.4s' }} />
            <circle className="hotspot-ring" cx="72" cy="56" r="2.5" fill="none" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="0.2" style={{ animationDelay: '0.4s' }} />
          </g>
        )}

        {/* SVG Filters for glow effects */}
        <defs>
          <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.7" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow3" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default IntelligenceOverlays;
