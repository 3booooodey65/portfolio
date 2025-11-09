const Projects = ({ language, t }) => {
  const isArabic = language === 'ar';

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center ${isArabic ? 'md:text-right' : 'md:text-center'}`}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:mx-auto">
            {t.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
            >
              <div className="text-left rtl:text-right">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 rtl:flex-row-reverse">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 rtl:flex-row-reverse">
                <a
                  href={project.liveUrl || '#'}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-indigo-500 px-4 py-2 text-sm font-semibold text-indigo-600 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-50"
                >
                  {t.liveDemo}
                </a>
                <a
                  href={project.githubUrl || '#'}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-500"
                >
                  {t.githubRepo}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
