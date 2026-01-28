export interface SkillCategory {
    title: string;
    iconName: string;
    skills: string[];
    color: string;
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        iconName: "Code",
        skills: ["Python", "Java"],
        color: "from-rose-500 to-orange-500"
    },
    {
        title: "Web Technologies",
        iconName: "Zap",
        skills: ["HTML", "CSS", "JavaScript"],
        color: "from-orange-500 to-amber-500"
    },
    {
        title: "Databases",
        iconName: "Database",
        skills: ["MySQL", "MongoDB"],
        color: "from-amber-500 to-yellow-500"
    },
    {
        title: "Tools & Platforms",
        iconName: "Wrench",
        skills: ["Git", "GitHub", "Postman", "VS Code", "AWS", "Vercel"],
        color: "from-rose-500 to-pink-500"
    },
    {
        title: "Machine Learning / AI",
        iconName: "Brain",
        skills: ["TensorFlow", "Computer Vision", "Model Training", "NLP"],
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Core Concepts",
        iconName: "Award",
        skills: ["Data Structures", "Algorithms", "SDLC", "OOP", "Debugging", "Testing"],
        color: "from-amber-500 to-orange-500"
    },
    {
        title: "Soft Skills",
        iconName: "MessageSquare",
        skills: ["Research", "Technical Communication", "Collaboration", "Problem Solving"],
        color: "from-yellow-500 to-amber-500"
    },
    {
        title: "Languages",
        iconName: "Globe",
        skills: ["English", "Hindi", "Telugu", "Japanese (N5 - pursuing)"],
        color: "from-rose-500 to-amber-500"
    }
];
