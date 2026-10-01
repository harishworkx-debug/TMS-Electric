import { useSeo } from '@/hooks/useSeo';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogPost } from '@/data/blog';
import { business } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <Navigate to="/blog" />;
  
  const post = getBlogPost(slug);
  
  if (!post) return <Navigate to="/blog" />;

  useSeo({
    title: post.metaTitle,
    description: post.metaDescription,
    canonical: `/blog/${post.slug}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://${business.domain}/blog/${post.slug}`,
      },
      headline: post.title,
      image: post.imageUrl,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'LocalBusiness',
        name: business.name,
        logo: {
          '@type': 'ImageObject',
          url: `https://${business.domain}/logo.png`,
        },
      },
    }
  });

  return (
    <>
      <div className="bg-white py-6 border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { name: 'Blog', path: '/blog' },
            { name: post.title }
          ]} />
        </div>
      </div>

      <article className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <div className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-3">
              {post.date}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium">By {post.author}</span>
            </div>
          </header>

          <figure className="mb-12 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </figure>

          <div 
            className="prose prose-lg sm:prose-xl max-w-none text-slate-700 prose-headings:text-slate-900 prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <CtaSection 
        title="Need a Licensed Electrician?" 
        subtitle={`If this article didn't solve your problem, our team is ready to help. Call ${business.name} for fast, safe electrical service.`} 
      />
    </>
  );
}
