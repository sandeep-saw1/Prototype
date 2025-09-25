import React, { useEffect } from 'react';

const About = () => {
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

  return (
    <>
      <style>
        {`
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

        {/* Hero Section */}
        <section
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF5dXJ2ZWRhfGVufDB8fDB8fHww')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9) saturate(0.8)',
          }}
          className="flex items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-8 text-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Ayursutra Panchakarma
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted partner in authentic Ayurvedic healing and wellness transformation
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Mission</h2>
            <div className="border-t-2 border-gray-300 my-8"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-left">
              At Ayursutra Panchakarma, we are dedicated to preserving and practicing the ancient science of Ayurveda in its purest form. Our mission is to provide authentic Panchakarma treatments that not only heal the body but also nurture the mind and spirit, helping our patients achieve complete wellness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-left">
              We believe in the timeless wisdom of Ayurveda that teaches us that true health comes from the balance of body, mind, and consciousness. Through personalized treatments and compassionate care, we guide our patients on their journey to optimal health and vitality.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2500+</div>
                <div className="text-green-100 font-semibold">Patients Treated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-green-100 font-semibold">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-green-100 font-semibold">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-green-100 font-semibold">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Panchakarma
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Experience the transformative power of authentic Panchakarma therapies
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Detoxification */}
              <div className="p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4 border border-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Detoxification</h3>
                <p className="text-gray-600">
                  Eliminate deep-seated toxins from your body through authentic Panchakarma procedures
                </p>
              </div>

              {/* Stress Relief */}
              <div className="p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stress Relief</h3>
                <p className="text-gray-600">
                  Achieve mental peace and emotional balance through holistic healing approaches
                </p>
              </div>

              {/* Improved Immunity */}
              <div className="p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-4 border border-purple-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Immunity</h3>
                <p className="text-gray-600">
                  Strengthen your natural defense system and enhance overall vitality
                </p>
              </div>
              
              {/* Better Digestion */}
              <div className="p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-4 border border-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.3 6.6l-3.9 4.3a1 1 0 0 0 0 1.4l3.9 4.3a7 7 0 0 0 1.7 1.7z"></path>
                    <path d="M12 13V2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Better Digestion</h3>
                <p className="text-gray-600">
                  Restore digestive fire (Agni) and improve nutrient absorption naturally
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Experienced practitioners dedicated to your wellness journey
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://placehold.co/100x100/556B2F/white?text=Dr.R')" }}
                ></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Ayurveda</h3>
                <p className="text-green-600 font-semibold mb-4">Chief Ayurvedic Physician</p>
                <ul className="space-y-2 text-gray-700 text-left list-disc list-inside">
                  <li>25 Years Experience</li>
                  <li>Specialization: Panchakarma & Chronic Diseases</li>
                  <li><strong>Qualifications:</strong> BAMS, MD (Ayurveda), PhD in Panchakarma</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://placehold.co/100x100/2F4F4F/white?text=Dr.P')" }}
                ></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Priya Sharma</h3>
                <p className="text-green-600 font-semibold mb-4">Senior Panchakarma Specialist</p>
                <ul className="space-y-2 text-gray-700 text-left list-disc list-inside">
                  <li>18 Years Experience</li>
                  <li>Specialization: Women's Health & Detox</li>
                  <li><strong>Qualifications:</strong> BAMS, MS (Ayurveda), Panchakarma Certification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://placehold.co/100x100/6B8E23/white?text=Dr.A')" }}
                ></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Amit Kumar</h3>
                <p className="text-green-600 font-semibold mb-4">Ayurvedic Consultant</p>
                <ul className="space-y-2 text-gray-700 text-left list-disc list-inside">
                  <li>15 Years Experience</li>
                  <li>Specialization: Neurological Disorders</li>
                  <li><strong>Qualifications:</strong> BAMS, MD (Kayachikitsa), Research Scholar</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://placehold.co/100x100/8FBC8F/white?text=Meera')" }}
                ></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meera Therapist</h3>
                <p className="text-green-600 font-semibold mb-4">Senior Panchakarma Therapist</p>
                <ul className="space-y-2 text-gray-700 text-left list-disc list-inside">
                  <li>12 Years Experience</li>
                  <li>Specialization: Massage & Body Treatments</li>
                  <li><strong>Qualifications:</strong> Certified Panchakarma Therapist, Ayurvedic Massage Expert</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="hidden md:block">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://plus.unsplash.com/premium_photo-1661545876541-ed058922e033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8"
                alt="Ayursutra Panchakarma Clinic"
              />
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Ayursutra Panchakarma?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <path d="M20 8v6"></path>
                      <path d="M23 11h-6"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Practitioners</h3>
                    <p className="text-gray-700">
                      Our team consists of certified Ayurvedic doctors with decades of experience in Panchakarma treatments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center border border-green-200 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.47 6.26l1.39-1.39a2 2 0 0 1 2.83 2.83l-1.39 1.39"></path>
                      <path d="M9.13 14.86l-1.39 1.39a2 2 0 0 1-2.83-2.83l1.39-1.39"></path>
                      <path d="M12 22a7 7 0 0 1-7-7c0-2.04 1-3.9 2.59-5.18l-1.9-1.9a2 2 0 0 1 0-2.83l2.83-2.83a2 2 0 0 1 2.83 0l1.9 1.9C15.1 6 17 7 17 9a7 7 0 0 1 5 6c0 3.86-3.14 7-7 7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Methods</h3>
                    <p className="text-gray-700">
                      We follow traditional Ayurvedic texts and use only pure, organic herbs and medicines in our treatments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-200 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Care</h3>
                    <p className="text-gray-700">
                      Every treatment plan is customized based on your unique constitution (Prakriti) and current health condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
