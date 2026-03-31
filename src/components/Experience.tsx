import { useState } from 'react';

const experiences = [
  {
    company: 'Intellezy',
    role: 'Sr. Full Stack Developer',
    domain: 'intellezy.com',
    period: 'May 2024 – Present',
    score: '9.2',
    scoreType: 'green',
    tags: ['TALL STACK', 'LARAVEL', 'LIVEWIRE', 'FILAMENT'],
    description:
      'SaaS platform with Livewire, Alpine.js, Filament admin, Spatie SEO & sitemap, and Wink blog.',
    type: ['Current', 'Senior', 'Fullstack'],
  },
  {
    company: 'Code Squirrel',
    role: 'Frontend Dev (w/ Backend)',
    domain: 'codesquirrel.com.au',
    period: 'Jan 2020 – Present',
    score: '9.0',
    scoreType: 'green',
    tags: ['NEXT.JS TS', 'VUE', 'NUXT', 'TANSTACK'],
    description:
      'Frontend dev for web apps. Leaflet maps, ChartJS, TanStack Query in Next.js App Router, auth with Next-auth.',
    type: ['Current', 'Frontend'],
  },
  {
    company: 'CreativeX',
    role: 'Senior Frontend Dev',
    domain: 'creativexph.com',
    period: 'Feb 2022 – May 2024',
    score: '9.8',
    scoreType: 'green',
    tags: ['VUE', 'NEXT.JS', 'LARAVEL', 'SHADCN UI'],
    description:
      'Led frontend with NextJS TS. Developed webapp mostly on NuxtJS, Leaflet geospatial, Laravel APIs, Radix UI.',
    type: 'Senior',
  },
  {
    company: '3EBoosting',
    role: 'Fullstack Developer',
    domain: '3eboosting.gg',
    period: 'Aug 2020 – Jun 2021',
    score: '7.5',
    scoreType: 'yellow',
    tags: ['VUE', 'LARAVEL', 'WEBSOCKETS', 'MYSQL'],
    description:
      'Vue + Vue Bootstrap UIs, RESTful APIs with Laravel, real-time features via Laravel Websockets.',
    type: 'Fullstack',
  },
  {
    company: 'Kalakal',
    role: 'Part-time Frontend Dev',
    domain: 'kalakal.ph',
    period: 'Jul 2021 – Sep 2021',
    score: '7.0',
    scoreType: 'yellow',
    tags: ['VUE', 'ANT DESIGN', 'JAVASCRIPT'],
    description:
      'UI components and client-side validation using VueJS and Ant Design component library.',
    type: 'Frontend',
  },
  {
    company: 'Awesome OS',
    role: 'Web Developer',
    domain: 'awesomecx.transcom.com',
    period: 'Mar 2019 – Jan 2020',
    score: '6.5',
    scoreType: 'yellow',
    tags: ['JQUERY', 'BOOTSTRAP', 'JAVASCRIPT'],
    description:
      'Frontend for OSNet apps with jQuery DOM manipulation and Bootstrap responsive layouts.',
    type: 'Entry',
  },
];

const filters = [
  'All',
  'Current',
  'Senior',
  'Fullstack',
  'Frontend',
  'Entry',
] as const;
type Filter = (typeof filters)[number];

const Experience = () => {
  const [active, setActive] = useState<Filter>('All');

  const visible =
    active === 'All'
      ? experiences
      : experiences.filter((e) => {
          const types = Array.isArray(e.type) ? e.type : [e.type];
          return types.includes(active);
        });

  return (
    <section
      id="experience"
      className="py-20 px-5 max-w-6xl mx-auto border-t-2 border-black border-opacity-10"
    >
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <h2 className="section-heading">EXPERIENCE</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-pill${active === f ? ' active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((exp) => (
          <div key={exp.company} className="card card-hover p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="min-w-0">
                <h3
                  className="font-bold text-base leading-tight"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {exp.company}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 mono">
                  {exp.domain}
                </p>
              </div>
              <div className={`score score-${exp.scoreType}`}>
                {exp.score}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {exp.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mono mb-3">
              {exp.description}
            </p>
            <p className="text-xs font-semibold text-gray-400">
              {exp.role} · {exp.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
