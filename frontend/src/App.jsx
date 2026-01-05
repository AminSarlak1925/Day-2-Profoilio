// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "./components/MatrixRain";
import QuantumHero from "./components/QuantumHero";
import Navbar from "./components/Navbar"; // <--- IMPORT THIS

// ... (Your projects data structure remains the same) ...
const projects = [
  {
    id: "01",
    title: "NEURAL NET V1",
    desc: "AI-driven architectural optimization engine using Python & TensorFlow.",
    tech: ["Python", "AI", "React"],
  },
  {
    id: "02",
    title: "CYBER COMMERCE",
    desc: "Decentralized trading platform with 3D WebGL visualization.",
    tech: ["Solidity", "Three.js", "Node"],
  },
  {
    id: "03",
    title: "QUANTUM DASH",
    desc: "Real-time high-frequency data analytics dashboard.",
    tech: ["Vue", "D3.js", "Firebase"],
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Smooth fade/slide animations
  const pageVariants = {
    initial: { opacity: 0, y: 20, filter: "blur(5px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(5px)" },
  };

  return (
    <div className="relative min-h-screen bg-matrix-bg text-gray-300 font-mono overflow-x-hidden selection:bg-matrix-green selection:text-black">
      {/* 1. GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <MatrixRain />
        {/* Vignette & Texture Overlays */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg via-transparent to-matrix-bg pointer-events-none"></div>
      </div>

      {/* 2. NEW NAVIGATION COMPONENT */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* 3. MAIN CONTENT */}
      {/* Added pt-24 to ensure content isn't hidden behind the fixed navbar */}
      <main className="relative z-10 pt-24 pb-24 px-4 md:px-0 max-w-6xl mx-auto flex flex-col justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {/* HOME SECTION */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <QuantumHero />
            </motion.div>
          )}

          {/* WORK SECTION */}
          {activeSection === "work" && (
            <motion.div
              key="work"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-8 md:mb-12 border-b border-matrix-green/30 pb-4 mx-2 md:mx-0">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                  PROJECT INDEX
                </h2>
                <span className="text-matrix-green font-mono text-xs md:text-sm mb-1 md:mb-2 animate-pulse">
                  /// 3 ITEMS FOUND
                </span>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-matrix-card border border-matrix-border p-6 md:p-8 hover:border-matrix-green hover:shadow-neon transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* ... (Existing Project Card Code) ... */}
                    {/* Keep your existing card code here, abbreviated for brevity */}
                    <div className="absolute inset-0 bg-[#00ff41]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative z-10">
                      <span className="text-matrix-green font-bold text-xl md:text-2xl">
                        0{project.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 mt-2">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 mb-6">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase font-bold px-2 py-1 border border-matrix-border text-gray-400 group-hover:border-[#00ff41] group-hover:text-[#00ff41] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ABOUT SECTION */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-4xl mx-auto w-full px-2 md:px-4"
            >
              {/* ... (Keep your existing About Section code) ... */}
              <div className="bg-black/80 border border-matrix-border backdrop-blur-md overflow-hidden shadow-neon p-6 md:p-12 text-center">
                <h2 className="text-3xl text-white font-bold mb-4">
                  USER: AMIN SARLAK
                </h2>
                <p className="text-gray-400">
                  Full Stack Engineer // Vaasa, Finland
                </p>
                {/* ... rest of your about content ... */}
              </div>
            </motion.div>
          )}

          {/* CONTACT SECTION */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-2xl mx-auto w-full px-2 md:px-4"
            >
              {/* ... (Keep your existing Contact Form code) ... */}
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 text-center tracking-tighter">
                ESTABLISH{" "}
                <span className="text-[#00ff41] animate-pulse">UPLINK</span>
              </h2>
              <form className="mt-8 space-y-4 bg-matrix-card p-6 border border-matrix-border relative">
                {/* ... existing form inputs ... */}
                <input
                  type="text"
                  placeholder="IDENTITY"
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-[#00ff41] outline-none"
                />
                <button className="w-full py-3 bg-[#00ff41] text-black font-bold hover:bg-white transition-all">
                  TRANSMIT
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. FOOTER */}
      <footer className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-gray-900 p-2 z-50 flex justify-between items-center text-[10px] text-gray-600 font-mono px-4 md:px-6 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></div>
          <span>SYS.ONLINE</span>
        </div>
        <div className="hidden md:block">REACT // VITE // TAILWIND</div>
        <div>V.2.0.26</div>
      </footer>
    </div>
  );
};

export default App;
