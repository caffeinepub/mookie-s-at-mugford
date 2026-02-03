import { Check, Dog, Coffee, Users, Smile, Star } from 'lucide-react';

const REASONS = [
  { icon: Dog, text: "Dog friendly" },
  { icon: Coffee, text: "Quality drinks & food" },
  { icon: Users, text: "Friendly staff" },
  { icon: Smile, text: "Cozy atmosphere" },
  { icon: Star, text: "Great service" },
];

export function WhyPeopleLoveItSection() {
  return (
    <section className="py-20 md:py-28 bg-muted-green/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-12 text-center">
            Why People Love It
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((reason, index) => (
              <div
                key={reason.text}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-green/20 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-muted-green" />
                </div>
                <p className="text-lg font-medium text-espresso">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
