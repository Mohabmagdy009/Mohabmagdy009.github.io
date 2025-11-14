import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Mohab Abbas. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>Built with</span>
            <FiHeart className="text-red-500 w-4 h-4 animate-pulse" />
            <span>using React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

