import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-primary-light dark:text-primary-dark text-lg md:text-xl font-medium">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in-up">
            Mohab Abbas
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-up animation-delay-200">
            Senior Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Building scalable web applications with modern technologies.
            Passionate about clean code, great UX, and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg font-medium hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animation-delay-800">
            <a
              href="https://github.com/Mohabmagdy009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohab-magdy-8085211b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mohab.magdy@hotmail.com"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            aria-label="Scroll to About"
          >
            <FiArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

