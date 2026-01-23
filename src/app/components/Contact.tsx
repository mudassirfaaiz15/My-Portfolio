import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900 transition-colors relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-rose-300/30 dark:bg-rose-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-amber-300/30 dark:bg-amber-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 1
        }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Send className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <Card className="shadow-2xl shadow-orange-500/20 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900 dark:text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  className="grid gap-4 md:grid-cols-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="mailto:mudassirfaaiz@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-700 dark:to-orange-900/20 hover:from-orange-50 hover:to-rose-50 dark:hover:from-orange-900/30 dark:hover:to-rose-900/30 transition-all border border-gray-200 dark:border-gray-600"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">mudassirfaaiz@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919392819889"
                    className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-700 dark:to-orange-900/20 hover:from-orange-50 hover:to-rose-50 dark:hover:from-orange-900/30 dark:hover:to-rose-900/30 transition-all border border-gray-200 dark:border-gray-600"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">+91 9392819889</p>
                    </div>
                  </motion.a>

                  <motion.div 
                    className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-700 dark:to-orange-900/20 border border-gray-200 dark:border-gray-600 md:col-span-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rajahmundry, India</p>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="pt-6 border-t dark:border-gray-700">
                  <p className="text-center font-semibold text-gray-900 dark:text-white mb-4">Connect with me</p>
                  <motion.div 
                    className="flex flex-wrap gap-4 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      variants={itemVariants} 
                      whileHover={{ scale: 1.1, y: -5, rotate: 3 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 hover:from-rose-700 hover:via-orange-700 hover:to-amber-700 dark:from-rose-500 dark:via-orange-500 dark:to-amber-500 text-white shadow-lg shadow-orange-500/50">
                        <a href="https://www.linkedin.com/in/mudassirfaaiz15/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div 
                      variants={itemVariants} 
                      whileHover={{ scale: 1.1, y: -5, rotate: -3 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="outline" className="border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950">
                        <a href="https://github.com/mudassirfaaiz15" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div 
                      variants={itemVariants} 
                      whileHover={{ scale: 1.1, y: -5, rotate: 3 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="outline" className="border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950">
                        <a href="https://vercel.com/mohammed-mudassir-faaizs-projects" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L24 22H0L12 1z" />
                          </svg>
                          Vercel Projects
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div 
                      variants={itemVariants} 
                      whileHover={{ scale: 1.1, y: -5, rotate: -3 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button asChild variant="outline" className="border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950">
                        <a href="https://ats-by-faaiz.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          ATS Checker
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-12 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© 2026 Mohammed Mudassir Faaiz. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
