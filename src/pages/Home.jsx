import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

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
  }, [messages, isLoading]);

  // Handle API call for the chatbot
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Use a more conversational set of mock responses
      const botResponses = [
        "Panchakarma is an ancient Ayurvedic purification and detoxification treatment. It's designed to cleanse the body of toxins and restore balance to the doshas.",
        "The five main therapies are Vamana, Virechana, Basti, Nasya, and Raktamokshana. Each one targets a specific part of the body to remove accumulated toxins.",
        "You can book a consultation with our experienced practitioners by calling +91 98765 43210 or by using the online calendar on our website.",
        "Our treatments are fully personalized after a detailed consultation to understand your unique body constitution (Prakriti) and current imbalances (Vikriti).",
        "Panchakarma is highly effective for managing chronic conditions, improving digestion, boosting immunity, and promoting mental clarity. Many people also find it helpful for stress and anxiety relief.",
        "Our center uses only authentic, high-quality herbal medicines prepared according to traditional methods to ensure the best results.",
        "We are located at [Your Address Here]. You can find us on the map below!",
        "Feel free to ask me about the benefits of a specific therapy, how to prepare for a treatment, or anything else about Ayurveda!",
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setTimeout(() => {
        const botMessage = { text: randomResponse, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1500); // Increased timeout for a more realistic feel

    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { text: "I'm sorry, I seem to be having a problem. Please try again later.", sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Voice Assistant functionality
  const startListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        setIsListening(false);
      }
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser. Please use Chrome or a similar modern browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // Set to Indian English for better accuracy if needed
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      console.log("Listening...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      console.log("Transcript: ", transcript);
      // Wait for the state to update, then send the message
      setTimeout(() => {
        handleSendMessage();
      }, 100);
    };

    recognition.onend = () => {
      setIsListening(false);
      console.log("Stopped listening.");
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      console.error('Speech recognition error:', event.error);
    };

    recognitionRef.current = recognition;
    recognition.start();
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
            animation: fadeIn 0.5s ease-in-out;
        }
        .message-bubble.user {
            background-color: #d1fae5;
            color: #10b981;
            align-self: flex-end;
            margin-left: auto;
        }
        .message-bubble.bot {
            background-color: #f3f4f6;
            color: #1f2937;
            align-self: flex-start;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
            .hero-section {
                padding-top: 5rem;
                padding-bottom: 5rem;
            }
            .chat-container {
                min-height: 40vh;
                max-height: 60vh;
            }
        }
        `}
      </style>
      <div className="min-h-screen font-sans antialiased text-gray-800">

        {/* Hero Section */}
        <section 
          className="hero-section relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-amber-900/60"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-md">
              Ayurveda <span className='text-[#4aea0f]'>Panchakarma</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-6 leading-relaxed drop-shadow-sm">
              Experience Ancient Healing Through Traditional Panchakarma Therapies
            </p>
            <p className="text-lg text-white mb-8 leading-8 max-w-2xl mx-auto">
              Detoxify, rejuvenate, and restore your body's natural balance with our authentic
              Panchakarma treatments guided by experienced Ayurvedic practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#4aea0f] hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        ---

        {/* Five Sacred Therapies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              The Five Sacred Panchakarma Therapies
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Discover the ancient wisdom of Panchakarma - five powerful cleansing procedures that eliminate toxins and restore your body's natural harmony.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vamana */}
              <div className="bg-green-50 p-8 rounded-xl shadow-md border-t-4 border-amber-400">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Vamana</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Therapeutic vomiting to eliminate toxins from the upper body, especially beneficial for Kapha disorders.</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Respiratory disorders</li>
                    <li>Chronic cough & asthma</li>
                    <li>Skin diseases</li>
                  </ul>
                </div>
              </div>
              {/* Virechana */}
              <div className="bg-amber-50 p-8 rounded-xl shadow-md border-t-4 border-green-400">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Virechana</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Controlled purgation therapy for detoxifying the liver and digestive system, primarily for Pitta imbalances.</p>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Liver disorders</li>
                    <li>Diabetes</li>
                    <li>Skin conditions & rashes</li>
                  </ul>
                </div>
              </div>
              {/* Basti */}
              <div className="bg-green-50 p-8 rounded-xl shadow-md border-t-4 border-amber-400">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Basti</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Medicated enema therapy considered the most effective for balancing Vata dosha, targeting neurological and joint issues.</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Joint pain & arthritis</li>
                    <li>Neurological issues</li>
                    <li>Chronic constipation</li>
                  </ul>
                </div>
              </div>
              {/* Nasya */}
              <div className="bg-amber-50 p-8 rounded-xl shadow-md border-t-4 border-green-400">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Nasya</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Nasal administration of medicines for cleansing the head and neck region, improving senses and mental clarity.</p>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Sinusitis & headaches</li>
                    <li>Tension & stress</li>
                    <li>Improved memory</li>
                  </ul>
                </div>
              </div>
              {/* Raktamokshana */}
              <div className="bg-green-50 p-8 rounded-xl shadow-md border-t-4 border-amber-400">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Raktamokshana</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">Blood purification therapy using methods like leech therapy to treat various blood-related and skin disorders.</p>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Skin diseases</li>
                    <li>Blood disorders</li>
                    <li>Gout & joint pain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        ---

        {/* Calendar and Map Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Book Your Appointment & Find Our Location
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Calendar - Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h3>
                <p className="text-gray-600 mb-6">
                  Use our easy-to-use calendar to find a time that works for you and schedule a consultation with our experts.
                </p>
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 text-center font-bold text-gray-700 gap-2 mb-4">
                  <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div className="grid grid-cols-7 text-center gap-2 text-gray-500">
                  {['', '', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day, index) => (
                    <div key={index} className={`p-2 rounded-full cursor-pointer transition-colors ${day === 25 ? 'bg-amber-400 text-white' : 'hover:bg-gray-200'}`}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              {/* Map Component - Placeholder for the requested 'normal map' */}
<div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Location</h3>
  <p className="text-gray-600 mb-6">
    Locate our center using the map below. We look forward to seeing you!
  </p>

  {/* Map Placeholder Area */}
  <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300 overflow-hidden">
    <div className="text-xl font-semibold text-gray-500 p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-inner border border-dashed border-gray-400">
      
      <p className="mt-2 text-sm text-gray-600">
        Google Maps API / Interactive Map Goes Here
      </p>
    </div>
  </div>

  {/* Optional: Add a button for directions or more info */}
  <div className="mt-6 text-center">
    <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-200">
      Get Directions
    </button>
  </div>
</div>
            </div>
          </div>
        </section>

        ---

        {/* Chatbot Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Chat with Our Ayurveda Assistant
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Chat messages display */}
              <div className="flex-1 overflow-y-auto chat-container p-2 sm:p-4 flex flex-col">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-10 md:mt-20">
                    <p className="text-lg">Hello! I'm your personal Ayurveda assistant.</p>
                    <p className="text-sm mt-2">Ask me anything about Panchakarma, our treatments, or our services!</p>
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
              <div className="mt-4 flex flex-row gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type or speak your message..."
                  className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-sm md:text-base"
                  disabled={isLoading}
                />
                <button
                  onClick={startListening}
                  className={`p-3 rounded-xl transition-colors ${isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  disabled={isLoading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zm5.745 10.334a1 1 0 01-1.49 1.332A7.001 7.001 0 0112 18a7.001 7.001 0 01-4.255-2.334 1 1 0 011.49-1.332A5.001 5.001 0 0012 16a5.001 5.001 0 003.745-1.666 1 1 0 011.49-1.332z"/>
                  </svg>
                </button>
                <button
                  onClick={handleSendMessage}
                  className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-colors disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        ---

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Panchakarma Center?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Experience the perfect blend of traditional wisdom and modern care
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-green-50 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  👨‍⚕️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Therapists</h3>
                <p className="text-gray-600">Certified Ayurvedic practitioners with years of hands-on experience and deep knowledge.</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  📅
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600">Convenient online appointment scheduling with real-time availability to fit your busy life.</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  🌿
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Medicines</h3>
                <p className="text-gray-600">We use only pure herbal medicines prepared using traditional, time-tested methods for efficacy.</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  💫
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600">Receive a customized treatment plan tailored to your unique body constitution and health goals.</p>
              </div>
            </div>
          </div>
        </section>

        ---

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What Our Patients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
                <div className="text-amber-500 text-3xl mb-4">★★★★★</div>
                <p className="text-lg text-gray-700 italic text-center mb-6">
                  "My joint pain has significantly reduced after the Panchakarma treatment. The team was professional and caring. Highly recommend!"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-lg text-gray-900">Rajesh Kumar</p>
                  <p className="text-green-600">Basti Therapy Patient</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
                <div className="text-amber-500 text-3xl mb-4">★★★★★</div>
                <p className="text-lg text-gray-700 italic text-center mb-6">
                  "I feel completely rejuvenated and full of energy after my cleanse. This was truly a life-changing experience for me!"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-lg text-gray-900">Priya Sharma</p>
                  <p className="text-green-600">Vamana & Virechana Patient</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        ---

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-800 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Take the first step towards a healthier, more balanced you with our authentic Panchakarma treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105">
                Start Treatment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105">
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