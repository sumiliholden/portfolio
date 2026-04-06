const Footer = () => {
  return (
    <footer className="border-t-2 border-black mt-10">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div>
          <p
            className="font-bold text-xl"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            dev.holden
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Full Stack Developer · Philippines
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          {[
            {
              label: 'GitHub',
              href: 'https://github.com/sumiliholden',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/holden-jay-sumili/',
            },
            { label: 'Email', href: 'mailto:sumiliholden@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={
                href.startsWith('mailto') ? undefined : '_blank'
              }
              rel="noopener noreferrer"
              className="font-semibold hover:opacity-60 transition-opacity"
            >
              {label} ↗
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Holden Jay Sumili
        </p>
      </div>
    </footer>
  );
};

export default Footer;
