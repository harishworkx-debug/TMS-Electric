import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { services, mainLocation } from '@/data/business';

const iconMap: Record<string, string> = {
  Home: '🏠',
  Building2: '🏢',
  Wrench: '🔧',
  Siren: '🚨',
  Zap: '⚡',
  BatteryCharging: '🔋',
  Lightbulb: '💡',
  Plug: '🔌',
  Fan: '🌀',
  ClipboardCheck: '📋',
};

export function ServiceGrid({ locationSlug }: { locationSlug?: string }) {
  const loc = locationSlug || mainLocation.slug;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={`/${s.slug}-${loc}`}
          className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition-all hover:shadow-xl hover:ring-amber-200 hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl shrink-0">
              {iconMap[s.icon] || '⚡'}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500 line-clamp-2">{s.tagline}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-amber-600">
            {s.shortTitle || s.title}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
