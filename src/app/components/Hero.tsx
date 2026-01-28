import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900 px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-rose-300/30 dark:bg-rose-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/30 dark:bg-amber-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={floatingAnimation}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mohammed Mudassir Faaiz
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block bg-gradient-to-r from-gray-700 via-orange-600 to-gray-700 dark:from-gray-300 dark:via-orange-400 dark:to-gray-300 bg-clip-text text-transparent">
              AI/ML Engineer | Cloud Enthusiast | Full Stack Developer
            </span>
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Rajahmundry, India</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-5 h-5" />
              <span>+91 9392819889</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5" />
              <a href="mailto:mudassirfaaiz@gmail.com" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                mudassirfaaiz@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          B.Tech IT student specializing in AI/ML and Cloud Computing. Building scalable solutions with Python, TensorFlow, and AWS.
          Passionate about creating impactful technology for real-world problems.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 hover:from-rose-700 hover:via-orange-700 hover:to-amber-700 dark:from-rose-500 dark:via-orange-500 dark:to-amber-500 text-white shadow-lg shadow-orange-500/50">
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" variant="outline" className="border-rose-600 dark:border-rose-400 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950">
              <a href="https://www.linkedin.com/in/mudassirfaaiz15/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" variant="outline" className="border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950">
              <a href="https://github.com/mudassirfaaiz15" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" variant="outline" className="border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950">
              <a href="https://vercel.com/mohammed-mudassir-faaizs-projects" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L24 22H0L12 1z" />
                </svg>
                Vercel
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
