import { SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../businessInfo';

export function FooterSection() {
  return (
    <footer className="bg-espresso text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{BUSINESS_INFO.name}</h3>
              <p className="text-cream/80 text-sm">
                Your favorite local coffee spot in Marblehead, MA
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-cream/80">
                <p>{BUSINESS_INFO.address}</p>
                <p>
                  <a href={BUSINESS_INFO.phoneLink} className="hover:text-cream transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
                <p>{BUSINESS_INFO.hours}</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
                >
                  <SiInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-cream/20 pt-8 text-center text-sm text-cream/70">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © 2026. Built with <Heart className="w-4 h-4 fill-current" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
