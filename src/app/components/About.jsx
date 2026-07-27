import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full py-10 scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
   
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-transparent dark:border-zinc-800">
          <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
            Freelance Web Developer
          </h3>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
            Experienced in MERN Stack, Next.js and Wordpress, building modern,
            responsive, and user-friendly websites tailored to client needs.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-transparent dark:border-zinc-800">
          <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          Tech Consultant for Businesses
          </h3>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
          Helps businesses grow online with practical tech solutions, digital strategies, and cloud adoption guidance.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
      
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-transparent dark:border-zinc-800">
          <div className="flex items-start justify-between mb-3">
            <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 dark:text-zinc-100">
              Martial Artist & Former Coach
            </h3>
          </div>
          <p className="text-gray-600 dark:text-zinc-400 text-lg  leading-relaxed">
            Brings the discipline, resilience, and focus of martial arts into professional and personal life, inspiring others through coaching and mentorship.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-transparent dark:border-zinc-800">
          <h3 className=" text-2xl md:text-3xl font-semibold text-gray-900 dark:text-zinc-100 mb-3 ">
           Constant Learner & Hard Worker
          </h3>
          <p className="text-gray-600 dark:text-zinc-400 text-lg  leading-relaxed">
           Always upgrading skills, staying ahead in tech trends, and combining persistence with dedication to deliver the best results.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-2xl text-gray-600 dark:text-zinc-400 mb-6">
          Ready to bring your ideas to life? Let's work together.
        </p>
        <a href="#contact">

        <button className="bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 group">
          Get In Touch
        </button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default About;
