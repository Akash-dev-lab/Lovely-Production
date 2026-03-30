import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { CONTENT } from '../constants/content';
import { Button } from '../components/Button';

export function Contact() {
  const { title, getInTouch, form } = CONTENT.contact;

  return (
    <section className="section-padding bg-white dark:bg-transparent overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:neon-text mb-4 text-slate-900 dark:text-white">
            {title}
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative overflow-hidden">
          {/* Decorative background glow for contact card */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">
              {getInTouch.title}
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="h-14 w-14 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400 border border-brand-500/20 group-hover:neon-glow-primary transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Call Us</span>
                  <a href={`tel:${getInTouch.phone}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-500 transition-colors">
                    {getInTouch.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="h-14 w-14 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400 border border-brand-500/20 group-hover:neon-glow-primary transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Email Us</span>
                  <a href={`mailto:${getInTouch.email}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-500 transition-colors truncate">
                    {getInTouch.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {form.fields.slice(0, 2).map((field) => (
                <div key={field} className="space-y-2">
                  <label className="text-sm text-slate-600 dark:text-slate-400 ml-1">{field}</label>
                  <input 
                    type="text" 
                    placeholder={`Enter ${field.toLowerCase()}`}
                    className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500/40 transition-all outline-hidden backdrop-blur-md"
                  />
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-slate-600 dark:text-slate-400 ml-1">{form.fields[2]}</label>
              <textarea 
                rows={4}
                placeholder={`Enter ${form.fields[2].toLowerCase()}`}
                className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500/40 transition-all outline-hidden backdrop-blur-md resize-none"
              />
            </div>

            <Button size="lg" className="w-full h-14 text-lg font-bold neon-glow-primary hover:neon-glow-primary group">
              {form.cta}
              <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
