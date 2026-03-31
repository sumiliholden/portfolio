# Portfolio - Copilot Instructions

## Project Overview

This is a modern, neo-brutalism styled portfolio website showcasing Holden Jay Sumili's work as a Full Stack Developer. Built with **Vite**, **React**, **TypeScript**, and **TailwindCSS**.

## Key Technical Details

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom utilities
- **Node Version**: v16+

## Design System

### Color Palette
- **Cream Background**: `#F5F1E8`
- **Black Text**: `#000000`
- **Accent Green**: `#2ECC71`
- **Light Gray**: `#E8E8E8`

### Neo-Brutalism Design Elements
- Bold, 3px black borders on components
- Drop shadows (`box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.15)`)
- Large, bold typography
- Minimal design approach
- Hover effects with slight lift animation
- No border-radius on most elements except cards

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       - Navigation with smooth scrolling
│   ├── Hero.tsx         - Main landing section
│   ├── About.tsx        - Personal background
│   ├── Skills.tsx       - Technical expertise
│   ├── Experience.tsx   - Work history
│   ├── Portfolio.tsx    - Project showcase
│   ├── Contact.tsx      - Contact form & info
│   └── Footer.tsx       - Footer with links
├── App.tsx              - Main app component
├── main.tsx             - React entry point
├── index.css            - Global styles
└── vite-env.d.ts        - TypeScript definitions
```

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Development Guidelines

### When Modifying Components:
- Maintain the neo-brutalism design consistency
- Use TailwindCSS utility classes
- Keep custom CSS in index.css to a minimum
- Components should be functional components with React hooks

### Styling Approach:
- Use TailwindCSS for rapid development
- Custom neo-brutalism utilities: `.neo-border`, `.neo-shadow`, `.neo-shadow-hover`
- Font sizes defined: `.text-bold-lg` for hero titles
- Always maintain 3px black borders on card-like elements

### Adding New Sections:
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add section ID for smooth scrolling
4. Update Header navigation if needed

## Recent Updates

- Fixed TypeScript React JSX types by installing `@types/react` and `@types/react-dom`
- Updated Tailwind CSS to v4 with `@tailwindcss/postcss`
- Fixed CSS import order for proper Tailwind cascade
- Added CSS module type definitions in `vite-env.d.ts`
- Set `"type": "module"` in package.json for ES modules

## Performance Notes

- Production build: ~210KB JS, ~2.2KB CSS (before gzip)
- Utilizes code splitting via Vite
- TailwindCSS provides optimized CSS output
- No heavy dependencies; minimal bundle size

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Common Tasks

### Add New Skill Category
Edit `src/components/Skills.tsx` - add to `skillCategories` array

### Update Experience
Edit `src/components/Experience.tsx` - modify `experiences` array

### Add Portfolio Project
Edit `src/components/Portfolio.tsx` - add to `projects` array

### Update Contact Info
Edit both `src/components/Hero.tsx` and `src/components/Contact.tsx`

## Deployment

Build the project and deploy the `dist/` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Notes for Future Development

- Consider adding dark mode toggle using Tailwind CSS dark mode
- Add analytics tracking for visitor insights
- Implement form handling for contact section (currently static)
- Consider adding animations library like Framer Motion for enhanced interactions
- Portfolio links should be updated with actual project URLs
