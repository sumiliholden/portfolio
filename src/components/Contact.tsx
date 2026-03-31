import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 px-5 max-w-6xl mx-auto border-t-2 border-black border-opacity-10"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <h2 className="section-heading mb-4">
            LET'S WORK
            <br />
            TOGETHER.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-sm">
            I'm currently open to new opportunities. Whether it's a
            project, a full-time role, or just a chat — drop me a
            message.
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                label: 'EMAIL',
                value: 'sumiliholden@gmail.com',
                key: 'email',
              },
              {
                label: 'PHONE',
                value: '+63 906 188 0040',
                key: 'phone',
              },
            ].map(({ label, value, key }) => (
              <div
                key={label}
                className="card p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-xs font-bold text-gray-400 tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold mono">
                    {value}
                  </p>
                </div>
                {key && (
                  <button
                    onClick={() => copy(value, key)}
                    className="btn-copy flex-shrink-0"
                    style={{
                      backgroundColor:
                        copied === key ? '#6ea77b' : '#7FBC8C',
                    }}
                  >
                    {copied === key ? '✓ Copied' : 'Copy'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div
          className="card p-6"
          style={{ backgroundColor: '#2ECC71' }}
        >
          <h3
            className="font-extrabold text-xl mb-5"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Quick Message
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-2 border-black rounded-xl px-4 py-3 text-sm font-medium placeholder-gray-500 bg-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border-2 border-black rounded-xl px-4 py-3 text-sm font-medium placeholder-gray-500 bg-white focus:outline-none"
            />
            <textarea
              placeholder="Tell me about the project..."
              rows={5}
              className="w-full border-2 border-black rounded-xl px-4 py-3 text-sm font-medium placeholder-gray-500 bg-white resize-none focus:outline-none"
            />
            <button type="submit" className="btn-secondary w-full">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
