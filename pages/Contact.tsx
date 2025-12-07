import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    shipmentType: 'Stem Cells',
    pickup: '',
    destination: '',
    urgency: 'Immediate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-12 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-12 rounded-2xl shadow-xl text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received</h2>
          <p className="text-gray-600 mb-8">
            Our 24/7 Operations team works on your quote immediately. You will receive a call or email within 15 minutes.
          </p>
          <a href="/" className="text-medical-600 font-semibold hover:underline">Return Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Our Critical Response Team</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            For urgent shipments, please call us directly or fill out the form below for a priority quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-medical-600 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Emergency Contacts</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-500 p-2 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-medical-100 text-sm">24/7 Operations</p>
                    <p className="font-bold text-lg">+1 (800) 123-4567</p>
                    <p className="font-bold text-lg">+44 20 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-500 p-2 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-medical-100 text-sm">Quote & Support</p>
                    <p className="font-bold text-lg">ops@obclifecare.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Global Hubs</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-medical-600 shrink-0 mt-0.5" />
                  <span><strong>London (HQ):</strong><br/>Heathrow Aviation Hub</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-medical-600 shrink-0 mt-0.5" />
                  <span><strong>New York:</strong><br/>JFK International Logistics Center</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-medical-600 shrink-0 mt-0.5" />
                  <span><strong>Singapore:</strong><br/>Changi Airport Free Trade Zone</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center space-x-2 mb-8 bg-amber-50 text-amber-800 p-4 rounded-lg border border-amber-100">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">For shipments requiring pickup within 4 hours, please call us immediately after submitting this form.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all"
                    placeholder="Dr. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company / Hospital</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all"
                    placeholder="Organization Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@hospital.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="h-px bg-slate-100 my-4"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pickup Location</label>
                  <input 
                    type="text" 
                    name="pickup"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all"
                    placeholder="City or Airport Code"
                    value={formData.pickup}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
                  <input 
                    type="text" 
                    name="destination"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all"
                    placeholder="City or Airport Code"
                    value={formData.destination}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Shipment Type</label>
                  <select 
                    name="shipmentType"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all bg-white"
                    value={formData.shipmentType}
                    onChange={handleChange}
                  >
                    <option>Stem Cells / Bone Marrow</option>
                    <option>Organ Transport</option>
                    <option>Blood / Plasma Samples</option>
                    <option>Pharmaceuticals</option>
                    <option>Medical Device (AOG)</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Urgency Level</label>
                  <select 
                    name="urgency"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all bg-white"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option>Immediate (Next Flight Out)</option>
                    <option>Within 24 Hours</option>
                    <option>Scheduled / Routine</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Temperature requirements, packaging dimensions, or special handling instructions..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white hover:bg-slate-50 text-medical-600 border-2 border-medical-600 font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Request Priority Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};