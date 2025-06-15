import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChevronDown, Linkedin, Play, Users, Shield, Wifi, CheckCircle, TrendingUp, Globe, Target, Calendar, DollarSign, Award, Zap } from "lucide-react";
import React from "react";
import HeroSection from "./sections/HeroSection";
import RoadmapSection from "./sections/RoadmapSection";
import LiveMetricsSection from "./sections/LiveMetricsSection";

const Index = () => {
  const ctaVariants = [
    "Grab Your Pre-Seed Spot",
    "Download Investor Deck",
    "Book Your Pilot Slot"
  ];
  const [ctaVariant, setCtaVariant] = React.useState(ctaVariants[0]);
  const [pilots, setPilots] = React.useState(12);
  const [images, setImages] = React.useState(1432);

  React.useEffect(() => {
    setCtaVariant(ctaVariants[Math.floor(Math.random() * ctaVariants.length)]);
    // Optionally animate counters here
  }, []);

  return <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/87cb47b6-57ce-49f9-b493-3f44fafd19f5.png" alt="Plant Saathi AI Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-green-800">Plant Saathi AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">About</a>
            <a href="#problem" className="text-green-700 hover:text-green-900 transition-colors">Problem</a>
            <a href="#solution" className="text-green-700 hover:text-green-900 transition-colors">Solution</a>
            <a href="#market" className="text-green-700 hover:text-green-900 transition-colors">Market</a>
            <a href="#traction" className="text-green-700 hover:text-green-900 transition-colors">Traction</a>
            <a href="#team" className="text-green-700 hover:text-green-900 transition-colors">Team</a>
            <a href="#investors" className="text-green-700 hover:text-green-900 transition-colors">Investors</a>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <span className="ab-test-cta">{ctaVariant}</span>
          </Button>
        </div>
      </nav>

      <HeroSection ctaVariant={ctaVariant} />
      <RoadmapSection />
      <LiveMetricsSection pilots={pilots} images={images} />

      {/* Problem Section */}
      <section id="problem" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-900 mb-8">
              Problem We're Solving
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-3">₹90,000+ Cr Annual Loss</h3>
                  <p className="text-red-700">
                    <strong>1 in 3 farmers misdiagnose crops.</strong> Farmers lose billions annually due to late or wrong disease diagnosis.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-3">Limited Expert Access</h3>
                  <p className="text-red-700">
                    <strong>₹90,000 Cr annual loss = broken advisory.</strong> Soil health is poorly understood, leading to reduced productivity.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-3">Weather Unpredictability</h3>
                  <p className="text-red-700">
                    Climate stress and weather changes reduce yield unpredictably without proper forecasting tools.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 mb-3">Technology Barriers</h3>
                  <p className="text-red-700">
                    Most agri-apps require internet and literacy — both limited in rural areas across developing nations.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Partnerships & LOIs */}
            <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Partnerships & LOIs</h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                  <Badge variant="outline" className="bg-blue-50 mb-2">In Talks</Badge>
                  <p className="text-gray-700">3 state agri-boards</p>
                </div>
                <div className="h-12 border-r border-gray-200"></div>
                <div className="flex flex-col items-center">
                  <Badge variant="outline" className="bg-blue-50 mb-2">Partnering Soon</Badge>
                  <p className="text-gray-700">IBM Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
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

      {/* Market Opportunity */}
      <section id="market" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-green-900 text-center mb-8">
              Market Opportunity
            </h2>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-4 px-6 text-left">Region</th>
                      <th className="py-4 px-6">Farmers</th>
                      <th className="py-4 px-6">Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-6 text-left font-semibold">India</td>
                      <td className="py-4 px-6">150M+</td>
                      <td className="py-4 px-6">₹15,000 Cr TAM</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-6 text-left font-semibold">Global (2026+)</td>
                      <td className="py-4 px-6">500M+</td>
                      <td className="py-4 px-6">$45B+ AgriTech</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-left font-semibold">2027 Goal</td>
                      <td className="py-4 px-6">—</td>
                      <td className="py-4 px-6">₹500 Cr SOM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-green-700 font-semibold">
                Not just Bharat. We're building for the globe.
              </p>
              <p className="text-lg text-green-600 mt-2">
                Our roots are Indian, our reach is global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-green-900 text-center mb-8">
              Where We Are Now
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center bg-white border-green-200">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-green-800">MVP Developed</div>
                  <p className="text-sm text-green-600">University validated</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-green-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">90%+</div>
                  <div className="text-lg font-semibold text-green-800">Accuracy</div>
                  <p className="text-sm text-green-600">On key crops</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-green-200">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">30%+</div>
                  <div className="text-lg font-semibold text-green-800">Yield Improvement</div>
                  <p className="text-sm text-green-600">Potential</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white border-green-200">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <div className="text-lg font-semibold text-green-800">Farmer Ready</div>
                  <p className="text-sm text-green-600">Onboarding started</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">University Feedback</h3>
                <blockquote className="text-xl italic mb-4">
                  "One of the most promising AgriTech platforms in India — empowering farmers with real-time, contextual intelligence."
                </blockquote>
                <p className="opacity-90">
                  — Department of Agricultural Sciences, Galgotias University
                </p>
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
                Meet the Team Behind Plant Saathi AI
              </h2>
              <p className="text-xl text-green-700">
                Deep Agriculture + AI knowledge with fast execution
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">A</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Anand</h3>
                  <p className="text-green-600 font-semibold mb-4">Founder, CEO & Head of Tech</p>
                  <p className="text-gray-600 mb-6">
                    Product visionary, tech builder, and agri-missionary. Leads product development, innovation, and go-to-market.
                  </p>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">H</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Himanshi</h3>
                  <p className="text-blue-600 font-semibold mb-4">Co-founder & Head of Research</p>
                  <p className="text-gray-600 mb-6">Head of Research, leading model accuracy testing and pioneering next-gen crop advisory solutions.</p>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">R</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Raunak Kumar</h3>
                  <p className="text-purple-600 font-semibold mb-4">Co-founder & Outreach Lead</p>
                  <p className="text-gray-600 mb-6">
                    Coordinates field research, partnership development, and user feedback collection.
                  </p>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why This Team Wins</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Target className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Domain Expertise</p>
                    <p className="text-sm opacity-90">Deep agricultural knowledge + tech skills</p>
                  </div>
                  <div>
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Fast Execution</p>
                    <p className="text-sm opacity-90">MVP in 6 months</p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Global Vision</p>
                    <p className="text-sm opacity-90">Built for India, designed for the world</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investors" className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center text-white">
            {/* Risk Mitigation */}
            <Card className="bg-white/10 backdrop-blur-md mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Risks & Mitigations</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">Data privacy</p>
                    <p className="text-sm opacity-90">End-to-end encryption</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">Regulatory</p>
                    <p className="text-sm opacity-90">Local agri-board partnerships</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">Sensor reliability</p>
                    <p className="text-sm opacity-90">Redundant QA processes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-4xl font-bold mb-6">
              Funding Ask: ₹25–50 Lakhs (Pre-Seed)
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in revolutionizing farming across India and beyond with AI
            </p>

            {/* Why Invest Now */}
            <Card className="bg-white/10 backdrop-blur-md mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Invest Now?</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">Validated Tech</p>
                    <p className="text-sm opacity-90">University-supported</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">First-Mover</p>
                    <p className="text-sm opacity-90">Multilingual, voice-based</p>
                  </div>
                  <div className="text-center">
                    <Wifi className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">Offline-First</p>
                    <p className="text-sm opacity-90">Low-connectivity zones</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold mb-2">Global Roadmap</p>
                    <p className="text-sm opacity-90">Ready for expansion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use of Funds */}
            <Card className="bg-white/10 backdrop-blur-md mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Use of Funds (₹50L)</h3>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <p className="font-semibold">Product Development</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">30%</div>
                    <p className="font-semibold">Market Expansion</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">20%</div>
                    <p className="font-semibold">Team Hiring & Ops</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10%</div>
                    <p className="font-semibold">Infra + Legal</p>
                  </div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex items-center justify-center gap-4">
                    <DollarSign className="w-6 h-6" />
                    <p className="font-semibold">₹200 revenue per farmer per season</p>
                    <TrendingUp className="w-6 h-6" />
                    <p className="font-semibold">500M TAM = ₹10,000 Cr potential</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white text-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Get Involved – Investors, Let's Talk</h3>
                <form className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <input type="email" placeholder="Email Address" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <input type="text" placeholder="Organization" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Investment Interest</option>
                    <option>Angel Investor</option>
                    <option>VC Fund</option>
                    <option>Strategic Partner</option>
                    <option>Government/NGO</option>
                  </select>
                  <textarea placeholder="Message" rows={4} className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                  <div className="md:col-span-2">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white py-4">
                      <span className="ab-test-cta">Request Investor Deck & Schedule Call</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                <span className="ab-test-cta">Download Pitch Deck (PDF)</span>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                Schedule 30-min Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Steps */}
      <section className="py-12 px-4 bg-green-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Your Investment Journey</h3>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-white text-green-800 font-bold flex items-center justify-center mx-auto mb-4">1</div>
                <p className="font-semibold">Download Deck</p>
                <div className="mt-4">
                  <svg width="60" height="10" className="mx-auto">
                    <line x1="0" y1="5" x2="60" y2="5" stroke="white" strokeWidth="2" strokeDasharray="2" />
                    <polygon points="60,5 50,0 50,10" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-white text-green-800 font-bold flex items-center justify-center mx-auto mb-4">2</div>
                <p className="font-semibold">Book 15-min Call</p>
                <div className="mt-4">
                  <svg width="60" height="10" className="mx-auto">
                    <line x1="0" y1="5" x2="60" y2="5" stroke="white" strokeWidth="2" strokeDasharray="2" />
                    <polygon points="60,5 50,0 50,10" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-white text-green-800 font-bold flex items-center justify-center mx-auto mb-4">3</div>
                <p className="font-semibold">Sign Termsheet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-green-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/lovable-uploads/87cb47b6-57ce-49f9-b493-3f44fafd19f5.png" alt="Plant Saathi AI Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">Plant Saathi AI</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-green-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-green-300 transition-colors">Privacy</a>
              <a href="mailto:hello@plantsaathi.ai" className="hover:text-green-300 transition-colors">Contact</a>
              <a href="#investors" className="hover:text-green-300 transition-colors">Investors</a>
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
    </div>;
};
export default Index;