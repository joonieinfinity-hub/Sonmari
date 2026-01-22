
import React, { useState } from 'react';
import { Search, ChevronRight, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-20">
          <div className="space-y-4">
            <h2 className="text-amber-600 uppercase tracking-widest font-semibold text-sm">Culinary Journal</h2>
            <h1 className="text-5xl md:text-7xl font-serif">Stories & Seasons</h1>
          </div>

          <div className="space-y-24">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group space-y-8">
                <div className="overflow-hidden aspect-[16/9] relative rounded-sm">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-1 text-xs uppercase tracking-widest font-bold">
                    {post.category}
                  </div>
                </div>
                
                <div className="space-y-4">
                   <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-stone-500 font-medium">
                      <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-serif group-hover:text-amber-600 transition-colors cursor-pointer">{post.title}</h2>
                   <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-lg">
                     {post.excerpt}
                   </p>
                   <button className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-xs border-b-2 border-amber-600/30 hover:border-amber-600 pb-1 transition-all">
                     Read Full Story <ChevronRight size={16} />
                   </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          {/* Search */}
          <div className="bg-stone-100 dark:bg-stone-900 p-8 rounded-sm space-y-4">
             <h3 className="font-serif text-2xl tracking-wide uppercase">Search</h3>
             <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ingredients, events, stories..."
                  className="w-full bg-white dark:bg-stone-800 border-none px-4 py-3 pr-10 outline-none focus:ring-1 focus:ring-amber-600 text-sm"
                />
                <Search className="absolute right-3 top-3 text-stone-400" size={18} />
             </div>
          </div>

          {/* Categories */}
          <div className="p-4 space-y-6">
            <h3 className="font-serif text-2xl tracking-wide uppercase border-b border-stone-200 dark:border-stone-800 pb-4">Categories</h3>
            <ul className="space-y-3">
              {['Technique', 'Sustainability', 'Seasonal Menus', 'Chef Interviews', 'Events'].map(cat => (
                <li key={cat}>
                  <a href="#" className="flex justify-between items-center text-sm text-stone-500 hover:text-amber-600 transition-colors py-1">
                    <span>{cat}</span>
                    <span className="text-xs text-stone-400">(4)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="p-4 space-y-6">
            <h3 className="font-serif text-2xl tracking-wide uppercase border-b border-stone-200 dark:border-stone-800 pb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Sushi', 'Hand Rolls', 'Los Angeles', 'Fusion', 'Korean Food', 'Craft Cocktails', 'Sustainability'].map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Poster */}
          <div className="relative overflow-hidden rounded-sm group">
            <img src="https://picsum.photos/seed/promo/600/800" alt="Promo" className="w-full h-auto brightness-50 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6 text-white">
               <h4 className="font-serif text-3xl">Summer Omakase</h4>
               <p className="text-xs uppercase tracking-[0.2em]">Limited Seatings Available</p>
               <button className="bg-amber-600 px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-amber-700 transition-colors">Book Now</button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Blog;
