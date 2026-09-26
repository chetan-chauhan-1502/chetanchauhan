export const PROJECTS = [
  {
    title: "Somoorish",
    description:
      "Premium confectionery and catering website featuring modern UI design, responsive layouts, optimized performance, SEO-friendly architecture, and smooth user experience.",
    image: "/projects/chetan-chauhan-frontend-somoorish-catering.png",
    tech: ["React", "Tailwind CSS", "Bootstrap"],
    liveUrl: "https://somoorish.vercel.app/",
  },
  {
    title: "Pintola",
    description:
      "High-performance eCommerce-style frontend inspired by the Pintola brand, featuring product showcases, responsive design, optimized user experience, and modern web development practices.",
    image: "/projects/chetan-chauhan-frontend-pintola-ecommerce.png",
    tech: ["React", "Tailwind CSS", "Bootstrap"],
    liveUrl: "https://pintola.vercel.app/",
  },
  {
    title: "Travelodeal",
    description:
      "Travel booking and holiday deals platform with responsive design, optimized performance, intuitive user interface, and seamless browsing experience for travel packages and destinations.",
    image: "/projects/chetan-chauhan-frontend-travelodeal-portal.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.travelodeal.co.uk/",
  },
  {
    title: "CCMovies",
    description:
      "Modern movie streaming and discovery platform built with Next.js, featuring categorized content, SEO optimization, responsive design, fast performance, and an intuitive user experience.",
    image: "/projects/chetan-chauhan-frontend-ccmovies-streaming.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ccmovies.vercel.app/",
  },
  {
    title: "CC Shopping",
    description:
      "Interactive eCommerce storefront featuring product catalog browsing, dynamic category filters, cart state management, and a clean, responsive checkout workflow.",
    image: "/projects/chetan-chauhan-frontend-cc-shopping-store.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://ccshopping.vercel.app/",
  },
  {
    title: "CC Fresh Fruits",
    description:
      "Vibrant organic grocery and fruit delivery web platform highlighting seasonal produce, modern card grids, responsive product displays, and smooth animations.",
    image: "/projects/chetan-chauhan-frontend-fresh-fruits-app.png",
    tech: ["React", "Tailwind CSS", "Bootstrap"],
    liveUrl: "https://ccfreshfruits.vercel.app/",
  },
  {
    title: "CC ToDo List",
    description:
      "Streamlined productivity and task management web application offering instant task creation, completion tracking, persistent storage, and clutter-free interface design.",
    image: "/projects/chetan-chauhan-frontend-todo-list-app.png",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://cctodolist.vercel.app/",
  },
  {
    title: "CC Age Calculator",
    description:
      "Precision utility web tool computing exact chronological age in years, months, and days with strict date boundary validations and instant calculations.",
    image: "/projects/chetan-chauhan-frontend-age-calculator-tool.png",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://ccagecalculator.vercel.app/",
  },
];
export interface Skill {
  name: string;
  category: "frontend" | "styling" | "tools" | "cloud";
}

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React JS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },

  // Styling & UI
  { name: "Tailwind CSS", category: "styling" },
  { name: "shadcn/ui", category: "styling" },
  { name: "React Hook Form", category: "styling" },
  { name: "Sass & SCSS", category: "styling" },
  { name: "Bootstrap", category: "styling" },

  // Tools & AI
  { name: "Cursor AI", category: "tools" },
  { name: "Antigravity", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "GitHub Copilot", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Git", category: "tools" },

  // Cloud & DevOps
  { name: "Vercel", category: "cloud" },
  { name: "AWS", category: "cloud" },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Mazda Consultancy Services Pvt. Ltd.",
    period: "2024 - Present",
    isCurrent: true,
    description:
      "Designed and developed real-world business projects, including Somoorish and Pintola. Built responsive user interfaces, optimized website performance, implemented SEO best practices, and developed reusable frontend components using Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    period: "2023 - 2024",
    isCurrent: false,
    description:
      "Developed modern, responsive, and user-friendly web applications using React, Bootstrap, and Tailwind CSS. Collaborated on creating visually appealing interfaces while focusing on performance, usability, and responsive design principles.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Maharaja Krishnakumarsinhji Bhavnagar University",
    year: "2020 - 2023",
    description:
      "Graduated with 59.91%. Studied software development, programming fundamentals, database management systems, web technologies, and computer applications.",
  },

  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Shree Shayona Vidhyalaya, Botad",
    year: "2019 - 2020",
    description:
      "Completed Higher Secondary Education with 63.64%, focusing on academic excellence and foundational knowledge for higher studies.",
  },

  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Shree Shayona Vidhyalaya, Botad",
    year: "2017 - 2018",
    description:
      "Completed Secondary Education with 73.56%, building a strong foundation in mathematics, science, and analytical thinking.",
  },
];
