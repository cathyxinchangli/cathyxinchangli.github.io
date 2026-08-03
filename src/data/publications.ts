export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi: string;
  tags: string[];
  featured?: boolean;
  highlight?: string;
};

export const publications: Publication[] = [
  {
    title: "Divergent humidity-driven growth in urban air-conditioning energy demand under climate change",
    authors: "Xinchang ‘Cathy’ Li, Lei Zhao, Zhiwen Luo, Keith Oleson, Yifan Cheng, Xiaoxiong Xie, Alvin C. G. Varquez, Mitsuna Sekiya",
    venue: "Nature Cities",
    year: 2026,
    doi: "https://doi.org/10.1038/s44284-026-00474-4",
    tags: ["Urban climate–energy", "Climate risk"],
    featured: true,
  },
  {
    title: "Divergent surface urban heat island responses to background aerosol mitigation",
    authors: "Shu Liu, Yuyu Zhou, Lei Zhao, Gerald Mills, Xinchang “Cathy” Li, Hongsheng Zhang, Karen C. Seto, Peng Gong",
    venue: "Nature Cities",
    year: 2026,
    doi: "https://doi.org/10.1038/s44284-026-00463-7",
    tags: ["Urban climate–energy", "Climate risk"],
  },
  {
    title: "Mitigating urban climate–energy feedback with citywide building-integrated photovoltaics implementation",
    authors: "Liutao Chen, Shihong Zhang, Xinchang “Cathy” Li, Ting Fong May Chui, Jiachuan Yang, Wei Wang, Tianzhen Hong, Zhe Wang",
    venue: "Nexus",
    year: 2026,
    doi: "https://doi.org/10.1016/j.ynexs.2025.100114",
    tags: ["Urban solutions", "Building energy"],
  },
  {
    title: "U-Surf: A global 1 km spatially continuous urban surface property dataset for kilometer-scale urban-resolving Earth system modeling",
    authors: "Yifan Cheng, Lei Zhao, TC Chakraborty, Keith Oleson, Matthias Demuzere, Xiaoping Liu, Yangzi Che, Weilin Liao, Yuyu Zhou, Xinchang “Cathy” Li",
    venue: "Earth System Science Data",
    year: 2025,
    doi: "https://doi.org/10.5194/essd-17-2147-2025",
    tags: ["Earth system modeling", "Data"],
  },
  {
    title: "Enhancing urban thermal environment and energy sustainability with temperature-adaptive radiative roofs",
    authors: "Keer Zhang, Lei Zhao, Keith Oleson, Xinchang “Cathy” Li, Xuhui Lee",
    venue: "Earth’s Future",
    year: 2025,
    doi: "https://doi.org/10.1029/2024EF005246",
    tags: ["Urban solutions", "Building energy"],
  },
  {
    title: "Elevated urban energy risks due to climate-driven biophysical feedbacks",
    authors: "Xinchang ‘Cathy’ Li, Lei Zhao, Yue Qin, Keith Oleson, Yiwen Zhang",
    venue: "Nature Climate Change",
    year: 2024,
    doi: "https://doi.org/10.1038/s41558-024-02108-w",
    tags: ["Urban climate–energy", "Climate risk", "AI/ML"],
    featured: true,
    highlight: "Cover article · October 2024",
  },
  {
    title: "Enhancing urban climate–energy modeling in the Community Earth System Model through explicit representation of urban air-conditioning adoption",
    authors: "Xinchang “Cathy” Li, Lei Zhao, Keith Oleson, Yuyu Zhou, Yue Qin, Keer Zhang, Bowen Fang",
    venue: "Journal of Advances in Modeling Earth Systems",
    year: 2024,
    doi: "https://doi.org/10.1029/2023MS004107",
    tags: ["Earth system modeling", "Building energy"],
    featured: true,
    highlight: "Editor’s Highlight · Featured by IAUC",
  },
  {
    title: "Analysis of radiation-induced cooling and growth of mist and cloud droplets",
    authors: "M. Brewster, X. Li",
    venue: "International Journal of Heat and Mass Transfer",
    year: 2020,
    doi: "https://doi.org/10.1016/j.ijheatmasstransfer.2020.120674",
    tags: ["Atmospheric physics"],
  },
  {
    title: "Radiation-induced condensational growth and cooling of cloud-sized mist droplets",
    authors: "M. Q. Brewster, X. Li, K. K. Roman, E. O. McNichols, M. J. Rood",
    venue: "Journal of the Atmospheric Sciences",
    year: 2020,
    doi: "https://doi.org/10.1175/JAS-D-19-0288.1",
    tags: ["Atmospheric physics"],
  },
];

export const publicationYears = [...new Set(publications.map((item) => item.year))];
export const publicationTags = [...new Set(publications.flatMap((item) => item.tags))].sort();
