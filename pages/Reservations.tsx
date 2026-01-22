
import React, { useState } from 'react';
import { Calendar, Users, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  if (submitted) {
    return (
      <div className="pt-48 pb-24 px-6 text-center animate-in zoom-in duration-500">
        <div className="max-w-md mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-4">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-4xl font-serif">Reservation Confirmed</h1>
          <p className="text-stone-500 leading-relaxed">
            Thank you, <strong>{formState.name}</strong>. Your table for <strong>{formState.guests} guests</strong> on <strong>{formState.date}</strong> at <strong>{formState.time}</strong> has been booked. A confirmation email has been sent to {formState.email}.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-amber-600 text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-amber-700 transition-colors"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Booking</h2>
            <h1 className="text-5xl md:text-7xl font-serif">Reserve Your Table</h1>
          </div>
          
          <div className="space-y-6 text-stone-500 dark:text-stone-400">
            <p className="text-lg leading-relaxed italic border-l-2 border-amber-600 pl-6">
              "Experience the counter where culinary art meets community. We recommend booking at least 7 days in advance for peak weekend slots."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <h4 className="text-white font-serif text-xl">Private Dining</h4>
                <p className="text-sm">For parties of 8 or more, we offer a specialized tasting menu. Please email us at events@sonmari.com.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-serif text-xl">Chef's Table</h4>
                <p className="text-sm">Book our Omakase experience directly by selecting the 6:00 PM or 8:30 PM seatings.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-900 p-8 md:p-12 shadow-2xl rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-widest font-semibold text-stone-400">Full Name</label>
              <input 
                required 
                type="text" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:border-amber-600 outline-none transition-colors" 
                placeholder="James Park" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-semibold text-stone-400">Email Address</label>
                <input 
                  required 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 focus:border-amber-600 outline-none transition-colors" 
                  placeholder="james@example.com" 
                />
              </div>
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-semibold text-stone-400">Party Size</label>
                <div className="relative">
                   <Users className="absolute left-0 top-3 text-stone-400" size={18} />
                   <select 
                     value={formState.guests}
                     onChange={(e) => setFormState({...formState, guests: e.target.value})}
                     className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 pl-8 focus:border-amber-600 outline-none appearance-none cursor-pointer"
                   >
                     {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-stone-900">{n} Guests</option>)}
                   </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-semibold text-stone-400">Date</label>
                <div className="relative">
                   <Calendar className="absolute left-0 top-3 text-stone-400" size={18} />
                   <input 
                     required 
                     type="date" 
                     value={formState.date}
                     onChange={(e) => setFormState({...formState, date: e.target.value})}
                     className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 pl-8 focus:border-amber-600 outline-none transition-colors cursor-pointer" 
                   />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-semibold text-stone-400">Time</label>
                <div className="relative">
                   <Clock className="absolute left-0 top-3 text-stone-400" size={18} />
                   <select 
                     value={formState.time}
                     onChange={(e) => setFormState({...formState, time: e.target.value})}
                     className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 pl-8 focus:border-amber-600 outline-none appearance-none cursor-pointer"
                   >
                     {['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'].map(t => <option key={t} value={t} className="bg-stone-900">{t}</option>)}
                   </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-xs uppercase tracking-widest font-semibold text-stone-400">Special Requests</label>
              <div className="relative">
                <MessageSquare className="absolute left-0 top-3 text-stone-400" size={18} />
                <textarea 
                  rows={2}
                  value={formState.notes}
                  onChange={(e) => setFormState({...formState, notes: e.target.value})}
                  className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 py-3 pl-8 focus:border-amber-600 outline-none transition-colors resize-none" 
                  placeholder="Allergies, birthday celebrations, etc." 
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-amber-600 text-white py-5 uppercase tracking-[0.3em] font-bold text-sm hover:bg-amber-700 transform active:scale-95 transition-all shadow-lg">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
