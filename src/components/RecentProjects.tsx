import { MapPin, Wrench } from 'lucide-react';
import { mainLocation } from '@/data/business';

const projects = [
  {
    title: 'Panel Upgrade in Oceanside, CA',
    service: 'Electrical Panel Upgrade',
    location: 'Oceanside, CA',
    description: 'Upgraded an outdated 100-amp electrical panel to a modern 200-amp system to support a new home addition and future EV charger. Ensured full code compliance and safety.',
    imageUrl: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    title: 'EV Charger Installation in Oceanside, CA',
    service: 'EV Charger Installation',
    location: 'Oceanside, CA',
    description: 'Installed a Level 2 Tesla Wall Connector in a residential garage. Ran new dedicated circuitry from the main panel and verified charging speeds.',
    imageUrl: 'https://images.pexels.com/photos/19696238/pexels-photo-19696238.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    title: 'Electrical Repair in Carlsbad, CA',
    service: 'Electrical Repair',
    location: 'Carlsbad, CA',
    description: 'Diagnosed and repaired a complex circuit issue causing intermittent power loss in a kitchen. Replaced faulty wiring and upgraded GFCI outlets.',
    imageUrl: 'https://images.pexels.com/photos/27928765/pexels-photo-27928765.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  }
];

export function RecentProjects() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Recent Electrical Projects in {mainLocation.name} & North County
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            See some of our recent electrical repairs, panel upgrades, and installations across the community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-slate-900 mb-2">{project.title}</h3>
                
                <div className="flex flex-col gap-2 mb-4 text-sm font-medium text-slate-600">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-amber-500" />
                    <span>{project.service}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{project.location}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mt-auto">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
