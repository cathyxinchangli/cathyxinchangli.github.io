export const siteConfig = {
  name: 'Xinchang "Cathy" Li',
  shortName: "Cathy Li",
  title: "Incoming Assistant Professor",
  department: "Civil and Environmental Engineering",
  institution: "University of Wisconsin–Madison",
  startDate: "January 2027",
  currentRole: "Linus Pauling Distinguished Postdoctoral Fellow",
  currentInstitution: "Pacific Northwest National Laboratory",
  email: "xinchang.cathy.li@gmail.com",
  description:
    "Urban climate and energy researcher advancing sustainable and resilient urban futures through Earth system modeling, building energy modeling, and AI/ML.",
  researchStatement:
    "I study how cities, buildings, energy systems, and climate interact—from individual neighborhoods to the globe. My work develops integrated models and data-driven methods to uncover risks, evaluate solutions, and support urban futures that are both sustainable and resilient.",
  recruitment: {
    term: "Spring 2027",
    areas: [
      "Urban energy and climate",
      "Earth system data and model development",
      "Earth system model applications",
      "Artificial intelligence and machine learning",
    ],
    application:
      "Please email your CV and a concise description of your research interests and fit.",
  },
  links: {
    github: "https://github.com/cathyxinchangli",
    scholar: "https://scholar.google.com/citations?user=g5pYP2sAAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0001-6972-2376",
    linkedin: "https://www.linkedin.com/in/cathy-xinchang-li",
    researchgate: "https://www.researchgate.net/profile/Xinchang-Li-2",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/publications/", label: "Publications" },
  { href: "/people/", label: "People" },
  { href: "/projects/", label: "Projects" },
  { href: "/teaching/", label: "Teaching" },
  { href: "/services/", label: "Service" },
  { href: "/contact/", label: "Contact" },
] as const;
