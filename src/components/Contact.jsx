import { useState } from 'react';

const initialFormState = { name: '', email: '', message: '' };

const Contact = ({ language, t }) => {
  const [formData, setFormData] = useState(initialFormState);
  const isArabic = language === 'ar';
  const visitorFallback = t.mailVisitorFallback || (isArabic ? 'زائر' : 'Visitor');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();
    const subject = encodeURIComponent(
      `${t.mailSubjectPrefix} ${sanitizedName || visitorFallback}`,
    );
    const emailSignature = sanitizedEmail
      ? `${t.mailEmailLabel}: ${sanitizedEmail}\n\n`
      : '';
    const messageBody = sanitizedMessage || t.mailNoMessage;
    const body = encodeURIComponent(
      `${t.nameLabel}: ${sanitizedName || visitorFallback}\n${emailSignature}${messageBody}`,
    );
    const mailtoLink = `mailto:abdalrahmanmater65@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center ${isArabic ? 'md:text-right' : 'md:text-center'}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t.description}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-indigo-100 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label
              className={`flex flex-col text-sm font-medium text-slate-700 ${
                isArabic ? 'text-right' : 'text-left'
              }`}
            >
              {t.nameLabel}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                className="mt-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition duration-150 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </label>
            <label
              className={`flex flex-col text-sm font-medium text-slate-700 ${
                isArabic ? 'text-right' : 'text-left'
              }`}
            >
              {t.emailLabel}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
                className="mt-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition duration-150 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </label>
          </div>
          <label
            className={`mt-6 flex flex-col text-sm font-medium text-slate-700 ${
              isArabic ? 'text-right' : 'text-left'
            }`}
          >
            {t.messageLabel}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder={t.messagePlaceholder}
              required
              className="mt-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition duration-150 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </label>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rtl:flex-row-reverse">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {t.submitButton}
            </button>
            <a
              href="mailto:abdalrahmanmater65@gmail.com"
              className="text-sm font-medium text-indigo-600 transition-colors duration-150 hover:text-indigo-500"
            >
              {t.emailAddressLabel}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
