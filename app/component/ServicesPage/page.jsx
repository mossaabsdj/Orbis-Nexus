"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  FileText,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Conseil & Stratégie",
    icon: Briefcase,
    desc: "Nous offrons des solutions personnalisées pour le développement et la croissance durable des entreprises.",
  },
  {
    title: "Informatique & Numérique",
    icon: Code,
    desc: "Accompagnement complet en ingénierie logicielle, développement sur mesure, et transformation digitale.",
  },
  {
    title: "Design & Création Visuelle",
    icon: Palette,
    desc: "Conception moderne et élégante d'identités visuelles, UX/UI et communication digitale.",
  },
  {
    title: "Marketing & Communication",
    icon: TrendingUp,
    desc: "Stratégies marketing efficaces pour renforcer votre présence et votre notoriété sur le marché.",
  },
  {
    title: "Gestion Administrative & Support",
    icon: FileText,
    desc: "Services de secrétariat, assistance à la gestion, et accompagnement administratif complet.",
  },
  {
    title: "Investissement & Conseil Financier",
    icon: DollarSign,
    desc: "Études de faisabilité, analyse stratégique et accompagnement pour projets d'investissement.",
  },
];

export default function ModernServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-600/40 via-gray-700/30 to-gray-800/10 rounded-full blur-3xl animate-pulse opacity-70"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-gray-500/40 via-gray-700/30 to-gray-900/0 rounded-full blur-3xl animate-pulse opacity-60"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gray-700/40 via-gray-900/30 to-black/40 rounded-full blur-3xl animate-pulse opacity-50"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Header Section */}
      <section className="relative z-10 text-center pt-24 pb-16 px-6 md:px-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/50 border border-neutral-700/50 mb-8 backdrop-blur-sm">
          <span className="text-sm text-gray-300 font-medium">
            Découvrez nos expertises
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
            Nos Services
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Découvrez nos domaines d'expertise à travers un ensemble de services
          modernes, pensés pour propulser vos projets et renforcer votre
          croissance.
        </p>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-500/50" />
          <div className="w-2 h-2 rounded-full bg-gray-500" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-600/50" />
        </div>
      </section>

      {/* Services Carousel */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / itemsPerView}%` }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`relative group h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                        hoveredCard === i ? "scale-105" : ""
                      }`}
                    >
                      {/* Card Background with Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-900/20 opacity-50 transition-opacity duration-500 ${
                          hoveredCard === i ? "opacity-100" : ""
                        }`}
                      />

                      {/* Glass Effect Background */}
                      <div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-xl border border-neutral-700/50" />

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-700/20 opacity-0 blur-2xl transition-opacity duration-500 ${
                          hoveredCard === i ? "opacity-30" : ""
                        }`}
                      />

                      {/* Content */}
                      <div className="relative p-6 md:p-8 h-full flex flex-col min-h-[380px] md:min-h-[420px]">
                        {/* Icon */}
                        <div
                          className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-6 transform transition-transform duration-500 shadow-lg ${
                            hoveredCard === i ? "rotate-6 scale-110" : ""
                          }`}
                        >
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                          {service.desc}
                        </p>

                        {/* Action Link */}
                        <div
                          className={`flex items-center gap-2 text-sm font-medium text-gray-300 transition-all duration-300 ${
                            hoveredCard === i
                              ? "translate-x-2 text-gray-100"
                              : ""
                          }`}
                        >
                          <span>En savoir plus</span>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform duration-300 ${
                              hoveredCard === i ? "translate-x-1" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Animated Border */}
                      <div
                        className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                          hoveredCard === i ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-600 to-gray-800 p-[2px]">
                          <div className="w-full h-full rounded-3xl bg-neutral-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-800/80 backdrop-blur-xl border border-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/80 transition-all duration-300 hover:scale-110 group z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-800/80 backdrop-blur-xl border border-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/80 transition-all duration-300 hover:scale-110 group z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
            </button>
          )}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-12 bg-gradient-to-r from-gray-600 to-gray-800"
                  : "w-6 bg-neutral-700 hover:bg-neutral-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
