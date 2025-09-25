import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
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

      <div className="min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <section
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=1200&auto=format&fit=crop&q=60')",
          }}
          className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
        >
          <div className="max-w-4xl mx-auto text-center bg-black/50 p-6 rounded-2xl shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-yellow-400">
              About Ayursutra Panchakarma
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Your trusted partner in authentic Ayurvedic healing and wellness
              transformation
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-green-100 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Ayursutra Panchakarma, we are dedicated to preserving and
              practicing the ancient science of Ayurveda in its purest form. Our
              mission is to provide authentic Panchakarma treatments that not
              only heal the body but also nurture the mind and spirit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in the timeless wisdom of Ayurveda: true health comes
              from balance of body, mind, and consciousness.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["2500+", "Patients Treated"],
              ["15+", "Years Experience"],
              ["95%", "Success Rate"],
              ["24/7", "Support Available"],
            ].map(([stat, label], idx) => (
              <div key={idx} className="hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat}
                </div>
                <div className="text-green-100 font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Panchakarma
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Experience the transformative power of authentic Panchakarma
              therapies
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                [
                  "Complete Detoxification",
                  "Eliminate toxins from your body through authentic Panchakarma.",
                  "green",
                ],
                [
                  "Stress Relief",
                  "Achieve mental peace and balance through holistic healing.",
                  "blue",
                ],
                [
                  "Improved Immunity",
                  "Strengthen your natural defense system and vitality.",
                  "purple",
                ],
                [
                  "Better Digestion",
                  "Restore digestive fire (Agni) and nutrient absorption.",
                  "orange",
                ],
              ].map(([title, desc, color], idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all text-center"
                >
                  <div
                    className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 bg-${color}-50 border border-${color}-200`}
                  >
                    <span
                      className={`text-${color}-500 text-3xl font-bold`}
                    >{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Experienced practitioners dedicated to your wellness journey
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Example doctor card */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://placehold.co/100x100/556B2F/white?text=Dr.R')",
                  }}
                ></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Dr. Rajesh Ayurveda
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  Chief Ayurvedic Physician
                </p>
                <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside text-left">
                  <li>25 Years Experience</li>
                  <li>Panchakarma & Chronic Diseases</li>
                  <li>BAMS, MD, PhD</li>
                </ul>
              </div>
              {/* Add other team members same way */}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-red-50 opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="hidden md:block">
              <img
                className="w-full h-auto rounded-xl shadow-lg"
                src="https://plus.unsplash.com/premium_photo-1661545876541-ed058922e033?w=800&auto=format&fit=crop&q=60"
                alt="Ayursutra Panchakarma Clinic"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Ayursutra Panchakarma?
              </h2>
              <div className="space-y-6">
                {[
                  [
                    "Expert Practitioners",
                    "Our certified Ayurvedic doctors have decades of experience.",
                  ],
                  [
                    "Authentic Methods",
                    "We follow traditional Ayurvedic texts and use only organic herbs.",
                  ],
                  [
                    "Personalized Care",
                    "Every plan is customized to your unique constitution (Prakriti).",
                  ],
                ].map(([title, desc], idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green-200 to-green-400 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-700">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
