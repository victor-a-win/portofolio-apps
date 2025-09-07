"use client"
import { useState } from "react";

export default function Task() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="Task">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
        <h2 className="text-2xl font-bold text-orange-700">Task</h2>
      </div>

      <div className="text-lg text-gray-700 leading-relaxed mb-6"> 
        I was responsible for building the front-end and back-end components of the platform, 
        ensuring seamless integration with the client's inventory and payment systems. 
        <span className="text-orange-700 font-medium">
          The project goal was to create an efficient, high-performing application
        </span> with a smooth user experience.
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">My Responsibilities:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Front-end development with React and TypeScript</li>
          <li>Back-end API development with Node.js</li>
          <li>Database design and implementation</li>
          <li>Integration with payment and inventory systems</li>
          <li>Performance optimization and testing</li>
        </ul>
      </div>
      
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-orange-600 font-medium mb-4"
      >
        {expanded ? 'Hide' : 'Show'} Development Process
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { src: "front-end.webp", alt: "FrontEnd-Activites", caption: "Frontend Development" },
            { src: "front-end2.webp", alt: "FrontEnd-Activities-2", caption: "UI Implementation" },
            { src: "back-end.webp", alt: "BackEnd-Activities", caption: "Backend Development" }
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
    </div>
  );
}