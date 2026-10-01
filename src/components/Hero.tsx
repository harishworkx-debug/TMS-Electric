import { Phone, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { business } from '@/data/business';
import { CallButton } from '@/components/CallButton';

export function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  location,
}: {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
  location?: string;
}) {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
      </div>

      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-amber-300">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-semibold">{business.rating}.0 Rating</span>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-white">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium">Licensed #{business.license}</span>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            {title}
          </h1>
          <p className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed drop-shadow-md">
            {subtitle}
          </p>

          {location && (
            <div className="mt-4 flex items-center gap-2 text-slate-300">
              <MapPin className="h-5 w-5 text-amber-400" />
              <span>Serving {location} and all of North County San Diego</span>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <CallButton label={`Call ${business.phoneDisplay}`} />
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="h-5 w-5 text-amber-400" />
              <span className="text-sm">{business.hours} &middot; Emergency Service Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
