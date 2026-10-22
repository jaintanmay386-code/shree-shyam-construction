export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  scope: string[];
  icon: string;
  featured?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'structural' | 'interior' | 'finishing';
  tag: string;
  description: string;
  aspect: string;
  specs: string;
}

export const COMPANY = {
  name: "SHREE SHYAM CONSTRUCTIONS",
  shortName: "Shree Shyam Constructions",
  tagline: "Building Dreams. Creating Legacies.",
  supportingStatement: "Quality Construction • Lasting Trust",
  status: "Newly Established Residential Construction Practice",
  businessType: "Residential house construction on customer-owned plots",
  phone: "9610448836",
  displayPhone: "+91 96104 48836",
  phoneTel: "tel:+919610448836",
  whatsappNumber: "919610448836",
  email: "contact@shreeshyamconstructions.in",
  officeAddress: "Suman Nagar, Mansarovar, Jaipur, Rajasthan, India",
  city: "Jaipur",
  state: "Rajasthan",
  pincode: "302020",
  hours: "Monday – Saturday: 9:00 AM – 7:30 PM",
  sunday: "Sunday: By Prior Appointment",
  defaultWhatsAppMessage:
    "Hello Shree Shyam Constructions, I am interested in building a house on my plot in Jaipur. I would like to discuss my requirements and arrange a consultation.",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const text = encodeURIComponent(customMessage || COMPANY.defaultWhatsAppMessage);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Our Projects", href: "#projects" },
  { name: "Our Process", href: "#process" },
  { name: "Cost Estimator", href: "#estimator" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "complete-house-construction",
    title: "Complete House Construction",
    description: "End-to-end turnkey residential construction on your plot from initial excavation and foundation to the final coat of paint and key handover.",
    scope: [
      "Substructure & RCC foundation work",
      "Brick masonry & load-bearing structures",
      "Slab casting & curing cycles",
      "Plumbing, electrical & sanitary integration",
      "Plastering, flooring, tiling & painting",
      "Milestone-based progress reporting",
    ],
    icon: "home",
    featured: true,
  },
  {
    id: "architectural-planning",
    title: "Architectural Planning & Design",
    description: "Floor layout optimization, elevation styling, and coordination with qualified structural and architectural planners tailored to your plot dimensions.",
    scope: [
      "Plot orientation & Vastu compliance review",
      "2D floor plans & room ergonomics",
      "Modern 3D front elevation design concepts",
      "Cross-ventilation & natural sunlight planning",
      "Municipal setback guidelines adherence",
    ],
    icon: "compass",
  },
  {
    id: "foundation-structural",
    title: "Foundation & Structural Work",
    description: "Precision-engineered foundation, reinforced cement concrete (RCC) columns, plinth beams, and roof slabs executed per approved structural drawings.",
    scope: [
      "Soil compaction & footing excavation",
      "Anti-termite treatment at plinth level",
      "Grade-certified steel rebar reinforcement",
      "Ready-mix or site-controlled M20/M25 concrete",
      "Mandatory water curing compliance",
    ],
    icon: "layers",
    featured: true,
  },
  {
    id: "brickwork-plastering",
    title: "Brickwork & Plastering",
    description: "Robust masonry work using top-grade red clay bricks or AAC blocks, paired with double-coat sand-faced and internal smooth plastering.",
    scope: [
      "Red clay or fly-ash / AAC block masonry",
      "Proper mortar ratio (1:4 / 1:6 mix)",
      "Window & door frame fixing at lintel level",
      "External water-repellent plaster finish",
      "Internal smooth wall surface preparation",
    ],
    icon: "grid",
  },
  {
    id: "electrical-plumbing",
    title: "Electrical & Plumbing Coordination",
    description: "Concealed heavy-duty conduit routing, distribution boards, CPVC/UPVC water supply, and drainage lines laid down with zero compromise.",
    scope: [
      "Concealed fire-resistant electrical piping",
      "Multi-circuit distribution board wiring",
      "Independent overhead tank & motor piping",
      "Leakage-tested pressure pipe plumbing",
      "Standard bathroom fixture rough-ins",
    ],
    icon: "zap",
  },
  {
    id: "flooring-painting",
    title: "Flooring, Painting & Finishing",
    description: "Vitrified tiles, Italian marble or granite laying, premium exterior weatherproof paints, interior putty, primer, and luxury emulsion coats.",
    scope: [
      "Double-charged vitrified tile / marble flooring",
      "Kitchen counter granite & dado installation",
      "2 coats putty + 1 primer + 2 coats royal emulsion",
      "Exterior weather-guard emulsion coating",
      "Door polish, hardware fitting & sanitary fixtures",
    ],
    icon: "sparkles",
    featured: true,
  },
  {
    id: "renovation-improvement",
    title: "Renovation & Home Improvement",
    description: "Selective structural additions, floor vertical extensions (G+1/G+2), elevation makeovers, and modern waterproofing improvements.",
    scope: [
      "Structural feasibility assessment",
      "Floor additions & terrace room construction",
      "Modern front elevation remodelling",
      "Terrace & basement waterproofing systems",
      "Interior wall reconfigurations",
    ],
    icon: "refresh",
  },
  {
    id: "construction-consultation",
    title: "Construction Consultation",
    description: "In-depth one-on-one session to review your plot title, ground conditions, budget allocation, material options, and realistic timeline expectations.",
    scope: [
      "Plot dimensions & setback calculation",
      "Material grade cost breakdown (Cement, Steel, Bricks)",
      "Milestone-linked payment schedule guidance",
      "Comparative package estimate discussion",
      "Initial site feasibility walkthrough",
    ],
    icon: "clipboard",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    subtitle: "Understanding Your Vision",
    description: "We meet at our Mansarovar office or via phone/WhatsApp to understand your plot size, lifestyle requirements, preferred architectural style, and approximate budget.",
    deliverables: ["Requirement brief", "Budget outline", "Scope overview"],
  },
  {
    step: 2,
    title: "Site Visit in Jaipur",
    subtitle: "Ground Reality Assessment",
    description: "Our team inspects your plot in Jaipur to assess approach roads, soil conditions, orientation, neighborhood setbacks, and utility connections (water, electricity).",
    deliverables: ["Site inspection report", "Orientation & access notes", "Preliminary feasibility"],
  },
  {
    step: 3,
    title: "Planning & Estimate",
    subtitle: "Transparent Blueprints & BOQ",
    description: "We discuss floor plan layouts and provide a transparent Bill of Quantities (BOQ) detailing material grades, structural specs, and stage-wise costs.",
    deliverables: ["Draft floor layout", "Detailed material specification", "Transparent cost estimate"],
  },
  {
    step: 4,
    title: "Agreement & Preparation",
    subtitle: "Clarity Before First Brick",
    description: "We sign a formal construction contract that transparently outlines the scope of work, material brands, milestone-linked payment schedules, and realistic timelines.",
    deliverables: ["Signed construction agreement", "Milestone schedule", "Material brand checklist"],
  },
  {
    step: 5,
    title: "Construction & Progress Updates",
    subtitle: "Quality-Controlled Execution",
    description: "Work begins with disciplined supervision. You receive regular photographic updates and on-site walkthroughs at every milestone from foundation to slab casting.",
    deliverables: ["Foundation to slab execution", "WhatsApp milestone photos", "Stage-wise quality checks"],
  },
  {
    step: 6,
    title: "Finishing & Handover",
    subtitle: "Your Dream Home Completed",
    description: "Comprehensive joint punch-list walkthrough to verify electrical points, plumbing fixtures, paint finish, and door fittings before handing over the keys to your new home.",
    deliverables: ["Joint snag list clearance", "Plumbing & electrical verification", "Key handover celebration"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Contemporary Villa Exterior Concept",
    category: "exterior",
    tag: "Design Inspiration",
    description: "Modern multi-level facade concept with natural limestone cladding, cantilevered balconies, and ambient architectural evening lighting.",
    aspect: "16:9",
    specs: "30x60 Plot Concept · G+2 Contemporary Villa",
  },
  {
    id: "g-2",
    title: "Precision RCC Column & Plinth Structure",
    category: "structural",
    tag: "Structural Execution",
    description: "Demonstration of disciplined rebar tie-binding, robust column shuttering, and precision plinth beam casting for residential loads.",
    aspect: "4:3",
    specs: "Fe550D TMT Rebar · M25 Grade Concrete Spec",
  },
  {
    id: "g-3",
    title: "Bespoke Modern Living & Dining Space",
    category: "interior",
    tag: "Interior Finishing",
    description: "Concept visual of polished Italian marble flooring paired with recessed warm illumination and clean teakwood partition detailing.",
    aspect: "4:3",
    specs: "Double-Height Ceiling · Polished Vitrified Finish",
  },
  {
    id: "g-4",
    title: "Solid Red Brickwork & Lintels",
    category: "structural",
    tag: "Masonry Stage",
    description: "Illustration of uniform brick joints, plumb line alignment, lintel beam casting, and preparation for sand-face cement plastering.",
    aspect: "4:3",
    specs: "First-Class Clay Bricks · 1:4 Mortar Ratio",
  },
  {
    id: "g-5",
    title: "Minimalist Indian Bungalow Facade",
    category: "exterior",
    tag: "Design Inspiration",
    description: "Earthy Rajasthani sandstone accents integrated into crisp white geometric villa architecture with private courtyard parking.",
    aspect: "4:3",
    specs: "200 Sq. Yard Plot · Duplex Architecture",
  },
  {
    id: "g-6",
    title: "Luxury Bathroom Sanitary & Tiling Details",
    category: "finishing",
    tag: "Finishing Standards",
    description: "Seamless 4x2 anti-skid porcelain wall and floor tiles, concealed diverter plumbing, and concealed drainage channel installation.",
    aspect: "4:3",
    specs: "Anti-Skid GVT · Concealed CPVC Plumbing",
  },
];

export const JAIPUR_POPULAR_AREAS = [
  "Mansarovar",
  "Suman Nagar (Mansarovar)",
  "Patel Marg / VT Road",
  "Jagatpura",
  "Vaishali Nagar",
  "Pratap Nagar",
  "Nirman Nagar",
  "Malviya Nagar",
  "Ajmer Road / Bhankrota",
  "Sirsi Road",
  "Tonk Road",
  "Kalwar Road",
  "Sanganer",
  "Other Area in Jaipur",
];
