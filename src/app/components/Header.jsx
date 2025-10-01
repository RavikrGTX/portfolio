// import React from "react";
// import Image from "next/image";
// import { assets } from "../../../assets/assets";

// const Header = () => {
//  return (
//     <section className="w-11/12  max-w-8xl mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-7 lg:pl-9 ">
//       {/* Left Content */}
//       <div className="w-full lg:w-1/2 text-center md:text-left lg:pl-8">
//         <h1 className="text-5xl md:text-4xl font-bold leading-tight mb-6 lg:text-7xl">
//           Building web applications and helping businesses grow their online
//           presence.
//         </h1>

//         <p className="text-lg  text-gray-600 font-serif max-w-2xl mx-auto lg:mx-0 lg:text-3xl">
//           Ravi Kumar is a full-stack web developer and freelancer who helps
//           businesses grow online with custom websites and web applications. He
//           has experience building responsive, high-quality websites using
//           WordPress and the MERN stack. As a freelancer, Ravi works with
//           startups, fitness brands, and local businesses to improve their
//           digital presence. He enjoys turning ideas into real-world solutions
//           and also shares tips and tutorials to help others learn web
//           development and freelancing.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row items-center gap-4 mt-6 ">
//           <a
//             href="#contact"
//             className="px-6 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
//           >
//             Contact Me
//             <Image
//               className="w-4"
//               alt="arrow icon"
//               src={assets.right_arrow_bold_dark}
//             />
//           </a>

//           <a
//             href="/sample-resume.pdf"
//             download
//             className="px-6 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
//           >
//             My Resume
//             <Image
//               className="w-4"
//               alt="download icon"
//               src={assets.download_icon}
//             />
//           </a>
//         </div>
//       </div>

//       {/* Right Profile Image */}
//       <div className="w-full md:w-1/2 flex justify-center ">
//         <div className="rounded-full overflow-hidden w-74 h-74 shadow-lg md:w-100 md:h-100 lg:w-150 lg:h-150 lg:ml-8">
//           <Image
//             src={assets.profilerk_img}
//             alt="Ravi Kumar"
//             className="w-full h-full object-cover"
//             width={300}
//             height={300}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;



import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Header = () => {
  return (
    <section className="w-full min-h-screen flex items-center py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto w-[90%]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Building web applications and helping businesses grow their online
              presence.
            </h1>

            <p className="text-base sm:text-lg md:text-xl  text-gray-600 font-serif max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Ravi Kumar is a full-stack web developer and freelancer who helps
              businesses grow online with custom websites and web applications. He
              has experience building responsive, high-quality websites using
              WordPress and the MERN stack. As a freelancer, Ravi works with
              startups, fitness brands, and local businesses to improve their
              digital presence. He enjoys turning ideas into real-world solutions
              and also shares tips and tutorials to help others learn web
              development and freelancing.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border border-gray-500 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Me
                <Image
                  className="w-4 h-4"
                  alt="arrow icon"
                  src={assets.right_arrow_bold_dark}
                />
              </a>

              <a
                href="/sample-resume.pdf"
                download
                className="w-full sm:w-auto px-6 py-3 border border-gray-500 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
              >
                My Resume
                <Image
                  className="w-4 h-4"
                  alt="download icon"
                  src={assets.download_icon}
                />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] shadow-2xl">
                <Image
                  src={assets.profilerk_img}
                  alt="Ravi Kumar"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;












// import Image from "next/image";
// import { assets } from "@/data/assets"; // Update this import path based on your project structure

// export default function HeroSection() {
//   return (
//     <section className="w-11/12 max-w-7xl mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10">
//       {/* Left Content */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
//           Building web applications and helping businesses grow their online
//           presence.
//         </h1>

//         <p className="text-base md:text-lg text-gray-600 font-serif max-w-2xl mx-auto md:mx-0">
//           Ravi Kumar is a full-stack web developer and freelancer who helps
//           businesses grow online with custom websites and web applications. He
//           has experience building responsive, high-quality websites using
//           WordPress and the MERN stack. As a freelancer, Ravi works with
//           startups, fitness brands, and local businesses to improve their
//           digital presence. He enjoys turning ideas into real-world solutions
//           and also shares tips and tutorials to help others learn web
//           development and freelancing.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <a
//             href="#contact"
//             className="px-6 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
//           >
//             Contact Me
//             <Image
//               className="w-4"
//               alt="arrow icon"
//               src={assets.right_arrow_bold_dark}
//             />
//           </a>

//           <a
//             href="/sample-resume.pdf"
//             download
//             className="px-6 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
//           >
//             My Resume
//             <Image
//               className="w-4"
//               alt="download icon"
//               src={assets.download_icon}
//             />
//           </a>
//         </div>
//       </div>

//       {/* Right Profile Image */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="rounded-full overflow-hidden w-64 h-64 shadow-lg">
//           <Image
//             src={assets.profilerk_img}
//             alt="Ravi Kumar"
//             className="w-full h-full object-cover"
//             width={300}
//             height={300}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
