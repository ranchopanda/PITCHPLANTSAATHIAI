import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = ({ ctaVariant }) => (
  <section id="about" className="pt-24 pb-16 px-4">
    <div className="container mx-auto">
      {/* Visceral Stat */}
      <div className="text-center mb-8">
        <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-lg border border-red-200 text-lg font-semibold">
          Agriculture loses billions to preventable crop failures
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            Multilingual AI-Driven Crop Advisory System
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
            AI That Helps Farmers Fight Crop Loss – Even Without Internet.
          </h1>
          <p className="text-xl text-green-700 mb-6 leading-relaxed">
            Voice-first, offline-ready (beta Q3 '25), and multilingual – empowering the next 500M farmers.
          </p>
          <div className="mb-6">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
              Offline Mode: Beta in Q3 2025
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              {ctaVariant}
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
              Schedule Demo Call
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm text-green-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">90%+</div>
              <div>Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Offline</div>
              <div>Ready Mode</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">500M+</div>
              <div>Target Farmers</div>
            </div>
          </div>
        </div>
        {/* Video Demo Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-4 shadow-2xl">
            <div className="bg-black rounded-2xl aspect-video relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full">
                  <img 
                    src="/lovable-uploads/demo-disease-detection.gif" 
                    alt="Disease detection demo" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <h3 className="text-lg font-semibold mb-1 text-white">Live Disease Detection</h3>
                    <p className="text-sm opacity-90 text-white">See Plant Saathi AI in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 