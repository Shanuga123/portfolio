import {
  backend,
  recipe,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  ajax,
  metas,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  XE,
  tailwind,

  threejs,
  vegify,
  smart,
  university,
  travel,
  satfocus,
  typescript,
  web,
  YIT,
  a2z,
  ex,
  mob,
  lanka,
 
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
    title: "Wordpress Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Mobile App  Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Intern",
    company_name: "Yarl IT Hub",
    icon: YIT,
    iconBg: "#383E56",
    date: "July 2021 - December 2021",
    points: [
      " Spearheaded the development of Aki an e-learning platformdesigned to enhance the educational experience for school students.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Boosted student engagement by 25% through interactive modules and multimedia content.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "a2z expert",
    icon: a2z,
    iconBg: "#E6DEDD",
    date: "April 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using WordPress, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer (Intern)",
    company_name: "XElite Software Solutions",
    icon: XE,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications & Mobile Applications using WordPress, Mern, FullStack, Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "Working with Shanuga has been an absolute pleasure and is highly recommended by far! ",
    name: "Thirukumaran Thilaganathan",
    designation: "CEO",
    company: "SatFocus Ltd",
    
  },
  {
    testimonial:
      "Shanuga is awesome. She has exceeded my expectations and delivered great work. I would recommend to use her service.",
    name: "janenalayah",
    designation: "CEO",
    company: "JJSmart Movers",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Roshan",
    designation: "CEO",
    company: "XElite Software Solutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Recipe",
    description:
      "Web-based platform that that offers a wide variety of dishes, complete with step-by-step instructions, ingredient lists, and user-friendly search and filtering options. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/Shanuga123/codealpha_tasks.git",
  },
  {
    name: "Ajax Alarm",
    description:
      "Web application that that enables real-time product updates without page reloads. The site enables easy alarm system purchases with streamlined filtering.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
     
    ],
    image: ajax,
    source_code_link: "https://www.ajaxalarmuk.com/",
  },
  {
    name: "Exploring Lanka",
    description:
      "A comprehensive travel agency platform that allows users to add hotels,restaurants,activities and rental cars.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: lanka,
    source_code_link: "https://www.exploringlanka.com/",
  },
  {
    name: "Vegify",
    description:
      "Vegify is a vibrant platform that showcases a diverse range of fresh vegetables, providing users with insights into their nutritional value and culinary applications. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: vegify,
    source_code_link: "https://github.com/Shanuga123/CodeClauseInternship_Productlandingpage.git",
  },
  {
    name: "ExperimentVox",
    description:
      "ExperimentVox is a dynamic website that showcases a wide range of science experiments, providing clear instructions and educational insights. ",
    tags: [
      
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: ex,
    source_code_link: "https://www.experimentvox.com/",
  },
  {
    name: "JJSmart Movers",
    description:
      "JJSmartMovers is a professional moving service website showcasing top-notch relocation services across Australia. It offers efficient and reliable moving solutions.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
     
    ],
    image: smart,
    source_code_link: "https://jjsmartmovers.com/",
  },
  {
    name: " University Management System",
    description:
      "The university management system centralizes student, course, and faculty data for improved efficiency and access.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: university,
    source_code_link: "https://github.com/Shanuga123/UniversityManagement_System.git",
  }, {
    name: "TravelMate",
    description:
      "This travel web app provides real-time navigation and location-based services, offering users an intuitive map experience with interactive features similar to Google Maps.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      
    ],
    image: travel,
    source_code_link: "https://travelblissings.netlify.app/",
  },
  {
    name: "Satfocus Security",
    description:
      "Stafocus is a UK-based security product promotion website that highlights cutting-edge solutions for safeguarding both residential and commercial properties.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      
    ],
    image: satfocus,
    source_code_link: "https://security.satfocus.co.uk",
  },
  {
    name: "Mobile App",
    description:
      "Marudhi Online Shopping is a mobile app that offers a convenient e-commerce experience with an easy-to-use interface, secure payments, and personalized product recommendations.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      
    ],
    image: mob,
    source_code_link: "https://github.com/",
  },
  {
    name: "MetaVersus",
    description:
      "Marudhi Online Shopping is a mobile app that offers a convenient e-commerce experience with an easy-to-use interface, secure payments, and personalized product recommendations.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion/3D",
        color: "green-text-gradient",
      },
      
    ],
    image: metas,
    source_code_link: "https://jazzy-biscochitos-59cb1b.netlify.app/",
  },
  
];

export { experiences, projects, services, technologies, testimonials };

