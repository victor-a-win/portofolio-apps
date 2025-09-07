import { useState } from "react";

export default function Result() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="Result">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
        <h2 className="text-2xl font-bold text-orange-700">Result</h2>
      </div>

      <div className="text-lg text-gray-700 leading-relaxed mb-6"> 
        The project was completed on time, 
        <span className="text-orange-700 font-medium">
          leading to a 35% increase in online sales within the first three months.
        </span> User feedback highlighted the site's speed and ease of use, 
        and the client reported a substantial reduction in manual inventory management tasks.
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="font-semibold text-green-800 mb-2">Sales Increase</h3>
          <p className="text-3xl font-bold text-green-700">35%</p>
          <p className="text-green-600 text-sm">in first three months</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-blue-800 mb-2">User Satisfaction</h3>
          <p className="text-3xl font-bold text-blue-700">4.8/5</p>
          <p className="text-blue-600 text-sm">average rating</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-semibold text-purple-800 mb-2">Inventory Tasks</h3>
          <p className="text-3xl font-bold text-purple-700">60%</p>
          <p className="text-purple-600 text-sm">reduction in manual work</p>
        </div>
      </div>
      
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-orange-600 font-medium mb-4"
      >
        {expanded ? 'Hide' : 'Show'} Result Visuals
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
            { src: "online-sales.webp", alt: "increase in online sales", caption: "Sales Growth" },
            { src: "user-feedback.webp", alt: "user-feedback", caption: "User Feedback" },
            { src: "E-commerce.webp", alt: "efficient inventory task", caption: "Inventory Efficiency" }
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
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Client Testimonial:</h3>
        <p className="text-gray-700 italic">
          "The new e-commerce platform has transformed our business. The seamless integration with our existing systems and the excellent user experience has significantly boosted our online sales and operational efficiency."
        </p>
        <p className="text-gray-600 text-sm mt-2">- XYZ Retail Management</p>
      </div>
    </div>
  );
}