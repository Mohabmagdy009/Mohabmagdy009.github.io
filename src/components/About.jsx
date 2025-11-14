import { FiCode, FiDatabase, FiCloud } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Expert in building end-to-end web applications with modern frameworks"
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Database Design",
      description: "Proficient in designing scalable database architectures"
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description: "Experience with cloud platforms and CI/CD pipelines"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a Senior Full-Stack Developer with over 8 years of experience building
              robust and scalable web applications. I specialize in modern JavaScript
              frameworks and have a strong foundation in both frontend and backend development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My passion lies in creating seamless user experiences while maintaining
              clean, efficient, and maintainable code. I believe in continuous learning
              and staying up-to-date with the latest industry trends and technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or mentoring junior developers.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

