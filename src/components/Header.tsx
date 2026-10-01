import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { business, services, mainLocation } from '@/data/business';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-white shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-slate-900">
              <Zap className="h-6 w-6" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold tracking-tight">TMS Electric</span>
              <span className="hidden sm:block text-xs text-slate-400">
                Licensed Electrician in {mainLocation.name}, CA
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              Home
            </Link>
            <div className="group relative">
              <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
                Services
              </button>
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-64 rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}-${mainLocation.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <button className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
                Service Areas
              </button>
              <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-48 rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
                  <Link
                    to="/electrician-oceanside"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Electrician Oceanside
                  </Link>
                  <Link
                    to="/electrician-vista"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Electrician Vista
                  </Link>
                  <Link
                    to="/electrician-carlsbad"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Electrician Carlsbad
                  </Link>
                  <Link
                    to="/electrician-san-marcos"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Electrician San Marcos
                  </Link>
                  <Link
                    to="/electrician-encinitas"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Electrician Encinitas
                  </Link>
                  <Link
                    to="/electrician-escondido"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Electrician Escondido
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden sm:flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-amber-400/40"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-700 bg-slate-900 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400">
              Home
            </Link>
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">Services</div>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${mainLocation.slug}`}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400"
              >
                {s.title}
              </Link>
            ))}
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">Service Areas</div>
            <Link to="/electrician-oceanside" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400">
              Electrician Oceanside
            </Link>
            <Link to="/electrician-vista" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400">
              Electrician Vista
            </Link>
            <Link to="/electrician-carlsbad" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400">
              Electrician Carlsbad
            </Link>
            <Link to="/electrician-san-marcos" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400">
              Electrician San Marcos
            </Link>
            <Link to="/electrician-encinitas" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400">
              Electrician Encinitas
            </Link>
            <Link to="/electrician-escondido" className="block px-3 py-2 text-sm text-slate-300 hover:text-amber-400">
              Electrician Escondido
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400">
              Blog
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400">
              Contact
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-900"
            >
              <Phone className="h-4 w-4" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
