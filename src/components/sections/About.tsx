import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Globe } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const cards = [
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
    delay: 0.1
  },
  {
    icon: <Server className="w-6 h-6 text-accent-purple" />,
    title: "Backend Systems",
    description: "Designing scalable APIs and database architectures for complex applications.",
    delay: 0.2
  },
  {
    icon: <Code className="w-6 h-6 text-accent-pink" />,
    title: "Problem Solving",
    description: "Tackling algorithmic challenges and optimizing code for better performance.",
    delay: 0.3
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-500" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces with a focus on experience.",
    delay: 0.4
  }
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden glass aspect-square md:aspect-[4/5] z-10 p-2">
              <div className="w-full h-full rounded-xl overflow-hidden bg-dark-200 relative group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center">
                {/* Fallback pattern while no image exists */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="text-center z-10 px-6">
                  <div className="w-24 h-24 rounded-full glass border border-white/20 mx-auto flex items-center justify-center mb-4">
                    <span className="text-4xl">🧑‍💻</span>
                  </div>
                  <p className="text-gray-400 font-medium">Profile Image Placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">Replace with your photo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-medium">Jay Jaiswal</span>, a passionate Full Stack Developer 
                and B.Tech student at NIT Jalandhar. I enjoy creating things that live on the internet, 
                whether that be websites, applications, or anything in between.
              </p>
              <p>
                My interest in web development started back when I decided to try editing custom Tumblr 
                themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS! Fast 
                forward to today, and I'm focused on building accessible, inclusive products and digital 
                experiences for a variety of clients.
              </p>
              <p>
                I thrive in environments that challenge me to learn and adapt quickly. When I'm not at 
                the computer, I'm usually exploring new technologies or participating in competitive programming.
              </p>
            </div>

            {/* Interest Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
