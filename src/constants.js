import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';


import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import canva from './assets/tech_logo/canva.png';
// Experience Section Logo's
import intel from './assets/company_logo/intel.png';
import WSA from './assets/company_logo/WSA.png';

// EducationSection Logo's
import ssgmce from './assets/education_logo/ssgmce.png';
import samarth from './assets/education_logo/samarth.png';
import balshivaji from './assets/education_logo/balshivaji.jpg';  
 

// Project Section Logo's
import Amazon from './assets/work_logo/Amazon.png'
import calculator from './assets/work_logo/calculator.png'
import Website from './assets/work_logo/Website.png'
import wordFreq from './assets/work_logo/wordFreq.jpg'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    
      { name: 'Redux', logo: reduxLogo },
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     ,
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Canva', logo: canva },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

  export const experienceInfo = [
  {
    id:0,
    img:WSA,
    company:"Web Stack Academy",
    role: "MERN Stack Developer",
    date:"September 3 2025 - October 3 2025",
    desc:"Learn the frontend and backend development of web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Make a fullstack project using the MERN stack, name is \"HomelyHub.\"",
    skills:["HTML","CSS","JavaScript","React JS","Node JS","MongoDB","Express JS","MERN"],
  },

  {
    id: 1,
    img: intel,
    company: "Intel",
    role: "AI-ML Intern",
    date: "September 20 2025 - Present",
    desc: "Training in AI and ML concepts and build project using Python and AI/ML concept.",
    skills: [
      "Python",
      "AI",
      "ML", 
    ],
  },
  ]
  export const education = [
    {
      id: 0,
      img:ssgmce,
      College: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
      date: "2023 - Present",
      Grade: "9.15 CGPA",
      desc: "Currently pursuing my Bachelor's degree in Computer Science and Engineering from Shri Sant Gajanan Maharaj College of Engineering, Shegaon.",
      degree: "BE(Computer Science and Engineering)",
    },
    {
      id: 1,
      img: samarth,
      College: "Shri Samarth Junior college of Science,Akola ",
      date: "2021-2023",
      Grade: "76.33%",
      desc: "I completed my Higher Secondary education in Science from Shri Samarth Junior college of Science, Akola, under the Maharashtra State Board.",
      degree: "HSC - Science with Computer Science",
    },
    {
      id: 2,
      img: balshivaji,
      College: "Balshivaji English School Anjangaon Surji.",
      date: "2007-2021",
      Grade: "98.40%",
      desc: "I completed Secondary School Certification(SSC)  from Balshivaji English School Anjangaon Surji, under the Maharashtra State Board, with 98.40%.",
      degree: "SSC",
    },
   
  ];

  
  export const projects = [
    {
      id: 0,
      title: "Practical Website ",
      description:
        "Developed and deployed a responsive, user-friendly website on Netlify showcasing 10 practicals of HTML, CSS, JavaScript, and PHP as part of my 3rd semester curriculum. The project is designed to provide an engaging learning experience where users can interact with practical examples directly, rather than just reading lab manuals",
        image:Website,
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/AnushkaBhuskat/Website",
      webapp: "http://projtwebsite.netlify.app",

    },
    {
      id: 1,
      title: "Calculator with ReactJS",
      description:
        "An interactive, responsive calculator built using React JS, showcasing modern frontend development practices. It performs basic arithmetic operations and features a clean, user-friendly interface that works seamlessly across devices. The project demonstrates component-based architecture, state management, and event handling in React, emphasizing reusable and modular code.",
      image :calculator,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AnushkaBhuskat/React_Calculator",
      webapp: "https://anushkabhuskat.github.io/React_Calculator/",
    },
    {
      id: 3,
      title: "Amazon Clone",
      description:
        "Developed a responsive Amazon-inspired e-commerce website using HTML and CSS. The project replicates the layout and design of a modern online shopping platform, focusing on user interface, navigation, and product presentation.",
      image: Amazon,
      tags: [ "HTML", "CSS"],
      github: "https://github.com/AnushkaBhuskat/amazonclone",
      webapp: "https://anushkabhuskat.github.io/amazonclone/",
    },
    {
      id: 3,
      title: "WordFreq with python",
      description:
        "his Python project takes a text input, breaks it into words, and calculates the frequency of each. It’s a simple yet useful program for learning text processing, string manipulation, and working with dictionaries.",
      image: wordFreq,
      tags: [ "Python"],
      github: "https://github.com/AnushkaBhuskat/wordfreq1",
      webapp: "https://colab.research.google.com/drive/1LQqjDcIq70Wgq1FL7c4aRN9Yxz2Y8AVR"
    },
  ];
