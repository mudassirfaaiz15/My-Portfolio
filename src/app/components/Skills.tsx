import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Brain, Code, Database, Wrench, MessageSquare, Award, Zap } from "lucide-react";
import { motion } from "motion/react";

import { skillCategories } from "@/data/skills";
import { Globe } from "lucide-react";

export function Skills() {
  const iconMap = {
    Code: <Code className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Wrench: <Wrench className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
    Award: <Award className="w-6 h-6" />,
    MessageSquare: <MessageSquare className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Floating particles */}
      <motion.div
        className="absolute top-10 left-1/4 w-2 h-2 bg-orange-500 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-3 h-3 bg-rose-500 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1
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
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Brain className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">Technical Skills</h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  rotateZ: 2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 relative overflow-hidden group">
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <motion.span
                        className="text-orange-600 dark:text-orange-400"
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {iconMap[category.iconName as keyof typeof iconMap]}
                      </motion.span>
                      <span className="text-gray-900 dark:text-white">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{
                            scale: 1.15,
                            y: -3,
                            transition: { type: "spring", stiffness: 400 }
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-800 dark:hover:text-orange-300 transition-colors cursor-pointer"
                          >
                            {skill}
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
