import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-white/70 dark:bg-[#111111]/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-lg"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative h-11 w-11 transition-transform duration-500 group-hover:scale-105">
            <img
              src="/loveLogo.png"
              alt="Lovely Studio"
              className="h-full w-full object-contain transition-all duration-500 rounded"
            />
          </div>
          {/* <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
            Lovely <span className="text-brand-600 dark:text-brand-500">Studio</span>
          </span> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2" />

          <ThemeToggle />

          <a
            href="#contact"
            className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-600/30 active:scale-95"
          >
            Hire Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[73px] bg-white dark:bg-[#111111] z-40 md:hidden transition-transform duration-500 ease-in-out px-6 py-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between group"
              >
                {link.name}
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-12 border-t border-slate-100 dark:border-white/5">
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all"
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
