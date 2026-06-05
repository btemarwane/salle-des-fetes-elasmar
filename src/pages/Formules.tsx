import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// images (src/assets)
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/09.jpeg";
import img55 from "@/assets/55.jpeg";
import img89 from "@/assets/89.jpeg";
import img677 from "@/assets/677.jpeg";

const images = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img55,
  img89,
  img677,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

const Formules = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Autoplay slider with pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <Header />

      <main className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        
        {/* Ambient Background Effects */}
        <motion.div
          className="absolute top-10 left-[-10%] h-64 w-64 rounded-full bg-gold/10 blur-3xl pointer-events-none sm:h-96 sm:w-96"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[-10%] h-64 w-64 rounded-full bg-charcoal/5 blur-3xl pointer-events-none sm:h-80 sm:w-80"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

          {/* TITLE SECTION */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs font-medium text-gold sm:text-sm mb-5"
            >
              <Sparkles size={16} />
              Découvrez nos prestations
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl mb-6"
            >
              Formules & Menus
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
            >
              Explorez nos créations culinaires et nos formules sur mesure, pensées pour sublimer vos événements avec une touche d'élégance marocaine.
            </motion.p>
          </motion.div>

          {/* SLIDER SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] bg-white/40 border border-white/60 backdrop-blur-xl flex items-center justify-center h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden group">
              
              {/* Dynamic Blurred Background Backdrop */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`bg-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 bg-cover bg-center blur-[60px] scale-125 z-0"
                  style={{ backgroundImage: `url(${images[index]})` }}
                />
              </AnimatePresence>

              {/* Solid subtle overlay to ensure image pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 z-0" />

              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  alt={`Menu ${index + 1}`}
                  className="relative z-10 max-w-[90%] max-h-[90%] object-contain drop-shadow-2xl rounded-xl"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-6 z-20 pointer-events-none">
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="pointer-events-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/70 backdrop-blur-md border border-white/40 text-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold/50 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="pointer-events-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/70 backdrop-blur-md border border-white/40 text-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold/50 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2.5 mt-8 z-20 relative">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller à l'image ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-out",
                    i === index 
                      ? "w-8 bg-gold shadow-[0_0_12px_rgba(212,175,55,0.6)]" 
                      : "w-2 bg-[#d1cbbd] hover:bg-[#b0a996]"
                  )}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12 sm:mt-16"
            >
              <Button
                variant="gold"
                size="xl"
                className="group rounded-2xl shadow-[0_16px_40px_rgba(212,175,55,0.18)] min-w-[280px]"
                onClick={() => navigate("/reserve")}
              >
                Réserver maintenant
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Formules;