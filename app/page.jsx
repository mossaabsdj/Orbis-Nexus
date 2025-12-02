"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NavBar from "@/app/component/NavBar/page";
import ServicesPage from "@/app/component/ServicesPage/page";
import HeroPage from "@/app/component/HeroPage/page";
import CarsPage from "@/app/component/CarsPage/page";
export default function HomePage() {
  const [selectedFarm, setSelectedFarm] = useState("Home");
  const servicesRef = useRef(null);
  const CarsRef = useRef(null);

  // Smooth scroll to services section
  // Scroll functions
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCars = () => {
    CarsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <NavBar
        SC={scrollToCars}
        SS={scrollToServices}
        select={setSelectedFarm}
        selected_from_DescoverPage={selectedFarm}
      />

      {/* ===== MAIN CONTAINER ===== */}
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-gray-800 text-gray-100">
        {/* ===== BACKGROUND SHAPES ===== */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-600/40 via-gray-700/30 to-gray-800/10 blur-[120px] opacity-70 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gray-500/40 via-gray-700/30 to-gray-900/0 blur-[140px] opacity-60 animate-pulse"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute top-[25%] left-[10%] w-[700px] h-[700px] bg-gradient-to-r from-gray-700/40 via-gray-900/30 to-black/40 rounded-full blur-[150px]"
          />
        </div>

        {/* ===== HERO SECTION ===== */}
        <HeroPage />
        {/* ===== SERVICES SECTION ===== */}
        <div ref={servicesRef}>
          <ServicesPage />
        </div>
        {/* ===== Cars SECTION ===== */}
        <div ref={CarsRef}>
          <CarsPage />
        </div>
        {/* ===== FOOTER ===== */}
        <footer className="border-t border-neutral-800 py-8 text-center text-gray-500 text-sm relative z-10">
          © 2025 Orbis Nexus. Tous droits réservés.
        </footer>
      </main>
    </>
  );
}
