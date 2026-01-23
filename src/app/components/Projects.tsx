import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Code2, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-rose-300/20 dark:bg-rose-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Code2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">Projects</h2>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-1 lg:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div 
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <Card className="shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 relative overflow-hidden group">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-orange-500/5 to-amber-500/5 dark:from-rose-500/10 dark:via-orange-500/10 dark:to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-gray-900 dark:text-white">{project.title}</CardTitle>
                        <CardDescription className="text-base text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
                      </div>
                      {project.link && (
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }} 
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button asChild size="sm" variant="outline" className="border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex gap-3 text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-orange-600 dark:text-orange-400 mt-1.5">•</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
