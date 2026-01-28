export interface ProjectItem {
    title: string;
    description: string;
    highlights: string[];
    tags: string[];
    link?: string;
}

export const projects: ProjectItem[] = [
    {
        title: "DevFlow Guardian — Developer Productivity & Wellbeing Platform",
        description: "A full-stack developer productivity platform demonstrating real-world SaaS architecture, deployed on Vercel",
        highlights: [
            "Built and deployed a full-stack developer productivity platform using TypeScript, Vite, Supabase, and Vercel, demonstrating real-world SaaS architecture",
            "Implemented onboarding, dashboards, and AI mentor features, improving UX realism and product depth beyond typical portfolio projects",
            "Designed PostgreSQL schemas with RLS policies, enabling secure, multi-user data isolation",
            "Added Playwright and Vitest testing infrastructure, increasing code reliability and engineering maturity",
            "Established CI/CD workflow with GitHub and Vercel, enabling continuous deployment of a live application"
        ],
        tags: ["TypeScript", "Vite", "Supabase", "Vercel", "PostgreSQL", "Playwright", "Vitest", "CI/CD"],
        link: "https://apex-devflow-1.vercel.app/"
    },
    {
        title: "FASAL SATHI: AI-Powered Multilingual Crop Intelligence Platform",
        description: "An AI-driven crop advisory system providing real-time recommendations for smallholder farmers",
        highlights: [
            "Designed and built using Python and TensorFlow to provide real-time crop recommendations",
            "Developed computer vision-based crop disease detection module trained on labeled plant image datasets",
            "Implemented multilingual voice interface (English, Hindi, Telugu, Marathi) using Web Speech API",
            "Architected modular and scalable system integrating crop insights, weather data, and market pricing",
            "Focused on real-world impact by aligning technical decisions with usability and accessibility"
        ],
        tags: ["Python", "TensorFlow", "Computer Vision", "Web Speech API", "AI/ML"]
    },
    {
        title: "AWS Resource Tracker & Auto Clean-Up System",
        description: "Automated monitoring system to identify unused or idle cloud resources",
        highlights: [
            "Built automated monitoring system using Python and AWS services to identify unused resources (EC2, S3)",
            "Designed solution with scalability in mind, supporting modular tracking of multiple AWS services",
            "Implemented cost optimization strategies for cloud infrastructure management"
        ],
        tags: ["Python", "AWS", "EC2", "S3", "Cloud Computing", "DevOps"]
    },
    {
        title: "ATS Score Checker – Resume Optimization Web App",
        description: "Web-based ATS resume analyzer improving resume compatibility by 30–40%",
        highlights: [
            "Built resume parsing and scoring engine to evaluate resumes against industry-relevant criteria",
            "Developed features for keyword matching, skill gap detection, and improvement suggestions",
            "Deployed application on Vercel and made it accessible to real users",
            "Applied concepts of NLP, text processing, and UI/UX design"
        ],
        tags: ["NLP", "Python", "Web Development", "Vercel", "React"],
        link: "https://ats-by-faaiz.vercel.app/"
    }
];
