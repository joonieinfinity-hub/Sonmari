
import React from 'react';
import { Wine, Utensils, Star, Heart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Expertise</h2>
          <h1 className="text-5xl md:text-8xl font-serif">The Sonmari Experience</h1>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-amber-600/10 text-amber-600 flex items-center justify-center rounded-full">
                <Utensils size={32} />
              </div>
              <h2 className="text-4xl font-serif">Omakase Counter</h2>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed italic border-l-2 border-amber-600 pl-6">
                A 12-course narrative journey through the chef's daily inspirations.
              </p>
              <p className="leading-relaxed text-stone-500 dark:text-stone-400">
                Our Omakase (chef’s choice) menu is the purest expression of Sonmari. Seated at our cedar wood counter, you’ll watch as our chefs curate a progression of nigiri, hand rolls, and small plates, explaining the provenance and preparation of each bite.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-widest font-bold">
                <li className="flex items-center gap-2"><Star size={14} className="text-amber-600"/> Two Seatings Daily (6 PM & 8:30 PM)</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-amber-600"/> Maximum 8 Guests</li>
                <li className="flex items-center gap-2"><Star size={14} className="text-amber-600"/> Advance Booking Required</li>
              </ul>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-sm group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" alt="Omakase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-amber-600/10 text-amber-600 flex items-center justify-center rounded-full">
                <Wine size={32} />
              </div>
              <h2 className="text-4xl font-serif">Private Events & Catering</h2>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed italic border-l-2 border-amber-600 pl-6">
                Elevate your special moments with Sonmari’s signature touch.
              </p>
              <p className="leading-relaxed text-stone-500 dark:text-stone-400">
                From intimate dinner parties in your home to corporate gala catering, we bring the Sonmari hand-roll bar to you. Our mobile sushi stations allow your guests to enjoy freshly made rolls prepared by our professional chefs on-site.
              </p>
              <div className="pt-4 flex gap-4">
                 <button className="bg-amber-600 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-colors">Request a Quote</button>
                 <button className="border border-stone-300 dark:border-stone-700 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:border-amber-600 transition-colors">View Brochure</button>
              </div>
            </div>
            <div className="lg:order-1 aspect-video relative overflow-hidden rounded-sm group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1974" alt="Catering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-amber-600/10 text-amber-600 flex items-center justify-center rounded-full">
                <Heart size={32} />
              </div>
              <h2 className="text-4xl font-serif">Soju & Sake Pairings</h2>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed italic border-l-2 border-amber-600 pl-6">
                Curated beverages that complement our bold fusion flavors.
              </p>
              <p className="leading-relaxed text-stone-500 dark:text-stone-400">
                Our beverage program features rare artisanal Sojus from small Korean distilleries and premium Junmai Sake. We also offer a selection of low-intervention wines and creative cocktails infused with Asian botanicals.
              </p>
              <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
                <li>• Exclusive Korean Rice Wine Collection</li>
                <li>• Monthly Sake Tasting Events</li>
                <li>• Bespoke Cocktail Pairings</li>
              </ul>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-sm group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" alt="Drinks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
