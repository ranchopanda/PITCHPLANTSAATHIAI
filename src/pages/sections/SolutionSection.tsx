import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Users, Shield } from "lucide-react";
import React from "react";

const SolutionSection = () => (
  <section id="solution" className="py-16 px-4 bg-green-50">
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
          Our Solution: One App. Total Support.
        </h2>
        <p className="text-xl text-green-700 text-center mb-12">
          Smart, image-based plant health and productivity platform
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Snap & Diagnose → 90% accuracy</h3>
              <p className="text-green-700 text-sm">
                Detect diseases instantly using phone camera and get location-specific treatment.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Soil Analysis → Save ₹4,000/acre</h3>
              <p className="text-green-700 text-sm">
                Upload photo or lab report, decode with smart AI and get fertilizer recommendations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Predict & Plan</h3>
              <p className="text-green-700 text-sm">
                Get AI-driven yield forecasts and weather analysis to guide cropping decisions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩‍🌾</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Expert Advice → Live chat in your language</h3>
              <p className="text-green-700 text-sm">
                Ask real agri-experts questions in your language through chat or voice.
              </p>
            </CardContent>
          </Card>
        </div>
        {/* Competitive Edge */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 text-center mb-8">
            Why We're Different
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Wifi className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="font-bold text-green-800">Offline First</h4>
                </div>
                <p className="text-gray-700">
                  Fully functional without internet. Perfect for rural areas with poor connectivity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="font-bold text-green-800">Multilingual Voice</h4>
                </div>
                <p className="text-gray-700">
                  Voice interaction in Hindi and regional languages. No literacy barriers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="font-bold text-green-800">Global Scalability</h4>
                </div>
                <p className="text-gray-700">
                  Built for India, designed for the world. Ready for global expansion in 2026.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection; 