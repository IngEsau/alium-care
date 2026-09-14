import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Group from "../../imports/Group6";
import { consultationCta, siteFeatures } from "../config/site";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF5EF] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10">
              <Group />
            </div>
            <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Alium Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-[#1E1E1E] hover:text-[#436243] transition-colors">
              Inicio
            </Link>
            <Link to="/servicios" className="text-[#1E1E1E] hover:text-[#436243] transition-colors">
              Servicios
            </Link>
            {siteFeatures.blog && (
              <Link to="/blog" className="text-[#1E1E1E] hover:text-[#436243] transition-colors">
                Blog
              </Link>
            )}
            <Link to="/preguntas-frecuentes" className="text-[#1E1E1E] hover:text-[#436243] transition-colors">
              Preguntas frecuentes
            </Link>
            <Link to="/contacto" className="text-[#1E1E1E] hover:text-[#436243] transition-colors">
              Contacto
            </Link>
            <Link
              to={consultationCta.to}
              className="px-6 py-2.5 bg-[#436243] text-white rounded-lg hover:bg-[#5F775D] transition-colors"
            >
              {consultationCta.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#1E1E1E] lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="space-y-4 pb-6 lg:hidden">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#1E1E1E] hover:text-[#436243] transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#1E1E1E] hover:text-[#436243] transition-colors"
            >
              Servicios
            </Link>
            {siteFeatures.blog && (
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#1E1E1E] hover:text-[#436243] transition-colors"
              >
                Blog
              </Link>
            )}
            <Link
              to="/preguntas-frecuentes"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#1E1E1E] hover:text-[#436243] transition-colors"
            >
              Preguntas frecuentes
            </Link>
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#1E1E1E] hover:text-[#436243] transition-colors"
            >
              Contacto
            </Link>
            <Link
              to={consultationCta.to}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-2.5 bg-[#436243] text-white rounded-lg hover:bg-[#5F775D] transition-colors text-center"
            >
              {consultationCta.label}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
