import { HeroSection } from './components/mookies/sections/HeroSection';
import { AboutSection } from './components/mookies/sections/AboutSection';
import { MenuHighlightsSection } from './components/mookies/sections/MenuHighlightsSection';
import { WhyPeopleLoveItSection } from './components/mookies/sections/WhyPeopleLoveItSection';
import { ReviewsSection } from './components/mookies/sections/ReviewsSection';
import { VisitUsSection } from './components/mookies/sections/VisitUsSection';
import { FooterSection } from './components/mookies/sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <MenuHighlightsSection />
      <WhyPeopleLoveItSection />
      <ReviewsSection />
      <VisitUsSection />
      <FooterSection />
    </div>
  );
}

export default App;
