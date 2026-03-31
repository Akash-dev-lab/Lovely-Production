import React from 'react';
import { Button } from "../components/Button";
import { CONTENT } from "../constants/content";

/**
 * A standard, high-conversion Hero section.
 * Optimized with semantic HTML and accessibility features.
 */
export function Hero() {
  const { title, title2, subtitle, cta } = CONTENT.hero;

  return (
    <section 
      aria-label="Hero Section" 
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-950 pt-28 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Section-wide hero background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,10,18,0.9) 0%, rgba(8,10,18,0.78) 42%, rgba(8,10,18,0.56) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-slate-950/28 pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[42rem] max-w-[55vw] bg-brand-600/12 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"
      >
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
          <div className="max-w-3xl text-center lg:text-left">
            <header>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-600/10 text-brand-200 text-sm font-medium mb-8 border border-brand-500/20 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse" aria-hidden="true" />
                Animation & Graphics Experts
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white mb-6 leading-[0.98] tracking-tight">
                <span>{title}</span> <br />
                <span className='text-[#c41e3a]'>{title2}</span>
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl lg:text-2xl font-medium text-slate-200 mb-10 leading-relaxed">
                {subtitle}
              </p>
            </header>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
              <Button size="lg" className="h-16 px-10 text-lg shadow-brand-600/20 hover:shadow-brand-600/40 transition-all duration-500" aria-label="Begin your project today">
                {cta}
              </Button>
            </div>
          </div>

          {/* Optimized desktop showcase image */}
          <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:justify-self-end group">
            <div className="absolute inset-[12%] rounded-full bg-emerald-400/22 blur-[110px] opacity-85 -z-10 pointer-events-none transition duration-1000 group-hover:opacity-100" aria-hidden="true"></div>
            <div className="absolute right-[8%] bottom-[10%] h-24 w-24 rounded-full bg-emerald-300/24 blur-[50px] opacity-90 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute left-[18%] top-[20%] h-28 w-28 rounded-full bg-cyan-300/18 blur-[65px] opacity-80 pointer-events-none" aria-hidden="true"></div>
            <div className="relative">
              <img 
                src="/Desktop.png" 
                alt="Lovely Production desktop showcase preview" 
                width={628} 
                height={397} 
                sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 44vw, (min-width: 640px) 76vw, 92vw"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto object-contain aspect-[628/397] opacity-95 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_30px_50px_rgba(0,0,0,0.38)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
