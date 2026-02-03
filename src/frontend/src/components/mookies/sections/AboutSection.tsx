import { Coffee, Heart, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-espresso mb-8 text-center">
            Welcome to Mookie's
          </h2>
          
          <div className="prose prose-lg md:prose-xl mx-auto text-espresso-light mb-12">
            <p className="text-center leading-relaxed">
              We're more than just a coffee shop—we're your neighborhood gathering spot. 
              At Mookie's, we believe in serving quality drinks and food with a smile, 
              creating a warm atmosphere where everyone feels at home.
            </p>
            <p className="text-center leading-relaxed">
              Whether you're grabbing your morning latte, meeting a friend for lunch, 
              or bringing your furry companion along (yes, we're dog-friendly!), 
              we're here to make your day a little brighter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted-green/20 mb-4">
                <Coffee className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="text-xl font-semibold text-espresso mb-2">Quality Coffee</h3>
              <p className="text-espresso-light">Expertly crafted drinks made with care</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted-green/20 mb-4">
                <Heart className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="text-xl font-semibold text-espresso mb-2">Made with Love</h3>
              <p className="text-espresso-light">Fresh pastries and food daily</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted-green/20 mb-4">
                <Users className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="text-xl font-semibold text-espresso mb-2">Community First</h3>
              <p className="text-espresso-light">A welcoming space for all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
