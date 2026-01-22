
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;
  }, []);

  const featuredDishes = MENU_ITEMS.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2070" 
            alt="Sushi Craft"
            className="w-full h-full object-cover brightness-[0.4] scale-105 animate-pulse-slow"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-amber-500 uppercase tracking-[0.4em] text-sm md:text-base font-medium mb-6 animate-in slide-in-from-bottom duration-1000">
            Welcome to {SITE_CONFIG.name}
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 tracking-wider animate-in slide-in-from-bottom duration-1000 delay-200">
            {SITE_CONFIG.tagline}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in slide-in-from-bottom duration-1000 delay-500">
            <Link to="/reservations" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 uppercase tracking-[0.2em] font-medium transition-all transform hover:-translate-y-1 shadow-2xl">
              Reserve Now
            </Link>
            <Link to="/menu" className="border border-white/30 text-white hover:bg-white hover:text-stone-900 px-10 py-4 uppercase tracking-[0.2em] font-medium transition-all backdrop-blur-sm">
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-16 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Our Concept</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Where Korean Traditions Meet Modern Pacific Fusion
            </h2>
            <p className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed italic border-l-2 border-amber-600 pl-6">
              "Sonmari" is born from the Korean words meaning "Hand-Rolled". We combine the warmth of Korean hospitality with the delicate precision of Japanese temaki, creating an experience that is both intimate and elevated.
            </p>
            <p className="leading-relaxed text-stone-600 dark:text-stone-400">
              Located in the heart of Silver Lake, Sonmari offers a contemporary take on the sushi bar experience. Our chefs focus on seasonality, sourcing the finest ingredients from local markets and the deep waters of the Pacific.
            </p>
            <Link to="/about" className="inline-block border-b-2 border-amber-600 pb-1 uppercase tracking-widest text-sm font-bold hover:text-amber-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
          <div className="relative group">
            <div className="aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1925" 
                alt="Chef preparing rolls" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-amber-600 p-10 hidden md:block text-white shadow-xl">
              <p className="text-5xl font-serif mb-2">3503</p>
              <p className="uppercase tracking-[0.3em] text-xs font-bold">W Sunset Blvd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-stone-100 dark:bg-stone-900 transition-colors duration-500 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <span className="text-amber-600 uppercase tracking-widest font-semibold text-sm">The Experience</span>
             <h2 className="text-4xl md:text-6xl font-serif">Signature Dishes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDishes.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-stone-800 rounded-sm overflow-hidden shadow-md transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-10 text-center space-y-4">
                  <h3 className="text-2xl font-serif uppercase tracking-widest">{item.name}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed italic">{item.description}</p>
                  <p className="text-amber-600 font-bold tracking-widest text-lg">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/menu" className="inline-block bg-stone-950 dark:bg-white dark:text-stone-950 text-white px-16 py-5 uppercase tracking-widest text-sm font-bold hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-white transition-all shadow-xl">
              Discover Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-40 px-6 text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1918" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover brightness-[0.2]"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-serif tracking-wide leading-tight">Experience Sunset's Most Intimate Sushi Bar</h2>
          <p className="text-xl opacity-80 leading-relaxed font-light">Whether it's a casual evening out or a special celebration, we invite you to take a seat at our counter and let our chefs tell you a story through food.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/reservations" className="bg-amber-600 hover:bg-amber-700 px-14 py-5 uppercase tracking-[0.3em] font-bold text-sm transition-all transform active:scale-95 shadow-2xl">Book Your Table</Link>
            <Link to="/contact" className="border border-white/50 hover:bg-white hover:text-stone-950 px-14 py-5 uppercase tracking-[0.3em] font-bold text-sm transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
