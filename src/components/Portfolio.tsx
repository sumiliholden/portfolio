import { useState } from 'react';

type Project = {
  title: string;
  company: string;
  domain: string;
  description: string;
  tags: string[];
  score: string;
  scoreType: 'green' | 'yellow' | 'orange';
  filter: 'Intellezy' | 'Code Squirrel' | 'CreativeX';
  isPrivate?: boolean;
};

const projects: Project[] = [
  {
    title: 'Intellezy Learning Platform',
    company: 'Intellezy',
    domain: 'learning.intellezy.com/login',
    description:
      'Comprehensive e-learning platform. Course management, user auth, progress tracking, Filament admin panel.',
    tags: ['LARAVEL', 'LIVEWIRE', 'MYSQL', 'FILAMENT'],
    score: '9.0',
    scoreType: 'green',
    filter: 'Intellezy',
  },
  {
    title: 'Intellezy Marketing Website',
    company: 'Intellezy',
    domain: 'intellezy.com',
    description:
      'Marketing site with SEO via Spatie Sitemap, Schema Markup, and Wink blog system.',
    tags: ['LARAVEL', 'LIVEWIRE', 'SPATIE', 'SEO'],
    score: '8.5',
    scoreType: 'green',
    filter: 'Intellezy',
  },
  {
    title: 'AR Badge Generator',
    company: 'Intellezy',
    domain: '',
    description:
      'Augmented reality badge creator with real-time 3D preview and download functionality.',
    tags: ['REACT', 'AR', 'WEBGL', 'THREE.JS'],
    score: '8.0',
    scoreType: 'green',
    filter: 'Intellezy',
  },
  {
    title: 'Mesh Kit Builder V2',
    company: 'Code Squirrel',
    domain: 'mkb-bmco-v2.uat.nxt.work',
    description:
      'Advanced mesh configuration & visualization tool for UAT. Interactive 3D-ready builder UI with Vectary.',
    tags: ['NEXT.JS TS', 'REACT', 'TAILWINDCSS', 'VECTARY'],
    score: '9.2',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'Mesh Kit Builder V1',
    company: 'Code Squirrel',
    domain: 'mkb-bmco.uat.nxt.work',
    description:
      'Initial mesh kit builder release with core configuration management and UAT features.',
    tags: ['VueJS', 'BOOTSTRAP'],
    score: '7.8',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'Rainharvesting App',
    company: 'Code Squirrel',
    domain: 'app.rainharvesting.com.au',
    description:
      'Water conservation tracking app with data visualization dashboards and analytics reporting.',
    tags: ['NEXT.JS TS', 'CHARTJS', 'POSTGRESQL', 'TAILWINDCSS'],
    score: '8.2',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'Mesh Matcher',
    company: 'Code Squirrel',
    domain: 'mm-bmco.uat.nxt.work',
    description:
      'Mesh matching tool for UAT workflows and product compatibility checks.',
    tags: ['VueJS', 'TAILWINDCSS', 'UAT'],
    score: '8.4',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'First Flush Calculator',
    company: 'Code Squirrel',
    domain: 'ffc-bmco.uat.nxt.work',
    description:
      'Calculator tool for first flush sizing and rainwater system planning.',
    tags: ['VueJS', 'TAILWINDCSS', 'UAT'],
    score: '8.1',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'Filter Tool',
    company: 'Code Squirrel',
    domain: 'ft-bmco.uat.nxt.work',
    description:
      'Interactive selection experience for filtration products and configurations.',
    tags: ['VueJS', 'TAILWINDCSS', 'UAT'],
    score: '8.0',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'Tank Screen Tool',
    company: 'Code Squirrel',
    domain: 'tst-bmco.uat.nxt.work',
    description:
      'Product guidance tool for tank screen selection and setup recommendations.',
    tags: ['VueJS', 'TAILWINDCSS', 'UAT'],
    score: '8.3',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'Rain Head Selector Tool',
    company: 'Code Squirrel',
    domain: 'rhs.uat.nxt.work',
    description:
      'Selector flow for choosing compatible rain heads based on project criteria.',
    tags: ['VueJS', 'TAILWINDCSS', 'UAT'],
    score: '8.6',
    scoreType: 'green',
    filter: 'Code Squirrel',
  },
  {
    title: 'CreativeX Company Website',
    company: 'CreativeX',
    domain: 'https://creativexph.com/',
    description:
      'Official company website for CreativeX, featuring services, brand presence, and contact pathways.',
    tags: ['REACTJS', 'BRAND SITE', 'SEO'],
    score: '8.7',
    scoreType: 'green',
    filter: 'CreativeX',
    isPrivate: false,
  },
  {
    title: 'NaughtyTalk',
    company: 'CreativeX',
    domain: 'Private URL',
    description:
      'Project details are private. More info will be added later.',
    tags: ['PRIVATE'],
    score: '--',
    scoreType: 'yellow',
    filter: 'CreativeX',
    isPrivate: true,
  },
  {
    title: 'WannaHookUp',
    company: 'CreativeX',
    domain: 'Private URL',
    description:
      'Project details are private. More info will be added later.',
    tags: ['PRIVATE'],
    score: '--',
    scoreType: 'yellow',
    filter: 'CreativeX',
    isPrivate: true,
  },
  {
    title: 'ShagToday',
    company: 'CreativeX',
    domain: 'Private URL',
    description:
      'Project details are private. More info will be added later.',
    tags: ['PRIVATE'],
    score: '--',
    scoreType: 'yellow',
    filter: 'CreativeX',
    isPrivate: true,
  },
  {
    title: 'Hookup69',
    company: 'CreativeX',
    domain: 'Private URL',
    description:
      'Project details are private. More info will be added later.',
    tags: ['PRIVATE'],
    score: '--',
    scoreType: 'yellow',
    filter: 'CreativeX',
    isPrivate: true,
  },
  {
    title: 'HookupFinder',
    company: 'CreativeX',
    domain: 'Private URL',
    description:
      'Project details are private. More info will be added later.',
    tags: ['PRIVATE'],
    score: '--',
    scoreType: 'yellow',
    filter: 'CreativeX',
    isPrivate: true,
  },
];

const filterOptions = [
  'All',
  'Intellezy',
  'Code Squirrel',
  'CreativeX',
] as const;
type Filter = (typeof filterOptions)[number];

const Portfolio = () => {
  const [active, setActive] = useState<Filter>('All');

  const visible =
    active === 'All'
      ? projects
      : projects.filter((p) => p.filter === active);

  return (
    <section
      id="projects"
      className="py-20 px-5 max-w-6xl mx-auto border-t-2 border-black border-opacity-10"
    >
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <div>
          <h2 className="section-heading">PROJECTS</h2>
          <p className="text-gray-500 text-sm mt-1">
            A selection of what I've built
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((f) => (
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
        {visible.map((p, i) => (
          <div
            key={i}
            className={`card card-hover p-5${
              p.isPrivate ? ' private-project-card' : ''
            }`}
          >
            <div
              className={
                p.isPrivate
                  ? 'private-project-content blur-sm select-none'
                  : ''
              }
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="min-w-0">
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 mono truncate">
                    {p.domain}
                  </p>
                </div>
                <div className={`score score-${p.scoreType}`}>
                  {p.score}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mono mb-3">
                {p.description}
              </p>
              <p className="text-xs font-semibold text-gray-400">
                {p.company}
              </p>
            </div>
            {p.isPrivate && (
              <div
                className="private-project-watermark"
                aria-hidden="true"
              >
                Private project. More info will be added.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
