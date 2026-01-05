import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "./components/MatrixRain";
import QuantumHero from "./components/QuantumHero";

// Data Structure
const projects = [
  {
    id: "01",
    title: "NEURAL_NET_V1",
    desc: "AI-driven architectural optimization engine using Python & TensorFlow.",
    tech: ["Python", "AI", "React"],
  },
  {
    id: "02",
    title: "CYBER_COMMERCE",
    desc: "Decentralized trading platform with 3D WebGL visualization.",
    tech: ["Solidity", "Three.js", "Node"],
  },
  {
    id: "03",
    title: "QUANTUM_DASH",
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

      {/* 2. RESPONSIVE NAVIGATION */}
      {/* Container is flex-col on mobile to stack Logo on top of Menu if needed, or flex-row for compact */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
        {/* Logo */}
        <div
          onClick={() => setActiveSection("home")}
          className="pointer-events-auto cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00ff41] rounded-full shadow-neon group-hover:animate-pulse"></div>
          <span className="text-white font-bold tracking-[0.2em] text-xs md:text-sm group-hover:text-[#00ff41] transition-colors">
            AMIN.SARLAK
          </span>
        </div>

        {/* Menu Pills */}
        <div className="pointer-events-auto flex items-center gap-1 md:gap-2 bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg">
          {["HOME", "WORK", "ABOUT", "CONTACT"].map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`
                  relative px-3 py-2 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest transition-all duration-300 border
                  ${
                    isActive
                      ? /* ACTIVE: Solid Green Background, BLACK text (High Contrast) */
                        "bg-[#00ff41] text-black border-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.4)] scale-105"
                      : /* INACTIVE: Transparent, Gray text */
                        "bg-transparent text-gray-500 border-transparent hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. MAIN CONTENT */}
      <main className="relative z-10 pt-32 pb-24 px-4 md:px-0 max-w-6xl mx-auto flex flex-col justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {/* --- HOME SECTION --- */}
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

          {/* --- WORK SECTION --- */}
          {activeSection === "work" && (
            <motion.div
              key="work"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-8 md:mb-12 border-b border-matrix-green/30 pb-4 mx-2 md:mx-0">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                  PROJECT_INDEX
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
                    {/* Hover Green Fill */}
                    <div className="absolute inset-0 bg-[#00ff41]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-matrix-green font-bold text-xl md:text-2xl">
                          0{project.id}
                        </span>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                          <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#00ff41] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 mb-6 leading-relaxed">
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

          {/* --- ABOUT SECTION --- */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-4xl mx-auto w-full px-2 md:px-4"
            >
              <div className="bg-black/80 border border-matrix-border backdrop-blur-md overflow-hidden shadow-neon">
                {/* Terminal Header */}
                <div className="bg-[#111] p-3 flex items-center justify-between border-b border-matrix-border">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-mono">
                    user: amin_sarlak
                  </div>
                </div>

                <div className="p-6 md:p-12 space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Tech Frame for Photo */}
                    <div className="w-24 h-24 md:w-32 md:h-32 border border-[#00ff41] p-1 relative shrink-0">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00ff41]"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00ff41]"></div>
                      <img
                        src="/src/assets/002.png"
                        alt="Profile"
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                    </div>

                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                        <span className="text-[#00ff41] font-bold mr-2">
                          &gt;
                        </span>
                        Architecting digital reality. Specialized in{" "}
                        <span className="text-white font-bold bg-[#00ff41]/10 px-1">
                          high-performance web systems
                        </span>{" "}
                        and artificial intelligence integration.
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-xs md:text-sm mt-6 border-t border-gray-800 pt-4">
                        <div>
                          <span className="text-gray-600 block text-[10px] mb-1">
                            CURRENT_LOC
                          </span>
                          <span className="text-white">Vaasa, Finland</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block text-[10px] mb-1">
                            ROLE
                          </span>
                          <span className="text-[#00ff41]">
                            Full-Stack Eng.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- CONTACT SECTION --- */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-xl mx-auto w-full px-2 md:px-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4 text-center tracking-tighter">
                ESTABLISH
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold text-[#00ff41] mb-8 md:mb-12 text-center tracking-tighter animate-pulse">
                UPLINK
              </h2>

              <form className="space-y-4 md:space-y-6 bg-matrix-card p-6 md:p-8 border border-matrix-border relative">
                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#00ff41]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#00ff41]"></div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#00ff41] tracking-widest uppercase">
                      [ IDENTITY ]
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black border border-gray-800 p-3 md:p-4 text-white text-sm focus:border-[#00ff41] focus:shadow-neon outline-none transition-all"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-[#00ff41] tracking-widest uppercase">
                      [ FREQUENCY ]
                    </label>
                    <input
                      type="email"
                      className="w-full bg-black border border-gray-800 p-3 md:p-4 text-white text-sm focus:border-[#00ff41] focus:shadow-neon outline-none transition-all"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-[#00ff41] tracking-widest uppercase">
                    [ DATA_PACKET ]
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-black border border-gray-800 p-3 md:p-4 text-white text-sm focus:border-[#00ff41] focus:shadow-neon outline-none transition-all resize-none"
                    placeholder="Message content..."
                  />
                </div>

                <button className="w-full py-3 md:py-4 bg-[#00ff41] text-black font-bold tracking-widest hover:bg-white hover:shadow-neon transition-all duration-300 text-xs md:text-sm uppercase">
                  Transmit_Data()
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
