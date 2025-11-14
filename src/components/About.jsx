import { FiCode, FiDatabase, FiCloud } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Led teams of 6+ developers, increasing productivity by 30% through mentorship and Agile practices"
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Enterprise Solutions",
      description: "Delivered systems handling 10,000+ items with real-time data processing across 32+ sites"
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: "Cloud & Microservices",
      description: "Expert in Azure Cloud, Docker, Kubernetes, and scalable microservices architectures"
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
              I'm a Senior Software Engineer currently at Procore, with proven expertise in 
              leading development teams and delivering enterprise-level solutions. My experience 
              spans Python/Django, React.js, cloud computing, and microservices architectures.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a Technical Lead at Nexus Analytica, I successfully led a team of 6 developers 
              to achieve 100% digital transformation for Benban Solar Park across 32 sites, 
              improving system efficiency by 40%. At Orange Business, I developed solutions that 
              recovered €10M in revenue through advanced data analysis tools.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I hold a BSc in Computer Science with AI from the University of Nottingham, Malaysia. 
              My passion lies in building scalable systems, mentoring teams, and implementing 
              Agile methodologies to deliver high-quality software solutions.
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

