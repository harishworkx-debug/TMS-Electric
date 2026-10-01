import fs from 'fs';
import { allRoutes, business } from './src/data/business';
import { blogPosts } from './src/data/blog';

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of allRoutes) {
  xml += `  <url>
    <loc>https://www.${business.domain}/${route.path === '' ? '' : route.path + '/'}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>\n`;
}

// Add blog posts
for (const post of blogPosts) {
  xml += `  <url>
    <loc>https://www.${business.domain}/blog/${post.slug}/</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>\n`;
}

xml += `</urlset>`;

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Sitemap generated successfully!');
