import React from 'react';

const ContactPage = () => {

  const contactItems = [
    { 
      icon: (
        <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ), 
      title: "Phone", 
      details: ["+91 98765 43210", "+91 87654 32109"] 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email", 
      details: ["info@ayurheal.com", "appointments@ayurheal.com"] 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ), 
      title: "Address", 
      details: ["123 Wellness Street", "Ayurveda District, Mumbai", "Maharashtra 400001"] 
    },
    { 
      icon: (
        <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      title: "Working Hours", 
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"] 
    }
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen text-gray-800 antialiased">
      
      {/* Hero Section with a new background image */}
      <div 
        className="bg-cover bg-center h-[20rem] md:h-[26rem] relative flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
        <div className="relative text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight drop-shadow-lg">
            Connect with Our Wellness Center
          </h1>
          <p className="text-lg md:text-xl font-light drop-shadow-lg">
            We are here to help you begin your journey to holistic healing and well-being.
          </p>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-green-100 text-green-700 p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-900">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600 leading-snug">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="container mx-auto px-4 py-8 md:flex md:space-x-12">
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="md:flex md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="fullName" placeholder="Your full name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 p-3" />
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your phone number" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 p-3" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" placeholder="Your email address" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 p-3" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select id="subject" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 p-3">
                <option value="">Select a subject</option>
                <option value="appointment">Appointment Inquiry</option>
                <option value="general">General Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us about your inquiry or health concerns..." className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 p-3"></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 transform transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-1 mt-8 md:mt-0 bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Find Our Center</h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264259.605374665!2d72.37894363945417!3d23.25413348122396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4155f886f9d3%3A0x1d7c04e2d31c5040!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1716382024849!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
          <div className="bg-green-50 p-6 rounded-lg mt-6 text-green-900">
            <h4 className="font-bold text-lg mb-1">Visit Our Center in Bhopal</h4>
            <p className="text-sm">
              We are located in the heart of Bhopal, Madhya Pradesh, providing authentic Ayurvedic treatments in a serene and peaceful environment.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="bg-red-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-red-700 mb-2">Emergency Contact</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            For urgent health concerns or emergencies, please contact us immediately for prompt assistance.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="tel:+919876543210" 
              className="bg-red-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-red-700 transition duration-300 flex items-center space-x-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: +91 98765 43210</span>
            </a>
            <a 
              href="mailto:emergency@ayurheal.com" 
              className="bg-white text-red-600 font-semibold py-4 px-10 rounded-full shadow-lg border-2 border-red-600 hover:bg-red-100 transition duration-300 flex items-center space-x-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>emergency@ayurheal.com</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
