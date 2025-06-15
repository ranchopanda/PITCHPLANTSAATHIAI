import React from "react";

const LiveMetricsSection = ({ pilots, images }) => (
  <section className="py-6 px-4 bg-green-700 text-white sticky top-16 z-40">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto flex justify-center">
        <div className="grid grid-cols-2 gap-x-16 gap-y-2">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">{pilots.toLocaleString()}</div>
            <p className="text-sm opacity-90">Pilots Running</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">{images.toLocaleString()}</div>
            <p className="text-sm opacity-90">Images Processed Today</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LiveMetricsSection; 