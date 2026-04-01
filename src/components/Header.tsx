import { useState } from 'react';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black"
      style={{ backgroundColor: '#EDE8D9' }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
        {/* Logo + Badge */}
        <div className="flex items-center gap-3">
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            dev.holden
          </span>
          <span className="tag hidden sm:inline-flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: '#2ECC71' }}
            />
            AVAILABLE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold hover:opacity-60 transition-opacity"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary hidden sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden border-t-2 border-black px-5 py-4 flex flex-col gap-3"
          style={{ backgroundColor: '#EDE8D9' }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-semibold text-sm py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-primary self-start mt-2">
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
