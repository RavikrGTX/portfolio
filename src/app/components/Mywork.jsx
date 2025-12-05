import { ExternalLink } from 'lucide-react';
import { assets } from '../../../assets/assets';
import Image from 'next/image';

export default function WorkSection() {
 
  const projects = [
       {
      id: 1,
      businessName: 'Hi-Tech Constructions',
      logo:assets.bfclogo, 
      website: 'https://hitechconstructions.com/',
      domain: 'hitechconstructions.com'
    },
    {
      id: 2,
      businessName: 'Brutal Fight Club',
      logo:assets.bfclogo, 
      website: 'https://brutalfightclub.com',
      domain: 'brutalfightclub.com'
    },
    // {
    //   id: 2,
    //   businessName: 'Brilliant Martial Arts Academy',
    //   logo: assets.bmaalogo,
    //   website: 'https://brilliantmartialarts.com',
    //   domain: 'brilliantmartialarts.com'
    // },
    {
      id: 4,
      businessName: 'Konaseema Sustainable Solutions',
      logo: assets.ksslogo,
      website: 'https://konaseemasolutions.com',
      domain: 'konaseemasolutions.com'
    },
    {
      id: 4,
      businessName: 'KodursParadise',
      logo: assets.kodurslogo,
      website: 'https://kodursparadise.com',
      domain: 'kodursparadise.com'
    },
    {
      id: 6,
      businessName: 'RxCulture',
      logo: assets.rxculturelogo,
      website: 'https://therxculture.com',
      domain: 'therxculture.com'
    },
    {
      id: 7,
      businessName: 'Farm Atharv',
      logo: assets.rxculturelogo,
      website: 'https://farmatharv.com',
      domain: 'farmatharv.com'
    },

  ];

  return (
    <section id="mywork" className=" bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            My Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Websites I've built for businesses and clients
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >


          
              <h3 className="text-xl font-semibold text-black mb-3 text-center">
                {project.businessName}
              </h3>

              
              <div className="flex items-center justify-center space-x-2 text-gray-600 group-hover:text-black transition-colors">
                <span className="text-sm">{project.domain}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}