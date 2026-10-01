import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Zap, Clock, ShieldCheck } from 'lucide-react';
import { business, services, serviceAreas, mainLocation } from '@/data/business';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-slate-900">
                <Zap className="h-6 w-6" fill="currentColor" />
              </div>
              <span className="text-lg font-bold">TMS Electric</span>
            </div>
            <p className="text-sm leading-relaxed">
              Licensed electrician serving {mainLocation.name} and all of North County San Diego since {business.founded}.
              California License #{business.license}.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <ShieldCheck className="h-5 w-5 text-amber-400" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-${mainLocation.slug}`}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/electrician-${area.slug}`}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    Electrician {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors">
                  <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {business.address}<br />
                  {business.city}, {business.state} {business.zip}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                {business.email}
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{business.hours}<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved. CA License #{business.license}
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link to="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
            <Link to="/electrician-oceanside" className="hover:text-amber-400 transition-colors">Service Areas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
