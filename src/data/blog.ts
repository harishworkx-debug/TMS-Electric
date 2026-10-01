import { mainLocation } from './business';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  date: string;
  author: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-electrician-cost-oceanside',
    title: `How Much Does an Electrician Cost in ${mainLocation.name}, CA?`,
    excerpt: `A comprehensive guide to electrician costs, hourly rates, and flat fees for common electrical projects in ${mainLocation.name} and North County San Diego.`,
    date: '2023-11-01',
    author: 'Tyler (TMS Electric)',
    imageUrl: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    metaTitle: `How Much Does an Electrician Cost in ${mainLocation.name}? | TMS Electric`,
    metaDescription: `Wondering about electrician costs in ${mainLocation.name}, CA? Learn about hourly rates, panel upgrade costs, and pricing factors from a licensed local professional.`,
    content: `
      <h2>The True Cost of Hiring an Electrician in ${mainLocation.name}, CA</h2>
      <p>When you need electrical work done, the first question is usually, "How much is this going to cost?" While prices vary based on the complexity of the job, understanding the average costs in ${mainLocation.name} can help you budget and avoid surprises.</p>
      
      <h3>Hourly Rates vs. Flat Pricing</h3>
      <p>Most reputable electricians in California charge between $80 and $150 per hour. However, at TMS Electric, we often provide <strong>flat-rate, upfront pricing</strong>. This means you know exactly what the job will cost before we start, regardless of how many hours it takes us.</p>
      
      <h3>Common Electrical Project Costs</h3>
      <ul>
        <li><strong>Service Call / Diagnosis:</strong> Typically ranges from $75 to $150, which is often waived or applied to the repair cost if you hire the electrician for the job.</li>
        <li><strong>Outlet or Switch Replacement:</strong> Between $100 and $250 depending on whether it requires running new wire or upgrading to a GFCI/AFCI.</li>
        <li><strong>Electrical Panel Upgrade:</strong> Upgrading from 100 amps to 200 amps in ${mainLocation.name} generally costs between $2,500 and $4,500, depending on permit fees, SDG&E requirements, and stucco repair.</li>
        <li><strong>EV Charger Installation:</strong> Usually falls between $500 and $1,200 for the installation alone, assuming your current panel has the capacity.</li>
      </ul>

      <h3>Why You Shouldn't Just Choose the Cheapest Option</h3>
      <p>Electricity is not a place to cut corners. Hiring an unlicensed handyman might save you a few dollars upfront, but poor wiring is a leading cause of house fires. Always ensure your electrician holds a valid C-10 California contractor's license, is fully insured, and pulls the necessary city permits.</p>

      <p><em>Need a free, accurate estimate for your specific project? <a href="/contact">Contact TMS Electric today</a>.</em></p>
    `
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
