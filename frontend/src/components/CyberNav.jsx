import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "01", label: "WORK", path: "#work" },
  { id: "02", label: "ABOUT", path: "#about" },
  { id: "03", label: "CONTACT", path: "#contact" },
];

const CyberNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
      {/* Brand / Terminal Prompt */}
      <div className="text-cyber font-mono text-sm">
        <span className="opacity-50">sys.admin:</span>
        <span className="font-bold">~/amin_sarlak</span>
        <span className="animate-pulse">_</span>
      </div>

      {/* Code Tag Navigation */}
      <div className="flex gap-8">
        {navItems.map((item) => (
          <a key={item.id} href={item.path} className="group relative">
            <span className="font-mono text-sm text-gray-500 group-hover:text-cyber transition-colors duration-300">
              <span className="opacity-50 mr-1">[</span>
              <span className="text-xs opacity-70 mr-2">{item.id}</span>
              <span className="font-bold tracking-wider">{item.label}</span>
              <span className="opacity-50 ml-1">]</span>
            </span>
            {/* Underline Glitch Effect */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default CyberNav;
