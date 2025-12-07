import React from 'react';
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-medical-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">OBC Life Care</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your global partner in time-critical medical logistics. We move what matters most: from clinical trials to organ transport, with precision and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-medical-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-medical-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-medical-400 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-medical-500">Services</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link to="/#services" className="hover:text-white transition-colors">Stem Cell Transport</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Organ Transport</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Clinical Trials</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Pharmaceutical Logistics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-medical-500">Company</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Compliance & Quality</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-medical-500">24/7 Operations</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-medical-600 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-medical-600 shrink-0" />
                <span>emergency@obclifecare.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-600 shrink-0" />
                <span>Global HQ: London, UK<br/>Hubs: NYC, Singapore, Dubai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} OBC Life Care. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
