
import React from 'react';
import { merch, MerchItem } from '../data/merch';

const Merch: React.FC = () => {
  return (
    <section id="merch" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Merch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merch.map((item: MerchItem) => (
            <div key={item.title} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <a href={item.etsyUrl} target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Visit Our Etsy Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Merch;
