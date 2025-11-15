import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Task & Maintenance Tracker',
      description:
        'A full-stack task management system with maintenance logging. Features CRUD operations, search & filters, priority management, and real-time status tracking. Built with localStorage for persistent data storage.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tags: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage', 'Dark Mode'],
      github: 'https://github.com/Mohabmagdy009/task-maintenance-tracker',
      demo: 'https://mohabmagdy009.github.io/task-maintenance-tracker/',
    },
    {
      title: 'Portfolio Project 2',
      description:
        'A scalable enterprise solution with advanced data analytics and visualization capabilities. Built to handle high-volume data processing.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Django', 'Azure', 'D3.js', 'REST APIs'],
      github: 'https://github.com/Mohabmagdy009',
      demo: '#',
    },
    {
      title: 'Portfolio Project 3',
      description:
        'A comprehensive management system with real-time monitoring and automated workflows. Designed for efficiency and scalability.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Python', 'Flask', 'MongoDB', 'Kafka', 'Microservices'],
      github: 'https://github.com/Mohabmagdy009',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Mohabmagdy009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg font-medium hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all duration-300"
          >
            <FiGithub className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

