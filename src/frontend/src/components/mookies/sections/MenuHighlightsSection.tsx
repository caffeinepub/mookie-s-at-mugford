import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MENU_ITEMS } from '../assets';
import { useRevealOnScroll } from '../animations/useRevealOnScroll';

export function MenuHighlightsSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-highlights');
    menuSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="menu-highlights" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Menu Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fresh pastries to hearty breakfast sandwiches and expertly crafted coffee drinks
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {MENU_ITEMS.map((item, index) => (
            <MenuCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-espresso hover:bg-espresso-dark text-cream px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, index }: { item: typeof MENU_ITEMS[number]; index: number }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group border-border/50">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground text-center">
            {item.name}
          </h3>
        </CardContent>
      </Card>
    </div>
  );
}
