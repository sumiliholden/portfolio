import { useState } from 'react';

const allSkills: Record<string, string[]> = {
  Frontend: [
    'VueJS',
    'ReactJS',
    'NuxtJS',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Shadcn UI',
    'Material UI',
    'Bootstrap',
    'Buefy',
    'Bootstrap Vue',
    'Alpine.js',
    'Livewire',
    'Ant Design',
  ],
  Backend: [
    'Laravel',
    'PHP',
    'MySQL',
    'REST APIs',
    'WebSockets',
    'Filament',
    'Spatie',
    'Wink',
  ],
  'Tools & Libs': [
    'Git',
    'Vite',
    'TanStack Query',
    'React Hook Form',
    'Zod',
    'Husky',
    'Next-auth',
    'ChartJS',
    'Apexcharts',
    'Leaflet',
    'Wysiwyg',
  ],
  'Design & CMS': [
    'Figma',
    'Responsive Design',
    'SEO',
    'Airtable',
    'Vectary',
    'HubSpot',
    'CognitoForms',
  ],
};

const filters = ['All', ...Object.keys(allSkills)] as const;
type Filter = (typeof filters)[number];

const Skills = () => {
  const [active, setActive] = useState<Filter>('All');

  const visible =
    active === 'All'
      ? Object.values(allSkills).flat()
      : allSkills[active];

  return (
    <section
      id="skills"
      className="py-20 px-5 max-w-6xl mx-auto border-t-2 border-black border-opacity-10"
    >
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <h2 className="section-heading">SKILLS</h2>
        <p className="text-gray-500 text-sm">
          Technologies I work with
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
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
      <div className="flex flex-wrap gap-2">
        {visible.map((skill) => (
          <span
            key={skill}
            className="tag"
            style={{ fontSize: '0.8rem', padding: '6px 14px' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
