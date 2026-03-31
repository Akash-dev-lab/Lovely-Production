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
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-transparent pt-28 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Background decoration - ARIA Hidden for accessibility */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl blur-[120px] opacity-20 pointer-events-none"
      >
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
          <div className="max-w-3xl text-center lg:text-left">
            <header>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50/50 dark:bg-brand-600/10 text-brand-700 dark:text-brand-400 text-sm font-medium mb-8 border border-brand-100 dark:border-brand-600/20 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse" aria-hidden="true" />
                Animation & Graphics Experts
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-slate-900 dark:text-white mb-6 leading-[0.98] tracking-tight">
                <span className="dark:neon-text">{title}</span>
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl lg:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                {subtitle}
              </p>
            </header>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
              <Button size="lg" className="h-16 px-10 text-lg shadow-brand-600/20 hover:shadow-brand-600/40 transition-all duration-500" aria-label="Begin your project today">
                {cta}
              </Button>
            </div>
          </div>

          {/* Optimized Hero Illustration representation mirroring the image */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end group">
            <div className="absolute -inset-5 bg-linear-to-r from-brand-700 to-brand-500 opacity-20 blur-3xl -z-10 group-hover:opacity-35 transition duration-1000"></div>
            <div className="absolute inset-0 rounded-[2rem] bg-radial-[at_50%_20%] from-brand-500/15 via-transparent to-transparent opacity-80 pointer-events-none" aria-hidden="true"></div>
            <div className="relative rounded-[2rem] overflow-hidden glass-card border border-white/10 shadow-2xl p-3 sm:p-4 bg-white/5">
              <img 
                src="/hero-illustration.png" 
                alt="Lovely Production creative showcase preview" 
                width={1024} 
                height={1024} 
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 92vw"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="rounded-[1.5rem] w-full h-auto object-cover aspect-square opacity-95 group-hover:opacity-100 transition-opacity duration-500 shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


