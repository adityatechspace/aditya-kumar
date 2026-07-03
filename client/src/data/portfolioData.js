import profilePicture from "../assets/profile-picture.png"
import resume from "/Aditya_Kumar_Resume.pdf"
import navLogo from "/favicon.png"

const personal = {
    title: "Hi, I'm",
    firstName: "Aditya",
    secondName: "Kumar",
    role: "AI engineer",
    subtitle: ["Building AI-powered applications", "that solve real-world problems."],
    description: "Passionate about building intelligent software, automation tools, and scalable full-stack applications using modern AI technologies.",
    availability: "Available for opportunity",
    techStack: ["Python", "React", "Node.js", "FastAPI", "Gemini AI"],
    location: "Bengaluru, Karnataka-560064",
    profilePicture: profilePicture
  };

const portfolioData = {
  // ==========================
  // PERSONAL INFORMATION
  // ==========================

  personal,
  // ==========================
  // CONTACT
  // ==========================

  contact: {
    email: "adityaproinfo@gmail.com",

    phone: "+91 8102256694"
  },
  
  // ==========================
  // SOCIAL LINKS
  // ==========================

  social: {
    github: "",

    linkedin: "",

    twitter: "",

    leetcode: "",

    hackerrank: "",

    portfolio: ""
  },

  // ==========================
  // ABOUT
  // ==========================

  about: {
    title: "About Me",

    paragraphs: [
      "",

      "",

      ""
    ]
  },

  // ==========================
  // SKILLS
  // ==========================

  skills: {
    frontend: ["HTML", "CSS", "React"],

    backend: ["Node"],

    database: ["MySQL", "MongoDB"],

    programming: ["Javascript", "Python"],

    ai: ["Agentic AI"],

    devops: [],

    tools: ["Jypiter", "VS Code", "rander", "Vercel"],

    softSkills: ["Professional Communication", "Ethical"]
  },

  // ==========================
  // EXPERIENCE
  // ==========================

  experience: [
    {
      company: "Kriya NextWealth Pvt. Ltd.",

      logo: "",

      role: "process Associate",

      duration: "Present",

      location: "Bengaluru",

      type: "Full Time",

      description: "",

      responsibilities: [
        "",

        ""
      ],

      technologies: ["Python", "LLM", "Language Expert"]
    }
  ],

  // ==========================
  // EDUCATION
  // ==========================

  education: [
    {
      degree: "Bachelors of Computer Applications",

      institution: "Chandigarh University",

      location: "Punjab",

      duration: "2022 - 2025",

      cgpa: "8.50",

      logo: ""
    }
  ],

  // ==========================
  // CERTIFICATIONS
  // ==========================

  certifications: [
    {
      title: "AI based Fraud Detection Model",

      issuer: "Intel",

      year: "2025",

      credentialId: "",

      certificate: ""
    }
  ],

  // ==========================
  // PROJECTS
  // ==========================

  projects: [
    {
    title: "AI Portfolio",
    description: "An AI-powered portfolio with an intelligent chatbot.",
    image: "",
    technologies: ["React", "Node.js", "Gemini", "Tailwind CSS"],
    github: "https://github.com/...",
    demo: "https://..."
  },
  {
    title: "AI Fraud Detection",
    description: "Machine learning project for financial fraud detection.",
    image: "",
    technologies: ["Python", "FastAPI", "Scikit-learn"],
    github: "https://github.com/...",
    demo: "https://..."
  },
  {
    title: "Tic Tac Toe AI",
    description: "Unbeatable Tic Tac Toe using Minimax.",
    image: "",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/...",
    demo: "https://..."
  }
  ],

  // ==========================
  // SERVICES (Optional)
  // ==========================

  services: [
    {
      title: "",

      description: "",

      icon: ""
    }
  ],

  // ==========================
  // ACHIEVEMENTS
  // ==========================

  achievements: [
    {
      title: "",

      description: "",

      year: ""
    }
  ],

  // ==========================
  // STATS
  // ==========================

  stats: {
    projects: 3,

    certifications: 10,

    technologies: 10,

    experience: 3,
  },

  // ==========================
  // HERO BUTTONS
  // ==========================

  buttons: {
    project: {
      text: "View Projects",

      link: "#projects"
    },

    resume: {
      text: "Resume",

      link: resume
    },

    contact: {
      text: "Contact Me",
      link: "#contact"
    },

    aiAssistant: {
      text: "✨ AI Assistant",
      link: "#ai-assistant",
      popUp: "👋 Try my AI Portfolio Assistant"
    }
  },

  // ==========================
  // NAVIGATION
  // ==========================

  navigation: {
    title: `${personal.firstName} ${personal.secondName}`,
    subtitle : "Portfolio",
    logo: navLogo,
    },

  navLinks: [
    {text: "Home", link: "home"},

    {text: "About", link: "about"},

    {text: "Skills", link: "skills"},

    {text: "Projects", link: "projects"},

    {text: "Experience", link: "experience"},

    {text: "Education", link: "education"},

    {text: "Contact", link: "contact"},
   ],
  // ==========================
  // FOOTER
  // ==========================

  footer: {
    copyright:
      "© 2026 Aditya Kumar. All rights reserved.",

    madeWith:
      "React + Node.js + Gemini AI"
  },

  // ==========================
  // SEO
  // ==========================

  seo: {
    title: "",

    description: "",

    keywords: []
  },

  // ==========================
  // CHATBOT
  // ==========================

  chatbot: {
    welcomeMessage:
      "Hey there! How can help you today?",

    fallbackMessage:
      "Opps, I can't answer out of this portfolio",

    personality:
      "Friendly, professional and concise."
  }
};

export default portfolioData;