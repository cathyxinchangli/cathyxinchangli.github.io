export const siteConfig = {
  name: 'Xinchang "Cathy" Li',
  shortName: "Cathy Li",
  title: "Incoming Assistant Professor",
  department: "Civil and Environmental Engineering",
  institution: "University of Wisconsin–Madison",
  startDate: "January 2027",
  currentRole: "Linus Pauling Distinguished Postdoctoral Fellow",
  currentInstitution: "Pacific Northwest National Laboratory",
  email: "cathy.li@wisc.edu",
  description:
    "Urban climate and energy researcher advancing sustainable and resilient urban futures through Earth system modeling, building energy modeling, and AI/ML.",
  researchStatement:
    "I study the local to global interactions between urban energy, climate, and humans under global change. My work develops models and data, advances understanding, and support solutions for the co-benefits of urban energy, climate, and people.",
  recruitment: {
    term: "Spring 2027",
    areas: [
      "Urban energy and climate",
      "Earth system data and model development",
      "Energy systems and grid resilience",
      "Artificial intelligence and machine learning",
    ],
    application:
      "Please complete the prospective PhD student survey to share your background and research interests.",
    surveyUrl: "https://surveymars.com/q/druhKghEB",
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
  { href: "/", label: "Home", hidden: false },
  { href: "/publications/", label: "Publications", hidden: false },
  { href: "/people/", label: "People", hidden: false },
  { href: "/projects/", label: "Projects", hidden: false },
  { href: "/teaching/", label: "Teaching", hidden: true },
  { href: "/services/", label: "Service", hidden: false },
  { href: "/contact/", label: "Contact", hidden: false },
] as const;
