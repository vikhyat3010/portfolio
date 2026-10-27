import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  h2s,
  sih,
  fleetsense,
  sustainify,
  tripguide,
  cpp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Hack2Skill Hackathon",
    icon: h2s,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed Sustainify, a web-based waste management platform focused on making waste collection more organized and accessible",
      "Built interactive and responsive user interfaces using HTML, CSS, and JavaScript.",
      "Designed a user-friendly experience to encourage responsible waste disposal and sustainable practices.",
      "Explored community-driven features to promote environmental awareness and encourage eco-friendly habits.",
    ],
  },
  {
    title: "Team Lead and Full stack Developer",
    company_name: "SIH 2026",
    icon: sih,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led the development of FleetSense, an intelligent fleet management platform designed to improve vehicle monitoring and logistics operations.",
      "Developed dashboard interfaces using React and Vite to visualize vehicle health, fleet status, and operational metrics.",
      "Integrated interactive maps using Leaflet to visualize routes and analyze traffic conditions, route safety, and potential delays.",
      "Collaborated with team members to design solutions for fleet monitoring, route risk assessment, and predictive maintenance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fleet Sense AI",
    description:
      "FleetSense is a smart fleet management platform designed to help logistics companies monitor vehicles, analyze routes, and improve transportation safety and operational efficiency. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fleetsense,
    source_code_link: "https://github.com/vikhyat3010/fleet-sense",
  },
  {
    name: "Sustainify",
    description:
      "Sustainify is a web-based waste management platform designed to make waste collection easier and encourage people to adopt sustainable habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sustainify,
    source_code_link: "https://github.com/vikhyat3010/EcoTrack",
  },
  {
    name: "AI Assistant",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };