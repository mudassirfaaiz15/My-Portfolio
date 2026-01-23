import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Education } from "@/app/components/Education";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navigation />
        <main className="pt-16">
          <div id="home">
            <Hero />
          </div>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}