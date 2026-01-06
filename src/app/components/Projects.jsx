import Link from 'next/link';
import React from 'react';

const projects = [
  {
    id: "1",
    title: "Stocks Gravity",
    description: "A Next.js Stocks Market analysis app with ai powered insights",
    tech: ["Next.js", "inggest", "Mongodb"],
    url:"https://stocks-next-app.vercel.app/"
  },
  {
    id: "2",
    title: "Campus Tales Mern",
    description: "A Mern Stack Blog application",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    url:"https://campus-tales-mern.onrender.com/"
  }   
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-black mb-4 tracking-tight">
          Projects
        </h1>
        
      
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
            <Link
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
          <div
            key={project.id}
            className="group relative border border-gray-200 rounded-2xl p-8 
                       hover:border-black hover:shadow-xl
                       transition-all duration-500 ease-out
                       hover:-translate-y-2 cursor-pointer
                       bg-white overflow-hidden"
          >
           
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
        
              <div className="text-gray-300 font-bold text-6xl mb-4 
                            group-hover:text-gray-400 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h2 className="text-2xl font-bold text-black mb-3 
                           group-hover:translate-x-1 transition-transform duration-300">
                {project.title}
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {project.description}
              </p>

             
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-gray-700 
                             bg-gray-100 rounded-full
                             group-hover:bg-black group-hover:text-white
                             transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

          
              
            </div>
          </div>
        </Link>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;