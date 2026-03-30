import React from 'react';
import * as Icons from 'lucide-react';
import { CONTENT } from '../constants/content';
import { cn } from '../utils/cn';

export function Services() {
  const { title, items } = CONTENT.services;

  return (
    <section className="section-padding bg-slate-50/50 dark:bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="dark:neon-text">{title}</span>
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service) => {
            const Icon = Icons[service.icon];
            return (
              <div 
                key={service.id}
                className="glass-card p-8 rounded-2xl group hover:neon-glow-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
