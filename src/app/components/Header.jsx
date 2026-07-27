import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Header = () => {
  return (
    <section className="w-full pt-24 pb-16">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Text */}
          <div className="w-full lg:flex-1 min-w-0 text-center lg:text-left">
            <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold leading-[1.25] tracking-tight text-[#0f172a] dark:text-zinc-50 mb-6">
              Building web applications and helping businesses grow their online
              presence.
            </h1>

            <p className="text-[15px] sm:text-base md:text-[17px] text-gray-500 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Ravi Kumar is a full-stack web developer specializing in the MERN
              stack and Next.js. He builds fast, scalable, and user-friendly web
              applications, handling both backend architecture and responsive
              frontend development. His work reflects clean code, performance
              optimization, and practical product-building experience. He has
              worked with startups, fitness brands, and local businesses to
              strengthen their digital presence and build reliable web
              solutions. His core skills include React, Node.js, Express,
              MongoDB, and Next.js, along with experience in custom WordPress
              development when needed. Ravi is a proactive learner and
              problem-solver who enjoys building impactful products and
              contributing to engineering teams with ownership and initiative.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-2.5 border border-gray-400 dark:border-zinc-500 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300 text-sm text-gray-900 dark:text-zinc-100"
              >
                Contact Me
                <Image
                  className="w-3.5 h-3.5 dark:hidden"
                  alt="arrow icon"
                  src={assets.right_arrow}
                />
                <Image
                  className="w-3.5 h-3.5 hidden dark:block"
                  alt="arrow icon"
                  src={assets.right_arrow_white}
                />
              </a>

              <a
                href="/RAVIKUMAR_MAMIDI_RESUME.pdf"
                download
                className="w-full sm:w-auto px-6 py-2.5 border border-gray-400 dark:border-zinc-500 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300 text-sm text-gray-900 dark:text-zinc-100"
              >
                My Resume
                <Image
                  className="w-3.5 h-3.5 dark:invert"
                  alt="download icon"
                  src={assets.download_icon}
                />
              </a>
            </div>
          </div>

          {/* Profile — flush to the right edge of the shared container */}
          <div className="shrink-0 flex justify-center lg:justify-end">
            <div className="rounded-full overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[20rem] lg:h-[20rem] shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <Image
                src={assets.profilerk_img}
                alt="Ravi Kumar"
                className="w-full h-full object-cover"
                width={320}
                height={320}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
