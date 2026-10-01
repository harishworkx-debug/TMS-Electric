import { Star } from 'lucide-react';
import { business } from '@/data/business';

const reviews = [
  {
    author: 'Rosebud',
    time: '10 months ago',
    text: 'Very happy with the service. Insured he went over all areas to make sure it was safe. I had smelled burning plastic wiring of some kind. I called he came out very quickly. I highly recommend TMS Electric Tyler is great .',
    rating: 5,
  },
  {
    author: 'Paul Garcia',
    time: 'a year ago',
    text: 'Tyler has done multiple jobs for me including running new circuits from my breaker panel and doing some emergency weekend troubleshooting when half of my house went dark. He\'s super friendly, fairly priced, and works cleanly. He doesn\'t take shortcuts and goes the extra mile cleaning up other people\'s wiring messes. Highly recommend!',
    rating: 5,
  },
  {
    author: 'J L',
    time: '2 years ago',
    text: '5 * for Tyler. He has been my go to electrician for over 4 years and did all of my electrical work when we remodeled my house. Pricing is fair, and where it should be if not a little better if you want a licensed electrician, that shows up on time and completes the job without nickel & diming you to death!',
    rating: 5,
  },
  {
    author: 'Michelle Koopsen',
    time: '2 years ago',
    text: 'Tyler was prompt and very hard-working. He was very professional. He stuck with his bid and did everything he said he’d do. I appreciated his work ethic and his attention to detail. I would totally recommend him!',
    rating: 5,
  },
  {
    author: 'Michael Kai Mayeda',
    time: '10 months ago',
    text: 'Tyler is prompt and honest. I go with him for all my high and low-voltage needs. He\'s also good at keeping the job clean and tidy. Thanks man!',
    rating: 5,
  },
  {
    author: 'Andy Reynolds',
    time: '2 years ago',
    text: 'Second time I\'ve had Tyler come out to do work at my house. This time to replace a hanging light in the kitchen dining area. Really nice guy and did an excellent job.',
    rating: 5,
  }
];

export function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Real Reviews from Real Neighbors
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            We are incredibly proud of our perfect {business.rating}.0 rating on Google. Here is what {business.serviceArea} residents have to say about working with Tyler and the TMS Electric team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-6 ring-1 ring-black/5 flex flex-col h-full">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic flex-grow mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="font-semibold text-slate-900">{review.author}</div>
                <div className="text-sm text-slate-500">{review.time}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={business.social.yelp} // You can update this to the Google Maps link later
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-300 hover:bg-slate-50 transition-colors"
          >
            Read all {business.reviewCount} Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
