export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "AWS DevOps Intern",
    company: "Technical Hub Pvt Ltd",
    period: "May 2025 – July 2025",
    responsibilities: [
      "Gained hands-on experience with AWS services including EC2, S3, and IAM while exploring real-world cloud architecture patterns",
      "Analyzed resource utilization trends and suggested improvements aligned with operational efficiency and scalability",
      "Documented system behavior and troubleshooting workflows to improve reproducibility and team knowledge sharing",
      "Developed understanding of deployment workflows and infrastructure fundamentals in cloud environments"
    ]
  },
  {
    title: "Java Full Stack Intern",
    company: "Brain O Vision",
    period: "May 2025 – June 2025",
    responsibilities: [
      "Built responsive web components using HTML, CSS, and JavaScript, improving application stability by identifying and fixing UI and logic-level issues",
      "Participated in technical discussions with mentors to analyze functional requirements and translate them into implementable components",
      "Used Git and GitHub for version control, ensuring reproducible and collaborative development workflows",
      "Practiced clean coding standards while contributing in a peer-based agile environment"
    ]
  }
];
