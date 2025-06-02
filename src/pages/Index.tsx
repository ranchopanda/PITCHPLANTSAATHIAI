
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChevronDown, Linkedin, Play, Users, Shield, Wifi, CheckCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/87cb47b6-57ce-49f9-b493-3f44fafd19f5.png" 
              alt="Plant Saathi AI Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-green-800">Plant Saathi AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#problem" className="text-green-700 hover:text-green-900 transition-colors">Problem</a>
            <a href="#solution" className="text-green-700 hover:text-green-900 transition-colors">Solution</a>
            <a href="#market" className="text-green-700 hover:text-green-900 transition-colors">Market</a>
            <a href="#team" className="text-green-700 hover:text-green-900 transition-colors">Team</a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Schedule Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Visceral Stat */}
          <div className="text-center mb-8">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-lg border border-red-200 text-lg font-semibold">
              📉 India loses ₹90,000 Cr yearly to preventable crop failures
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                AI Disease Diagnosis + Yield Forecasting for 220M+ Farmers
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
                Plant Saathi AI –<br />
                <span className="text-green-600">Diagnose. Predict. Prosper.</span>
              </h1>
              <p className="text-xl text-green-700 mb-8 leading-relaxed">
                Your AI-powered agri buddy transforming farming across India and Africa. 
                Real-time disease detection, yield forecasting, and expert guidance in your pocket.
              </p>
              
              {/* Streamlined CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  🎯 Schedule Demo
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                  📄 Download Pitch Deck
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-green-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live MVP Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>95%+ Accuracy</span>
                </div>
              </div>
            </div>

            {/* Video Demo Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-4 shadow-2xl">
                <div className="bg-black rounded-2xl aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-black/60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 ml-1" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Live Disease Detection Demo</h3>
                      <p className="text-sm opacity-90">Watch farmers using Plant Saathi AI</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature highlights around video */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">95% Accuracy</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium">Offline Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 px-4 bg-green-50 border-y border-green-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Used by 100+ Farmers</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-green-800">3 Pilots Live</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-green-800">TechConclave 2025 Validated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Tabs */}
      <section id="problem" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-green-50 rounded-lg p-1 flex">
                <button
                  onClick={() => setActiveTab("problem")}
                  className={`px-6 py-3 rounded-md transition-all ${
                    activeTab === "problem"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-600 hover:bg-green-100"
                  }`}
                >
                  The Problem
                </button>
                <button
                  onClick={() => setActiveTab("solution")}
                  className={`px-6 py-3 rounded-md transition-all ${
                    activeTab === "solution"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-600 hover:bg-green-100"
                  }`}
                >
                  Our Solution
                </button>
              </div>
            </div>

            {activeTab === "problem" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
                  The Challenge Facing Indian Agriculture
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-800 mb-3">₹90,000+ Cr Annual Loss</h3>
                      <p className="text-red-700">
                        Farmers rely on guesswork for crop issues, leading to massive losses from pests, diseases, and poor soil fertility.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-800 mb-3">Limited Expert Access</h3>
                      <p className="text-red-700">
                        Lack of affordable, real-time expert insights and language barriers block adoption of digital tools.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-800 mb-3">Underutilized Data</h3>
                      <p className="text-red-700">
                        Soil Health Card data is hard to interpret and weather predictions often fail at hyperlocal levels.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-800 mb-3">Delayed Diagnosis</h3>
                      <p className="text-red-700">
                        By the time farmers identify crop issues, it's often too late for effective treatment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "solution" && (
              <div className="animate-fade-in" id="solution">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
                  Plant Saathi AI: Complete Farming Intelligence
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <Card className="border-green-200 bg-green-50 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="font-semibold text-green-800 mb-2">Snap & Diagnose</h3>
                      <p className="text-green-700 text-sm">
                        Instant photo-based disease detection with region-specific treatment suggestions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌱</span>
                      </div>
                      <h3 className="font-semibold text-green-800 mb-2">Know Your Soil</h3>
                      <p className="text-green-700 text-sm">
                        Smart Soil Health Card decoding with actionable fertility insights.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="font-semibold text-green-800 mb-2">Predict & Plan</h3>
                      <p className="text-green-700 text-sm">
                        Hyperlocal weather + yield forecasting with precision AI models.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👨‍🌾</span>
                      </div>
                      <h3 className="font-semibold text-green-800 mb-2">Expert Advice</h3>
                      <p className="text-green-700 text-sm">
                        Direct access to agriculture experts for personalized guidance and support.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Powered by Advanced AI Technology</h3>
                  <p className="text-lg mb-6">
                    Custom-trained ML models with offline-ready capabilities. 
                    Multilingual support in Hindi, Punjabi, and Marathi.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge className="bg-green-500 text-white">Offline Capable</Badge>
                    <Badge className="bg-green-500 text-white">Multilingual</Badge>
                    <Badge className="bg-green-500 text-white">Edge AI Models</Badge>
                    <Badge className="bg-green-500 text-white">Hyperlocal Data</Badge>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Competitive Edge Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Why We're Better
              </h2>
              <p className="text-xl text-green-700">
                The only offline-ready, multilingual, AI-driven crop advisory system built for Bharat
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-lg border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Wifi className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="font-bold text-green-800">Offline First</h3>
                  </div>
                  <p className="text-gray-700">
                    Fully functional without internet connectivity. Perfect for rural areas with poor network coverage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="font-bold text-green-800">Multilingual Voice</h3>
                  </div>
                  <p className="text-gray-700">
                    Voice-based interaction in Hindi and regional languages. No literacy barriers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="font-bold text-green-800">Data Privacy</h3>
                  </div>
                  <p className="text-gray-700">
                    Farmer data stays secure with no external AI API dependence for core features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
              What Farmers Are Saying
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <p className="text-green-800 italic mb-4">
                    "Mujhe turant bata diya ki kya bimari hai. Pehli baar phone se fasal bachi!"
                  </p>
                  <p className="text-green-700 text-sm mb-2">
                    "It instantly told me what disease it was. First time I saved my crop using a phone!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Ravi Kumar</p>
                      <p className="text-xs text-green-600">Farmer, Bihar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="text-blue-800 italic mb-4">
                    "Offline bhi kaam karta hai! Network problem nahi hai ab."
                  </p>
                  <p className="text-blue-700 text-sm mb-2">
                    "It works offline too! No more network problems."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">PS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800">Priya Singh</p>
                      <p className="text-xs text-blue-600">Farmer, Uttar Pradesh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Market Opportunity */}
      <section id="market" className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Massive Global Market Opportunity
              </h2>
              <p className="text-xl text-green-700">
                Expanding from India to Africa and beyond
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">150M+</div>
                <p className="text-green-800 font-medium">Farmers in India</p>
                <p className="text-sm text-green-600">Primary Market</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">70M+</div>
                <p className="text-green-800 font-medium">Farmers in Africa</p>
                <p className="text-sm text-orange-600">Expansion Target</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">$45B+</div>
                <p className="text-green-800 font-medium">Global AgriTech Market</p>
                <p className="text-sm text-blue-600">Total Addressable</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">8+</div>
                <p className="text-green-800 font-medium">Target Countries</p>
                <p className="text-sm text-purple-600">Phase 1 Expansion</p>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Global Expansion Roadmap</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-3">Phase 1: India</h4>
                    <p className="text-sm opacity-90">Punjab, Haryana, UP, Bihar</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-3">Phase 2: Africa</h4>
                    <p className="text-sm opacity-90">Kenya, Nigeria, Ghana, Ethiopia</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-3">Phase 3: LATAM</h4>
                    <p className="text-sm opacity-90">Brazil, Mexico, Colombia, Peru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Access Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-green-200">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Join Our Beta Program
            </h2>
            <p className="text-xl text-green-700 mb-8">
              🎁 First 1,000 farmers get 3 months of premium features free
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                  type="text" 
                  placeholder="State" 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                  type="text" 
                  placeholder="Main Crop" 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white py-4">
                    🚀 Request Beta Access
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
              Multiple Revenue Streams
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Direct to Farmer</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Freemium: Instant scan & advisory</li>
                    <li>• Pro (₹99/month): Full forecasting suite</li>
                    <li>• Expert marketplace: ₹20-50/session</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">B2B & Enterprise</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• SaaS dashboards for agri companies</li>
                    <li>• Government & NGO licensing</li>
                    <li>• De-identified data licensing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Team Section */}
      <section id="team" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Meet Our Founding Team
              </h2>
              <p className="text-xl text-green-700">
                AgriTech innovators building the future of farming
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Anand - Founder */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">AN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Anand</h3>
                  <p className="text-green-600 font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-600 mb-6">
                    Visionary leader driving agricultural innovation and business strategy. 
                    Expert in market expansion and stakeholder relations.
                  </p>
                  <Button 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              {/* Himanshi - Co-founder */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">HI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Himanshi</h3>
                  <p className="text-blue-600 font-semibold mb-4">Co-founder & Research Head</p>
                  <p className="text-gray-600 mb-6">
                    Agricultural research specialist and data scientist. 
                    Leading AI model development and crop advisory systems.
                  </p>
                  <Button 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              {/* Raunak - Co-founder */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">RK</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Raunak Kumar</h3>
                  <p className="text-purple-600 font-semibold mb-4">Co-founder & CTO</p>
                  <p className="text-gray-600 mb-6">
                    Full-stack engineer and tech architect. 
                    Building scalable AI infrastructure and mobile applications.
                  </p>
                  <Button 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Team Achievements */}
            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Validated by Real Farmers</h3>
                <p className="text-lg mb-6">
                  Tested by 100+ farmers during TechConclave 2025, Galgotias University
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-600 hover:bg-gray-100"
                  >
                    🎯 Schedule Investor Meeting
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-green-600"
                  >
                    📄 Request Pitch Deck
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-16 px-4 bg-white border-y border-gray-200">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-bold text-green-800 mb-2">Data Privacy Assured</h3>
                <p className="text-gray-600 text-sm">Farmer data stays secure and private</p>
              </div>
              <div className="flex flex-col items-center">
                <Wifi className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-green-800 mb-2">Offline First</h3>
                <p className="text-gray-600 text-sm">Works without internet connectivity</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="font-bold text-green-800 mb-2">Secure Cloud Infra</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Global Agriculture?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in revolutionizing farming across India and Africa with AI. 
              Let's grow together and feed the world.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">₹25-50L</div>
                <div className="text-sm opacity-90">Pre-seed Funding</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">8 Countries</div>
                <div className="text-sm opacity-90">Expansion Plan</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">220M+</div>
                <div className="text-sm opacity-90">Target Farmers</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                🎯 Schedule Investor Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                📄 Download Complete Pitch Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-green-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/87cb47b6-57ce-49f9-b493-3f44fafd19f5.png" 
                alt="Plant Saathi AI Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Plant Saathi AI</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-green-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-green-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-300 transition-colors">Contact</a>
              <a href="#" className="hover:text-green-300 transition-colors">Beta Program</a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-green-800 text-sm opacity-75">
            Copyright © 2025 Plant Saathi AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
