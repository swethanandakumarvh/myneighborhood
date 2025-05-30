import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
          alt="Modern City"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/95 to-dark-800/70" />
        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Building</span> Better
                <br />
                Communities
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-balance">
                Connect, collaborate, and create positive change in your neighborhood through our innovative community platform.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-400 to-[#FF7A54] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Explore Events
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-dark-800">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/complaints"
              className="group p-8 rounded-2xl bg-dark-700 card-hover border border-white/5"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                Report Issues
              </h3>
              <p className="text-gray-400">
                Submit and track community issues for quick resolution.
              </p>
            </Link>
            <Link 
              to="/businesses"
              className="group p-8 rounded-2xl bg-dark-700 card-hover border border-white/5"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                Local Business
              </h3>
              <p className="text-gray-400">
                Discover and support businesses in your neighborhood.
              </p>
            </Link>
            <Link 
              to="/events"
              className="group p-8 rounded-2xl bg-dark-700 card-hover border border-white/5"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                Community Events
              </h3>
              <p className="text-gray-400">
                Stay updated with local events and activities.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gradient-custom">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">2,500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">150+</div>
              <div className="text-gray-400">Monthly Events</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-4">95%</div>
              <div className="text-gray-400">Issue Resolution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-dark-800 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-gradient">ReBuild</span>
              <p className="mt-4 text-gray-400">Building stronger communities together.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Events', 'Businesses', 'Complaints'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2">
                {['Help Threads', 'Announcements', "Ladies' Corner"].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <p className="text-gray-400">
                Have questions? Reach out to us at support@rebuild.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}