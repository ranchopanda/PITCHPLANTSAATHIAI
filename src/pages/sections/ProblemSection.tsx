import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

const ProblemSection = () => (
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
);

export default ProblemSection; 