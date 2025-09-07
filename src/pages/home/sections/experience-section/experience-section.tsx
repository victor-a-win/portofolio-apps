"use client"
import { useState } from "react";
import "./experience.style.css";

// Define types for our experience data
interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  responsibilities: string[];
  skills: string[];
}

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0);
  
  // Sample data - replace with your actual experience
  const experiences: Experience[] = [
    {
      id: 1,
      period: "2023-2024",
      title: "R Project Programming",
      company: "Universitas Brawijaya",
      responsibilities: [
        "Using Phyton and R, I am working on big data for fish biology in the East Java Sea waters",
        "Working with the research team of lecturers at this educational institution, I studied programming languages independently",
        "Optimized application performance resulting in 40% faster load times"
      ],
      skills: ["R", "Phyton", "R Studio", "Ubuntu WSL"]
    },
    {
      id: 2,
      period: "2025-Present",
      title: "Full Stack Web Developer",
      company: "Digital Innovations Ltd.",
      responsibilities: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with UX designers to implement user-friendly interfaces",
        "Optimized application performance resulting in 40% faster load times"
      ],
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"]
    }
  ];

  return (
    <div className="Experience-Section">
      <h1 className="text-3xl text-black font-bold mt-2 mb-8 text-center">
        Professional Experience
      </h1>
      
      <div className="flex flex-col md:flex-row">
        {/* Timeline */}
        <div className="md:w-1/3 relative">
          <div className="absolute left-4 top-2 h-full w-1 bg-gradient-to-b from-orange-400 to-orange-600 md:left-auto md:right-0 md:mx-auto md:right-4"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`relative mb-10 pl-10 md:pl-0 md:pr-10 cursor-pointer transition-all duration-300 ${
                selectedExperience === index ? "scale-105" : "opacity-80"
              }`}
              onClick={() => setSelectedExperience(index)}
            >
              <div className="absolute -left-1 top-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-md md:-right-1 md:left-auto"></div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="text-white font-bold text-lg">{exp.period}</div>
                <div className="text-orange-400 font-semibold">{exp.title}</div>
                <div className="text-gray-400 text-sm">{exp.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Job Details */}
        <div className="md:w-2/3 p-6 bg-gray-50 rounded-lg shadow-inner">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {experiences[selectedExperience].title}
            </h2>
            <h3 className="text-xl text-orange-600 font-semibold">
              {experiences[selectedExperience].company}
            </h3>
            <p className="text-gray-600 mt-2">
              {experiences[selectedExperience].period}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-2">
              {experiences[selectedExperience].responsibilities.map((resp, i) => (
                <li key={i} className="text-gray-700">{resp}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experiences[selectedExperience].skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}