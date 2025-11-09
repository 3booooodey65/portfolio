const Skills = ({ language, t }) => {
  const isArabic = language === 'ar';

  return (
    <section id="skills" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 flex flex-col items-center text-center ${
            isArabic ? 'md:items-end md:text-right' : 'md:items-center md:text-center'
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {t.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((skill) => (
            <div
              key={`${skill.name}-${skill.level}`}
              className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
              <p className="mt-2 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-indigo-600">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
