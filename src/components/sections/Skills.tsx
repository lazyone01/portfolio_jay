import { motion } from 'framer-motion';
import { Blocks, Database, LayoutTemplate, Wrench } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const skillsData = [
  {
    category: "Frontend",
    icon: <LayoutTemplate className="w-6 h-6 text-accent-blue" />,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React / Vite", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "HTML / CSS", level: 95 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6 text-accent-purple" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 }
    ]
  },
  {
    category: "Programming",
    icon: <Blocks className="w-6 h-6 text-accent-pink" />,
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 60 },
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 80 }
    ]
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-brand-500" />,
    color: "from-brand-500 to-teal-400",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 70 }
    ]
  }
];

const SkillBar = ({ name, level, color, delay }: { name: string, level: number, color: string, delay: number }) => {
  return (
    <div className="mb-4 last:mb-0 group cursor-pointer">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-mono text-gray-400">{level}%</span>
      </div>
      <div className="h-2 w-full bg-dark-100 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          {/* Shine effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-dark-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Technologies I've worked with recently to build amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all duration-300 z-10"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${category.color} bg-opacity-10 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <div className="bg-dark-200 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{category.category}</h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <SkillBar 
                    key={sIdx} 
                    name={skill.name} 
                    level={skill.level} 
                    color={category.color}
                    delay={(idx * 0.1) + (sIdx * 0.1) + 0.3} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
