export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
   
 
    "Java",
    "Python",
    // "c",
    "Git",
    "Figma",
    // "AWS",
    "HTML5",
    "CSS3"
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div  className="max-w-6xl mx-auto">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Skills
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm md:text-base font-medium shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}