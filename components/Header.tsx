'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-accent-700/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-700 rounded-full flex items-center justify-center glow-effect">
              <span className="text-primary-900 font-bold text-lg">☕</span>
            </div>
            <span className="text-xl font-serif font-bold text-accent-400 glow-text">Cup of Fate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Features', id: 'features' },
              { label: 'About', id: 'about' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-accent-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Download Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('download')}
              className="px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-200 glow-effect"
            >
              Get App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent-400 hover:text-accent-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-accent-700/20 space-y-3">
            {[
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Features', id: 'features' },
              { label: 'About', id: 'about' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Download', id: 'download' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-accent-400 transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
