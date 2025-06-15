import React from "react";

const MarketSection = () => (
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
);

export default MarketSection; 