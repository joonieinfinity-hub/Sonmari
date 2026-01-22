
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Music2 as Tiktok, Sun, Moon, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Navbar: React.FC<{ darkMode: boolean; toggleTheme: () => void }> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? (darkMode ? 'bg-stone-900/95 shadow-xl py-3' : 'bg-white/95 shadow-lg py-3') : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif tracking-widest font-bold uppercase transition-colors hover:text-amber-600">
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors hover:text-amber-600 ${location.pathname === link.path ? 'text-amber-600 underline underline-offset-8 decoration-2' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-stone-500/10 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-stone-600" />}
          </button>
          <Link to="/reservations" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-sm text-sm tracking-widest uppercase transition-all active:scale-95 shadow-lg shadow-amber-900/20">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
           <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-stone-500/10">
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-stone-600" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-stone-900 text-white transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
           <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)} aria-label="Close menu"><X size={32} /></button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl tracking-[0.3em] font-serif uppercase hover:text-amber-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/reservations" 
            onClick={() => setIsOpen(false)}
            className="mt-8 border border-white px-10 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-stone-900 transition-colors"
          >
            Reservations
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-white tracking-widest">{SITE_CONFIG.name}</h2>
          <p className="text-sm leading-relaxed max-w-xs text-stone-400">
            Blending contemporary Korean flavors with the precise art of sushi hand-rolls. Experience Sunset Boulevard's finest fusion.
          </p>
          <div className="flex space-x-4">
            <a href={SITE_CONFIG.socialLinks.instagram} aria-label="Instagram" className="hover:text-amber-500 transition-colors"><Instagram size={20}/></a>
            <a href={SITE_CONFIG.socialLinks.facebook} aria-label="Facebook" className="hover:text-amber-500 transition-colors"><Facebook size={20}/></a>
            <a href={SITE_CONFIG.socialLinks.tiktok} aria-label="TikTok" className="hover:text-amber-500 transition-colors"><Tiktok size={20}/></a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white tracking-widest uppercase">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <span>{SITE_CONFIG.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <span>{SITE_CONFIG.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Clock size={18} className="text-amber-500 shrink-0" />
              <div className="space-y-1">
                {Object.entries(SITE_CONFIG.hours).map(([day, time]) => (
                  <div key={day} className="flex justify-between w-full min-w-[200px]">
                    <span className="font-semibold">{day}:</span>
                    <span className="text-stone-400">{time}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white tracking-widest uppercase">Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
            <li><Link to="/menu" className="hover:text-amber-500 transition-colors">View Menu</Link></li>
            <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Culinary Blog</Link></li>
            <li><Link to="/reservations" className="hover:text-amber-500 transition-colors">Private Events</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white tracking-widest uppercase">Newsletter</h3>
          <p className="text-sm text-stone-400">Join our list for exclusive event invitations and seasonal menu reveals.</p>
          <form className="flex border-b border-stone-700 focus-within:border-amber-500 transition-colors">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none px-4 py-2 w-full text-sm outline-none" 
            />
            <button className="text-amber-500 px-4 py-2 hover:text-amber-400 transition-colors" aria-label="Subscribe">
              <ChevronRight size={20} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors text-[10px]">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors text-[10px]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
