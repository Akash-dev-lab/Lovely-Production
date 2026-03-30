import React from 'react';
import * as Icons from 'lucide-react';
import { CONTENT } from '../constants/content';

export function Features() {
  const { title, items } = CONTENT.features;

  return (
    <section className="section-padding bg-slate-50 dark:bg-[#03081a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:neon-text mb-4 text-slate-900 dark:text-white">
            {title}
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((feature) => {
            const Icon = Icons[feature.icon];
            return (
              <div 
                key={feature.id}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-20 w-32 rounded-2xl glass-card flex items-center justify-center mb-6 border-white/5 shadow-neon-indigo hover:shadow-neon-indigo/40 hover:-translate-y-2 transition-all duration-300">
                  <div className="p-3 rounded-full bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={32} />}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
