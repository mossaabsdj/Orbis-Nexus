"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, Clock } from "lucide-react";
import ContactModal from "@/app/component/ContactModal/page";

export default function HomePage() {
  const [selectedFarm, setSelectedFarm] = useState("Home");
  const servicesRef = useRef(null);
  const [constactModalOpen, setContactModalOpen] = useState(false);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-gray-800 text-gray-100">
      {/* Background */}
      <ContactModal
        isOpen={constactModalOpen}
        setIsOpen={setContactModalOpen}
      />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-600/40 via-gray-700/30 to-gray-800/10 blur-[120px] opacity-70 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gray-500/40 via-gray-700/30 to-gray-900/0 blur-[140px] opacity-60 animate-pulse" />
        <div className="absolute top-[25%] left-[10%] w-[700px] h-[700px] bg-gradient-to-r from-gray-700/40 via-gray-900/30 to-black/40 rounded-full blur-[150px] opacity-50 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-16 py-32 lg:py-40 max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="space-y-6 max-w-2xl z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs font-medium text-gray-300">
              Agence Digitale de Nouvelle Génération
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Orbis Nexus
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Transformez votre vision en{" "}
              <span className="text-gray-100 font-semibold relative">
                réalité digitale
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-800"></span>
              </span>
              . Solutions innovantes en design, développement et stratégie
              numérique pour propulser votre entreprise vers le succès.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={scrollToServices}
              className="group px-6 py-4 text-base font-bold bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-xl shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Découvrir Nos Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => setContactModalOpen(true)}
              className="px-6 py-4 text-base font-bold border-2 border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:border-neutral-600 hover:text-white rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Contactez-Nous
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                150+
              </div>
              <div className="text-xs text-gray-500">Projets Réalisés</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-xs text-gray-500">Satisfaction Client</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-xs text-gray-500">Support Dédié</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center z-10">
          <div className="relative w-[280px] h-[320px] md:w-[380px] md:h-[420px] lg:w-[450px] lg:h-[500px]">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gray-500/20 rounded-2xl blur-3xl opacity-40 animate-pulse"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-neutral-700/50 shadow-2xl">
              <img
                src="/images/logo.jpeg"
                alt="Agence Orbis Nexus"
                className="w-full h-full object-cover brightness-95"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-gray-400 rounded-tl-xl"></div>
              <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-gray-500 rounded-br-xl"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-neutral-900/90 border border-neutral-700 rounded-xl p-3 backdrop-blur-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Excellence</div>
                  <div className="text-[10px] text-gray-400">
                    Qualité Premium
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Expertise Reconnue
              </h3>
              <p className="text-sm text-gray-400">
                Plus de 10 ans d'expérience dans le domaine du digital
              </p>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Équipe Dédiée</h3>
              <p className="text-sm text-gray-400">
                Professionnels passionnés à votre écoute 24/7
              </p>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Livraison Rapide</h3>
              <p className="text-sm text-gray-400">
                Respect des délais avec une qualité irréprochable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Placeholder */}
      <div ref={servicesRef} className="relative z-10">
        {/* ServicesPage component would go here */}
      </div>
    </main>
  );
}
