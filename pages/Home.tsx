
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  const featuredDishes = MENU_ITEMS.slice(0, 3);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2070" 
            alt="Sushi Craft"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-amber-500 uppercase tracking-[0.4em] text-sm md:text-base font-medium mb-4 animate-in slide-in-from-bottom duration-1000">
            Welcome to {SITE_CONFIG.name}
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-wider animate-in slide-in-from-bottom duration-1000 delay-200">
            {SITE_CONFIG.tagline}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in slide-in-from-bottom duration-1000 delay-500">
            <Link to="/reservations" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 uppercase tracking-[0.2em] font-medium transition-all transform hover:-translate-y-1">
              Reserve Now
            </Link>
            <Link to="/menu" className="border border-white/30 text-white hover:bg-white/10 px-10 py-4 uppercase tracking-[0.2em] font-medium transition-all backdrop-blur-sm">
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
            <p className="leading-relaxed">
              Located in the heart of Silver Lake, Sonmari offers a contemporary take on the sushi bar experience. Our chefs focus on seasonality, sourcing the finest ingredients from local markets and the deep waters of the Pacific.
            </p>
            <Link to="/about" className="inline-block border-b-2 border-amber-600 pb-1 uppercase tracking-widest text-sm font-bold hover:text-amber-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
          <div className="relative group">
            <div className="aspect-square overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1925" 
                alt="Chef preparing rolls" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-amber-600 p-8 hidden md:block text-white">
              <p className="text-4xl font-serif mb-2">3503</p>
              <p className="uppercase tracking-widest text-xs">W Sunset Blvd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Carousel Mockup */}
      <section className="bg-stone-100 dark:bg-stone-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <span className="text-amber-600 uppercase tracking-widest font-semibold text-sm">The Experience</span>
             <h2 className="text-4xl md:text-5xl font-serif">Featured Delights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-stone-800 rounded-sm overflow-hidden shadow-sm transition-shadow hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 text-center space-y-3">
                  <h3 className="text-2xl font-serif uppercase tracking-wider">{item.name}</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2">{item.description}</p>
                  <p className="text-amber-600 font-medium">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu" className="bg-stone-900 dark:bg-white dark:text-stone-900 text-white px-12 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors">
              Discover Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-6 text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1918" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif tracking-wide leading-tight">Experience Sunset's Most Intimate Sushi Bar</h2>
          <p className="text-lg opacity-80 leading-relaxed">Whether it's a casual evening out or a special celebration, we invite you to take a seat at our counter and let our chefs tell you a story through food.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations" className="bg-amber-600 hover:bg-amber-700 px-12 py-4 uppercase tracking-[0.2em] font-medium transition-all">Book Your Table</Link>
            <Link to="/contact" className="border border-white hover:bg-white hover:text-stone-900 px-12 py-4 uppercase tracking-[0.2em] font-medium transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
