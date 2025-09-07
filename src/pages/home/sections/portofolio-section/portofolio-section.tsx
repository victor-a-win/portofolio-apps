"use client"

import { useState } from "react";
import Situation from "./components/situation";
import Task from "./components/task";
import Action from "./components/action";
import Result from "./components/result";
import "./portofolio.style.css";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("situation");

  return (
    <div className="Portfolio-Section text-black py-8">
      <div className="Header-Portfolio text-center mb-8">
        <h1 className="text-4xl font-bold text-black">
          Portfolio
        </h1>
        <p className="text-black mt-2">My Project Showcase</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg shadow-inner">
          {[
            { id: "situation", label: "Situation" },
            { id: "task", label: "Task" },
            { id: "action", label: "Action" },
            { id: "result", label: "Result" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-orange-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="portfolio-content bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">
        {activeTab === "situation" && <Situation />}
        {activeTab === "task" && <Task />}
        {activeTab === "action" && <Action />}
        {activeTab === "result" && <Result />}
      </div>
    </div>
  );
}