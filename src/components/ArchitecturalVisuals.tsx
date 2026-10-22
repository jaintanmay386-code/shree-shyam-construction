import React from 'react';

interface VisualProps {
  className?: string;
  badge?: string;
}

export const HeroVillaVisual: React.FC<VisualProps> = ({ className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#0c0d11] via-[#14151b] to-[#08090a] ${className}`}>
    {/* Architectural grid background */}
    <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
    
    {/* Subtle atmospheric twilight glow */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

    {/* Cinematic SVG Villa Architectural Elevation */}
    <svg
      viewBox="0 0 1000 600"
      className="w-full h-full object-cover select-none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="twilightSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0B0E14" />
          <stop offset="60%" stopColor="#151A22" />
          <stop offset="100%" stopColor="#251F16" />
        </linearGradient>

        <linearGradient id="goldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FFB300" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FF8F00" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="concreteWall" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#232428" />
          <stop offset="100%" stopColor="#18191C" />
        </linearGradient>

        <linearGradient id="sandstoneWall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3C3428" />
          <stop offset="100%" stopColor="#29231B" />
        </linearGradient>

        <linearGradient id="woodLouvers" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5C3B1E" />
          <stop offset="100%" stopColor="#3C2411" />
        </linearGradient>

        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Horizon */}
      <rect width="1000" height="600" fill="url(#twilightSky)" />

      {/* Distant skyline silhouetted villas */}
      <path d="M0 450 L120 440 L180 445 L260 435 L320 440 L440 430 L520 445 L620 435 L750 440 L900 435 L1000 445 L1000 600 L0 600 Z" fill="#0E1116" />

      {/* Main Luxury Contemporary Villa Building */}
      {/* Ground Floor Plinth */}
      <rect x="180" y="440" width="640" height="60" fill="#121316" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.3" />
      
      {/* Ground Floor Main Wall (Stone Cladding) */}
      <rect x="220" y="270" width="560" height="170" fill="url(#concreteWall)" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* First Floor Cantilever Volume */}
      <rect x="190" y="150" width="460" height="130" fill="url(#sandstoneWall)" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />

      {/* Top Floor Minimal Penthouse / Terrace Pergola */}
      <rect x="280" y="80" width="310" height="75" fill="#17181D" stroke="#D4AF37" strokeWidth="0.7" strokeOpacity="0.3" />

      {/* Terrace Louver Pergola Beams */}
      {[...Array(9)].map((_, i) => (
        <line
          key={`beam-${i}`}
          x1={285 + i * 36}
          y1="80"
          x2={285 + i * 36}
          y2="60"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeOpacity="0.7"
        />
      ))}
      <line x1="280" y1="60" x2="600" y2="60" stroke="#D4AF37" strokeWidth="3" strokeOpacity="0.8" />

      {/* Large Glowing Architectural Glass Windows */}
      {/* First Floor Master Suite Window with Warm Interior Lights */}
      <rect x="220" y="170" width="230" height="90" rx="2" fill="url(#goldGlass)" filter="url(#goldGlow)" opacity="0.85" />
      {/* Window mullions */}
      <line x1="295" y1="170" x2="295" y2="260" stroke="#1B1C22" strokeWidth="3" />
      <line x1="375" y1="170" x2="375" y2="260" stroke="#1B1C22" strokeWidth="3" />
      <line x1="220" y1="215" x2="450" y2="215" stroke="#1B1C22" strokeWidth="2" />

      {/* Ground Floor Double-Height Living Room Glass Facade */}
      <rect x="490" y="285" width="260" height="145" rx="2" fill="url(#goldGlass)" filter="url(#goldGlow)" opacity="0.9" />
      <line x1="575" y1="285" x2="575" y2="430" stroke="#111215" strokeWidth="4" />
      <line x1="665" y1="285" x2="665" y2="430" stroke="#111215" strokeWidth="4" />
      <line x1="490" y1="355" x2="750" y2="355" stroke="#111215" strokeWidth="3" />

      {/* Architectural Teakwood Louvers Accent Panel */}
      <rect x="660" y="150" width="90" height="120" fill="url(#woodLouvers)" />
      {[...Array(14)].map((_, i) => (
        <line
          key={`louv-${i}`}
          x1="660"
          y1={155 + i * 8}
          x2="750"
          y2={155 + i * 8}
          stroke="#1F150C"
          strokeWidth="2"
        />
      ))}

      {/* Cantilever Glass Balcony Railing with Gold Top Rail */}
      <rect x="180" y="260" width="480" height="25" fill="#D4AF37" fillOpacity="0.12" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="175" y1="260" x2="665" y2="260" stroke="#D4AF37" strokeWidth="3" />

      {/* Main Entrance Pivot Door (Dark Teak with Brass Vertical Handle) */}
      <rect x="250" y="325" width="70" height="115" fill="#20150E" stroke="#D4AF37" strokeWidth="1" />
      <line x1="305" y1="365" x2="305" y2="415" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
      {/* Porch downlight warm pool */}
      <circle cx="285" cy="325" r="14" fill="#D4AF37" filter="url(#goldGlow)" opacity="0.7" />

      {/* Foreground Courtyard / Stone Driveway */}
      <path d="M0 500 L1000 500 L1000 600 L0 600 Z" fill="#0C0D10" />
      <line x1="0" y1="500" x2="1000" y2="500" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />

      {/* Ambient Exterior Up-lights illuminating facade columns */}
      <polygon points="215,440 200,430 230,430" fill="#D4AF37" opacity="0.6" />
      <polygon points="485,440 470,430 500,430" fill="#D4AF37" opacity="0.6" />
      <polygon points="755,440 740,430 770,430" fill="#D4AF37" opacity="0.6" />

      {/* Architectural Dimension / Detail lines overlay */}
      <line x1="150" y1="150" x2="150" y2="440" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="4 4" strokeOpacity="0.4" />
      <line x1="140" y1="150" x2="160" y2="150" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="140" y1="440" x2="160" y2="440" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
      <text x="110" y="300" fill="#D4AF37" opacity="0.6" fontSize="12" fontFamily="monospace" transform="rotate(-90 110,300)">
        32&apos;-0&quot; LEVEL
      </text>

      {/* Decorative stars / dusk sparkle */}
      <circle cx="150" cy="80" r="1.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="230" cy="50" r="1" fill="#FFFFFF" opacity="0.4" />
      <circle cx="780" cy="65" r="1.5" fill="#D4AF37" opacity="0.7" />
      <circle cx="890" cy="110" r="1" fill="#FFFFFF" opacity="0.5" />
    </svg>
  </div>
);

export const StructuralSiteVisual: React.FC<VisualProps> = ({ className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#101216] ${className}`}>
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:32px_32px]" />
    <svg viewBox="0 0 600 450" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rebarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9E782F" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#5D4314" />
        </linearGradient>
      </defs>
      {/* Construction site ground foundation */}
      <rect width="600" height="450" fill="#131418" />
      
      {/* Concrete footings and plinth beams */}
      <rect x="40" y="290" width="520" height="70" fill="#24262E" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />
      <rect x="90" y="360" width="120" height="90" fill="#1B1C22" stroke="#333" />
      <rect x="390" y="360" width="120" height="90" fill="#1B1C22" stroke="#333" />
      
      {/* RCC Columns with Rebar Cages */}
      {/* Column 1 (Left) */}
      <rect x="120" y="90" width="60" height="200" fill="#20222A" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Exposed Steel Rebars */}
      {[...Array(6)].map((_, i) => (
        <line
          key={`bar1-${i}`}
          x1={126 + i * 9}
          y1="40"
          x2={126 + i * 9}
          y2="120"
          stroke="url(#rebarGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      ))}
      {/* Rebar stirrups ties */}
      {[...Array(5)].map((_, i) => (
        <line
          key={`tie1-${i}`}
          x1="123"
          y1={45 + i * 15}
          x2="177"
          y2={45 + i * 15}
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeOpacity="0.9"
        />
      ))}

      {/* Column 2 (Right) */}
      <rect x="420" y="90" width="60" height="200" fill="#20222A" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.3" />
      {[...Array(6)].map((_, i) => (
        <line
          key={`bar2-${i}`}
          x1={426 + i * 9}
          y1="40"
          x2={426 + i * 9}
          y2="120"
          stroke="url(#rebarGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <line
          key={`tie2-${i}`}
          x1="423"
          y1={45 + i * 15}
          x2="477"
          y2={45 + i * 15}
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeOpacity="0.9"
        />
      ))}

      {/* Shuttering plywood formwork with steel clamps */}
      <rect x="250" y="160" width="100" height="130" fill="#3B2615" stroke="#D4AF37" strokeWidth="0.8" />
      <line x1="250" y1="190" x2="350" y2="190" stroke="#777" strokeWidth="2" />
      <line x1="250" y1="230" x2="350" y2="230" stroke="#777" strokeWidth="2" />
      <line x1="250" y1="270" x2="350" y2="270" stroke="#777" strokeWidth="2" />

      {/* Concrete Mixer silhouette and spirit level */}
      <path d="M50 250 L80 230 L100 270 L70 290 Z" fill="#D4AF37" fillOpacity="0.4" />
      
      {/* Engineering technical callout text */}
      <text x="50" y="60" fill="#D4AF37" fontSize="13" fontFamily="monospace" letterSpacing="2">
        RCC BEAM &amp; COLUMN REBAR GRID
      </text>
      <text x="50" y="80" fill="#A7A7A7" fontSize="11" fontFamily="monospace">
        Fe550D TMT · Curing Stage: Active
      </text>
    </svg>
  </div>
);

export const VillaFacadeVisual: React.FC<VisualProps> = ({ className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#121316] ${className}`}>
    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
    <svg viewBox="0 0 600 450" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="450" fill="#15171D" />
      {/* Sky subtle gradient */}
      <rect x="0" y="0" width="600" height="250" fill="#1C212A" opacity="0.6" />
      
      {/* Modern Jaali Stone Screen Accent */}
      <rect x="360" y="90" width="160" height="190" fill="#241E18" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
      {/* Jaali lattice pattern */}
      {[...Array(6)].map((_, r) => (
        <g key={`jr-${r}`}>
          {[...Array(5)].map((_, c) => (
            <polygon
              key={`jc-${c}`}
              points={`${375 + c * 30},${105 + r * 30} ${385 + c * 30},${115 + r * 30} ${375 + c * 30},${125 + r * 30} ${365 + c * 30},${115 + r * 30}`}
              fill="#D4AF37"
              fillOpacity="0.3"
            />
          ))}
        </g>
      ))}

      {/* Main Residence Box Massing */}
      <rect x="80" y="130" width="260" height="230" fill="#282A33" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.3" />
      
      {/* Cantilever balcony */}
      <rect x="50" y="210" width="180" height="15" fill="#3A3C46" stroke="#D4AF37" strokeWidth="1" />
      <rect x="50" y="170" width="180" height="40" fill="#D4AF37" fillOpacity="0.1" stroke="#D4AF37" strokeWidth="0.5" />
      
      {/* Big picture window */}
      <rect x="100" y="240" width="140" height="100" rx="3" fill="#D4AF37" fillOpacity="0.25" stroke="#D4AF37" strokeWidth="1" />
      <line x1="170" y1="240" x2="170" y2="340" stroke="#15171D" strokeWidth="2" />
      
      {/* Ground boundary planter and entrance gate */}
      <rect x="30" y="360" width="540" height="60" fill="#111215" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="330" y="320" width="90" height="70" fill="#201811" stroke="#D4AF37" strokeWidth="1" />
      
      {/* Architectural label */}
      <text x="50" y="45" fill="#D4AF37" fontSize="12" fontFamily="monospace" letterSpacing="1.5">
        JAIPUR VILLA FACADE ARCHITECTURE
      </text>
    </svg>
  </div>
);

export const InteriorLivingVisual: React.FC<VisualProps> = ({ className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#111215] ${className}`}>
    <svg viewBox="0 0 600 450" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="chandelierGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2A3" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#111215" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Floor with Italian Marble Sheen Lines */}
      <rect width="600" height="450" fill="#16171B" />
      <polygon points="0,290 600,290 600,450 0,450" fill="#1A1C22" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3" />
      
      {/* Marble tile joints perspective */}
      <line x1="300" y1="290" x2="100" y2="450" stroke="#D4AF37" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="300" y1="290" x2="350" y2="450" stroke="#D4AF37" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="300" y1="290" x2="550" y2="450" stroke="#D4AF37" strokeWidth="0.6" strokeOpacity="0.3" />

      {/* Feature Wall: Fluted Teak Paneling */}
      <rect x="80" y="60" width="440" height="230" fill="#251C15" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" />
      {[...Array(36)].map((_, i) => (
        <line
          key={`flute-${i}`}
          x1={90 + i * 12}
          y1="60"
          x2={90 + i * 12}
          y2="290"
          stroke="#16100B"
          strokeWidth="2"
        />
      ))}

      {/* Floating Media Console / Quartz Ledge */}
      <rect x="140" y="235" width="320" height="30" rx="3" fill="#0C0D0F" stroke="#D4AF37" strokeWidth="1" />
      
      {/* False Ceiling with Cove Lighting */}
      <rect x="60" y="20" width="480" height="35" fill="#1F2128" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="60" y1="55" x2="540" y2="55" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.8" />

      {/* Designer Ring Chandelier */}
      <circle cx="300" cy="110" r="45" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
      <circle cx="300" cy="110" r="28" fill="none" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="300" cy="110" r="70" fill="url(#chandelierGlow)" />
      <line x1="300" y1="20" x2="300" y2="80" stroke="#D4AF37" strokeWidth="1.5" />

      <text x="50" y="420" fill="#D4AF37" fontSize="12" fontFamily="monospace" letterSpacing="1.5">
        INTERIOR FINISHING &amp; COVE ILLUMINATION
      </text>
    </svg>
  </div>
);

export const MasonryPlasterVisual: React.FC<VisualProps> = ({ className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#141519] ${className}`}>
    <svg viewBox="0 0 600 450" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="450" fill="#17181F" />
      
      {/* Left Half: Raw Red Clay Brickwork */}
      {[...Array(12)].map((_, row) => {
        const offset = row % 2 === 0 ? 0 : 25;
        return (
          <g key={`mrow-${row}`}>
            {[...Array(8)].map((_, col) => (
              <rect
                key={`mcol-${col}`}
                x={20 + col * 52 - offset}
                y={60 + row * 26}
                width="48"
                height="22"
                rx="1"
                fill="#8C3825"
                stroke="#2B140E"
                strokeWidth="1.5"
              />
            ))}
          </g>
        );
      })}

      {/* Right Half: Smooth Cement Plaster with Gold Trowel Line */}
      <polygon points="340,40 580,40 580,390 340,390" fill="#2E313A" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="340" y1="40" x2="340" y2="390" stroke="#D4AF37" strokeWidth="3" />

      {/* Spirit Level Alignment Tool */}
      <rect x="260" y="180" width="160" height="24" rx="3" fill="#D4AF37" stroke="#000" strokeWidth="1" />
      <circle cx="340" cy="192" r="6" fill="#1B8A3C" />
      <line x1="337" y1="188" x2="337" y2="196" stroke="#FFF" strokeWidth="1" />
      <line x1="343" y1="188" x2="343" y2="196" stroke="#FFF" strokeWidth="1" />

      {/* Plumb Line Hanging */}
      <line x1="160" y1="40" x2="160" y2="280" stroke="#FFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      <polygon points="160,300 152,280 168,280" fill="#D4AF37" />

      <text x="360" y="80" fill="#D4AF37" fontSize="12" fontFamily="monospace" letterSpacing="1.2">
        SMOOTH PLASTER FINISH
      </text>
      <text x="40" y="420" fill="#A7A7A7" fontSize="11" fontFamily="monospace">
        Uniform Mortar Joints · Level Gauge 100%
      </text>
    </svg>
  </div>
);

export const FinishingSanitaryVisual: React.FC<VisualProps> = ({ className = "" }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#101115] ${className}`}>
    <svg viewBox="0 0 600 450" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="450" fill="#15171D" />
      
      {/* 4x2 Vitrified Large Wall Tiles */}
      <rect x="40" y="50" width="520" height="340" fill="#1E2028" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="40" y1="160" x2="560" y2="160" stroke="#121318" strokeWidth="2" />
      <line x1="40" y1="270" x2="560" y2="270" stroke="#121318" strokeWidth="2" />
      <line x1="300" y1="50" x2="300" y2="390" stroke="#121318" strokeWidth="2" />

      {/* Sleek Wall-hung Vanity & Mirror */}
      <circle cx="210" cy="150" r="55" fill="#2A2C36" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Warm LED Backlit Ring */}
      <circle cx="210" cy="150" r="57" fill="none" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.8" />
      
      {/* Vanity Countertop */}
      <rect x="130" y="240" width="160" height="20" rx="2" fill="#0C0D0F" stroke="#D4AF37" strokeWidth="1" />
      <ellipse cx="210" cy="240" rx="35" ry="12" fill="#F5F1E8" />
      {/* Gold Tall Basin Mixer Tap */}
      <path d="M210 228 V195 H222 V205" fill="none" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" />

      {/* Thermostatic Concealed Rain Shower */}
      <rect x="390" y="90" width="90" height="15" fill="#D4AF37" />
      <line x1="435" y1="50" x2="435" y2="90" stroke="#D4AF37" strokeWidth="4" />
      {/* Rain droplets simulation */}
      {[...Array(6)].map((_, i) => (
        <line
          key={`drop-${i}`}
          x1={400 + i * 12}
          y1="110"
          x2={400 + i * 12}
          y2="190"
          stroke="#5CB8FF"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.6"
        />
      ))}

      {/* Gold Diverter Plate */}
      <rect x="420" y="210" width="30" height="50" rx="3" fill="#D4AF37" />
      <circle cx="435" cy="225" r="5" fill="#111" />
      <rect x="432" y="240" width="6" height="12" rx="1" fill="#111" />

      <text x="50" y="420" fill="#D4AF37" fontSize="12" fontFamily="monospace" letterSpacing="1.5">
        PREMIUM SANITARY &amp; WATERPROOF TESTING
      </text>
    </svg>
  </div>
);

export const VisualMap: Record<string, React.FC<VisualProps>> = {
  "g-1": HeroVillaVisual,
  "g-2": StructuralSiteVisual,
  "g-3": InteriorLivingVisual,
  "g-4": MasonryPlasterVisual,
  "g-5": VillaFacadeVisual,
  "g-6": FinishingSanitaryVisual,
};
