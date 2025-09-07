"use client"
import { useState } from "react";

export default function Situation() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="Situation">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
        <h2 className="text-2xl font-bold text-orange-700">Situation</h2>
      </div>

      <div className="text-lg text-gray-700 leading-relaxed mb-6"> 
        XYZ Retail, an established retail company, sought to expand into 
        e-commerce to reach a wider audience and streamline its sales processes. 
        <span className="text-orange-700 font-medium"> They needed a scalable, user-friendly platform </span> 
        to support both desktop and mobile users with features like product browsing, 
        user reviews, secure checkout, and real-time inventory updates.
      </div>
      
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-orange-600 font-medium mb-4"
      >
        {expanded ? 'Hide' : 'Show'} Project Images
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {expanded && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { src: "Retail_Company.webp", alt: "Retail Company Img", caption: "Retail Company" },
            { src: "E-commerce.webp", alt: "E-commerce Img", caption: "E-commerce Platform" },
            { src: "Mobile-Apps.webp", alt: "Mobile-Apps Img", caption: "Mobile Apps" },
            { src: "Browsing.webp", alt: "Browsing Img", caption: "Product Browsing" },
            { src: "Real_time_inventory.webp", alt: "Real_time_inventory Img", caption: "Inventory System" }
          ].map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <img 
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" 
                src={image.src} 
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 text-white text-sm font-medium">{image.caption}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
        <h3 className="font-semibold text-orange-800 mb-2">Challenge:</h3>
        <p className="text-orange-700">
          Transitioning a traditional retail business to a digital e-commerce platform while maintaining brand identity and customer trust.
        </p>
      </div>
    </div>
  );
}