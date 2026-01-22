
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  
  const categories: (Category | 'All')[] = ['All', 'Starters', 'Hand Rolls & Sushi', 'Special Dishes', 'Drinks & Cocktails', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm mb-4">Gastronomy</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Our Menu</h1>
          <p className="max-w-2xl mx-auto text-stone-500 dark:text-stone-400 leading-relaxed">
            A celebration of seasonal ingredients and cross-cultural techniques. Our menu is designed for sharing and exploration.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-semibold rounded-full border transition-all ${activeCategory === cat ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-300 dark:border-stone-700 hover:border-amber-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex gap-6 group">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-sm">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
              </div>
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl md:text-2xl font-serif tracking-wide uppercase group-hover:text-amber-600 transition-colors">
                    {item.name}
                    {item.isSpicy && <span className="ml-2 text-red-500 text-xs align-top">🌶️</span>}
                    {item.isVegetarian && <span className="ml-2 text-green-500 text-xs align-top">V</span>}
                  </h3>
                  <div className="flex-grow mx-4 border-b border-dotted border-stone-300 dark:border-stone-700 mb-1"></div>
                  <span className="font-medium text-amber-600">${item.price}</span>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-24 p-8 bg-stone-100 dark:bg-stone-900 text-center rounded-sm">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-stone-400">
            Consumer Advisory: Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
