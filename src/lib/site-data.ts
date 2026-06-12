export type Service = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  deliverables: string[];
  metric: string;
  industries: string[];
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    slug: "public-relations",
    name: "Public Relations",
    tagline: "Build trusted relationships through strategic media engagement.",
    intro:
      "Our PR team manages end-to-end communications from press releases to crisis management across East Africa.",
    deliverables: [
      "Media relations & press placements",
      "Press release writing & distribution",
      "Crisis communications",
      "Executive media training",
      "Corporate storytelling",
      "Earned media campaigns",
    ],
    metric: "25+ media outlets per campaign · 90% message accuracy",
    industries: ["Financial Services", "Government", "NGOs", "Technology"],
    icon: "Megaphone",
  },
  {
    slug: "advertising",
    name: "Advertising",
    tagline: "Creative campaigns that move markets across Africa.",
    intro:
      "From concept to media buy, we craft advertising that builds memorable brands and delivers commercial outcomes.",
    deliverables: [
      "Brand campaign strategy",
      "Creative concept & art direction",
      "TV, radio & out-of-home production",
      "Media planning & buying",
      "Print & publication advertising",
      "Cross-market localisation",
    ],
    metric: "Pan-African media footprint across 6 countries",
    industries: ["Financial Services", "Fintech", "Healthcare", "Infrastructure"],
    icon: "Sparkles",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Performance-led digital that compounds.",
    intro:
      "Data-driven digital marketing that turns audiences into customers — across search, social, and owned channels.",
    deliverables: [
      "Paid social & search campaigns",
      "Content strategy & production",
      "SEO & website optimisation",
      "Influencer partnerships",
      "Email & marketing automation",
      "Analytics & attribution",
    ],
    metric: "Average 3.2x ROAS across client portfolio",
    industries: ["Fintech", "Technology", "Education"],
    icon: "LineChart",
  },
  {
    slug: "event-management",
    name: "Event Management",
    tagline: "Brand moments executed flawlessly, at scale.",
    intro:
      "From C-suite conferences to consumer activations, we deliver events that are operationally precise and creatively memorable.",
    deliverables: [
      "Conference & summit production",
      "Product launches",
      "AGMs & investor events",
      "VIP hospitality",
      "Venue, supplier & logistics",
      "Run-of-show & technical direction",
    ],
    metric: "300+ events delivered across East Africa",
    industries: ["Financial Services", "Government", "Development Partners"],
    icon: "CalendarCheck",
  },
  {
    slug: "experiential-marketing",
    name: "Experiential Marketing",
    tagline: "Bring brands to life where audiences live, work and play.",
    intro:
      "Immersive brand experiences — from campus activations to retail roadshows — that drive measurable engagement.",
    deliverables: [
      "Brand activations & roadshows",
      "Pop-ups & retail experiences",
      "Sponsorship activation",
      "Sampling & demonstration",
      "Community & campus programmes",
      "Experiential measurement",
    ],
    metric: "Reaching 1M+ consumers per national activation",
    industries: ["Fintech", "Agriculture", "Education"],
    icon: "Users",
  },
  {
    slug: "development-communications",
    name: "Development Communications",
    tagline: "Communications that move communities and policy.",
    intro:
      "Specialist communications for development partners, governments and NGOs — designed to drive behaviour change and stakeholder alignment.",
    deliverables: [
      "Behaviour change campaigns",
      "Stakeholder mapping & engagement",
      "Multi-language content production",
      "Community mobilisation",
      "Policy & advocacy support",
      "Monitoring, evaluation & learning",
    ],
    metric: "Programmes reaching 500,000+ smallholder farmers",
    industries: ["Government", "NGOs", "Development Partners", "Agriculture"],
    icon: "Globe2",
  },
  {
    slug: "strategic-communications",
    name: "Strategic Communications",
    tagline: "Senior counsel for boards, CEOs and reputations.",
    intro:
      "Board-level communications strategy: positioning, narrative architecture, and reputation management for organisations that matter.",
    deliverables: [
      "Communications strategy & audits",
      "Corporate narrative & messaging",
      "Reputation management",
      "Issues & crisis preparedness",
      "Executive thought leadership",
      "Internal communications",
    ],
    metric: "Trusted counsel to C-suite across 60+ organisations",
    industries: ["Financial Services", "Government", "Infrastructure"],
    icon: "Compass",
  },
  {
    slug: "stakeholder-engagement",
    name: "Stakeholder Engagement",
    tagline: "Align the audiences that decide your future.",
    intro:
      "Structured engagement programmes that build consensus across regulators, communities, investors and the media.",
    deliverables: [
      "Stakeholder mapping & analysis",
      "Government & regulatory liaison",
      "Investor & analyst communications",
      "Community engagement",
      "Public consultation",
      "Coalition & partnership building",
    ],
    metric: "Operating across 6 East African jurisdictions",
    industries: ["Government", "Infrastructure", "Development Partners"],
    icon: "Handshake",
  },
];

export type Industry = {
  slug: string;
  name: string;
  intro: string;
  approach: string[];
  services: string[];
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    intro: "Expert marketing communications for banks, insurers and asset managers building trust across East Africa.",
    approach: [
      "Reputation strategies that translate regulatory rigour into customer confidence.",
      "Premium brand positioning to win mass-affluent and SME segments.",
      "Integrated campaigns connecting brand, product and channel marketing.",
    ],
    services: ["Public Relations", "Advertising", "Digital Marketing", "Event Management"],
    icon: "Landmark",
  },
  {
    slug: "fintech",
    name: "Fintech",
    intro: "Growth marketing for fintechs scaling from product-market fit to category leadership.",
    approach: [
      "Performance and brand working as one growth engine.",
      "Trust-led communications for regulated, money-moving products.",
      "Activations and partnerships that compound user acquisition.",
    ],
    services: ["Digital Marketing", "Public Relations", "Experiential Marketing"],
    icon: "Smartphone",
  },
  {
    slug: "government",
    name: "Government",
    intro: "Strategic communications for ministries, agencies and state corporations.",
    approach: [
      "Citizen-centred narratives that translate policy into impact.",
      "Stakeholder engagement across national and county levels.",
      "Crisis-ready communications for sensitive mandates.",
    ],
    services: ["Strategic Communications", "Stakeholder Engagement", "Development Communications"],
    icon: "Building2",
  },
  {
    slug: "ngos",
    name: "NGOs",
    intro: "Mission-driven communications for non-profits and foundations across the region.",
    approach: [
      "Donor-facing storytelling that secures sustained funding.",
      "Community engagement designed for behaviour change.",
      "Measurable campaigns with monitoring and learning baked in.",
    ],
    services: ["Development Communications", "Public Relations", "Experiential Marketing"],
    icon: "Heart",
  },
  {
    slug: "development-partners",
    name: "Development Partners",
    intro: "Trusted partner to bilateral, multilateral and philanthropic institutions.",
    approach: [
      "Programme communications aligned to results frameworks.",
      "Multi-country execution across Kenya, Uganda, Tanzania, Rwanda, Burundi and South Sudan.",
      "MEL-ready outputs that satisfy donor reporting standards.",
    ],
    services: ["Development Communications", "Stakeholder Engagement", "Event Management"],
    icon: "Globe2",
  },
  {
    slug: "technology",
    name: "Technology",
    intro: "Brand and growth marketing for technology businesses scaling across Africa.",
    approach: [
      "Category creation and thought leadership.",
      "Executive visibility and analyst engagement.",
      "Product launches with regional reach.",
    ],
    services: ["Public Relations", "Digital Marketing", "Strategic Communications"],
    icon: "Cpu",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    intro: "Communications across agribusiness, agritech and smallholder farming value chains.",
    approach: [
      "Programmes that reach hundreds of thousands of farmers.",
      "Behaviour-change campaigns for inputs, finance and best practice.",
      "Multi-language, multi-channel execution including grassroots media.",
    ],
    services: ["Development Communications", "Experiential Marketing", "Stakeholder Engagement"],
    icon: "Sprout",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    intro: "Communications for hospitals, payers, pharma and public-health programmes.",
    approach: [
      "Evidence-based campaigns aligned with clinical standards.",
      "Patient-centred storytelling with cultural nuance.",
      "Cross-sector coalitions for public health priorities.",
    ],
    services: ["Public Relations", "Development Communications", "Advertising"],
    icon: "Stethoscope",
  },
  {
    slug: "education",
    name: "Education",
    intro: "Marketing for universities, EdTech and learning institutions.",
    approach: [
      "Recruitment campaigns that fill cohorts.",
      "Reputation building for academic excellence.",
      "Alumni and donor engagement programmes.",
    ],
    services: ["Digital Marketing", "Experiential Marketing", "Public Relations"],
    icon: "GraduationCap",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    intro: "Stakeholder and reputation strategy for major capital projects.",
    approach: [
      "Social licence to operate from project initiation onwards.",
      "Government, community and investor stakeholder alignment.",
      "Issues management for high-visibility projects.",
    ],
    services: ["Stakeholder Engagement", "Strategic Communications", "Public Relations"],
    icon: "HardHat",
  },
];

export const caseStudies = [
  {
    slug: "uba-group-kenya",
    client: "UBA Group Kenya",
    industry: "Financial Services",
    challenge: "Reposition UBA as a premium pan-African bank targeting young professionals.",
    strategy: "Integrated campaign blending digital marketing, PR and experiential events in Nairobi and key urban centres.",
    metric: "+40%",
    metricLabel: "young-professional account openings",
    secondary: "25% lift in unaided brand awareness within six months.",
  },
  {
    slug: "ketepa-csr",
    client: "Kenya Tea Packers (KETEPA)",
    industry: "Agriculture & Government",
    challenge: "Communicate farmer welfare programmes to 500,000+ smallholder farmers.",
    strategy: "Development communications combining stakeholder engagement, grassroots media and field activations.",
    metric: "60%",
    metricLabel: "farmer programme participation",
    secondary: "Positive coverage across 15 national and regional outlets.",
  },
  {
    slug: "presidents-award",
    client: "The President's Award – Kenya",
    industry: "NGO / Youth Development",
    challenge: "Increase youth programme applications across five Kenyan regions.",
    strategy: "Integrated campaign: campus activations, social-first content and earned media partnerships.",
    metric: "300%",
    metricLabel: "increase in applications",
    secondary: "50+ media mentions · 2M social impressions in 90 days.",
  },
];

export const boardAffiliations = [
  { title: "Honorary Consul of Jamaica to Kenya", icon: "Flag" },
  { title: "Board Director, Kenya Tea Packers (KETEPA)", icon: "Leaf" },
  { title: "Board Director, UBA Group Kenya", icon: "Landmark" },
  { title: "Trustee, UAP Old Mutual Foundation", icon: "Shield" },
  { title: "Board Member, The President's Award – Kenya", icon: "Award" },
  { title: "Board Member, Acumen East Africa", icon: "Compass" },
  { title: "Trustee, CPF Foundation", icon: "HeartHandshake" },
];

export const insightsPosts = [
  {
    slug: "africa-brand-2026",
    title: "Why pan-African brand building is the next decade's growth story",
    category: "Marketing Trends",
    preview:
      "How leading consumer and financial brands are rewriting the playbook for scale across East Africa's six fastest-growing markets.",
  },
  {
    slug: "crisis-comms-playbook",
    title: "The modern crisis communications playbook for African enterprises",
    category: "Communications Strategy",
    preview:
      "What boards should expect from their communications partners when reputation is on the line — drawn from 26 years of client work.",
  },
  {
    slug: "development-comms-roi",
    title: "Measuring ROI in development communications",
    category: "Industry Reports",
    preview:
      "A practitioner's framework for proving behaviour change to donors — moving beyond reach metrics to programmatic impact.",
  },
  {
    slug: "fintech-trust",
    title: "Trust as a fintech growth lever in East Africa",
    category: "African Business",
    preview:
      "Why the fastest-scaling fintechs in the region are pairing performance marketing with disciplined reputation building.",
  },
];

export const SITE = {
  name: "Exclamation Marketing Ltd",
  tagline: "Integrated Marketing Communications · Africa",
  phone: "+254 719 619 055",
  phoneHref: "tel:+254719619055",
  email: "somanga@exclamationmarketing.co.ke",
  address:
    "Mayfair Business Centre, Block 2, 2nd Floor, Suite No. 5, Off Parklands Road, Westlands, Nairobi 00621, Kenya",
  hours: "Monday–Friday · 8:00 AM – 5:00 PM EAT",
  countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan"],
  founded: "1998",
};
