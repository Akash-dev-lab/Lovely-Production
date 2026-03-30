import React from 'react';
import { Button } from "../components/Button";
import { CONTENT } from "../constants/content";

/**
 * A standard, high-conversion Hero section.
 * Optimized with semantic HTML and accessibility features.
 */
export function Hero() {
  const { title, subtitle, cta } = CONTENT.hero;

  return (
    <section 
      aria-label="Hero Section" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-transparent pt-32 pb-16 lg:pt-48 lg:pb-24"
    >
      {/* Background decoration - ARIA Hidden for accessibility */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl blur-[120px] opacity-20 pointer-events-none"
      >
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <header className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50/50 dark:bg-brand-600/10 text-brand-700 dark:text-brand-400 text-sm font-medium mb-8 border border-brand-100 dark:border-brand-600/20 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse" aria-hidden="true" />
            Animation & Graphics Experts
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">
            <span className="dark:neon-text">{title}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            {subtitle}
          </p>
        </header>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button size="lg" className="h-16 px-10 text-lg shadow-brand-600/20 hover:shadow-brand-600/40 transition-all duration-500" aria-label="Begin your project today">
            {cta}
          </Button>
        </div>

        {/* Optimized Hero Illustration representation mirroring the image */}
        <div className="relative mx-auto max-w-5xl group">
          <div className="absolute -inset-4 bg-linear-to-r from-brand-700 to-brand-500 opacity-20 blur-3xl -z-10 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl p-2 bg-white/5">
            <img 
              src="/hero-illustration.png" 
              alt="Lovely Production Creative Demo Workspace" 
              width={1200} 
              height={600} 
              loading="eager"
              fetchPriority="high"
              className="rounded-2xl w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 shadow-inner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


