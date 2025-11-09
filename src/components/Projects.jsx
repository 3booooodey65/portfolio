const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with React and Tailwind CSS to highlight skills and projects.',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A data-rich dashboard for monitoring product performance, sales metrics, and customer engagement.',
    tech: ['React', 'Chart.js', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Design System Starter',
    description: 'Reusable UI components and tokens to ensure consistency across web applications and prototypes.',
    tech: ['Storybook', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Team Collaboration App',
    description: 'A lightweight task management tool with real-time updates and collaborative features for remote teams.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Travel Inspiration Blog',
    description: 'A curated collection of travel stories with an immersive layout focused on readability and visuals.',
    tech: ['React', 'Contentful', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fitness Tracking Dashboard',
    description: 'Visualizes workouts, goals, and progress with responsive charts and personalized insights.',
    tech: ['React', 'Recharts', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => (
  <section id="projects" className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Projects
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Selected Work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:mx-auto">
          A glimpse of the ideas I have transformed into experiences. Each project blends problem-solving with clean
          design.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={project.liveUrl}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-indigo-500 px-4 py-2 text-sm font-semibold text-indigo-600 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-500"
              >
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
