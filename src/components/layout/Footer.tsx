import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-dark-300/80 backdrop-blur-xl py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/lazyone01" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/jay-jaiswal-b30b1a25b/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:jayjaiswal1310@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} Jay Jaiswal. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1 group">
            Built with <Heart className="w-4 h-4 text-accent-pink group-hover:scale-110 transition-transform" /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
