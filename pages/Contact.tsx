
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Get in Touch</h2>
          <h1 className="text-5xl md:text-8xl font-serif">Connect With Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h3 className="font-serif text-2xl tracking-wide uppercase flex items-center gap-3">
                     <MapPin size={20} className="text-amber-600" /> Location
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                    {SITE_CONFIG.address}<br />
                    Silver Lake, CA 90026
                  </p>
               </div>
               <div className="space-y-4">
                  <h3 className="font-serif text-2xl tracking-wide uppercase flex items-center gap-3">
                     <Clock size={20} className="text-amber-600" /> Hours
                  </h3>
                  <div className="text-stone-500 dark:text-stone-400 text-sm space-y-1">
                    {Object.entries(SITE_CONFIG.hours).map(([day, time]) => (
                      <div key={day} className="flex justify-between max-w-[200px]">
                        <span className="font-bold">{day}</span>
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="font-serif text-2xl tracking-wide uppercase flex items-center gap-3">
                     <Phone size={20} className="text-amber-600" /> Reservation
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm">
                    {SITE_CONFIG.phone}
                  </p>
               </div>
               <div className="space-y-4">
                  <h3 className="font-serif text-2xl tracking-wide uppercase flex items-center gap-3">
                     <Mail size={20} className="text-amber-600" /> General
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm">
                    {SITE_CONFIG.email}
                  </p>
               </div>
            </div>

            {/* Mock Map */}
            <div className="relative h-96 w-full grayscale contrast-125 opacity-70 group hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 flex items-center justify-center overflow-hidden rounded-sm">
                <img src="https://picsum.photos/seed/map/1200/800" alt="Map Placeholder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-stone-900/40 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center animate-pulse">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <p className="text-white text-sm font-bold tracking-widest uppercase">{SITE_CONFIG.name} @ Sunset Blvd</p>
                  <a href="#" className="bg-white text-stone-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-colors">Open in Maps</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-stone-100 dark:bg-stone-900 p-8 md:p-12 rounded-sm shadow-xl">
            <h3 className="font-serif text-3xl tracking-wide uppercase mb-8">Send a Message</h3>
            <form className="space-y-8">
               <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:border-amber-600 outline-none transition-colors" placeholder="James Park" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:border-amber-600 outline-none transition-colors" placeholder="james@example.com" />
               </div>
               <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Subject</label>
                  <select className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:border-amber-600 outline-none cursor-pointer appearance-none">
                     <option className="bg-stone-900">General Inquiry</option>
                     <option className="bg-stone-900">Private Event Inquiry</option>
                     <option className="bg-stone-900">Career Opportunities</option>
                     <option className="bg-stone-900">Feedback</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Message</label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:border-amber-600 outline-none transition-colors resize-none" placeholder="Tell us what's on your mind..."></textarea>
               </div>
               <button type="submit" className="w-full bg-amber-600 text-white py-5 flex items-center justify-center gap-3 uppercase tracking-[0.3em] font-bold text-sm hover:bg-amber-700 transition-all active:scale-95 shadow-lg group">
                  Send Message <Send size={18} className="transition-transform group-hover:translate-x-1" />
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
