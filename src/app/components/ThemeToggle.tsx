import { Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useTheme } from "@/app/components/ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="relative w-10 h-10 rounded-full"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ 
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 90
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ 
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -90
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-orange-400" />
        </motion.div>
      </Button>
    </motion.div>
  );
}