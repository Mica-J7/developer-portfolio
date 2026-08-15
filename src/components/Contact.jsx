import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiX } from '@icons-pack/react-simple-icons';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
    'bot-field': '',
  });

  const validate = (data) => {
    const newErrors = { name: '', email: '', message: '' };
    if (!data.name.trim()) newErrors.name = 'Merci de renseigner votre nom.';
    if (!data.email.trim()) {
      newErrors.email = 'Merci de renseigner votre email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "Format d'email invalide.";
    }
    if (data.message.trim().length < 10) {
      newErrors.message = 'Votre message doit contenir au moins 10 caractères.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: a real visitor never fills this field, only bots do. Drop silently.
    if (formData['bot-field']) return;

    const newErrors = validate(formData);
    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message) return;

    // Add form-name to send to Netlify
    const dataToSend = {
      'form-name': 'contact', // have to match with form name
      ...formData,
    };

    setIsSubmitting(true);

    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(dataToSend).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '', 'bot-field': '' }); // reset inputs
        setMessage(''); // reset char-counter
        setErrors({ name: '', email: '', message: '' });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'message') setMessage(value); // counter
    if (errors[name]) setErrors({ ...errors, [name]: '' }); // clear error as the user corrects it
  };

  return (
    <section id="contact" className="scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <motion.h2
          id="contact-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Discutons de votre projet&nbsp;:
        </motion.h2>
        <motion.p
          className="my-8 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
        >
          Décrivez-moi votre besoin via le formulaire ci-dessous ou contactez-moi directement,
          <br />
          je réponds sous 24h.
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Direct links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-1 md:space-y-3 my-auto"
          >
            <div className="flex items-start md:flex-col md:space-y-3 gap-4 md:gap-0">
              <a
                href="https://github.com/Mica-J7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-max px-2 py-1 items-center gap-3 text-slate-300 hover:text-white"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800
                group-hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
                >
                  <svg className="h-5 w-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.29-3.7-1.29-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.7.77 1.13 1.75 1.13 2.95 0 4.23-2.56 5.15-5 5.43.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
                  </svg>
                </span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jongeau/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-max px-2 py-1 items-center gap-3 text-slate-300 hover:text-white"
              >
                <span
                  className="inline-flex h-9 w-9 pl-0.5 pb-0.5 items-center justify-center rounded-md bg-slate-900 border border-slate-800
                group-hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
                >
                  <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9.75h3.96V21H3zM14.71 9.5c-2.06 0-2.99 1.13-3.51 1.92h-.07V9.75H7.29V21h3.97v-5.7c0-1.5.28-2.96 2.15-2.96 1.85 0 1.88 1.7 1.88 3.05V21h3.97v-6.3c0-3.02-.65-5.2-4.55-5.2z" />
                  </svg>
                </span>
                Linkedin
              </a>
            </div>

            <div className="flex items-start md:flex-col md:space-y-3 gap-4 md:gap-0">
              <a
                href="https://x.com/Mica_J7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-max px-2 py-1 items-center gap-3 text-slate-300 hover:text-white"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800 
              group-hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
                >
                  <SiX size={32} className="h-4 w-4 text-teal-300" />
                </span>
                Twitter
              </a>

              <a
                href="mailto:jongeau.m@gmail.com"
                className="group flex w-max px-2 py-1 items-center gap-3 text-slate-300 hover:text-white"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800 
               group-hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%)]"
                >
                  <svg
                    className="h-5 w-5 text-teal-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span className="pb-1">jongeau.m@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 rounded-2xl border max-w-150 border-slate-800 bg-slate-900/60 p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              noValidate
            >
              {/* Hidden inputs for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="name" value={formData.name} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="projectType" value={formData.projectType} />
              <input type="hidden" name="budget" value={formData.budget} />
              <input type="hidden" name="message" value={formData.message} />

              {/* Honeypot: visually hidden from real visitors, bots tend to fill every field they find */}
              <div className="sr-only">
                <label htmlFor="bot-field">Ne pas remplir si vous êtes humain</label>
                <input
                  id="bot-field"
                  name="bot-field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData['bot-field']}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`mt-1 w-full rounded-md border bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/40'
                        : 'border-slate-700 focus:border-teal-500 focus:ring-teal-500/40'
                    }`}
                    placeholder="Nom"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`mt-1 w-full rounded-md border bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/40'
                        : 'border-slate-700 focus:border-teal-500 focus:ring-teal-500/40'
                    }`}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100
                  focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  >
                    <option value="">Type de projet (optionnel)</option>
                    <option value="Site vitrine">Site vitrine</option>
                    <option value="Site e-commerce">Site e-commerce</option>
                    <option value="Application web sur mesure">Application web sur mesure</option>
                    <option value="Maintenance / évolution">Maintenance / évolution</option>
                    <option value="Audit SEO">Audit SEO</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100
                  focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  >
                    <option value="">Budget indicatif (optionnel)</option>
                    <option value="Moins de 1000€">Moins de 1000€</option>
                    <option value="1000€ - 3000€">1000€ - 3000€</option>
                    <option value="3000€ - 6000€">3000€ - 6000€</option>
                    <option value="Plus de 6000€">Plus de 6000€</option>
                    <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`mt-1 w-full rounded-md border bg-slate-950 px-3 py-2 text-slate-100
                placeholder-slate-500 resize-y max-h-80 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/40'
                    : 'border-slate-700 focus:border-teal-500 focus:ring-teal-500/40'
                }`}
                  placeholder="Message (500 caractères max)"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400 text-center">
                    {errors.message}
                  </p>
                )}
                <div className="flex justify-center mt-1 text-slate-300">{message.length} / 500</div>
              </div>
              <div className="flex justify-center mt-3">
                <motion.button
                  type="submit"
                  disabled={submitted || isSubmitting}
                  className={`inline-flex justify-center whitespace-nowrap text-sm md:text-base items-center gap-2 min-w-56 rounded-md bg-linear-to-r from-teal-400 to-cyan-400 px-5 py-2.5 text-slate-900 font-semibold  shadow-glow
                ${submitted || isSubmitting ? 'opacity-50' : 'hover:opacity-95 focus-visible:outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-300 hover:shadow-[0_0_0_2px_rgb(45_212_191/80%),0_0_30px_-10px_rgb(34_211_238/100%) transition-transform duration-50'}`}
                  whileHover={submitted || isSubmitting ? {} : { scale: 1.08 }}
                  whileTap={submitted || isSubmitting ? {} : { scale: 0.92 }}
                >
                  {isSubmitting && (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin text-slate-900"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  )}
                  <span className="md:pb-0.5">
                    {submitted ? 'Message envoyé !' : isSubmitting ? 'Envoi...' : 'Envoyer'}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
