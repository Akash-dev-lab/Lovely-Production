import React from 'react';
import { CONTENT } from '../constants/content';
import { Button } from '../components/Button';
export function Portfolio() {
  const { title, items } = CONTENT.portfolio;

  return (
    <section className="section-padding bg-white dark:bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="dark:neon-text">{title}</span>
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-video overflow-hidden rounded-2xl glass-card border border-white/10"
            >
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              
              {/* Placeholder image representation */}
              <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="text-slate-400 dark:text-slate-600 font-display font-medium">Project {item.id}</span>
              </div>

              {item.hasAction && (
                <div className="absolute inset-x-0 bottom-0 p-4 text-center z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="secondary" size="sm" className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border-white/20 text-white">
                    VIEW
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
