import React from "react";

const cards = [
  {
    label: "Now",
    title: "Full-Stack Engineer",
    body: "Building production web applications at Linkfields Innovations with Next.js, React and TypeScript.",
  },
  {
    label: "Where it started",
    title: "Client Work",
    body: "Shipped 7+ websites for businesses. Learned that good software starts with understanding the business, not the code.",
  },
  {
    label: "Off-screen",
    title: "Martial Artist & Former Coach",
    body: "Training and coaching taught me what engineering confirms: show up, practice the fundamentals, improve a little every day.",
  },
  {
    label: "Exploring",
    title: "AI & Business Systems",
    body: "RAG applications, workflow automation and ERP. Curious about how things work beneath the surface.",
  },
];

const About = () => {
  return (
    <div id="about" className="w-full py-10 scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-transparent dark:border-zinc-800"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 dark:text-zinc-500 mb-3">
                {card.label}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-zinc-100 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
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
