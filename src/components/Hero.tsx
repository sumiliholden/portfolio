const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-5 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center">
        {/* Left: heading + CTA */}
        <div className="flex-1 min-w-0">
          <h1
            className="leading-none font-extrabold uppercase"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.92,
            }}
          >
            <span className="block">FULL</span>
            <span className="block">STACK</span>
            <span className="block">
              DEV
              <span className="relative">
                ELOPER
                <span
                  className="block h-3 rounded-sm mt-1"
                  style={{ backgroundColor: '#2ECC71' }}
                />
              </span>
            </span>
          </h1>
          <p className="mt-8 text-base md:text-lg leading-relaxed max-w-lg text-gray-700">
            Building scalable web apps for 6+ years. Specialized in
            React, Vue.js, Next.js & the TALL stack — delivering
            performance, great UX, and clean code.
          </p>
          <div className="mt-6 flex gap-8 items-center">
            <div>
              <p
                className="text-3xl font-extrabold leading-tight"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                6+
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Years exp.
              </p>
            </div>
            <div className="w-px h-10 bg-black opacity-20" />
            <div>
              <p
                className="text-3xl font-extrabold leading-tight"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                20+
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Projects
              </p>
            </div>
            <div className="w-px h-10 bg-black opacity-20" />
            <div>
              <p
                className="text-3xl font-extrabold leading-tight"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                6
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Companies
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#experience" className="btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        {/* Right: floating profile card */}
        <div className="w-full md:w-72 flex-shrink-0 md:self-start md:mt-16">
          <div
            className="bg-white border-2 border-black rounded-2xl p-5"
            style={{
              transform: 'rotate(-3deg)',
              boxShadow: '6px 8px 0 rgba(0,0,0,0.18)',
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="score score-green">9.0</div>
              <div>
                <p className="font-bold text-sm leading-tight mono">
                  Holden Jay Sumili
                </p>
                <p className="text-xs text-gray-500 mono">
                  sumiliholden@gmail.com
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mono text-gray-700">
              Full-stack dev with 6+ yrs exp. Builds SaaS, e-learning
              platforms, data apps & design systems using React, Vue &
              Laravel.
            </p>
            <div className="mt-3 pt-3 border-t border-gray-200 flex flex-wrap gap-1.5">
              {['REACT', 'VUE', 'LARAVEL', 'NEXT.JS', 'TALL'].map(
                (t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
