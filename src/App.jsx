import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Demos } from "@/pages/Demos";
import { FutsalAnalysisDemos } from "@/pages/FutsalAnalysisDemos";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/demos" element={<Demos />} />
            <Route
              path="/projects/1-futsal-analysis-sportscore/demos"
              element={<FutsalAnalysisDemos />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
