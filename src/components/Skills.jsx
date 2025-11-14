import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiKubernetes,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-500" />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, level: 95 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 92 },
        { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-gray-300" />, level: 90 },
        { name: 'Python', icon: <FaPython className="text-blue-500" />, level: 85 },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" />, level: 80 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 88 },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" />, level: 85 },
        { name: 'Redis', icon: <SiRedis className="text-red-600" />, level: 80 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker className="text-blue-500" />, level: 85 },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" />, level: 75 },
        { name: 'AWS', icon: <FaAws className="text-orange-500" />, level: 82 },
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-2 h-8 bg-primary-light dark:bg-primary-dark rounded mr-3"></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-light to-primary-dark h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Also Experienced With
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'REST APIs',
              'Microservices',
              'CI/CD',
              'Unit Testing',
              'Agile/Scrum',
              'Responsive Design',
              'Performance Optimization',
              'Security Best Practices',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

