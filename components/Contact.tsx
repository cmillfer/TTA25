
import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { SendIcon } from './icons/SendIcon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    alias: '',
    email: '',
    date: '',
    venue: '',
    budget: '',
    vibe: 'Club',
    statement: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report Filed:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase font-mono neon-text">
            File A Report
          </h2>
          <p className="mt-4 text-lg text-paper-light">
            Want to book the duo? Submit your evidence below.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={200}>
        <div className="bg-paper-light text-brand-black p-1 sm:p-2 rounded shadow-2xl transform rotate-1 max-w-3xl mx-auto">
            {/* The Form Container styling it like paper */}
            <div className="border-4 border-brand-black p-6 sm:p-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] relative">
                
                {/* Stamp */}
                <div className="absolute top-4 right-4 border-4 border-primary-red text-primary-red px-4 py-2 font-bold text-xl uppercase opacity-40 -rotate-12 font-mono pointer-events-none select-none">
                    Confidential
                </div>

                <h3 className="font-typewriter text-2xl font-bold uppercase border-b-2 border-brand-black pb-4 mb-8 text-center">
                    Official Booking Incident Report
                </h3>

                {isSubmitted ? (
                     <div className="py-20 text-center space-y-6">
                        <div className="text-6xl">📂</div>
                        <h4 className="font-typewriter text-2xl font-bold text-dark-green uppercase">Report Filed Successfully.</h4>
                        <p className="font-mono text-lg">We will review the evidence and contact you shortly.</p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="mt-4 underline text-primary-red font-bold hover:text-brand-black"
                        >
                            File Another Report
                        </button>
                     </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 font-typewriter">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="alias" className="block text-sm font-bold uppercase mb-1">Reporting Officer / Alias</label>
                                <input 
                                    type="text" 
                                    id="alias" 
                                    name="alias" 
                                    required 
                                    value={formData.alias}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg placeholder-slate-500/50"
                                    placeholder="YOUR NAME"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold uppercase mb-1">Contact Frequency (Email)</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg placeholder-slate-500/50"
                                    placeholder="EMAIL@ADDRESS.COM"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="date" className="block text-sm font-bold uppercase mb-1">Incident Date</label>
                                <input 
                                    type="date" 
                                    id="date" 
                                    name="date" 
                                    required 
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg"
                                />
                            </div>
                            <div>
                                <label htmlFor="venue" className="block text-sm font-bold uppercase mb-1">Location / Venue</label>
                                <input 
                                    type="text" 
                                    id="venue" 
                                    name="venue" 
                                    required 
                                    value={formData.venue}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg placeholder-slate-500/50"
                                    placeholder="CLUB / CITY"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold uppercase mb-1">Estimated Bounty (Budget)</label>
                                <input 
                                    type="text" 
                                    id="budget" 
                                    name="budget" 
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg placeholder-slate-500/50"
                                    placeholder="$"
                                />
                            </div>
                            <div>
                                <label htmlFor="vibe" className="block text-sm font-bold uppercase mb-1">Classify The Vibe</label>
                                <select
                                    id="vibe"
                                    name="vibe"
                                    value={formData.vibe}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg"
                                >
                                    <option value="Club">Club Show</option>
                                    <option value="Festival">Festival</option>
                                    <option value="Private">Private Party</option>
                                    <option value="Underground">Underground Rave</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="statement" className="block text-sm font-bold uppercase mb-1">Witness Statement (Message)</label>
                            <textarea 
                                id="statement" 
                                name="statement" 
                                rows={4}
                                required
                                value={formData.statement}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b-2 border-brand-black focus:border-primary-red focus:outline-none py-2 px-1 font-mono text-lg placeholder-slate-500/50"
                                placeholder="DESCRIBE THE EVENT..."
                            ></textarea>
                        </div>

                        <div className="pt-4 text-center">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-brand-black text-paper-light px-8 py-4 font-mono font-bold text-xl uppercase hover:bg-primary-red hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span>Submit Evidence</span>
                                <SendIcon className="h-5 w-5" />
                            </button>
                        </div>

                    </form>
                )}
                
                <div className="mt-8 text-center text-xs font-mono opacity-60">
                    FORM TTA-757 // REV 2025
                </div>
            </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Contact;
