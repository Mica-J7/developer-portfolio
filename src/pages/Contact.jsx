import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiX } from '@icons-pack/react-simple-icons';
import { Check, Loader2, Mail } from 'lucide-react';

export function meta() {
  return [
    { title: 'Contact - Devis gratuit | Michaël Jongeau' },
    {
      name: 'description',
      content:
        'Contactez Michaël Jongeau pour discuter de votre projet web. Devis gratuit et personnalisé, réponse sous 24h.',
    },
    { tagName: 'link', rel: 'canonical', href: 'https://jongeau-m.fr/contact' },
    { property: 'og:title', content: 'Contact - Michaël Jongeau, Développeur Web Freelance' },
    {
      property: 'og:description',
      content: 'Discutons de votre projet web. Devis gratuit et sans engagement, réponse sous 24h.',
    },
    { property: 'og:url', content: 'https://jongeau-m.fr/contact' },
  ];
}

export default function Contact() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '', consent: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    consent: false,
    'bot-field': '',
  });

  const validate = (data) => {
    const newErrors = { name: '', email: '', message: '', consent: '' };
    if (!data.name.trim()) newErrors.name = 'Merci de renseigner votre nom.';
    if (!data.email.trim()) {
      newErrors.email = 'Merci de renseigner votre email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "Format d'email invalide.";
    }
    if (data.message.trim().length < 10) {
      newErrors.message = 'Votre message doit contenir au moins 10 caractères.';
    }
    if (!data.consent) {
      newErrors.consent = 'Merci d’accepter l’utilisation de vos données pour vous répondre.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: a real visitor never fills this field, only bots do. Drop silently.
    if (formData['bot-field']) return;

    const newErrors = validate(formData);
    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message || newErrors.consent) return;

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
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
          consent: false,
          'bot-field': '',
        }); // reset inputs
        setMessage(''); // reset char-counter
        setErrors({ name: '', email: '', message: '', consent: '' });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: nextValue });
    if (name === 'message') setMessage(value); // counter
    if (errors[name]) setErrors({ ...errors, [name]: '' }); // clear error as the user corrects it
  };

  return (
    <>
      {/* Hero */}
      <section className="scroll-mt-18 relative overflow-hidden bg-transparent">
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 pt-16 pb-16 md:pt-20 md:pb-20 text-center">
          <motion.h1
            className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-stone-900"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Contactez-moi pour discuter de votre projet
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-stone-600"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            Parlons de votre projet !
            <br />
            Devis gratuit et sans engagement
          </motion.p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section id="contact" className="scroll-mt-18 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Form */}
            <motion.div
              className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white p-6 shadow-md"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-stone-900">Envoyez-moi votre demande</h2>
              <p className="mt-2 text-sm text-stone-500">
                Remplissez ce formulaire et je reviendrai vers vous dans les 24 heures.
              </p>

              <form
                name="contact"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                noValidate
                className="mt-6"
              >
                {/* Hidden inputs for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="name" value={formData.name} />
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="phone" value={formData.phone} />
                <input type="hidden" name="company" value={formData.company} />
                <input type="hidden" name="projectType" value={formData.projectType} />
                <input type="hidden" name="budget" value={formData.budget} />
                <input type="hidden" name="message" value={formData.message} />
                <input type="hidden" name="consent" value={formData.consent} />

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
                      className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                          : 'border-stone-300 focus:border-sage-500 focus:ring-sage-500/30'
                      }`}
                      placeholder="Nom"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600">
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
                      className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                          : 'border-stone-300 focus:border-sage-500 focus:ring-sage-500/30'
                      }`}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900
                    placeholder-stone-400 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/30"
                      placeholder="Téléphone (optionnel)"
                    />
                  </div>
                  <div>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="off"
                      className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900
                    placeholder-stone-400 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/30"
                      placeholder="Entreprise (optionnel)"
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900
                    focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/30"
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
                      className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-stone-900
                    focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-500/30"
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
                    className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-stone-900
                  placeholder-stone-400 resize-y max-h-80 focus:outline-none focus:ring-2 ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                      : 'border-stone-300 focus:border-sage-500 focus:ring-sage-500/30'
                  }`}
                    placeholder="Message (500 caractères max)"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600 text-center">
                      {errors.message}
                    </p>
                  )}
                  <div className="flex justify-center mt-1 text-stone-500">{message.length} / 500</div>
                </div>

                <div className="mt-4">
                  <label className="flex items-start gap-2 text-sm text-stone-600">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 text-sage-600 focus:ring-sage-500/30"
                    />
                    <span>
                      J’accepte que mes informations soient utilisées{' '}
                      <strong className="font-bold underline">uniquement</strong> pour répondre à ma demande, et ne
                      soient ni cédées ni utilisées à des fins commerciales.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="mt-1 text-xs text-red-600">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center mt-5">
                  <motion.button
                    type="submit"
                    disabled={submitted || isSubmitting}
                    className={`inline-flex justify-center whitespace-nowrap text-sm md:text-base items-center gap-2 min-w-56 rounded-md bg-sage-600 px-5 py-2.5 text-white font-semibold shadow-soft
                  ${submitted || isSubmitting ? 'opacity-50' : 'hover:bg-sage-700 focus-visible:outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-sage-400 transition-colors duration-150'}`}
                    whileHover={submitted || isSubmitting ? {} : { scale: 1.08 }}
                    whileTap={submitted || isSubmitting ? {} : { scale: 0.92 }}
                  >
                    {isSubmitting && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin text-white" />}
                    <span className="md:pb-0.5">
                      {submitted ? 'Message envoyé !' : isSubmitting ? 'Envoi...' : 'Envoyer'}
                    </span>
                  </motion.button>
                  <p className="mt-3 text-xs text-stone-400">Vos données sont sécurisées</p>
                </div>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1 rounded-2xl border border-sage-300 bg-sage-50 p-6 h-fit shadow-md"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
            >
              <h2 className="text-xl font-bold text-stone-900">Coordonnées directes</h2>
              <p className="mt-2 text-sm text-stone-600">Si vous préférez me contacter directement :</p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:jongeau.m@gmail.com"
                  className="group flex w-max px-2 py-1 items-center gap-3 text-stone-600 hover:text-stone-900"
                >
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white border border-stone-200
                 group-hover:border-sage-400 group-hover:shadow-md"
                  >
                    <Mail className="h-5 w-5 text-stone-600" strokeWidth={1.8} />
                  </span>
                  <span className="pb-1">jongeau.m@gmail.com</span>
                </a>

                <a
                  href="https://github.com/Mica-J7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-max px-2 py-1 items-center gap-3 text-stone-600 hover:text-stone-900"
                >
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white border border-stone-200
                 group-hover:border-sage-400 group-hover:shadow-md"
                  >
                    <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.29-3.7-1.29-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.7.77 1.13 1.75 1.13 2.95 0 4.23-2.56 5.15-5 5.43.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
                    </svg>
                  </span>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/jongeau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-max px-2 py-1 items-center gap-3 text-stone-600 hover:text-stone-900"
                >
                  <span
                    className="inline-flex h-9 w-9 pl-0.5 pb-0.5 items-center justify-center rounded-md bg-white border border-stone-200
                 group-hover:border-sage-400 group-hover:shadow-md"
                  >
                    <svg className="h-5 w-5 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9.75h3.96V21H3zM14.71 9.5c-2.06 0-2.99 1.13-3.51 1.92h-.07V9.75H7.29V21h3.97v-5.7c0-1.5.28-2.96 2.15-2.96 1.85 0 1.88 1.7 1.88 3.05V21h3.97v-6.3c0-3.02-.65-5.2-4.55-5.2z" />
                    </svg>
                  </span>
                  Linkedin
                </a>

                <a
                  href="https://x.com/Mica_J7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-max px-2 py-1 items-center gap-3 text-stone-600 hover:text-stone-900"
                >
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white border border-stone-200
                 group-hover:border-sage-400 group-hover:shadow-md"
                  >
                    <SiX size={32} className="h-4 w-4 text-stone-700" />
                  </span>
                  Twitter
                </a>
              </div>

              <div className="mt-6 border-t border-sage-200 pt-6">
                <h3 className="text-sm font-bold text-stone-900">Mes engagements</h3>
                <ul className="mt-3 space-y-2 text-sm text-stone-600">
                  {[
                    'Réponse sous 24h',
                    'Devis gratuit et sans engagement',
                    'Accompagnement personnalisé',
                    'Confidentialité de vos données',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
