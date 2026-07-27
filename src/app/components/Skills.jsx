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
    <section id="skills" className="py-16 bg-gray-50 dark:bg-zinc-900/50">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-3">
            Skills
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 rounded-lg text-sm md:text-base font-medium shadow-sm border border-transparent dark:border-zinc-700 hover:shadow-md hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
