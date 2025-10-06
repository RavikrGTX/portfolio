import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#7A5B51] text-gray-300 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
         {/* col1 */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-white text-xl sm:text-2xl font-bold">RaviKumar Mamidi</h2>
            <p className="text-black text-sm sm:text-base break-words">ravikumarmamidi27@gmail.com</p>
          </div>

          {/* col2 */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-black text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">Socials</h3>
            <ul className="space-y-2 sm:space-y-3">
         
              <li>
                <a href="https://www.linkedin.com/in/ravikumarmamidi17" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ravikumarmamidi17/" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://medial.app/user/ravikumar-mamidi-7c7e4a1b64e88" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  Medial
                </a>
              </li>
           
            </ul>
          </div>

         {/* col3 */}

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-black text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">Other</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="https://github.com/RavikrGTX" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  GitHub
                </a>
              </li>
               <li>
                <a href="https://leetcode.com/u/ravikumarmamidi17/" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  LeetCode
                </a>
              </li>
              
             
            </ul>
          </div>

        {/* col4 */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-black text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  Skills
                </a>
              </li>
              <li>
                <a href="#mywork" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                  My Work
                </a>
              </li>
               <li>
                <a href="#contact" className="text-white hover:text-black transition-colors duration-200 text-base sm:text-lg block">
                 Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
