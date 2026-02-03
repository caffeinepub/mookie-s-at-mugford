import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '../businessInfo';

export function VisitUsSection() {
  const getDirectionsUrl = () => {
    const address = encodeURIComponent(BUSINESS_INFO.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`;
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Visit Us
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-green/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-muted-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-green/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-muted-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted-green/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-muted-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="text-muted-foreground hover:text-muted-green transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-espresso hover:bg-espresso-dark text-cream px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href={getDirectionsUrl()} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mookie's at Mugford location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
