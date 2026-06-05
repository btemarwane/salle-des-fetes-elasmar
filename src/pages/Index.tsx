import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Sparkles, HeadphonesIcon, Car, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

import heroImg from "@/assets/hero-sec.jpg";
import galleryTables from "@/assets/gallery-tables.jpg";
import galleryStage from "@/assets/gallery-stage.jpg";
import galleryLighting from "@/assets/gallery-lighting.jpg";
import galleryFlowers from "@/assets/gallery-flowers.jpg";
import galleryHall from "@/assets/gallery-hall.jpg";

import galleryFood from "@/assets/DSC00008.jpg";
import galleryDance from "@/assets/DSC00011.jpg";

import galleryOutdoor from "@/assets/DSC00013.jpg";
import galleryOutdoors from "@/assets/DSC00005.jpg";

const galleryImages = [
  { src: galleryTables, alt: "Tables décorées" },
  { src: galleryStage, alt: "Scène des mariés" },
  { src: galleryLighting, alt: "Éclairage" },
  { src: galleryFlowers, alt: "Décoration florale" },
  { src: galleryHall, alt: "Vue d'ensemble" },
  { src: galleryFood, alt: "Buffet et restauration" },
  { src: galleryDance, alt: "Piste de danse" },
  { src: galleryOutdoor, alt: "Espace extérieur" },
  { src: galleryOutdoors, alt: "Espace extérieur" }
];

const features = [
  {
    icon: Users,
    title: "Grande capacité",
    desc: "Accueillez tous vos invités dans un espace majestueux.",
  },
  {
    icon: Sparkles,
    title: "Décoration luxueuse",
    desc: "Un cadre raffiné avec des finitions haut de gamme.",
  },
  {
    icon: HeadphonesIcon,
    title: "Service professionnel",
    desc: "Une équipe dédiée pour un événement sans souci.",
  },
  {
    icon: Car,
    title: "Parking disponible",
    desc: "Stationnement spacieux pour tous vos invités.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Salle des Fêtes Elasmar Fouad"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/10" />

        <motion.div
          className="absolute top-24 left-6 md:left-12 hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md text-white/90"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Heart size={16} className="text-gold" />
          <span className="text-sm">Mariages • Fiançailles • Événements</span>
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.35em] text-xs sm:text-sm text-gold mb-4"
          >
            Salle de réception haut de gamme
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-warm-white mb-6 tracking-wide leading-tight"
          >
            Salle des Fêtes
            <br />
            Elasmar Fouad
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-warm-white/85 text-lg sm:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Offrez à vos invités une expérience élégante, chaleureuse et mémorable dans un lieu pensé pour les plus beaux moments de votre vie.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" onClick={() => navigate("/reserve")} className="group">
              Réserver maintenant
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById("galerie")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md"
            >
              Voir la galerie
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          Faites défiler
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        className="py-20 lg:py-28 bg-warm-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-2">Notre Salle</h2>
          <motion.div
            className="w-16 h-0.5 bg-gold mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
            Avec une grande capacité d'accueil et une décoration luxueuse, la Salle des Fêtes Elasmar Fouad
            est l'endroit idéal pour célébrer vos mariages, fiançailles et événements spéciaux. Notre équipe
            professionnelle veille à chaque détail pour faire de votre journée un souvenir inoubliable.
          </p>
        </div>
      </motion.section>

      {/* Gallery */}
      <section id="galerie" className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-center mb-2">Galerie</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-12" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`overflow-hidden rounded-2xl shadow-card group relative ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-center mb-2">Pourquoi Nous Choisir</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-12" />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 rounded-2xl bg-cream shadow-card hover:shadow-elegant border border-transparent hover:border-gold/20"
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 6, scale: 1.08 }}
                >
                  <f.icon className="text-gold" size={24} />
                </motion.div>
                <h3 className="font-serif text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 lg:py-28 bg-charcoal text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-gold/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-warm-white mb-4">
            Réservez votre date dès maintenant
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-white/75 max-w-2xl mx-auto mb-8">
            Contactez-nous pour organiser un événement à votre image dans une ambiance élégante et mémorable.
          </p>
          <Button variant="gold" size="xl" onClick={() => navigate("/reserve")} className="group">
            Réserver
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
