
import React from 'react';
import { SITE_CONFIG } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 animate-in fade-in duration-700">
      {/* Story Section */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Philosophy</h2>
          <h1 className="text-5xl md:text-8xl font-serif">The Sonmari Story</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974" 
              alt="Hand roll preparation" 
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-600/10 -z-10 rounded-full blur-3xl"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-xl italic font-serif leading-relaxed text-amber-600">
              "To eat a hand roll is to participate in a ephemeral moment of perfection."
            </p>
            <p className="leading-relaxed text-stone-500 dark:text-stone-400">
              Sonmari was founded on a simple premise: that high-end sushi techniques should be accessible, social, and vibrant. Our name is a fusion of "Son" (hand) and "Mari" (roll/bundle), symbolizing the direct connection between the chef's hands and the diner's experience.
            </p>
            <p className="leading-relaxed text-stone-500 dark:text-stone-400">
              Founder Jun-Ho Lee brought his decade of experience in Seoul's fine dining scene to the eclectic streets of Silver Lake. By infusing traditional Japanese sushi formats with Korean ingredients like perilla leaf, gochujang, and Korean-aged soy sauce, he created a unique culinary vernacular that speaks to the multicultural soul of Los Angeles.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-4xl font-serif text-amber-600 mb-2">2018</p>
                <p className="uppercase tracking-widest text-xs">Established</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-amber-600 mb-2">200k+</p>
                <p className="uppercase tracking-widest text-xs">Rolls Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-stone-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 border border-amber-600 flex items-center justify-center mx-auto mb-8 rotate-45">
                <span className="text-amber-600 -rotate-45 font-serif text-xl">01</span>
              </div>
              <h3 className="text-2xl font-serif tracking-widest">Quality First</h3>
              <p className="text-stone-400 text-sm leading-relaxed">We source our Nori directly from artisanal producers in Ariake Bay, Japan, and our rice from selected farms in Korea to ensure a unique texture and flavor profile.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 border border-amber-600 flex items-center justify-center mx-auto mb-8 rotate-45">
                <span className="text-amber-600 -rotate-45 font-serif text-xl">02</span>
              </div>
              <h3 className="text-2xl font-serif tracking-widest">Innovation</h3>
              <p className="text-stone-400 text-sm leading-relaxed">While we respect tradition, we are never bound by it. Our menu evolves weekly to reflect the freshest arrivals from the market.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 border border-amber-600 flex items-center justify-center mx-auto mb-8 rotate-45">
                <span className="text-amber-600 -rotate-45 font-serif text-xl">03</span>
              </div>
              <h3 className="text-2xl font-serif tracking-widest">Community</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Our open kitchen design encourages dialogue between chefs and guests. At Sonmari, everyone is a guest in our home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Profile */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="bg-stone-100 dark:bg-stone-900 p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 rounded-sm">
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1577214210619-47854f3b890a?auto=format&fit=crop&q=80&w=1974" 
              alt="Chef Jun-Ho" 
              className="w-full aspect-square object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">The Visionary</h2>
            <h3 className="text-4xl font-serif">Executive Chef Jun-Ho Lee</h3>
            <p className="leading-relaxed italic text-stone-500 dark:text-stone-400">
              "Cooking is an act of memory. My goal is to recreate the flavors of my childhood in Busan, but refined for the global palate of Los Angeles."
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              A graduate of the Culinary Institute of America, Chef Lee spent years training under sushi masters in Osaka before returning to Seoul to lead Michelin-starred kitchens. His return to California marks his most personal project yet—a bridge between his Korean roots and the Pacific's bounty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
