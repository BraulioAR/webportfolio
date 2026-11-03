export const translations = {
  "en": {
    "work": "Work",
    "cv": "Download CV",
    "theme": "Dark / Light",
    "language": "Language",
    "nav": "Main navigation",
    "hero": [
      "Creating emotional",
      "digital experiences",
      "that people love"
    ],
    "intro": "I'm a web developer with over 3 years of experience, based in the Dominican Republic. I like to understand people to solve their problems and create websites that resonate.",
    "developer": "WEB DEVELOPER",
    "portrait": "Portrait of Braulio Rosario",
    "selected": "Selected projects",
    "featured": "Featured work",
    "visit": "View website",
    "newtab": "opens in a new tab",
    "categories": [
      "Cooperative · Corporate website",
      "Real estate · Property showcase",
      "Corporate website",
      "Business website",
      "Event website"
    ],
    "capocoot": "A redesigned website for a Dominican cooperative, bringing its services, news and membership information together in a clear, responsive experience.",
    "torre": "A residential property website for Torre Roiz in Naco, with apartment details, photo galleries and contact information for prospective buyers.",
    "together": [
      "Let’s work",
      "together"
    ],
    "available": "I'm currently available for new work. Let me know if you're looking for a web developer. Let’s talk about your next project!",
    "description": "Braulio Rosario, web developer in the Dominican Republic. Explore projects built with React, Next.js and Astro.",
    "alts": [
      "CAPOCOOT cooperative logo",
      "Promotora Roiz logo",
      "Daily Power logo",
      "Universal Windows and Doors logo",
      "Boxing Event III logo"
    ]
  },
  "es": {
    "work": "Proyectos",
    "cv": "Descargar CV",
    "theme": "Oscuro / Claro",
    "language": "Idioma",
    "nav": "Navegación principal",
    "hero": [
      "Creando experiencias",
      "digitales que",
      "conectan contigo"
    ],
    "intro": "Soy desarrollador web con más de 3 años de experiencia, ubicado en República Dominicana. Me gusta entender a las personas para resolver sus problemas y crear sitios web que conecten con ellas.",
    "developer": "DESARROLLADOR WEB",
    "portrait": "Retrato de Braulio Rosario",
    "selected": "Proyectos seleccionados",
    "featured": "Proyectos destacados",
    "visit": "Ver sitio web",
    "newtab": "se abre en una nueva pestaña",
    "categories": [
      "Cooperativa · Sitio corporativo",
      "Bienes raíces · Sitio inmobiliario",
      "Sitio corporativo",
      "Sitio empresarial",
      "Sitio para eventos"
    ],
    "capocoot": "Rediseño del sitio web de una cooperativa dominicana que reúne sus servicios, noticias e información de afiliación en una experiencia clara y adaptable.",
    "torre": "Sitio inmobiliario de Torre Roiz en Naco, con detalles de los apartamentos, galerías de fotos e información de contacto para posibles compradores.",
    "together": [
      "Trabajemos",
      "juntos"
    ],
    "available": "Estoy disponible para nuevos proyectos. Si buscas un desarrollador web, escríbeme y conversemos sobre tu próximo proyecto.",
    "description": "Braulio Rosario, desarrollador web en República Dominicana. Conoce proyectos creados con React, Next.js y Astro.",
    "alts": [
      "Logo de la cooperativa CAPOCOOT",
      "Logo de Promotora Roiz",
      "Logo de Daily Power",
      "Logo de Universal Windows and Doors",
      "Logo de Boxing Event III"
    ]
  },
  "pt": {
    "work": "Projetos",
    "cv": "Baixar currículo",
    "theme": "Escuro / Claro",
    "language": "Idioma",
    "nav": "Navegação principal",
    "hero": [
      "Criando experiências",
      "digitais que",
      "conectam pessoas"
    ],
    "intro": "Sou desenvolvedor web com mais de 3 anos de experiência, na República Dominicana. Gosto de entender as pessoas para resolver seus problemas e criar sites que se conectem com elas.",
    "developer": "DESENVOLVEDOR WEB",
    "portrait": "Retrato de Braulio Rosario",
    "selected": "Projetos selecionados",
    "featured": "Projetos em destaque",
    "visit": "Ver site",
    "newtab": "abre em uma nova aba",
    "categories": [
      "Cooperativa · Site institucional",
      "Imóveis · Site imobiliário",
      "Site institucional",
      "Site empresarial",
      "Site para eventos"
    ],
    "capocoot": "Reformulação do site de uma cooperativa dominicana, reunindo serviços, notícias e informações de associação em uma experiência clara e responsiva.",
    "torre": "Site imobiliário da Torre Roiz em Naco, com detalhes dos apartamentos, galerias de fotos e informações de contato para potenciais compradores.",
    "together": [
      "Vamos trabalhar",
      "juntos"
    ],
    "available": "Estou disponível para novos projetos. Se você procura um desenvolvedor web, entre em contato para conversarmos sobre seu próximo projeto.",
    "description": "Braulio Rosario, desenvolvedor web na República Dominicana. Conheça projetos criados com React, Next.js e Astro.",
    "alts": [
      "Logo da cooperativa CAPOCOOT",
      "Logo da Promotora Roiz",
      "Logo da Daily Power",
      "Logo da Universal Windows and Doors",
      "Logo da Boxing Event III"
    ]
  }
} as const;
export type Locale = keyof typeof translations;
export const localePath = (locale: Locale) => locale === "en" ? "/" : `/${locale}/`;
export const cvPath = (locale: Locale) => `/cv/Braulio-Rosario-CV-${locale.toUpperCase()}.pdf`;

