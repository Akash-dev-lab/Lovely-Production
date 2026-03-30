import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../utils/cn';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark as per design
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-500 group overflow-hidden",
        "bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:scale-110 active:scale-95",
        "hover:neon-glow-primary group-hover:border-brand-500/50"
      )}
      aria-label="Toggle Theme"
    >
      <div className="relative h-6 w-6">
        <Sun 
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100 text-amber-500"
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isDark ? "opacity-100 rotate-0 scale-100 text-brand-400" : "opacity-0 -rotate-90 scale-0"
          )} 
        />
      </div>
      
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-brand-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full -z-10" />
    </button>
  );
}
