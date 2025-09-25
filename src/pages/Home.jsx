import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.2
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle API call for the chatbot
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Remove API call or add your actual API key
      // For demo purposes, we'll use a mock response
      setTimeout(() => {
        const botResponses = [
          "Panchakarma is a traditional Ayurvedic detoxification treatment that helps eliminate toxins from the body.",
          "We offer five main therapies: Vamana, Virechana, Basti, Nasya, and Raktamokshana.",
          "To book a consultation, please call us at +91 98765 43210 or visit our center.",
          "Our treatments are personalized based on your unique body constitution (Prakriti).",
          "Panchakarma can help with stress relief, detoxification, and improving overall wellness."
        ];
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        const botMessage = { text: randomResponse, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { text: "There was an error. Please try again later.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <style>
        {`
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .chat-container::-webkit-scrollbar {
            width: 8px;
        }
        .chat-container::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        .chat-container::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        .chat-container::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        .message-bubble {
            max-width: 80%;
            padding: 12px;
            border-radius: 20px;
            margin-bottom: 10px;
            word-wrap: break-word;
        }
        .message-bubble.user {
            background-color: #d1fae5;
            color: #166534;
            align-self: flex-end;
            margin-left: auto;
        }
        .message-bubble.bot {
            background-color: #f3f4f6;
            color: #1f2937;
            align-self: flex-start;
        }
        `}
      </style>
      <div className="min-h-screen font-inter">
        {/* Hero Section - FIXED */}
        <section 
          className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-amber-900/50"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ayurveda <span className='text-green-300'>Panchakarma</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              Experience Ancient Healing Through Traditional Panchakarma Therapies
            </p>
            <p className="text-lg text-white mb-8 leading-8">
              Detoxify, rejuvenate, and restore your body's natural balance with our authentic
              Panchakarma treatments guided by experienced Ayurvedic practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Five Sacred Therapies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Five Sacred Panchakarma Therapies
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Discover the ancient wisdom of Panchakarma - five powerful cleansing procedures that eliminate toxins and restore your body's natural harmony.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vamana */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Vamana</h3>
                <p className="text-gray-700 mb-4">Therapeutic vomiting to eliminate toxins from the upper body</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Respiratory disorders</li>
                    <li>Digestive issues</li>
                    <li>Skin diseases</li>
                  </ul>
                </div>
              </div>
              {/* Virechana */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Virechana</h3>
                <p className="text-gray-700 mb-4">Controlled purgation therapy for detoxifying the digestive system</p>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Liver disorders</li>
                    <li>Diabetes</li>
                    <li>Skin conditions</li>
                  </ul>
                </div>
              </div>
              {/* Basti */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Basti</h3>
                <p className="text-gray-700 mb-4">Medicated enema therapy for neurological and joint disorders</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Joint pain</li>
                    <li>Neurological issues</li>
                    <li>Digestive problems</li>
                  </ul>
                </div>
              </div>
              {/* Nasya */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Nasya</h3>
                <p className="text-gray-700 mb-4">Nasal administration of medicines for head and neck disorders</p>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Sinusitis</li>
                    <li>Headaches</li>
                    <li>Mental clarity</li>
                  </ul>
                </div>
              </div>
              {/* Raktamokshana */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Raktamokshana</h3>
                <p className="text-gray-700 mb-4">Blood purification therapy using leeches or other methods</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Blood disorders</li>
                    <li>Skin diseases</li>
                    <li>Liver conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar and Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Appointments & Our Location
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Calendar - Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
                <p className="text-gray-600 mb-4">
                  Use this calendar to view our availability and book a consultation with our experts.
                </p>
                <div className="grid grid-cols-7 text-center font-bold text-gray-700 gap-2 mb-4">
                  <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div className="grid grid-cols-7 text-center gap-2 text-gray-500">
                  {['', '', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day, index) => (
                    <div key={index} className={`p-2 rounded-full cursor-pointer ${day === 25 ? 'bg-green-600 text-white' : 'hover:bg-gray-200'}`}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <p className="text-gray-600 mb-4">
                  Visit our center at the location below to experience our therapies.
                </p>
                <div className="rounded-lg overflow-hidden h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.937012399264!2d77.0863032761895!3d28.59974267568589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f3b392237a3%3A0x1d4a04e5d597e7b6!2sAyurveda%20Sadan!5e0!3m2!1sen!2sin!4v1709461148810!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Chat with Our Ayurveda Assistant
            </h2>
            <div className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col h-[500px]">
              {/* Chat messages display */}
              <div className="flex-1 overflow-y-auto chat-container p-2 flex flex-col">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-20">
                    <p>Hello! I'm your personal Ayurveda assistant.</p>
                    <p>Ask me anything about Panchakarma or our services!</p>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message-bubble ${msg.sender}`}
                    >
                      {msg.text}
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="message-bubble bot">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              {/* Input area */}
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-green-600 text-white p-3 rounded-r-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Panchakarma Center?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Experience the perfect blend of traditional wisdom and modern convenience
            </p>
            <div className="border-t-2 border-gray-300 my-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Therapists</h3>
                <p className="text-gray-600">Certified Ayurvedic practitioners with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600">Online appointment scheduling with real-time availability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Medicines</h3>
                <p className="text-gray-600">Pure herbal medicines prepared using traditional methods</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600">Customized treatment plans based on your constitution</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Real experiences from our satisfied patients
            </p>
            <div className="border-t-2 border-gray-300 my-12"></div>
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="text-amber-400 text-2xl mb-4">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-6">
                "My joint pain has significantly reduced after the Panchakarma treatment. Highly recommend!"
              </p>
              <div className="text-gray-900">
                <p className="font-semibold">Rajesh Kumar</p>
                <p className="text-green-600">Basti Therapy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Take the first step towards better health with our authentic Panchakarma treatments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
                Start Treatment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;