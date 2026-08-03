export type ServiceEntry = {
  category: "Professional leadership" | "Conference leadership" | "Peer review" | "University & community" | "Memberships";
  role: string;
  organization: string;
  years: string;
  description?: string;
  events?: string[];
  current?: boolean;
};

export const services: ServiceEntry[] = [
  {
    category: "Professional leadership",
    role: "Chair, Canvassing Committee",
    organization: "AGU Global Environmental Change Section",
    years: "2025–Present",
    description: "Creator and organizer of the Early Career Researcher Spotlight webinar series.",
    current: true,
  },
  {
    category: "Professional leadership",
    role: "Chair, Early Career Working Group",
    organization: "International Association for Urban Climate",
    years: "2025",
  },
  {
    category: "Conference leadership",
    role: "Session Chair & Convener",
    organization: "AMS, AGU, ICUC, and CESM meetings",
    years: "2023–2026",
    events: [
      "Weather–human–energy dynamics in urban areas · AMS 2026",
      "Early Career Researcher Showcase in Urban Systems Research · AGU 2025",
      "Urban Areas and Global Change · AGU 2024–2025",
      "Integrated Modelling Techniques for Urban Energy Systems · ICUC 2025",
      "Representing Urban Processes and Dynamics in Models Across Scales · AGU 2023",
    ],
    current: true,
  },
  {
    category: "Peer review",
    role: "Expert Reviewer",
    organization: "IPCC Special Report on Climate Change and Cities",
    years: "2025–2026",
    current: true,
  },
  {
    category: "Peer review",
    role: "Subject Matter Expert",
    organization: "PNNL Laboratory Directed Research and Development proposal review",
    years: "2025",
  },
  {
    category: "Peer review",
    role: "Journal Reviewer",
    organization: "Nature Portfolio, AGU, Copernicus, and other journals",
    years: "32 reviews",
    description: "Reviews spanning urban climate, Earth system modeling, sustainability, geohealth, and atmospheric science.",
    current: true,
  },
  {
    category: "University & community",
    role: "Chair, Social Activities",
    organization: "Environmental Engineering Graduate Student Advisory Committee, UIUC",
    years: "2021–2024",
  },
  {
    category: "University & community",
    role: "Engineering Team Lead",
    organization: "Illinois Solar Decathlon",
    years: "2017–2019",
    description: "Contributed to finalist teams in the U.S. DOE Solar Decathlon Design Challenge and Solar Decathlon China.",
  },
  {
    category: "University & community",
    role: "Outreach Presenter & Volunteer",
    organization: "UIUC Engineering Open House, OneEarth OneHealth, weSTEM, and undergraduate research programs",
    years: "2023–2024",
  },
  {
    category: "Memberships",
    role: "Member",
    organization: "American Geophysical Union · International Association for Urban Climate · American Meteorological Society · Tau Beta Pi · AEESP",
    years: "Current",
    current: true,
  },
];

export const serviceCategories = [
  "Professional leadership",
  "Conference leadership",
  "Peer review",
  "University & community",
  "Memberships",
] as const;
