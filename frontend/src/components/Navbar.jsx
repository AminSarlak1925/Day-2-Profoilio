// frontend/src/components/Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "01", label: "HOME" },
    { id: "02", label: "WORK" },
    { id: "03", label: "ABOUT" },
    { id: "04", label: "CONTACT" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
    <>
      {/* --- DESKTOP & TOP BAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10">
        {/* Logo / Brand */}
        <div
          onClick={() => {
            setActiveSection("home");
            setIsOpen(false);
          }}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-3 h-3 bg-[#00ff41] rounded-full shadow-[0_0_10px_#00ff41] group-hover:animate-pulse"></div>
          <span className="text-white font-mono font-bold tracking-[0.2em] text-sm group-hover:text-[#00ff41] transition-colors">
            AMIN.SARLAK
          </span>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-2 bg-black/50 p-1 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.label.toLowerCase();
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.label.toLowerCase())}
                className={`
                  relative px-6 py-2 rounded-full text-xs font-bold font-mono tracking-widest transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#00ff41] text-black shadow-[0_0_15px_rgba(0,255,65,0.4)] scale-105"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Button (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#00ff41] p-2 focus:outline-none z-50"
        >
          {/* Simple SVG Icon for Menu/Close */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            {navItems.map((item) => {
              const isActive = activeSection === item.label.toLowerCase();
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection(item.label.toLowerCase());
                    setIsOpen(false);
                  }}
                  className={`
                    text-3xl font-mono font-bold tracking-tighter
                    ${
                      isActive
                        ? "text-[#00ff41] drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]"
                        : "text-gray-500 hover:text-white"
                    }
                  `}
                >
                  <span className="text-sm text-[#00ff41] opacity-50 mr-4 align-middle font-normal">
                    {item.id} //
                  </span>
                  {item.label}
                </motion.button>
              );
            })}

            <div className="absolute bottom-10 text-[10px] text-gray-600 font-mono">
              SYSTEM_STATUS:{" "}
              <span className="text-[#00ff41] animate-pulse">ONLINE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
