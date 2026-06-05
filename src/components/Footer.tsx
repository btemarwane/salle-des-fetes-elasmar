import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 text-cream-dark">
        <div>
          <h3 className="font-serif text-xl text-gold mb-4">Elasmar Fouad</h3>
          <p className="text-sm leading-relaxed opacity-80">
            Salle des Fêtes Elasmar Fouad — L'élégance pour vos moments inoubliables.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-gold mb-4">Navigation</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
            <Link to="/formules" className="hover:text-gold transition-colors">Formules</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contactez Nous</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-serif text-lg text-gold mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center gap-2"><Phone size={14} /> +212 677-772906</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Casablanca , Aïn Sebâa</span>
            <a
              href="https://www.instagram.com/salle_des_fetes_elasmar_fouad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Instagram size={14} /> @salle_des_fetes_elasmar_fouad
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 mt-8 pt-6 text-center text-xs text-cream-dark/60">
        © {new Date().getFullYear()} Salle des Fêtes Elasmar Fouad. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
