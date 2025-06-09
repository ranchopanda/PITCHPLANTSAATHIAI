
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChevronDown, Linkedin, Play, Users, Shield, Wifi, CheckCircle, TrendingUp, Globe, Target, Calendar, DollarSign, Award, Zap } from "lucide-react";
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
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">About</a>
            <a href="#problem" className="text-green-700 hover:text-green-900 transition-colors">Problem</a>
            <a href="#solution" className="text-green-700 hover:text-green-900 transition-colors">Solution</a>
            <a href="#traction" className="text-green-700 hover:text-green-900 transition-colors">Traction</a>
            <a href="#vision" className="text-green-700 hover:text-green-900 transition-colors">Vision</a>
            <a href="#team" className="text-green-700 hover:text-green-900 transition-colors">Team</a>
            <a href="#investors" className="text-green-700 hover:text-green-900 transition-colors">Investors</a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Request Investor Deck
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4">
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
              <p className="text-xl text-green-700 mb-4 leading-relaxed">
                The only offline-ready, multilingual, AI-driven crop advisory system built for Bharat.
              </p>
              <p className="text-lg text-green-600 mb-8">
                Transforming farming across India and Africa with real-time disease detection, yield forecasting, and expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  🎯 Request Investor Deck
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                  📞 Schedule Demo Call
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
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>TechConclave 2025 Validated</span>
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

      {/* Problem & Market Opportunity */}
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
                  onClick={() => setActiveTab("market")}
                  className={`px-6 py-3 rounded-md transition-all ${
                    activeTab === "market"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-600 hover:bg-green-100"
                  }`}
                >
                  Market Opportunity
                </button>
              </div>
            </div>

            {activeTab === "problem" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
                  The Challenge Facing Indian Agriculture
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                
                <Card className="bg-blue-50 border-blue-200 text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Why Now?</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>🤖 AI advances make real-time diagnosis possible</div>
                      <div>🌍 Climate urgency demands smart farming</div>
                      <div>📱 Smartphone penetration in rural India at 60%+</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "market" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
                  Massive Global Market Opportunity
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">150M+</div>
                    <p className="text-green-800 font-medium">Farmers in India</p>
                    <p className="text-sm text-green-600">TAM: ₹15,000 Cr</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-orange-600 mb-2">70M+</div>
                    <p className="text-green-800 font-medium">Farmers in Africa</p>
                    <p className="text-sm text-orange-600">SAM: ₹8,000 Cr</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">$45B+</div>
                    <p className="text-green-800 font-medium">Global AgriTech</p>
                    <p className="text-sm text-blue-600">Growing 15% CAGR</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600 mb-2">₹500 Cr</div>
                    <p className="text-green-800 font-medium">SOM by 2027</p>
                    <p className="text-sm text-purple-600">Conservative estimate</p>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Global Expansion Timeline</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <h4 className="font-semibold mb-3">2025: India Focus</h4>
                        <p className="text-sm opacity-90">Punjab, Haryana, UP, Bihar</p>
                        <p className="text-xs opacity-75 mt-2">Target: 10K farmers</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold mb-3">2026: Africa Entry</h4>
                        <p className="text-sm opacity-90">Kenya, Nigeria, Ghana, Ethiopia</p>
                        <p className="text-xs opacity-75 mt-2">Target: 50K farmers</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold mb-3">2027: LATAM</h4>
                        <p className="text-sm opacity-90">Brazil, Mexico, Colombia</p>
                        <p className="text-xs opacity-75 mt-2">Target: 100K farmers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solution & Product */}
      <section id="solution" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
              Plant Saathi AI: Complete Farming Intelligence
            </h2>
            <p className="text-xl text-green-700 text-center mb-12">
              The only offline-ready, multilingual, AI-driven crop advisory system built for Bharat
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
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
              <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
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
              <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
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
              <Card className="border-green-200 bg-white text-center hover:shadow-lg transition-shadow">
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

            {/* Competitive Edge */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-green-900 text-center mb-8">
                Why We're Better Than Plantix, Krishify & Others
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
                      <h4 className="font-bold text-green-800">Data Privacy</h4>
                    </div>
                    <p className="text-gray-700">
                      Farmer data stays secure with no external AI API dependence for core features.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction & Social Proof */}
      <section id="traction" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-green-900 text-center mb-4">
              Validated Traction & Growing Impact
            </h2>
            <p className="text-xl text-green-700 text-center mb-12">
              Real farmers, real results, real validation
            </p>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                  <p className="text-green-800 font-medium">Active Farmers</p>
                  <p className="text-sm text-green-600">Across 3 states</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%+</div>
                  <p className="text-green-800 font-medium">Accuracy Rate</p>
                  <p className="text-sm text-blue-600">Disease detection</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                  <p className="text-green-800 font-medium">Live Pilots</p>
                  <p className="text-sm text-purple-600">University validated</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-orange-600 mb-2">30%+</div>
                  <p className="text-green-800 font-medium">Yield Improvement</p>
                  <p className="text-sm text-orange-600">Early adopters</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <p className="text-green-800 italic mb-4">
                    "Mujhe turant bata diya ki kya bimari hai. Pehli baar phone se fasal bachi!"
                  </p>
                  <p className="text-green-700 text-sm mb-4">
                    "It instantly told me what disease it was. First time I saved my crop using a phone!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Ravi Kumar</p>
                      <p className="text-xs text-green-600">Farmer, Bihar • Wheat & Rice</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="text-blue-800 italic mb-4">
                    "Offline bhi kaam karta hai! Network problem nahi hai ab."
                  </p>
                  <p className="text-blue-700 text-sm mb-4">
                    "It works offline too! No more network problems."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold">PS</span>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800">Priya Singh</p>
                      <p className="text-xs text-blue-600">Farmer, Uttar Pradesh • Sugarcane</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Validation & Press */}
            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">University Validated & Award Winning</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">TechConclave 2025</p>
                    <p className="text-sm opacity-90">Galgotias University</p>
                  </div>
                  <div>
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">3 University Pilots</p>
                    <p className="text-sm opacity-90">Research validated</p>
                  </div>
                  <div>
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">30%+ Yield Increase</p>
                    <p className="text-sm opacity-90">Measured impact</p>
                  </div>
                </div>
                <p className="text-lg opacity-90">
                  "Most promising AgriTech solution for rural India" - Dr. Agricultural Sciences, Galgotias University
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Roadmap */}
      <section id="vision" className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Vision: Empowering Every Farmer, Everywhere
              </h2>
              <p className="text-xl text-green-700">
                Building the world's most accessible agricultural intelligence platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-4">
                    To democratize agricultural expertise through AI, making precision farming accessible to every farmer regardless of location, literacy, or economic status.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 🌍 Global impact: 220M+ farmers by 2030</li>
                    <li>• 📱 Technology for all: Offline-first, multilingual</li>
                    <li>• 🤝 Community-driven: Farmer-to-farmer learning</li>
                    <li>• 🌱 Sustainable: Climate-smart agriculture</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Technology Roadmap</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-green-800">Q2 2025: Enhanced AI Models</p>
                        <p className="text-sm text-gray-600">Crop-specific disease recognition, pest identification</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-green-800">Q3 2025: IoT Integration</p>
                        <p className="text-sm text-gray-600">Soil sensors, weather stations, automated monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-green-800">Q4 2025: Marketplace Launch</p>
                        <p className="text-sm text-gray-600">Direct farmer-to-buyer platform, supply chain optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-green-800">2026: Global Expansion</p>
                        <p className="text-sm text-gray-600">Africa launch, localized models, government partnerships</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Growth Projections */}
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">5-Year Growth Projections</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2025</div>
                    <p className="text-sm opacity-90">10K farmers</p>
                    <p className="text-sm opacity-90">₹50L ARR</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2026</div>
                    <p className="text-sm opacity-90">100K farmers</p>
                    <p className="text-sm opacity-90">₹15 Cr ARR</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2027</div>
                    <p className="text-sm opacity-90">500K farmers</p>
                    <p className="text-sm opacity-90">₹75 Cr ARR</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2028</div>
                    <p className="text-sm opacity-90">2M+ farmers</p>
                    <p className="text-sm opacity-90">₹300 Cr ARR</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Meet Our Founding Team
              </h2>
              <p className="text-xl text-green-700">
                Proven AgriTech innovators with deep domain expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">AN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Anand</h3>
                  <p className="text-green-600 font-semibold mb-4">Founder & CEO</p>
                  <p className="text-gray-600 mb-6">
                    Visionary leader with 5+ years in agricultural innovation. Expert in market expansion, government relations, and farmer community building.
                  </p>
                  <Button 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">HI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Himanshi</h3>
                  <p className="text-blue-600 font-semibold mb-4">Co-founder & Research Head</p>
                  <p className="text-gray-600 mb-6">
                    Agricultural research specialist with PhD in Plant Pathology. Leading AI model development and crop advisory systems with 95%+ accuracy.
                  </p>
                  <Button 
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">RK</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Raunak Kumar</h3>
                  <p className="text-purple-600 font-semibold mb-4">Co-founder & CTO</p>
                  <p className="text-gray-600 mb-6">
                    Full-stack engineer with expertise in edge AI and mobile development. Previously scaled tech solutions to 100K+ users.
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

            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why This Team Wins</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <Target className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Domain Expertise</p>
                    <p className="text-sm opacity-90">Deep agricultural knowledge + tech skills</p>
                  </div>
                  <div>
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Execution Speed</p>
                    <p className="text-sm opacity-90">MVP to 100+ farmers in 6 months</p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Global Vision</p>
                    <p className="text-sm opacity-90">Built for India, designed for the world</p>
                  </div>
                </div>
                <p className="text-lg opacity-90">
                  Validated by 100+ farmers, 3 university pilots, and TechConclave 2025 recognition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investors" className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Global Agriculture?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in revolutionizing farming across India and Africa with AI. 
              Let's grow together and feed the world.
            </p>

            {/* Investment Highlights */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">₹25-50L</div>
                <div className="text-sm opacity-90">Pre-seed Funding</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Globe className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">8 Countries</div>
                <div className="text-sm opacity-90">5-Year Plan</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">220M+</div>
                <div className="text-sm opacity-90">Target Farmers</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">₹500 Cr</div>
                <div className="text-sm opacity-90">Revenue Target 2027</div>
              </div>
            </div>

            {/* Why Invest Now */}
            <Card className="bg-white/10 backdrop-blur-md mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Invest Now?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <CheckCircle className="w-6 h-6 mb-2" />
                    <p className="font-semibold mb-2">Proven Traction</p>
                    <p className="text-sm opacity-90">100+ farmers, 95%+ accuracy, university validated</p>
                  </div>
                  <div>
                    <Target className="w-6 h-6 mb-2" />
                    <p className="font-semibold mb-2">Massive Market</p>
                    <p className="text-sm opacity-90">₹23,000 Cr TAM, 15% CAGR growth in AgriTech</p>
                  </div>
                  <div>
                    <Zap className="w-6 h-6 mb-2" />
                    <p className="font-semibold mb-2">First-Mover Advantage</p>
                    <p className="text-sm opacity-90">Only offline-first, multilingual solution in market</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use of Funds */}
            <Card className="bg-white/10 backdrop-blur-md mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Use of Funds (₹50L)</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-lg font-bold">40%</div>
                    <div>Product Development</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">30%</div>
                    <div>Market Expansion</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">20%</div>
                    <div>Team Building</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">10%</div>
                    <div>Operations</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white text-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Get in Touch</h3>
                <form className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Organization" 
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Investment Interest</option>
                    <option>Angel Investor</option>
                    <option>VC Fund</option>
                    <option>Strategic Partner</option>
                    <option>Government/NGO</option>
                  </select>
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                  <div className="md:col-span-2">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white py-4">
                      🚀 Request Investor Deck & Schedule Call
                    </Button>
                  </div>
                </form>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                📄 Download Pitch Deck (PDF)
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                📞 Schedule 30-min Demo Call
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
              <a href="#" className="hover:text-green-300 transition-colors">Investors</a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-green-800">
            <p className="text-sm opacity-75 mb-2">
              Plant Saathi AI — Growing a Greener Tomorrow with Intelligence
            </p>
            <p className="text-xs opacity-60">
              Copyright © 2025 Plant Saathi AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
