
import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, SITE_CONFIG } from '../constants';
import { Category } from '../types';

const Menu: React.FC = () => {
  useEffect(() => {
    document.title = `Menu | ${SITE_CONFIG.name}`;
  }, []);

  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  
  const categories: (Category | 'All')[] = ['All', 'Starters', 'Hand Rolls & Sushi', 'Special Dishes', 'Drinks & Cocktails', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-40 pb-32 px-6 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm mb-6">Gastronomy</h2>
          <h1 className="text-6xl md:text-8xl font-serif mb-10">Our Menu</h1>
          <p className="max-w-3xl mx-auto text-stone-500 dark:text-stone-400 leading-relaxed text-lg">
            A celebration of seasonal ingredients and cross-cultural techniques. Our menu is designed for sharing and exploration, blending the heritage of Seoul with the bounty of the Pacific.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 overflow-x-auto pb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-8 py-3 uppercase tracking-widest text-xs font-bold rounded-full border transition-all duration-300 ${activeCategory === cat ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-900/20' : 'border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-amber-600 hover:text-amber-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex gap-8 group animate-in slide-in-from-bottom duration-700">
              <div className="w-28 h-28 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-sm shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              </div>
              <div className="flex-grow space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl md:text-3xl font-serif tracking-wide uppercase group-hover:text-amber-600 transition-colors">
                    {item.name}
                    {item.isSpicy && <span className="ml-3 text-red-500 text-xs align-top" title="Spicy">🌶️</span>}
                    {item.isVegetarian && <span className="ml-3 text-green-500 text-xs align-top" title="Vegetarian">V</span>}
                  </h3>
                  <div className="flex-grow mx-4 border-b border-dotted border-stone-300 dark:border-stone-700 mb-2 opacity-50"></div>
                  <span className="font-bold text-amber-600 text-xl">${item.price}</span>
                </div>
                <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed italic font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-32 p-12 bg-stone-100 dark:bg-stone-900 text-center rounded-sm border border-stone-200 dark:border-stone-800">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 max-w-2xl mx-auto leading-loose">
            Consumer Advisory: Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please inform your server of any allergies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
