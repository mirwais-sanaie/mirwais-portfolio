import { TbBrandTypescript } from "react-icons/tb";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import project3 from "../../public/project3.png";
import project4 from "../../public/project4.png";
import project5 from "../../public/project5.png";
import project6 from "../../public/project6.png";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiFirebaseLine,
  RiGithubLine,
  RiNextjsLine,
} from "@remixicon/react";
import { RiCodeSSlashLine } from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Mirwais Sanaie",
  role: "Front-End Developer",
  subheading:
    "With 3 years of front-end development experience, I build efficient, scalable web applications.  always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "WorldWise Website",
    description:
      "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences.",
    techStack: ["React", "Html", "Css", "ContextApi"],
    imgSrc: project1,
    link: "https://worldwise-app-delta.vercel.app",
    sourceCode: "https://github.com/mirwais-sanaie/Worldwise-app",
  },
  {
    id: 2,
    title: "Hotel Management",
    description:
      "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences.",
    techStack: ["Next js", "React js", "Tailwind css", "Supabase"],
    imgSrc: project2,
    link: "https://hotel-management-sage-five.vercel.app/",
    sourceCode: "https://github.com/mirwais-sanaie/Hotel-Management",
  },
  {
    id: 3,
    title: "Hotel web dashboard",
    description:
      "A React application that provides users with a way to explore movies, rate them, and manage their watched movies list.",
    techStack: ["React js", "supabase", "React query", "Styled component"],
    imgSrc: project3,
    link: "https://wild-oasis-hotel-beta.vercel.app/",
    sourceCode: "https://github.com/mirwais-sanaie/wild-oasis-hotel",
  },
  {
    id: 4,
    title: "Shopping list Website",
    description:
      "A Taking note app with these tools save item , delete , edit. Secure and fully customized",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://shopping-list-self.netlify.app",
    sourceCode: "https://github.com/mirwais-sanaie/shopping-list",
  },
  {
    id: 5,
    title: "Artist's world",
    description:
      "A bill management app with tools of divide bill among friends, add friend, edit and remove it.",
    techStack: [
      "React",
      "Tailwind css",
      "Shadcn Ui",
      "React query",
      "Supabase",
    ],
    imgSrc: project5,
    link: "https://github.com/mirwais-sanaie/Artist-s-world",
    sourceCode: "https://artist-s-world-x5kk.vercel.app/",
  },
  {
    id: 6,
    title: "Restaurant Website",
    description:
      "A responsive restaurant website that showcases the menu, location, and contact information.",
    techStack: ["Html", "css"],
    imgSrc: project6,
    link: "https://restaurant-univer.netlify.app",
    sourceCode: "https://github.com/mirwais-sanaie/restaurant-web",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript className="text-blue-500" />,
  },
  {
    name: "ReactJs",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "NextJs",
    icon: <RiNextjsLine className="text-[#ffffff]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },

  {
    name: "FireBase",
    icon: <RiFirebaseLine className="text-yellow-400" />,
  },
  {
    name: "GitHub",
    icon: <RiGithubLine className="text-white" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024",
    role: "Project: WorldWise Website",
    company: "Personal Project",
    description:
      "Developed a real-world project using React (useReducer, Context API, useEffect), Authentication, Page Routing, and Form Validation. Implemented CSS3 Modules, Date Picker, and Leaflet library for map integration.",
    techStack: ["React", "Css3 module", "ContextApi"],
  },
  {
    yearRange: "2025",
    role: "Project: Hotel Management Website",
    company: "Personal Project",
    description:
      "full-featured React web application that allows hotel employees to manage cabins, bookings, and guests.",
    techStack: ["ReactJs", "NextJs", "Tailwindcss", "Supabase"],
  },
  {
    yearRange: "2025",
    role: "Project: Hotel web dashboard",
    company: "Personal Project",
    description:
      "This application is designed to manage hotel operations, including sales statistics, cabin management, user management, booking management, and various customization options. And so much more!",
    techStack: ["React", "Tailwind CSS", "Supabase"],
  },
  {
    yearRange: "2024",
    role: "Project: Shopping list Website",
    company: "Personal Project",
    description:
      "Developed a note-taking app using React (useState, useEffect, Routing, localStorage) and Tailwind CSS. Features include saving items, deleting, and editing.",
    techStack: ["React", "Tailwind CSS"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor in Computer Science",
    institution: "Herat University",
    duration: "2022 - ongoing",
    description:
      "Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Advanced JavaScript",
    institution: "Online Platforms (Udemy, Coursera)",
    duration: "2022 - 2024",
    description:
      "Completed multiple online courses and certifications in JavaScript. Gained expertise in key JavaScript concepts such as asynchronous programming (Promises, async/await, event loop) ,algorithms,data structures , and modern JavaScript (ES6+).",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Hacker Rank",
    duration: "2025",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];
