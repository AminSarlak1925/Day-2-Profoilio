import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import LightLogo from "../assets/light.png";
import ProfilePic from "../assets/002.png";

const QuantumHero = () => {
  const containerRef = useRef(null);
  const [rotationSpeed, setRotationSpeed] = useState(20);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );
    const newSpeed = Math.max(2, Math.min(20, distance / 50));
    setRotationSpeed(newSpeed);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[60vh] flex flex-col lg:flex-row items-center justify-center pt-10"
    >
      {/* Left Text */}
      <div className="flex-1 order-2 lg:order-1 z-10 space-y-6 text-center lg:text-left lg:pl-10">
        <div className="inline-block px-3 py-1 border border-matrix-green/30 bg-matrix-green/10">
          <span className="font-mono text-matrix-green text-xs tracking-widest">
            SYSTEM_ONLINE // V.4.0
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
          THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-matrix-green">
            QUANTUM
          </span>{" "}
          <br />
          DEVELOPER
        </h1>

        <p className="font-mono text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm">
          {`> Architecting intelligent systems.`} <br />
          {`> Fusing Full-Stack engineering with AI.`}
        </p>

        <div className="pt-4">
          <button className="px-8 py-4 bg-matrix-green text-black font-bold font-mono hover:bg-white transition-all duration-300">
            INIT_PROJECT()
          </button>
        </div>
      </div>

      {/* Right Visuals */}
      <div className="flex-1 order-1 lg:order-2 flex items-center justify-center relative z-10 mb-12 lg:mb-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: rotationSpeed,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute w-[400px] h-[400px] opacity-20 pointer-events-none"
        >
          {/* Force the logo to be green using CSS filters */}
          <img
            src={LightLogo}
            alt="Orbit"
            className="w-full h-full object-contain brightness-0 invert sepia saturate-100 hue-rotate-[90deg]"
          />
        </motion.div>

        <div className="relative w-64 h-64 group">
          <div className="absolute inset-0 rounded-full border border-matrix-green/50" />
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#111] relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src={ProfilePic}
              alt="Amin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumHero;
