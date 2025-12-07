"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Droplet,
  Gauge,
  Settings,
  Users,
  Navigation,
  Palette,
  Cpu,
  Fuel,
  Calendar,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import ContactModal from "@/app/component/ContactModalCars/page";
import { fetchData } from "@/lib/FetchData/page";

// ===== VARIABLES - ALL DATA IN ONE PLACE =====
const CAROUSEL_CONFIG = {
  autoPlayInterval: 5000,
  itemsPerView: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
};

const THEME = {
  colors: {
    primary: "from-gray-700 to-gray-900",
    primaryHover: "from-gray-600 to-gray-800",
    secondary: "from-gray-400 to-gray-600",
    background: "from-black via-neutral-900 to-gray-800",
    card: "bg-neutral-900/50",
    cardHover: "from-gray-700/10 to-transparent",
    border: "border-neutral-800",
    borderHover: "border-neutral-700",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      muted: "text-gray-400",
      link: "text-gray-100",
    },
  },
  effects: {
    blur: "backdrop-blur-sm",
    shadow: "shadow-xl shadow-black/40",
    glow: "bg-gray-500/20 blur-3xl opacity-40",
  },
};

const CONTENT = {
  title: "Collection Premium",
  subtitle: "Découvrez notre sélection de véhicules d'exception",
  badge: "Véhicules de Luxe",
  buttons: {
    viewDetails: "Voir Détails",
    previous: "Précédent",
    next: "Suivant",
  },
};

// ===== COMPONENT =====
export default function CarsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [constactModalOpen, setContactModalOpen] = useState(false);
  const [CARS_DATA, setCarsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);

        if (mobile) {
          setItemsPerView(CAROUSEL_CONFIG.itemsPerView.mobile);
        } else if (window.innerWidth < 1024) {
          setItemsPerView(CAROUSEL_CONFIG.itemsPerView.tablet);
        } else {
          setItemsPerView(CAROUSEL_CONFIG.itemsPerView.desktop);
        }
      }
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await fetchData({ method: "GET", url: "/api/Product" });
        if (data && Array.isArray(data)) {
          setCarsData(data);
        } else {
          setCarsData([]);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setCarsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const maxIndex = Math.max(0, CARS_DATA.length - itemsPerView);

  const next = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // Touch handlers for mobile (disabled swipe)
  const handleTouchStart = (e) => {
    if (!isMobile) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!isMobile) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile && touchStart - touchEnd > 75) {
      next();
    }
    if (!isMobile && touchStart - touchEnd < -75) {
      prev();
    }
  };

  const getSpecs = (car) => {
    const specs = [
      { icon: Zap, label: car.power, title: "Power" },
      { icon: Droplet, label: car.fuel, title: "Fuel Type" },
      { icon: Gauge, label: car.speed, title: "Top Speed" },
      { icon: Settings, label: car.transmission, title: "Transmission" },
      {
        icon: Users,
        label: car.seats ? `${car.seats} Seats` : null,
        title: "Seating",
      },
      {
        icon: Navigation,
        label: car.mileage ? `${car.mileage} km` : null,
        title: "Mileage",
      },
      { icon: Palette, label: car.color, title: "Color", isColor: true },
      { icon: Cpu, label: car.engine, title: "Engine" },
      {
        icon: Fuel,
        label: car.fuelCapacity ? `${car.fuelCapacity}L` : null,
        title: "Tank",
      },
      { icon: Calendar, label: car.year, title: "Year" },
    ].filter((spec) => spec.label);

    return specs;
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br ${THEME.colors.background} overflow-hidden`}
    >
      <ContactModal
        isOpen={constactModalOpen}
        setIsOpen={setContactModalOpen}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-600/40 via-gray-700/30 to-gray-800/10 rounded-full blur-3xl animate-pulse opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-gray-500/40 via-gray-700/30 to-gray-900/0 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gray-700/40 via-gray-900/30 to-black/40 rounded-full blur-3xl animate-pulse opacity-50" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Header */}
      <section className="relative z-10 text-center pt-24 pb-16 px-6 md:px-12">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${THEME.colors.card} ${THEME.colors.border} border ${THEME.effects.blur} mb-8`}
        >
          <span
            className={`text-sm ${THEME.colors.text.secondary} font-medium`}
          >
            {CONTENT.badge}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${THEME.colors.secondary}`}
          >
            {CONTENT.title}
          </span>
        </h1>

        <p
          className={`text-base md:text-lg lg:text-xl ${THEME.colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}
        >
          {CONTENT.subtitle}
        </p>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-500/50" />
          <div className="w-2 h-2 rounded-full bg-gray-500" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-600/50" />
        </div>
      </section>

      {/* Carousel */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="relative">
          {/* Cards Container */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {CARS_DATA.map((car, i) => {
                const specs = getSpecs(car);

                return (
                  <div
                    key={car.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div
                      className={`relative group h-full rounded-3xl overflow-hidden transition-all duration-500`}
                      onMouseEnter={() => !isMobile && setHoveredCard(i)}
                      onMouseLeave={() => !isMobile && setHoveredCard(null)}
                    >
                      {/* Card Background */}
                      <div
                        className={`absolute inset-0 z-0 bg-gradient-to-br from-gray-700/20 to-gray-900/20 opacity-50 transition-opacity duration-500 ${
                          hoveredCard === i ? "opacity-100" : ""
                        }`}
                      />

                      {/* Glass Effect */}
                      <div
                        className={`absolute inset-0 z-0 ${THEME.colors.card} ${THEME.effects.blur} border ${THEME.colors.border}`}
                      />

                      {/* Hover Glow */}
                      <div
                        className={`absolute inset-0 z-0 bg-gradient-to-br from-gray-500/20 to-gray-700/20 opacity-0 blur-2xl transition-opacity duration-500 ${
                          hoveredCard === i ? "opacity-30" : ""
                        }`}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col min-h-[550px] md:min-h-[600px]">
                        {/* Image */}
                        <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-6">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover brightness-95"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Category Badge */}
                          {car.category && (
                            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-sm">
                              <span className="text-xs text-gray-300 font-medium">
                                {car.category}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Car Info */}
                        <div className="flex-grow space-y-4">
                          <div>
                            <h3
                              className={`text-xl md:text-2xl font-bold ${THEME.colors.text.primary} mb-2 leading-tight`}
                            >
                              {car.name}- {car.year}
                            </h3>
                            {car.description && (
                              <p
                                className={`text-sm ${THEME.colors.text.secondary} leading-relaxed`}
                              >
                                {car.description}
                              </p>
                            )}
                          </div>

                          {/* Specs Grid */}
                          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                            {car.power && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Zap className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.power}
                                </span>
                              </div>
                            )}
                            {car.fuel && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Droplet className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.fuel}
                                </span>
                              </div>
                            )}
                            {car.fuelCapacity && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Fuel className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.fuelCapacity} L
                                </span>
                              </div>
                            )}
                            {car.speed && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Gauge className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.speed}
                                </span>
                              </div>
                            )}
                            {car.transmission && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Settings className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.transmission}
                                </span>
                              </div>
                            )}
                            {car.seats && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Users className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.seats} Seats
                                </span>
                              </div>
                            )}
                            {(car.mileage || car.mileage === 0) && (
                              <div className="flex flex-col items-center p-2 rounded-lg bg-neutral-800/50">
                                <Navigation className="w-4 h-4 text-gray-400 mb-1" />
                                <span className="text-xs text-gray-400">
                                  {car.mileage} km
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="mt-6 pt-6 border-t border-neutral-800">
                          <div className="flex items-center justify-between">
                            <div>
                              <span
                                className={`text-xs ${THEME.colors.text.muted}`}
                              >
                                À partir de
                              </span>
                              <div
                                className={`text-2xl font-bold bg-gradient-to-r ${THEME.colors.secondary} bg-clip-text text-transparent`}
                              >
                                {car.price} DA
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => setContactModalOpen(true)}
                                className="group relative px-6 py-2.5 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-700/30"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center gap-2">
                                  <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors duration-300">
                                    Contact
                                  </span>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Animated Border */}
                      <div
                        className={`absolute inset-0 z-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                          hoveredCard === i ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${THEME.colors.secondary} p-[2px]`}
                        >
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
          <button
            onClick={prev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full ${THEME.colors.card} ${THEME.effects.blur} border ${THEME.colors.border} flex items-center justify-center hover:bg-neutral-700/80 transition-all duration-300 hover:scale-110 group z-10`}
            aria-label={CONTENT.buttons.previous}
          >
            <ChevronLeft
              className={`w-5 h-5 md:w-6 md:h-6 ${THEME.colors.text.secondary} group-hover:text-white transition-colors`}
            />
          </button>

          <button
            onClick={next}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full ${THEME.colors.card} ${THEME.effects.blur} border ${THEME.colors.border} flex items-center justify-center hover:bg-neutral-700/80 transition-all duration-300 hover:scale-110 group z-10`}
            aria-label={CONTENT.buttons.next}
          >
            <ChevronRight
              className={`w-5 h-5 md:w-6 md:h-6 ${THEME.colors.text.secondary} group-hover:text-white transition-colors`}
            />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? `w-12 bg-gradient-to-r ${THEME.colors.secondary}`
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
