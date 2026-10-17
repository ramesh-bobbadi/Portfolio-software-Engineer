export const profile = {
  name: "Bobbadi Ramesh",
  title: "Software Engineer | Full-Stack Developer",
  email: "bobbadiramesh6@gmail.com",
  phone: "+91 9542380408",
  github: "https://github.com/ramesh-bobbadi",
  linkedin: "https://linkedin.com/in/bobbadi-ramesh",
  location: "Hyderabad, India",
};

// Set to a real PDF URL (e.g. an uploaded asset) to show the "Download Resume" button.
export const resumeUrl: string | null = null;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const focusAreas = [
  "Full-Stack Web Development",
  "Backend APIs and Database Design",
  "AI API Integration",
  "Application Performance and Debugging",
];

export const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "React Router",
      "Axios",
      "Context API",
    ],
  },
  {
    title: "Backend Development and APIs",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Third-Party API Integration",
      "JWT Authentication",
      "Prisma ORM",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Oracle SQL", "Relational SQL", "Query Optimization", "MongoDB (Basic)"],
  },
  {
    title: "Python and AI",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "OpenAI API (LLM)",
      "XGBoost",
      "GitHub Copilot",
      "Claude",
    ],
  },
  {
    title: "Tools and Practices",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "Linux CLI",
      "Software Testing",
      "API Testing",
      "Debugging",
      "Code Reviews",
    ],
  },
];

export type Project = {
  name: string;
  fullName: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
  image?: "leaveflow" | "offlineiq" | "crashrisk";
};

export const projects: Project[] = [
  {
    name: "LeaveFlow",
    fullName: "Employee Leave Management System",
    description:
      "A full-stack employee leave management web application built from scratch in two weeks.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
    ],
    features: [
      "JWT login for employees and administrators.",
      "Employee leave requests and status tracking.",
      "Administrative approval and rejection workflows.",
      "Soft deletion through account deactivation while preserving leave history.",
      "Account-status checks on API requests so deactivated users are logged out on their next request.",
    ],
    github: "https://github.com/ramesh-bobbadi/Employee-Leave-Management-System",
    image: "leaveflow",
  },
  {
    name: "OfflineIQ",
    fullName: "Interview Practice Learning Platform",
    description:
      "A responsive interview practice web application for technical, HR, and behavioral interview preparation.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "Local Storage"],
    features: [
      "Works offline after the first load.",
      "Converts spoken answers into text.",
      "Scores answers using keyword matching.",
      "Supports technical, HR, and behavioral interview practice.",
      "Includes Random and Sequential interview modes.",
      "Topic categories for Programming, Front-end, Back-end, Database, Deployment, Tools, and Core Concepts.",
    ],
    live: "https://offlineiq.onrender.com/",
    image: "offlineiq",
  },
  {
    name: "CrashRisk AI",
    fullName: "Car Crash Risk Prediction",
    description:
      "A machine-learning app that predicts fatal car crash risk using a Django REST API and React frontend.",
    tech: ["Python", "Django REST Framework", "React.js", "XGBoost", "Random Forest"],
    features: [
      "Machine-learning prediction workflow.",
      "Django REST API integration.",
      "React-based frontend.",
      "Model evaluation using RMSE and R².",
    ],
    github: "https://github.com/ramesh-bobbadi/CarCrashRate-Prediction",
    image: "crashrisk",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "SHNOOR International LLC",
    period: "July 2026 – Present",
    location: "Remote",
    points: [
      "Developed backend functionality for a hospital management platform using Node.js, Express.js, Prisma ORM, and PostgreSQL.",
      "Worked on performance and reliability improvements for a multi-tenant AI hiring platform.",
      "Investigated slow database queries through load testing, debugging, and performance analysis.",
      "Participated in code reviews and led 5+ developer knowledge-sharing sessions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Meta Minds",
    period: "March 2026 – June 2026",
    location: "Vijayawada",
    points: [
      "Developed People Portal, an HR management web application using Python and Django.",
      "Built RESTful APIs with Django REST Framework.",
      "Integrated the OpenAI API to generate summaries and replies.",
      "Implemented JWT authentication and role-based access control.",
      "Performed testing and debugging.",
    ],
  },
  {
    role: "Linux System Administration Intern",
    company: "Red Hat",
    period: "July 2024 – August 2024",
    location: "Remote",
    points: [
      "Managed files, processes, and system operations using the Linux command line.",
      "Executed more than 20 system commands.",
    ],
  },
];

export const certifications = [
  {
    title: "Introduction to MongoDB, AI, and Vector Search",
    issuer: "MongoDB, Inc. and ICT Academy",
    url: "https://drive.google.com/file/d/1jwD9klsaTxzpWdzH4OKyYZ0OkmO3xiCI/view",
  },
  {
    title: "Linux Fundamentals Internship Certificate",
    issuer: "Red Hat",
    url: "https://drive.google.com/file/d/1581sYURqANiyd8Qa2JNfsm9xv6Xs4gVW/view",
  },
  {
    title: "Full Stack Python Developer Certification",
    issuer: "BDPS",
    url: "https://drive.google.com/file/d/1T19eUKLlOH8SclYeYlb9v5zy-3pCUUKz/view",
  },
];
