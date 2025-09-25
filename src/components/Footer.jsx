import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h1 className="text-2xl font-bold text-white mb-4">Ayersutra Panchakarma</h1>
            <p className="text-gray-300 leading-relaxed">
              Traditional Ayurvedic healing center specializing in authentic Panchakarma therapies for complete wellness and rejuvenation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
              <li><a href="/portal" className="text-gray-300 hover:text-white transition duration-300">Patient Portal</a></li>
              <li><a href="/appointment" className="text-gray-300 hover:text-white transition duration-300">Book Appointment</a></li>
            </ul>
          </div>

          {/* Our Therapies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Therapies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Vamana Therapy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Virechana Therapy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Basti Therapy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Nasya Therapy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Raktamokshana</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                123 Wellness Street, Ayurveda District, Mumbai, Maharashtra 400001
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                info@ayurheal.com
              </p>
              <div className="flex items-start">
                <span className="mr-2">🕒</span>
                <div>
                  <p>Mon - Sat: 9.00 AM - 7.00 PM</p>
                  <p>Sunday: 10.00 AM - 5.00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Ayersutra Panchakarma Center. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-300 hover:text-white text-sm transition duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white text-sm transition duration-300">
                Terms of Service
              </a>
              <span className="text-gray-300 text-sm">
                Made with Readdy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;