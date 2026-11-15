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
              From building websites to engineering solutions that solve real problems.
            </h1>

            <p className="text-[15px] sm:text-base md:text-[17px] text-gray-500 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Ravi Kumar is a Full-Stack Software Engineer who enjoys building modern web applications, backend systems, AI-powered solutions and business automations. With experience in Next.js, React, Node.js, TypeScript, PostgreSQL and AI technologies, he helps turn ideas and business challenges into practical digital solutions that make work easier and more efficient. He is passionate about technology, software architecture, data-driven systems and exploring new possibilities with AI. He enjoys understanding how things work, solving problems and finding better ways to use technology. His journey started in his third year of B.Tech, when he began freelancing and building websites for clients. Since then, he has grown into professional software engineering, working on real-world applications and continuously expanding his skills.
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
            <div className="rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[25rem] lg:h-[25rem] xl:w-[28rem] xl:h-[28rem] shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
              <Image
                src={assets.profilerk_img}
                alt="Ravi Kumar"
                className="w-full h-full object-cover"
                width={480}
                height={480}
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
