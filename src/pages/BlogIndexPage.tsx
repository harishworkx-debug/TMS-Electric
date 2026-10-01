import { useSeo } from '@/hooks/useSeo';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import { business } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';

export function BlogIndexPage() {
  useSeo({
    title: `Electrical Blog & Tips | ${business.name}`,
    description: `Expert electrical tips, cost guides, and advice from the licensed professionals at ${business.name} in North County San Diego.`,
    canonical: '/blog',
  });

  return (
    <>
      <div className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Electrical Blog & Guides</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Answers to your most common electrical questions, pricing guides, and safety tips from your local experts.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
        </div>
      </div>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-amber-600 font-semibold mb-2">{post.date}</div>
                  <h2 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto text-sm font-medium text-slate-900">
                    By {post.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection 
        title="Need Professional Electrical Help?" 
        subtitle={`Don't DIY dangerous electrical work. Call ${business.name} for fast, safe, and guaranteed service.`} 
      />
    </>
  );
}
