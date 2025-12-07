import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Phone, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Process', path: '/#process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen || !isHome ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-medical-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="bg-gradient-to-br from-medical-500 to-medical-700 p-2.5 rounded-xl relative z-10 shadow-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">
                OBC Life Care
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-medical-400">
                Medical Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medical-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-medical-600 text-white rounded-full text-sm font-semibold overflow-hidden transition-all hover:bg-medical-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone size={16} />
                Emergency Quote
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="flex items-center justify-between w-full bg-gradient-to-r from-medical-600 to-medical-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg"
                >
                  <span>Get Urgent Quote</span>
                  <ArrowRight size={20} />
                </Link>
                <div className="mt-4 text-center text-slate-400 text-sm">
                  24/7 Control Tower: <a href="tel:+18001234567" className="text-white font-mono ml-1">+1 (800) 123-4567</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};