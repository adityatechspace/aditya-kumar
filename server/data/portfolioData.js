const portfolioData = {
  profile: {
    name: "Aditya Kumar",
    role: "AI Engineer & MERN Stack Developer",

    tagline:
      "Building AI-powered web applications with modern technologies.",

    email: "adityaproinfo@gmail.com",

    phone: "+91 8102256694",

    location: "India",

    profileImage: "/profile.png",

    resume: "/resume.pdf",

    socialLinks: {
      github: "https://github.com/yourusername",

      linkedin: "https://linkedin.com/in/yourusername",

      twitter: "https://twitter.com/yourusername",

      portfolio: "https://yourportfolio.com"
    }
  },

  about: {
    title: "About Me",

    description: `
I am an AI Engineer and Full Stack Developer
specializing in React, Node.js, Express,
and Generative AI solutions.

I enjoy building intelligent applications,
automation systems, AI assistants,
and scalable web platforms.
`
  },

  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST APIs"
    ],

    database: [
      "MongoDB",
      "Firebase"
    ],

    ai: [
      "OpenAI API",
      "Google Gemini",
      "Prompt Engineering",
      "LangChain",
      "Vector Databases"
    ],

    tools: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  },

  stats: [
    {
      label: "Projects",
      value: 47
    },

    {
      label: "Skills",
      value: 23
    },

    {
      label: "Clients",
      value: 15
    },

    {
      label: "Certifications",
      value: 12
    }
  ],

  projects: [
    {
      id: 1,

      title: "AI Resume Analyzer",

      description:
        "Resume screening platform powered by Gemini API.",

      technologies: [
        "React",
        "Node.js",
        "Gemini"
      ],

      github:
        "https://github.com/yourusername/resume-analyzer",

      live:
        "https://resume-analyzer.vercel.app",

      featured: true
    },

    {
      id: 2,

      title: "Portfolio AI Assistant",

      description:
        "AI chatbot trained on portfolio content.",

      technologies: [
        "React",
        "Express",
        "OpenAI"
      ],

      github:
        "https://github.com/yourusername/portfolio-ai",

      live:
        "https://portfolio-ai.vercel.app",

      featured: true
    },

    {
      id: 3,

      title: "Fraud Detection Dashboard",

      description:
        "Machine learning dashboard for fraud monitoring.",

      technologies: [
        "React",
        "Python",
        "TensorFlow"
      ],

      github:
        "https://github.com/yourusername/fraud-dashboard",

      live:
        "https://fraud-dashboard.vercel.app",

      featured: true
    }
  ],

  experience: [
    {
      company: "Tech Solutions Pvt Ltd",

      role: "Frontend Developer",

      duration: "2023 - 2024",

      description:
        "Built responsive React applications and REST API integrations."
    },

    {
      company: "AI Innovations",

      role: "AI Developer",

      duration: "2024 - Present",

      description:
        "Developing AI-powered products using OpenAI and Gemini."
    }
  ],

  certifications: [
    {
      title: "AWS Cloud Practitioner",

      issuer: "Amazon",

      year: "2024"
    },

    {
      title: "Google AI Essentials",

      issuer: "Google",

      year: "2024"
    },

    {
      title: "Meta Frontend Developer",

      issuer: "Meta",

      year: "2023"
    }
  ],

  education: [
    {
      degree:
        "Bachelor of Technology in Computer Science",

      institution:
        "XYZ University",

      year:
        "2021 - 2025"
    }
  ],

  testimonials: [
    {
      name: "John Smith",

      role: "CTO",

      company: "Tech Corp",

      review:
        "Outstanding developer with excellent problem-solving skills."
    },

    {
      name: "Sarah Johnson",

      role: "Project Manager",

      company: "Digital Solutions",

      review:
        "Delivered high-quality work on time and exceeded expectations."
    }
  ],

  chatbot: {
    welcomeMessage:
      "Hi! I'm Aditya's AI Portfolio Assistant. Ask me about skills, projects, certifications, experience, or education.",

    fallbackMessage:
      "I can only answer questions related to Aditya's portfolio. For general AI questions, please visit ChatGPT or Google Gemini."
  }
};

export default portfolioData;