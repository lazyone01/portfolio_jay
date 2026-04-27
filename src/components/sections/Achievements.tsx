import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Star, Target, Code2 } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import SectionWrapper from '../layout/SectionWrapper';

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const statsData = [
  {
    icon: <SiLeetcode className="w-8 h-8 text-[#FFA116]" />,
    platform: "LeetCode",
    metric: "Problems Solved",
    value: 500,
    suffix: "+",
    ranking: "Top 5%",
    color: "from-[#FFA116]/20 to-[#FFA116]/5"
  },
  {
    icon: <SiGeeksforgeeks className="w-8 h-8 text-[#2F8D46]" />,
    platform: "GeeksforGeeks",
    metric: "Coding Score",
    value: 1200,
    suffix: "",
    ranking: "Institute Rank 10",
    color: "from-[#2F8D46]/20 to-[#2F8D46]/5"
  },
  {
    icon: <Code2 className="w-8 h-8 text-accent-blue" />,
    platform: "GitHub",
    metric: "Contributions",
    value: 800,
    suffix: "+ (Current Year)",
    ranking: "Active Developer",
    color: "from-accent-blue/20 to-accent-blue/5"
  },
  {
    icon: <Trophy className="w-8 h-8 text-accent-pink" />,
    platform: "Hackathons",
    metric: "Wins & Podiums",
    value: 5,
    suffix: "",
    ranking: "Multiple domains",
    color: "from-accent-pink/20 to-accent-pink/5"
  }
];

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" className="bg-dark-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent-purple/30 text-accent-purple text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-accent-purple" />
            <span>Milestones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            Honors & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Consistent dedication to competitive programming and continuous learning. 
            Here are some of my proudest numbers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-card p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border-t-4 ${
                idx === 0 ? 'border-t-[#FFA116]' : 
                idx === 1 ? 'border-t-[#2F8D46]' : 
                idx === 2 ? 'border-t-accent-blue' : 
                'border-t-accent-pink'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center p-3 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-1 group-hover:bg-white/10 transition-colors">
                    <Target className="w-3 h-3" />
                    {stat.ranking}
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-400 mb-2">{stat.platform}</h3>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold font-outfit text-white tracking-tight">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="text-xl text-brand-300 font-medium">{stat.suffix}</span>
                </div>
                
                <p className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-wider">{stat.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mock Leetcode Activity Chart Area */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.6 }}
           className="mt-12 glass rounded-3xl p-8 relative overflow-hidden group"
        >
          {/* Subtle animated background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-lg">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <SiLeetcode className="text-[#FFA116]" /> 
                Problem Solving Consistency
              </h3>
              <p className="text-gray-400">
                Regularly participating in contests and solving algorithmic challenges to improve problem-solving skills and write highly optimized code.
              </p>
              
              <div className="pt-4 flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00b8a3]">150+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Easy</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ffc01e]">300+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Medium</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff375f]">50+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Hard</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              {/* Decorative progress ring */}
              <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-700">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-dark-100" />
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="552" strokeDashoffset="150" className="text-[#FFA116] drop-shadow-[0_0_10px_rgba(255,161,22,0.5)]" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-white">Top</span>
                  <span className="text-[#FFA116] font-medium text-lg">5%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
