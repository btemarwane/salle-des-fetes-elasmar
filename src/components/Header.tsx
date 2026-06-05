import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Formules", to: "/formules" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/88 backdrop-blur-2xl border-b border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            : "bg-gradient-to-b from-black/45 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative flex items-center justify-between min-h-[88px] md:min-h-[80px]">
            {/* Mobile centered brand */}
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 z-[60] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center md:hidden"
            >
              <img
                src={logo}
                alt="Elasmar Fouad"
                className="h-9 w-auto object-contain mb-1"
              />
              <span className="font-serif text-[18px] leading-none text-gold tracking-wide">
                Elasmar Fouad
              </span>
              <span
                className={`text-[11px] uppercase tracking-[0.28em] mt-1 ${
                  scrolled ? "text-muted-foreground" : "text-white/90"
                }`}
              >
                Salle des fêtes
              </span>
            </Link>

            {/* Desktop brand */}
            <Link
              to="/"
              className="hidden md:flex items-center gap-3 z-[60]"
            >
              <img
                src={logo}
                alt="Elasmar Fouad"
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-sm lg:text-base text-gold tracking-wide">
                  Elasmar Fouad
                </span>
                <span
                  className={`text-[10px] uppercase tracking-[0.25em] ${
                    scrolled ? "text-muted-foreground" : "text-warm-white/80"
                  }`}
                >
                  Salle des fêtes
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive(link.to)
                      ? "text-gold"
                      : scrolled
                      ? "text-foreground hover:text-gold"
                      : "text-warm-white hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                variant="gold"
                size="sm"
                onClick={() => navigate("/reserve")}
                className="rounded-full px-5 group"
              >
                Réserver
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={16}
                />
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden absolute right-0 top-1/2 z-[60] -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-black/10 bg-white/80 text-foreground backdrop-blur-md"
                  : "border-white/20 bg-white/10 text-white backdrop-blur-md"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[86%] max-w-sm bg-warm-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex h-full flex-col p-6">
                <div className="relative mb-8 flex items-center justify-center">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={logo}
                      alt="Elasmar Fouad"
                      className="h-12 w-auto object-contain mb-2"
                    />
                    <span className="font-serif text-lg text-gold">
                      Elasmar Fouad
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                      Salle des fêtes
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-foreground"
                    aria-label="Fermer le menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        className={`block rounded-2xl px-4 py-3 text-center text-sm uppercase tracking-[0.15em] transition-colors ${
                          isActive(link.to)
                            ? "bg-gold/10 text-gold"
                            : "text-foreground hover:bg-cream"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    variant="gold"
                    className="w-full mt-6 rounded-full"
                    onClick={() => {
                      navigate("/reserve");
                      setMobileOpen(false);
                    }}
                  >
                    Réserver maintenant
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;