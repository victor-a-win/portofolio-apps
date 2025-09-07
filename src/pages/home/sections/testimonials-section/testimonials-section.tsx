"use client"
import { useState, useEffect } from "react";
import ClientTestimoni from "./components/client-testimoni";
import PhotoNameClient from "./components/photo-name-client";
import "./testimonials.style.css";

const testimonials = [
  {
    id: 1,
    text: "The design quality, flexibility, documentation and support are all absolutely excellent. I bought the ViTech Studio for all my clients, knowing that whatever they require, ViTech Studio will be able to deliver",
    name: "Maulana Maulida",
    position: "CEO, XYZ Retails",
    image: "CEO_XYZ_retail.webp"
  },
  {
    id: 2,
    text: "Working with this developer was a game-changer for our business. The attention to detail and technical expertise exceeded our expectations at every turn.",
    name: "Sarah Johnson",
    position: "Product Manager, TechCorp",
    image: "Product_Manager_TechCorp.webp"
  },
  {
    id: 3,
    text: "The e-commerce platform developed for us has transformed our online presence. Sales increased by 40% in the first quarter post-launch.",
    name: "Michael Chen",
    position: "Director of Operations, FashionRetail",
    image: "Director_of_Operations_FashionRetail.webp"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="Testimonials-Section py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Client Testimonials
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 mt-2"></div>
        </h1>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          {/* Testimonial Content */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 text-8xl opacity-20 text-orange-400">"</div>
            
            <div className="relative z-10 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700">
              <ClientTestimoni 
                text={testimonials[currentTestimonial].text}
                name={testimonials[currentTestimonial].name}
                position={testimonials[currentTestimonial].position}
              />
              
              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-8">
                <button 
                  onClick={goToPrev}
                  className="p-2 rounded-full bg-gray-700 hover:bg-orange-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`h-3 rounded-full transition-all ${
                        index === currentTestimonial 
                          ? 'bg-orange-500 w-8' 
                          : 'bg-gray-600 w-3 hover:bg-orange-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={goToNext}
                  className="p-2 rounded-full bg-gray-700 hover:bg-orange-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Client Photo */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <PhotoNameClient image={testimonials[currentTestimonial].image} />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                <span className="text-2xl">★</span> 5.0
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}