import { Calendar, Globe, Award } from "lucide-react";
import React from "react";

const RoadmapSection = () => (
  <section className="py-12 px-4 bg-white">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
          Roadmap & Milestones
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-green-100 border-4 border-green-500 mx-auto flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-1">Q3 '25</h3>
            <p className="text-green-700">Offline MVP rollout</p>
          </div>
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 bg-green-300 w-full"></div>
            </div>
            <div className="h-16 w-16 rounded-full bg-green-100 border-4 border-green-500 mx-auto flex items-center justify-center mb-4 relative z-10">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-1">Q4 '25</h3>
            <p className="text-green-700">Regional pilot launches</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-green-100 border-4 border-green-500 mx-auto flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-1">Q1 '26</h3>
            <p className="text-green-700">Full global release</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection; 