import React, { Suspense, lazy } from 'react'
import { ThemeToggle } from './components/ThemeToggle'
import { Navbar } from './components/Navbar'

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero').then(m => ({ default: m.Hero })));
const Services = lazy(() => import('./sections/Services').then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import('./sections/Portfolio').then(m => ({ default: m.Portfolio })));
const Features = lazy(() => import('./sections/Features').then(m => ({ default: m.Features })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

const Loading = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] selection:bg-brand-500/30 selection:text-brand-900 transition-colors duration-500">
      <Navbar />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white dark:bg-[#020617]"><Loading /></div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Features />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>

      <footer className="py-8 text-center text-slate-400 dark:text-slate-600 text-sm border-t border-slate-100 dark:border-white/5">
        &copy; {new Date().getFullYear()} Lovely Production. All rights reserved.
      </footer>
    </main>
  )
}

export default App