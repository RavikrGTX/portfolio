import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Left Card */}
        <div className="bg-gray-100 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 ">
          <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Freelance Web Developer
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experienced in MERN Stack, Next.js and Wordpress, building modern,
            responsive, and user-friendly websites tailored to client needs.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-gray-100 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Tech Consultant for Businesses
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
          Helps businesses grow online with practical tech solutions, digital strategies, and cloud adoption guidance.
          </p>
        </div>
      </div>

      {/* Second Row - Side by side on lg, stacked on mobile */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-gray-100 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start justify-between mb-3">
            <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900">
              Martial Artist & Former Coach
            </h3>
            {/* <ArrowUpRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" /> */}
          </div>
          <p className="text-gray-600 text-lg  leading-relaxed">
            Brings the discipline, resilience, and focus of martial arts into professional and personal life, inspiring others through coaching and mentorship.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-gray-100 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 mb-3 ">
           Constant Learner & Hard Worker
          </h3>
          <p className="text-gray-600 text-lg  leading-relaxed">
           Always upgrading skills, staying ahead in tech trends, and combining persistence with dedication to deliver the best results.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-2xl  text-gray-600 mb-6">
          Ready to bring your ideas to life? Let's work together.
        </p>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group">
          Get In Touch
          {/* <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
        </button>
      </div>
    </div>
  );
};

export default About;
