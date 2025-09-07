"use client"
import { useState } from "react";

export default function Action() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="Action">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
        <h2 className="text-2xl font-bold text-orange-700">Action</h2>
      </div>

      <div className="text-lg text-gray-700 leading-relaxed mb-6"> 
        Using <span className="text-orange-700 font-medium">React</span> for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. 
        On the back end, I developed RESTful APIs with 
        <span className="text-orange-700 font-medium"> Node.js and MongoDB</span> for data management. 
        Additionally, I integrated the platform with 
        <span className="text-orange-700 font-medium"> AWS </span>  
        to optimize loading times and set up a CI/CD pipeline for faster deployment and testing. 
        I worked closely with designers and QA to address usability and accessibility standards.
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Jest", "Docker", "Jenkins"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-orange-600 font-medium mb-4"
      >
        {expanded ? 'Hide' : 'Show'} Implementation Details
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
            { src: "UI-UX-Design.webp", alt: "UI-UX-Design Img", caption: "UI/UX Design" },
            { src: "API_database.webp", alt: "API database Img", caption: "API & Database" },
            { src: "working_group.webp", alt: "Working Group Img", caption: "Team Collaboration" }
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