import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BUSINESS_INFO } from '../businessInfo';

const REVIEWS = [
  {
    text: "Great food, awesome atmosphere, even better service.",
    author: "Local Customer",
  },
  {
    text: "Such a cute place. Very friendly! Great coffee.",
    author: "Happy Visitor",
  },
  {
    text: "Both the lattes and the gluten-free baked goods were amazing.",
    author: "Coffee Lover",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-6">
              What Our Customers Say
            </h2>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-xl text-espresso-light">
              {BUSINESS_INFO.rating} stars from {BUSINESS_INFO.reviewCount} reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-espresso-light mb-4 italic leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-sm text-espresso font-medium">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
