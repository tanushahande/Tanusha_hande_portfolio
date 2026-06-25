export const siteConfig = {
  name: "Tanusha Hande",
  title: "Tanusha Hande | Software Engineer | AI & Full Stack Developer",
  description:
    "Software Engineer with experience in Java, Spring Boot, ReactJS, microservices, and AI-powered automation. Building scalable enterprise applications and intelligent systems at Amdocs.",
  url: "https://tanushahande.dev",
  ogImage: "/images/profile.jpg",
  phone: "+91 9699732616",
  links: {
    linkedin: "https://www.linkedin.com/in/tanusha-hande-460498284",
    email: "mailto:tanushahande0312@gmail.com",
  },
  contactEmail: "tanushahande0312@gmail.com",
};

export const heroTitles = [
  "Software Developer",
  "Java & Spring Boot Developer",
  "Full Stack Developer",
  "AI Enthusiast",
  "ReactJS Developer",
];

export const stats = [
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Achievements", value: 8, suffix: "+" },
];

export interface SkillItem {
  name: string;
  icon?: string;
  iconType?: "devicon" | "simple";
  color?: string;
}

export const skillCategories: Record<string, SkillItem[]> = {
  Backend: [
    { name: "Java", icon: "java/java-original", iconType: "devicon" },
    { name: "Spring Boot", icon: "spring/spring-original", iconType: "devicon" },
    { name: "Spring MVC", icon: "spring/spring-original", iconType: "devicon" },
    { name: "Hibernate", icon: "hibernate/hibernate-original", iconType: "devicon" },
    { name: "Microservices", icon: "docker/docker-original", iconType: "devicon" },
    { name: ".NET Core", icon: "dot-net/dot-net-original", iconType: "devicon" },
    { name: "Golang", icon: "go/go-original-wordmark", iconType: "devicon" },
    { name: "Python", icon: "python/python-original", iconType: "devicon" },
    { name: "RabbitMQ", icon: "rabbitmq/rabbitmq-original", iconType: "devicon" },
    { name: "REST APIs", icon: "fastapi", iconType: "simple", color: "00F5D4" },
  ],
  Frontend: [
    { name: "ReactJS", icon: "react/react-original", iconType: "devicon" },
    { name: "Angular", icon: "angular/angular-original", iconType: "devicon" },
    { name: "TypeScript", icon: "typescript/typescript-original", iconType: "devicon" },
    { name: "Next.js", icon: "nextjs/nextjs-original", iconType: "devicon" },
    { name: "HTML5", icon: "html5/html5-original", iconType: "devicon" },
    { name: "CSS3", icon: "css3/css3-original", iconType: "devicon" },
    { name: "Bootstrap", icon: "bootstrap/bootstrap-original", iconType: "devicon" },
    { name: "Tailwind CSS", icon: "tailwindcss", iconType: "simple", color: "06B6D4" },
  ],
  Database: [
    { name: "MySQL", icon: "mysql/mysql-original", iconType: "devicon" },
    { name: "SQL", icon: "microsoftsqlserver/microsoftsqlserver-plain", iconType: "devicon" },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original", iconType: "devicon" },
    { name: "Oracle", icon: "oracle/oracle-original", iconType: "devicon" },
    { name: "MongoDB", icon: "mongodb/mongodb-original", iconType: "devicon" },
    { name: "Grafana", icon: "grafana/grafana-original", iconType: "devicon" },
    { name: "Kafka", icon: "apachekafka/apachekafka-original", iconType: "devicon" },
  ],
  "Cloud & DevOps": [
    { name: "Docker", icon: "docker/docker-original", iconType: "devicon" },
    { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark", iconType: "devicon" },
    { name: "CI/CD", icon: "githubactions", iconType: "simple", color: "FFFFFF" },
    { name: "Jenkins", icon: "jenkins/jenkins-original", iconType: "devicon" },
    { name: "Git", icon: "git/git-original", iconType: "devicon" },
    { name: "GitLab", icon: "gitlab", iconType: "simple", color: "FC6D26" },
    { name: "Jira", icon: "jira", iconType: "simple", color: "0052CC" },
    { name: "OpenStack", icon: "openstack/openstack-original", iconType: "devicon" },
  ],
  "AI & Emerging Tech": [
    { name: "LangGraph", icon: "langchain", iconType: "simple", color: "1C3C3C" },
    { name: "Qdrant", icon: "qdrant", iconType: "simple", color: "FF3366" },
    { name: "Ollama", icon: "ollama", iconType: "simple", color: "FFFFFF" },
    { name: "MCP", icon: "anthropic", iconType: "simple", color: "D4A574" },
    { name: "Prompt Engineering", icon: "openai", iconType: "simple", color: "412991" },
    { name: "Agentic AI", icon: "huggingface", iconType: "simple", color: "FFD21E" },
    { name: "Generative AI", icon: "googlecloud", iconType: "simple", color: "4285F4" },
  ],
  "Tools & Practices": [
    { name: "Postman", icon: "postman", iconType: "simple", color: "FF6C37" },
    { name: "DSA", icon: "leetcode", iconType: "simple", color: "FFA116" },
    { name: "Agile", icon: "atlassian", iconType: "simple", color: "0052CC" },
    { name: "Django", icon: "django/django-plain", iconType: "devicon" },
    { name: "R Language", icon: "r/r-original", iconType: "devicon" },
    { name: "Tableau", icon: "tableau", iconType: "simple", color: "E97627" },
  ],
};

export interface ExperienceProject {
  name: string;
  highlights: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ExperienceProject[];
  metrics?: { label: string; value: string }[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Amdocs",
    role: "Software Developer",
    period: "Aug 2025 – Present",
    location: "Pune, India",
    projects: [
      {
        name: "Agentic OS",
        highlights: [
          "Engineered an AI-driven Test Automation Agent for telecom applications, accelerating test execution and reducing manual intervention through one-click automation.",
          "Built Python and Golang microservices to orchestrate automated test workflows with real-time execution monitoring.",
          "Created responsive ReactJS dashboards and integrated RESTful APIs for real-time visibility into test status and system analytics.",
          "Enhanced automation coverage and platform reliability by partnering with product, QA, and engineering teams.",
        ],
      },
      {
        name: "Ginger & Ginger Play",
        highlights: [
          "Developed automation testing solutions using Angular, .NET MVC, and REST APIs, improving platform usability and efficiency.",
          "Designed frontend components, backend business logic, and API integrations for scalable application development.",
          "Built Android TV Automation capabilities for end-to-end user journey and device functionality validation.",
          "Collaborated with product owners, developers, and QA teams on platform enhancements and modernization initiatives.",
        ],
      },
    ],
    metrics: [
      { label: "Response Time", value: "30%↓" },
      { label: "User Engagement", value: "50%↑" },
      { label: "Module Dev Time", value: "20%↓" },
    ],
  },
];

export const projects = [
  {
    id: "lifeos",
    title: "LifeOS – Multi-Agent Productivity Platform",
    period: "Mar 2026 – Jun 2026",
    description:
      "Designed and developed a multi-agent AI system to automate career planning, learning recommendations, financial tracking, and startup intelligence.",
    features: [
      "Multi-agent architecture with LangGraph orchestration",
      "Vector-based memory layer with PostgreSQL, Redis, and Qdrant",
      "Local LLM integration using Ollama and open-source models",
      "MCP-based integration layer for files, calendars, and productivity tools",
      "Semantic search and contextual knowledge persistence",
    ],
    techStack: [
      "Python",
      "LangGraph",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "Ollama",
      "MCP",
      "ReactJS",
    ],
    gradient: "from-primary/20 to-secondary/20",
  },
];

export const researchProjects = [
  {
    title: "Enhancing University Data Infrastructure with Hybrid Cloud",
    period: "Sep 2024 – May 2025",
    type: "Academic Major Project",
    description:
      "Proposed a hybrid cloud model to manage sensitive university data securely, combining on-premise private cloud with public cloud for non-sensitive data using MongoDB Atlas and OpenStack, with a university portal for efficient data access.",
    techStack: ["OpenStack", "MongoDB Atlas", "Hybrid Cloud", "Python", "Security"],
  },
  {
    title: "GenBee – Genetic & Honeybee Optimization for Cloud Load Balancing",
    period: "Jan 2024 – Apr 2024",
    type: "Academic Mini Project",
    description:
      "Developed an innovative algorithm combining genetic and honeybee algorithms for efficient load management in cloud computing, with serial implementation optimizing resource allocation and system performance.",
    techStack: ["Python", "Genetic Algorithm", "Cloud Computing", "Optimization"],
  },
  {
    title: "Customer Segmentation using Clustering Algorithm",
    period: "Jan 2023 – Jul 2023",
    type: "Research Project",
    description:
      "Utilized Python to analyze customer data using clustering algorithms, segmenting customers based on purchasing behaviors and demographics to derive actionable insights for targeted marketing.",
    techStack: ["Python", "R Language", "Clustering", "Machine Learning"],
  },
];

export const publications = [
  {
    title: "GenBee: Hybridization for Cloud Load Balancing",
    publisher: "IEEE",
    status: "Published",
    description:
      "Published research demonstrating advanced understanding of cloud computing load balancing through hybrid genetic and honeybee optimization algorithms.",
    year: "2024",
    link: "#",
  },
  {
    title: "Securing University Data using Hybrid Cloud",
    publisher: "IEEE",
    status: "Published",
    description:
      "Published IEEE research on implementing a hybrid cloud model using OpenStack and MongoDB Atlas for secure and efficient university data management.",
    year: "2025",
    link: "#",
  },
];

export const achievements = [
  {
    title: "Backend Performance Boost",
    description: "Improved microservices response time by 30% via backend optimizations",
    icon: "zap",
  },
  {
    title: "Enhanced User Engagement",
    description: "Increased user engagement by 50% with real-time data features",
    icon: "trending",
  },
  {
    title: "IEEE Research Publications",
    description: "Two IEEE published research papers in cloud computing and data security",
    icon: "award",
  },
  {
    title: "University Project Exhibition Winner",
    description: "First place for secure hybrid cloud model with data management portal",
    icon: "trophy",
  },
  {
    title: "Technical Leadership",
    description: "Technical Head, SNDT ACM Students' Chapter — led initiatives & events",
    icon: "users",
  },
  {
    title: "Ideathon Finalist",
    description: "University ideathon finalist showcasing creativity and problem-solving",
    icon: "lightbulb",
  },
];

export const education = {
  degree: "B.Tech (Computer Science & Technology)",
  institution: "Usha Mittal Institute of Technology",
  period: "2021 – 2025",
  location: "Mumbai, India",
  cgpa: "7.75 / 10.00",
};

export const aboutSummary = [
  "Software Engineer with experience in designing and developing full-stack applications using Java, Spring Boot, ReactJS, and REST APIs.",
  "Currently working at Amdocs as a Software Developer, building AI-driven automation platforms, microservices, and modern web applications in Pune, India.",
  "Skilled in microservices architecture, SQL/NoSQL databases, CI/CD, and cloud technologies with a strong foundation in software design, problem-solving, and delivering high-performance enterprise applications in Agile environments.",
];

export const brandingCards = [
  "Software Engineer",
  "AI Builder",
  "Problem Solver",
  "Tech Explorer",
];

export const aiResponses: Record<string, string> = {
  default:
    "Hi! I'm Tanu AI, Tanusha's personal assistant. Ask me about her skills, projects, experience, or career journey!",
  introduce:
    "Tanusha Hande is a Software Developer at Amdocs in Pune, specializing in AI-driven test automation, Java/Spring Boot microservices, ReactJS dashboards, and full-stack development. She holds a B.Tech in Computer Science from Usha Mittal Institute of Technology.",
  projects:
    "Tanusha's flagship project is LifeOS — a multi-agent productivity platform using LangGraph, Qdrant, PostgreSQL, Redis, and Ollama with MCP integrations. Her research includes hybrid cloud university infrastructure and GenBee load balancing algorithm, both published in IEEE.",
  skills:
    "Tanusha excels in Java, Spring Boot, Python, Golang, ReactJS, Angular, .NET Core, Kafka, RabbitMQ, Docker, AWS, PostgreSQL, MongoDB, and AI technologies including LangGraph, Ollama, Qdrant, and MCP.",
  journey:
    "From B.Tech at UMIT Mumbai to Software Developer at Amdocs, Tanusha's journey spans enterprise automation, AI agents, and IEEE-published research in cloud computing. She led technical initiatives as Head of SNDT ACM Students' Chapter.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];
