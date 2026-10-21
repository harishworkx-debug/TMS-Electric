import { useEffect } from 'react';
import { business } from '@/data/business';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
};

export function useSeo({ title, description, canonical, schema }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const baseUrl = `https://www.${business.domain}`;
    const rawPath = canonical || '';
    const cleanPath = rawPath === '' || rawPath === '/' ? '/' : (rawPath.startsWith('/') ? rawPath : `/${rawPath}`).replace(/\/+$/, '') + '/';
    const canonicalUrl = `${baseUrl}${cleanPath}`;

    ensureMeta('description', description);
    ensureMeta('og:title', title, 'property');
    ensureMeta('og:description', description, 'property');
    ensureMeta('og:type', 'website', 'property');
    ensureMeta('og:url', canonicalUrl, 'property');
    ensureMeta('twitter:card', 'summary_large_image');
    ensureMeta('twitter:title', title, 'property');
    ensureMeta('twitter:description', description, 'property');

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    const schemaId = 'page-json-ld';
    let script = document.head.querySelector(`script[data-schema="${schemaId}"]`) as HTMLScriptElement | null;
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', schemaId);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }
  }, [title, description, canonical, schema]);
}
