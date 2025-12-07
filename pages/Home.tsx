
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Globe2, 
  Thermometer, 
  HeartPulse, 
  Plane, 
  Box,
  CheckCircle2,
  Navigation,
  Activity,
  Zap,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem, ProcessStep } from '../types';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const services: ServiceItem[] = [
  {
    id: 'stem-cells',
    title: 'Stem Cell & Bone Marrow',
    description: 'Specialized handling for highly sensitive stem cell materials utilizing Credo™ packaging (-196°C to +25°C).',
    icon: Activity
  },
  {
    id: 'organs',
    title: 'Organ Transplant',
    description: 'Dedicated air charter and NFO solutions for solid organ transport with minute-by-minute updates.',
    icon: HeartPulse
  },
  {
    id: 'clinical',
    title: 'Clinical Trials (IMP)',
    description: 'Secure Chain of Custody for Investigational Medicinal Products. Fully GDP compliant transport.',
    icon: Thermometer
  },
  {
    id: 'pharma',
    title: 'AOG Pharmaceuticals',
    description: 'Emergency supply chain solutions for life-saving medication shortages and radioactive isotopes.',
    icon: Box
  }
];

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Instant Quote',
    description: 'AI-assisted routing identifies the fastest commercial or charter flight options within 15 minutes.'
  },
  {
    number: '02',
    title: 'Courier Dispatch',
    description: 'A certified medical OBC handles all export/import permits and customs pre-clearance.'
  },
  {
    number: '03',
    title: 'Hand-Carry Transit',
    description: 'The shipment never leaves the couriers hand. Continuous temperature monitoring.'
  },
  {
    number: '04',
    title: 'Direct Delivery',
    description: 'Handover to the surgeon or lab technician at the destination facility with digital POD.'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="bg-white overflow-x-hidden font-sans text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-slate-950 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        
        {/* Deep, Clean Background */}
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        
        {/* Subtle Ambient Glows - Reduced opacity for cleaner look */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-medical-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content: Typography */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl relative z-20"
            >
              <div className="inline-flex items-center space-x-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-medical-500"></span>
                </span>
                <span className="text-xs font-semibold text-medical-50 tracking-widest uppercase">Global 24/7 Operations</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
                When every <br/>
                <span className="text-white">second counts.</span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light max-w-lg">
                The global standard for On-Board Courier (OBC) services. We specialize in the time-critical transport of organs, stem cells, and pharmaceuticals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  to="/contact" 
                  className="group inline-flex justify-center items-center px-8 py-4 bg-medical-600 text-white rounded-xl font-semibold transition-all hover:bg-medical-500 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(13,148,136,0.3)]"
                >
                  Priority Quote 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/#services" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-white border border-slate-700 rounded-xl font-semibold hover:bg-white/5 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Right Content: Abstract Orbital Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center h-[500px]"
            >
              {/* Central Core */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-medical-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_60px_-10px_rgba(20,184,166,0.5)] z-20">
                <Activity className="w-8 h-8 text-white" />
              </div>

              {/* Orbit 1: Inner Ring (Spinning) */}
              <div className="absolute w-48 h-48 border border-slate-700/30 rounded-full animate-[spin_10s_linear_infinite]">
                 {/* Live Status Dot */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-medical-400 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.8)]"></div>
              </div>
              
              {/* Orbit 2: Middle Ring (Dashed, Reverse Spin) */}
              <div className="absolute w-80 h-80 border border-slate-700/20 border-dashed rounded-full animate-[spin_20s_linear_infinite_reverse]">
                 {/* Plane on Orbit 2 */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-slate-900 border border-slate-600 rounded-full flex items-center justify-center shadow-lg animate-[spin_20s_linear_infinite]">
                        <Plane className="w-5 h-5 text-medical-400" />
                    </div>
                 </div>
                 
                 {/* FAST Badge on Orbit 2 */}
                 <div className="absolute bottom-[15%] right-[15%]">
                     <div className="animate-[spin_20s_linear_infinite]">
                         <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-full shadow-xl">
                            <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span className="text-[10px] font-bold text-white tracking-wider">FAST</span>
                        </div>
                     </div>
                 </div>
              </div>

              {/* Orbit 3: Outer Ring (Slow Spin with Blur) */}
              <div className="absolute w-[450px] h-[450px] border border-slate-800 rounded-full animate-[spin_40s_linear_infinite]">
                 {/* Shield on Orbit 3 */}
                 <div className="absolute top-[15%] left-[15%]">
                     <div className="animate-[spin_40s_linear_infinite_reverse]">
                        <div className="w-12 h-12 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl flex items-center justify-center shadow-2xl">
                            <ShieldCheck className="w-6 h-6 text-emerald-400" />
                        </div>
                     </div>
                 </div>

                 {/* SECURE Badge */}
                 <div className="absolute bottom-[20%] left-[20%]">
                     <div className="animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-full shadow-xl">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                           <span className="text-[10px] font-bold text-white tracking-wider">SECURE</span>
                        </div>
                     </div>
                 </div>
                 
                 {/* GLOBAL Badge */}
                 <div className="absolute top-[40%] right-0">
                     <div className="animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-full shadow-xl">
                            <Globe2 className="w-3 h-3 text-blue-400" />
                            <span className="text-[10px] font-bold text-white tracking-wider">GLOBAL</span>
                        </div>
                     </div>
                 </div>
              </div>

              {/* Background Glow */}
              <div className="absolute w-96 h-96 bg-medical-500/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP - Minimalist */}
      <div className="border-b border-slate-100 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'On-Time Delivery', value: '99.9%' },
              { label: 'Global Destinations', value: '120+' },
              { label: 'Quote Time', value: '< 15m' },
              { label: 'GDP Compliant', value: '100%' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start pl-4 md:pl-0 border-l-2 border-slate-100 md:border-l-0">
                <div className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="text-medical-600 font-bold tracking-widest uppercase text-sm mb-3 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
              Specialized logistics for <br/> modern medicine.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              We don't just move boxes. We manage complex, life-critical supply chains with a focus on speed, security, and temperature stability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:border-transparent transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-medical-600 mb-8 shadow-sm group-hover:bg-medical-600 group-hover:text-white transition-colors duration-500">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-medical-600 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL SECTION (Dark) */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium mb-6">Global Control Tower</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Our centralized operations center monitors every shipment in real-time. With strategic hubs in London, New York, Singapore, and Dubai, we ensure seamless connectivity.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time GPS & Temperature Tracking',
                  '24/7 Crisis Management Team',
                  'Direct Tarmac Access'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-medical-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               {/* Abstract Map Graphic */}
               <div className="aspect-video bg-slate-800/50 rounded-3xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                  </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-[60%] w-[1px] bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
                  </div>

                  {/* Pulsing Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-medical-500/10 rounded-full blur-2xl animate-pulse"></div>
                  </div>
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                     <div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Status</div>
                        <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono">
                           <span className="relative flex h-2 w-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                           </span>
                           SYSTEMS NORMAL
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 lg:py-32 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-medical-600 font-bold tracking-widest uppercase text-sm">Workflow</span>
               <h2 className="text-3xl lg:text-4xl font-medium text-slate-900 mt-3">Precision in Motion</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                 {/* Connector Line Desktop */}
                 <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

                 {steps.map((step, idx) => (
                   <div key={idx} className="relative pt-4 md:pt-0 group">
                     <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center font-bold text-xl text-medical-600 mb-6 mx-auto md:mx-0 shadow-sm relative z-10 group-hover:border-medical-200 group-hover:scale-110 transition-all duration-300">
                       {step.number}
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-3 text-center md:text-left">{step.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed text-center md:text-left">
                       {step.description}
                     </p>
                   </div>
                 ))}
            </div>
         </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-900 mb-8">Every minute counts.</h2>
          <p className="text-xl text-slate-500 mb-10 font-light">
            Connect with our 24/7 specialist team now for a quote within 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-medical-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-medical-700 transition-colors shadow-xl shadow-medical-500/20"
            >
              Request Urgent Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Placeholders for Logos to keep it clean */}
            <span className="text-xl font-bold text-slate-800 flex items-center gap-2"><Globe2 className="w-6 h-6"/> IATA</span>
            <span className="text-xl font-bold text-slate-800 flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> ISO 9001</span>
            <span className="text-xl font-bold text-slate-800 flex items-center gap-2"><Thermometer className="w-6 h-6"/> GDP Compliant</span>
            <span className="text-xl font-bold text-slate-800 flex items-center gap-2"><Plane className="w-6 h-6"/> FAA Approved</span>
        </div>
      </div>

    </div>
  );
};
