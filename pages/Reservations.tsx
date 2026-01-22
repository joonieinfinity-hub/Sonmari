
import React, { useState, useEffect } from 'react';
// Added Link import from react-router-dom
import { Link } from 'react-router-dom';
import { Calendar, Users, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Reservations: React.FC = () => {
  useEffect(() => {
    document.title = `Reservations | ${SITE_CONFIG.name}`;
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-32 px-6 text-center animate-in zoom-in duration-700">
        <div className="max-w-xl mx-auto space-y-8 bg-stone-100 dark:bg-stone-900 p-16 rounded-sm shadow-2xl">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 mb-6 shadow-inner">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-5xl font-serif">Reservation Confirmed</h1>
          <div className="space-y-4 text-lg text-stone-500 dark:text-stone-400 leading-relaxed font-light">
            <p>Thank you, <strong>{formState.name}</strong>.</p>
            <p>Your table for <strong>{formState.guests} guests</strong> on <strong>{formState.date}</strong> at <strong>{formState.time}</strong> has been secured.</p>
            <p>A confirmation has been sent to <span className="text-amber-600 font-medium">{formState.email}</span>.</p>
          </div>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-amber-600 text-white px-12 py-4 uppercase tracking-[0.2em] font-bold text-sm hover:bg-amber-700 transition-all shadow-lg active:scale-95"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Booking</h2>
            <h1 className="text-6xl md:text-8xl font-serif">Secure Your Counter Seat</h1>
          </div>
          
          <div className="space-y-10 text-stone-500 dark:text-stone-400">
            <p className="text-xl leading-relaxed italic border-l-4 border-amber-600 pl-8 font-light">
              "Experience the counter where culinary art meets community. We recommend booking at least 7 days in advance for peak weekend slots."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h4 className="text-stone-900 dark:text-white font-serif text-2xl uppercase tracking-wide">Private Dining</h4>
                <p className="text-base leading-relaxed font-light">For parties of 8 or more, we offer a specialized multi-course tasting menu. Please reach out to our events coordinator.</p>
                <a href="mailto:events@sonmari.com" className="text-amber-600 font-bold uppercase tracking-widest text-xs border-b border-amber-600 pb-1 hover:text-amber-500 transition-colors">Contact Events</a>
              </div>
              <div className="space-y-4">
                <h4 className="text-stone-900 dark:text-white font-serif text-2xl uppercase tracking-wide">Chef's Omakase</h4>
                <p className="text-base leading-relaxed font-light">Book our premium Omakase experience by selecting the 6:00 PM or 8:30 PM seatings at the counter.</p>
                <Link to="/services" className="text-amber-600 font-bold uppercase tracking-widest text-xs border-b border-amber-600 pb-1 hover:text-amber-500 transition-colors">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-900 p-10 md:p-16 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm border border-stone-200 dark:border-stone-800">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4">
              <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-stone-400">Full Name</label>
              <input 
                id="name"
                required 
                type="text" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-700 py-4 focus:border-amber-600 outline-none transition-all text-lg font-light" 
                placeholder="James Park" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                <input 
                  id="email"
                  required 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-700 py-4 focus:border-amber-600 outline-none transition-all text-lg font-light" 
                  placeholder="james@example.com" 
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="guests" className="block text-xs uppercase tracking-widest font-bold text-stone-400">Party Size</label>
                <div className="relative">
                   <Users className="absolute left-0 top-4 text-stone-400" size={20} />
                   <select 
                     id="guests"
                     value={formState.guests}
                     onChange={(e) => setFormState({...formState, guests: e.target.value})}
                     className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-700 py-4 pl-10 focus:border-amber-600 outline-none appearance-none cursor-pointer text-lg font-light"
                   >
                     {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-stone-900">{n} Guests</option>)}
                   </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label htmlFor="date" className="block text-xs uppercase tracking-widest font-bold text-stone-400">Date</label>
                <div className="relative">
                   <Calendar className="absolute left-0 top-4 text-stone-400" size={20} />
                   <input 
                     id="date"
                     required 
                     type="date" 
                     value={formState.date}
                     onChange={(e) => setFormState({...formState, date: e.target.value})}
                     className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-700 py-4 pl-10 focus:border-amber-600 outline-none transition-all text-lg font-light cursor-pointer" 
                   />
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="time" className="block text-xs uppercase tracking-widest font-bold text-stone-400">Preferred Time</label>
                <div className="relative">
                   <Clock className="absolute left-0 top-4 text-stone-400" size={20} />
                   <select 
                     id="time"
                     value={formState.time}
                     onChange={(e) => setFormState({...formState, time: e.target.value})}
                     className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-700 py-4 pl-10 focus:border-amber-600 outline-none appearance-none cursor-pointer text-lg font-light"
                   >
                     {['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'].map(t => <option key={t} value={t} className="bg-stone-900">{t}</option>)}
                   </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="notes" className="block text-xs uppercase tracking-widest font-bold text-stone-400">Special Requests</label>
              <div className="relative">
                <MessageSquare className="absolute left-0 top-4 text-stone-400" size={20} />
                <textarea 
                  id="notes"
                  rows={3}
                  value={formState.notes}
                  onChange={(e) => setFormState({...formState, notes: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-stone-300 dark:border-stone-700 py-4 pl-10 focus:border-amber-600 outline-none transition-all resize-none text-lg font-light" 
                  placeholder="Allergies, birthday celebrations, or specific seating preferences..." 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-amber-600 text-white py-6 uppercase tracking-[0.4em] font-bold text-sm hover:bg-amber-700 disabled:bg-stone-600 transition-all shadow-xl shadow-amber-900/20 active:scale-95 flex items-center justify-center gap-4"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
