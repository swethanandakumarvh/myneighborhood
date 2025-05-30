import React, { useState } from 'react';

interface UserProfile {
  houseId: string;
  residentName: string;
  role: string;
  moveInDate: string;
}

export default function Dashboard() {
  const [profile] = useState<UserProfile>({
    houseId: '25B-Maple Street',
    residentName: 'Swetha G',
    role: 'Resident',
    moveInDate: '2025-05-10',
  });

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-neutral-900 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          alt="Modern Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-900/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              From Vision to Reality
              <br />
              Built with Artistry
            </h1>
            <p className="text-xl text-neutral-200 max-w-2xl mb-8">
              Creating spaces designed to build and transform communities. Experience the perfect blend of form and function.
            </p>
            <button className="bg-white text-neutral-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-neutral-900 mb-4">200+</div>
              <div className="text-neutral-600">Modern Design</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-neutral-900 mb-4">350+</div>
              <div className="text-neutral-600">Happy Client</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-neutral-900 mb-4">1200+</div>
              <div className="text-neutral-600">Project Finished</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-24 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                alt="Project 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cozy Abodes</h3>
                <p className="text-neutral-600">Modern residential spaces with a touch of warmth</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg"
                alt="Project 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Retail Hubs</h3>
                <p className="text-neutral-600">Innovative spaces for modern commerce</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg"
                alt="Project 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business Spaces</h3>
                <p className="text-neutral-600">Professional environments that inspire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}