import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Cognito?: (apiKey: string) => {
      mount: (
        formId: string,
        target: HTMLElement,
        owner?: 'cognito' | 'user',
        embedType?: 'seamless' | 'iframe',
      ) => {
        ready?: Promise<unknown>;
        on?: (eventName: string, handler: () => void) => void;
      };
      _seamless?: boolean;
    };
    __cognitoFormsLoading?: boolean;
  }
}

const COGNITO_FORM_KEY = 'hIU4VB7QkEWbeG8RmdDDrA';
const COGNITO_FORM_ID = '1';
const COGNITO_SCRIPT_SELECTOR =
  'script[data-cognito-seamless="true"]';
const FIELD_CLASSES = [
  'w-full',
  'border-2',
  'border-black',
  'rounded-xl',
  'px-4',
  'py-3',
  'text-sm',
  'font-medium',
  'placeholder-gray-500',
  'bg-white',
  'focus:outline-none',
];
const TEXTAREA_CLASSES = [...FIELD_CLASSES, 'resize-none'];
const BUTTON_CLASSES = ['btn-secondary', 'w-full'];

const addClasses = (element: HTMLElement, classes: string[]) => {
  element.classList.add(...classes);
};

const loadCognitoForms = () => {
  if (window.Cognito) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      COGNITO_SCRIPT_SELECTOR,
    );

    const waitForApi = () => {
      let attempts = 0;
      const intervalId = window.setInterval(() => {
        if (window.Cognito) {
          window.clearInterval(intervalId);
          resolve();
          return;
        }

        attempts += 1;
        if (attempts >= 40) {
          window.clearInterval(intervalId);
          reject(new Error('Cognito Forms failed to initialize.'));
        }
      }, 150);
    };

    if (existingScript) {
      waitForApi();
      return;
    }

    if (!window.__cognitoFormsLoading) {
      window.__cognitoFormsLoading = true;
      const script = document.createElement('script');
      script.src = 'https://www.cognitoforms.com/f/seamless.js';
      script.async = true;
      script.dataset.cognitoSeamless = 'true';
      script.onload = () => {
        window.__cognitoFormsLoading = false;
        waitForApi();
      };
      script.onerror = () => {
        window.__cognitoFormsLoading = false;
        reject(new Error('Failed to load Cognito Forms script.'));
      };
      document.head.appendChild(script);
      return;
    }

    waitForApi();
  });
};

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const formContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = formContainerRef.current;

    if (!container) {
      return;
    }

    let isDisposed = false;

    const applyCognitoStyles = () => {
      const currentContainer = formContainerRef.current;

      if (!currentContainer) {
        return;
      }

      const form = currentContainer.querySelector('form');

      if (!form) {
        return;
      }

      form.className = 'flex flex-col gap-4';

      currentContainer
        .querySelectorAll<HTMLElement>('li, .cog-field, .elMargin')
        .forEach((field) => {
          field.style.margin = '0';
          field.style.padding = '0';
          field.style.listStyle = 'none';
        });

      form.querySelectorAll<HTMLElement>('label').forEach((label) => {
        const wrapper = label.closest('li, .cog-field, .elMargin');
        const control = wrapper?.querySelector<HTMLElement>(
          'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, select',
        );

        if (control) {
          label.style.display = 'none';
        }
      });

      form
        .querySelectorAll<HTMLInputElement>(
          'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="file"])',
        )
        .forEach((input, index) => {
          addClasses(input, FIELD_CLASSES);

          if (
            input.type === 'email' ||
            input.name.includes('email')
          ) {
            input.placeholder = 'your@email.com';
            return;
          }

          if (index === 0) {
            input.placeholder = 'Your name';
          }
        });

      const textarea =
        form.querySelector<HTMLTextAreaElement>('textarea');
      if (textarea) {
        addClasses(textarea, TEXTAREA_CLASSES);
        textarea.placeholder = 'Tell me about the project...';
        textarea.rows = 5;
      }

      const submitButton = form.querySelector<
        HTMLInputElement | HTMLButtonElement
      >('button[type="submit"], input[type="submit"]');

      if (submitButton) {
        addClasses(submitButton, BUTTON_CLASSES);

        if (submitButton instanceof HTMLInputElement) {
          submitButton.value = 'Send Message →';
        } else {
          submitButton.textContent = 'Send Message →';
        }
      }
    };

    const observer = new MutationObserver(() => {
      applyCognitoStyles();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    container.innerHTML = '';

    const mountForm = async () => {
      try {
        await loadCognitoForms();
      } catch {
        return;
      }

      if (
        isDisposed ||
        !window.Cognito ||
        !formContainerRef.current
      ) {
        return;
      }

      const form = window
        .Cognito(COGNITO_FORM_KEY)
        .mount(
          COGNITO_FORM_ID,
          formContainerRef.current,
          'cognito',
          'seamless',
        );

      form?.ready?.then(() => {
        applyCognitoStyles();
      });

      form?.on?.('ready', () => {
        applyCognitoStyles();
      });
    };

    mountForm();

    return () => {
      isDisposed = true;
      observer.disconnect();
      container.innerHTML = '';
    };
  }, []);

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
            project, a full-time role, or just a chat - drop me a
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
                    className="btn-copy shrink-0"
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
          className="card p-6 contact-form-shell"
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
          <div ref={formContainerRef} className="contact-cognito" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
