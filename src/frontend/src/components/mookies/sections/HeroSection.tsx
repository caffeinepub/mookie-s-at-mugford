import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '../businessInfo';
import { ASSETS } from '../assets';
import { OrderOnlineDialog } from '../OrderOnlineDialog';

export function HeroSection() {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-highlights');
    menuSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Cozy café interior with latte art, fresh pastries, and warm natural light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={ASSETS.logo}
            alt={BUSINESS_INFO.name}
            className="h-20 md:h-28 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">
          Your Favorite Local Coffee Spot.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md text-cream-light font-light">
          Great coffee, delicious pastries, and friendly vibes in the heart of Marblehead.
        </p>

        {/* Rating */}
        <div className="mb-10 flex items-center justify-center gap-2 text-lg md:text-xl">
          <span className="drop-shadow-md">{BUSINESS_INFO.ratingDisplay}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-espresso hover:bg-espresso-dark text-cream text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setIsOrderDialogOpen(true)}
            className="bg-white/90 hover:bg-white text-espresso border-2 border-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Order Online
          </Button>
        </div>
      </div>

      <OrderOnlineDialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen} />
    </section>
  );
}
