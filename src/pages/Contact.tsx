import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin, MessageCircle, Send, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Contact = () => {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Bonjour, je suis ${form.nom}.\n\n${form.message}\n\nTéléphone: ${form.telephone}\nEmail: ${form.email || "Non renseigné"}`;

    window.open(
      `https://api.whatsapp.com/send?phone=212769747484&text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-border/70 bg-background/80 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-gold/40 focus:ring-2 focus:ring-gold/20";

  const contactItems = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 677-772906",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 600-905050",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@salle_des_fetes_elasmar_fouad",
      href: "https://www.instagram.com/salle_des_fetes_elasmar_fouad/",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Casablanca , Aïn Sebâa",
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <Header />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-cream via-warm-white to-cream overflow-hidden">
        <motion.div
          className="absolute top-20 left-[-80px] h-56 w-56 rounded-full bg-gold/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-[-60px] h-64 w-64 rounded-full bg-charcoal/5 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-gold mb-5"
            >
              <Sparkles size={16} />
              Contact & réservation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl lg:text-6xl text-foreground text-center mb-4 leading-tight"
            >
              Contactez Nous
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Parlons de votre événement. Envoyez-nous votre demande et nous vous répondrons rapidement pour organiser une réception élégante, mémorable et parfaitement adaptée à vos attentes.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Send size={20} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-foreground">Envoyez-nous un message</h2>
                  <p className="text-sm text-muted-foreground">Réponse rapide via WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    Nom
                  </label>
                  <input
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Votre nom complet"
                  />
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    Téléphone
                  </label>
                  <input
                    name="telephone"
                    required
                    value={form.telephone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Votre numéro"
                  />
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Votre email"
                  />
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez votre événement, la date souhaitée, le nombre d'invités..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Button type="submit" variant="gold" size="lg" className="w-full group rounded-xl">
                    Envoyer via WhatsApp
                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="rounded-3xl border border-white/60 bg-charcoal text-white p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.12)] relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                <div className="relative z-10">
                  <h2 className="font-serif text-2xl mb-6">Nos Coordonnées</h2>
                  <div className="space-y-4">
                    {contactItems.map((item, i) => {
                      const Icon = item.icon;
                      const content = (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.08 }}
                          whileHover={{ x: 6 }}
                          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">{item.label}</p>
                            <p className="text-sm text-white/90">{item.value}</p>
                          </div>
                        </motion.div>
                      );

                      return item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      );
                    })}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/60 bg-white"
              >
                <div className="px-6 py-5 border-b border-border/50 bg-cream/70">
                  <h3 className="font-serif text-xl text-foreground">Notre localisation</h3>
                  <p className="text-sm text-muted-foreground">Retrouvez facilement la salle sur Google Maps</p>
                </div>
      <div className="h-72 w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4354.074024673143!2d-7.506858820674108!3d33.63495470197517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb0003236801%3A0xdf20b01ba6dc0a41!2sSalle%20des%20f%C3%AAtes%20Elasmar%20Fouad!5e1!3m2!1sen!2sma!4v1777289469269!5m2!1sen!2sma"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Salle Elasmar Fouad"
    className="rounded-b-3xl"
  />
</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
