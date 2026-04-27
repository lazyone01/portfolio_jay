import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const projectsData = [
  {
    title: "DoctorWithU",
    description: "Healthcare platform connecting patients with doctors online. Features appointment scheduling, secure messaging, and teleconsultation capabilities.",
    tags: ["React", "Node.js", "Express", "MongoDB", "WebRTC"],
    github: "https://github.com",
    live: "https://example.com",
    image: "Doctor",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "StudyNotion",
    description: "Full-stack ed-tech platform for course management and learning. Includes features for instructors to create courses and students to consume content.",
    tags: ["MERN Stack", "TailwindCSS", "Redux", "Razorpay"],
    github: "https://github.com",
    live: "https://example.com",
    image: "Study",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Wanderlust Platform",
    description: "Travel exploration platform allowing users to discover destinations, plan trips, and share experiences with a community of travelers.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "Travel",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Sorting Visualizer",
    description: "Interactive tool for visualizing sorting algorithms in real-time. Helps students understand complex algorithms through animation.",
    tags: ["React", "CSS Modules", "Algorithms"],
    github: "https://github.com",
    live: "https://example.com",
    image: "Algorithm",
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Netflix Clone",
    description: "Streaming platform UI inspired by Netflix. Integrates TMDB API to fetch latest movies and TV shows with a stunning responsive layout.",
    tags: ["React", "Firebase", "Axios", "TMDB API"],
    github: "https://github.com",
    live: "https://example.com",
    image: "Movie",
    color: "from-red-600 to-rose-500"
  }
];

interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
  color: string;
}

const ProjectCard = ({ project, index }: { project: ProjectType, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative rounded-3xl overflow-hidden glass-card"
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition duration-500 blur-xl rounded-[26px]`}></div>
      
      <div className="relative z-10 h-full flex flex-col bg-dark-200/90 rounded-3xl overflow-hidden">
        {/* Project Image Placeholder */}
        <div className="h-56 md:h-64 relative overflow-hidden bg-dark-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <div className="absolute inset-0 bg-dark-300 opacity-60"></div>
          {/* Mock image pattern */}
          <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.color}`} style={{ mixBlendMode: 'overlay' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]"></div>
          
          <div className="z-10 flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <Activity className={`w-12 h-12 mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.5)" }} />
            <span className="text-2xl font-bold font-outfit text-white tracking-widest uppercase opacity-80">{project.image}</span>
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Project Content */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">{project.title}</h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.tags.map((tag: string, tagIdx: number) => (
              <span 
                key={tagIdx} 
                className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 text-white/90 border border-white/10`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass hover:bg-white/10 text-sm font-medium text-white transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-sm font-medium text-white hover:brightness-110 transition-all duration-300`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-500/30 text-brand-500 text-sm font-medium mb-4">
            <Activity className="w-4 h-4" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            A selection of my recent work. These projects demonstrate my expertise in full-stack development, 
            problem-solving, and building scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="https://github.com/jayjaiswal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-medium transition-colors border border-white/20">
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
