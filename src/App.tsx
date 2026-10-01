import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallButton } from '@/components/CallButton';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { ServicePage } from '@/pages/ServicePage';
import { LocationPage } from '@/pages/LocationPage';
import { ServicesLocationPage } from '@/pages/ServicesLocationPage';
import { ContactPage } from '@/pages/ContactPage';
import { BlogIndexPage } from '@/pages/BlogIndexPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { services, serviceAreas, mainLocation } from '@/data/business';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {serviceAreas.map((area) =>
              services.map((s) => (
                <Route
                  key={`${s.slug}-${area.slug}`}
                  path={`/${s.slug}-${area.slug}`}
                  element={<ServicePage serviceSlug={s.slug} locationSlug={area.slug} />}
                />
              ))
            )}

            {serviceAreas.map((area) => (
              <Route
                key={`elec-${area.slug}`}
                path={`/electrician-${area.slug}`}
                element={<LocationPage locationSlug={area.slug} />}
              />
            ))}

            {serviceAreas.map((area) => (
              <Route
                key={`serv-${area.slug}`}
                path={`/electrical-services-${area.slug}`}
                element={<ServicesLocationPage locationSlug={area.slug} />}
              />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
