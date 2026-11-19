import React from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

const EMAIL = 'ravikumarmamidi27@gmail.com';

const profiles = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ravikumarmamidi17', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/RavikrGTX', icon: Github },
  { label: 'LeetCode', href: 'https://leetcode.com/u/ravikumarmamidi17/', icon: Code2 },
  { label: 'Instagram', href: 'https://www.instagram.com/ravikumarmamidi17/', icon: Instagram },
];

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'My Work', href: '/#mywork' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const headingClass =
  'text-xs font-medium uppercase tracking-[0.2em] text-white/50 dark:text-zinc-500 mb-5';
const linkClass =
  'group inline-flex items-center gap-2.5 text-white/80 hover:text-white dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#7A5B51] dark:bg-zinc-900 text-white border-t border-transparent dark:border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Identity */}
          <div className="sm:col-span-2 space-y-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Ravi Kumar Mamidi</h2>
              <p className="mt-2 text-white/70 dark:text-zinc-400 max-w-sm leading-relaxed">
                Full-Stack Software Engineer. I build web applications and software systems that solve business problems.
              </p>
            </div>

            <div className="space-y-2.5 text-sm">
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{EMAIL}</span>
              </a>
              <p className="flex items-center gap-2.5 text-white/70 dark:text-zinc-400">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                Hyderabad, India
              </p>
            </div>

            {/* Icon row */}
            <div className="flex items-center gap-2 pt-1">
              {profiles.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full border border-white/20 dark:border-zinc-700 flex items-center justify-center text-white/80 dark:text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/40 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:border-zinc-500 transition-colors duration-200"
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Profiles */}
          <nav aria-label="Profiles">
            <h3 className={headingClass}>Profiles</h3>
            <ul className="space-y-3">
              {profiles.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <Icon className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    {label}
                    <ArrowUpRight
                      className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Site */}
          <nav aria-label="Site">
            <h3 className={headingClass}>Site</h3>
            <ul className="space-y-3">
              {pages.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/15 dark:border-zinc-800 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-sm text-white/60 dark:text-zinc-500">
          <p>© {year} Ravi Kumar Mamidi</p>
          <a href="#top" className="group inline-flex items-center gap-2 hover:text-white dark:hover:text-zinc-100 transition-colors duration-200">
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
