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
  RiBootstrapLine,
  RiFirebaseLine,
  RiGithubLine,
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
    "With 2 years of front-end development experience, I build efficient, scalable web applications.  always curious about interesting projects.",
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
    title: "Use PopCorn app",
    description:
      "A React application that provides users with a way to explore movies, rate them, and manage their watched movies list.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://usepopcorn-addtowatch.netlify.app",
    sourceCode: "https://github.com/mirwais-sanaie/usePopCorn-app",
  },
  {
    id: 3,
    title: "Travel list app",
    description:
      "A React app that allows travellers to add items they need for their next trip The app will display the items that are added.",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://travel-lits.web.app",
    sourceCode: "https://github.com/mirwais-sanaie/TravelList-app",
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
    title: "Pay Bill app",
    description:
      "A bill management app with tools of divide bill among friends, add friend, edit and remove it.",
    techStack: ["React", "Html", "Css"],
    imgSrc: project5,
    link: "https://pay-bill-withfriend.netlify.app",
    sourceCode: "https://github.com/mirwais-sanaie/eatNsplit-app",
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
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-[#9755ed]" />,
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
    yearRange: "2025",
    role: "Project: WorldWise Website",
    company: "Personal Project",
    description:
      "Developed a real-world project using React (useReducer, Context API, useEffect), Authentication, Page Routing, and Form Validation. Implemented CSS3 Modules, Date Picker, and Leaflet library for map integration.",
    techStack: ["React", "Css3 module", "ContextApi"],
  },
  {
    yearRange: "2024",
    role: "Project: Use PopCorn app",
    company: "Personal Project",
    description:
      "Created a React application that allows users to explore movies, rate them, and manage their watched movies list. Utilized React (useState, useEffect, localStorage) and Tailwind CSS for styling.",
    techStack: ["React", "Tailwindcss", "Local-storage"],
  },
  {
    yearRange: "2024",
    role: "Project: Travel list app",
    company: "Personal Project",
    description:
      "Built a travel list website that enables users to create and manage their packing list for upcoming trips. Leveraged React and Tailwind CSS for a responsive and user-friendly interface.",
    techStack: ["React", "Tailwind CSS"],
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
