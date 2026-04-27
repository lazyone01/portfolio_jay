import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { Github, Linkedin, Mail, Code2, Download, ChevronRight } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import * as THREE from 'three';

// 3D Elements
const DeveloperObjects = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 1, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            wireframe={true}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[2, -1, 1]} rotation={[-0.5, -0.5, 0]}>
          <torusGeometry args={[0.8, 0.2, 16, 32]} />
          <meshPhysicalMaterial
            color="#8b5cf6"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[0, 2, -1]} rotation={[0.2, 0.8, 0]}>
          <octahedronGeometry args={[0.7]} />
          <meshPhysicalMaterial
            color="#ec4899"
            metalness={0.5}
            roughness={0.5}
            clearcoat={1}
            wireframe={true}
          />
        </mesh>
      </Float>

      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </group>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <DeveloperObjects />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent-blue/30 text-accent-blue text-sm font-medium"
            >
              <Code2 className="w-4 h-4" />
              <span>Welcome to my universe</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Jay Jaiswal</span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-gray-300 h-10">
              <TypeAnimation
                sequence={[
                  'B.Tech Student', 1000,
                  'Full Stack Developer', 1000,
                  'UI/UX Enthusiast', 1000,
                  'Problem Solver', 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </div>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              B.Tech Student at NIT Jalandhar. Building scalable web applications and solving real-world problems through elegant code and stunning design.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-accent-blue rounded-xl hover:bg-brand-500 hover:shadow-lg hover:shadow-accent-blue/30 group">
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 glass rounded-xl hover:bg-white/10 group">
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/15dtss4_0Y_2GDPvhV9HgLp3Lqjkhgnlu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 border border-white/20 rounded-xl hover:bg-white/5 group">
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Resume
              </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/10">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/lazyone01" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/jay-jaiswal-2b44592b4/" },
              { icon: <SiLeetcode className="w-5 h-5" />, href: "https://leetcode.com/motupatlu01/" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:jayjaiswal1310@gmail.com" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right side empty on desktop for 3D elements to shine through, or place image here */}
        <div className="hidden lg:block h-full relative pointer-events-none">
          {/* Subtle glow behind 3D elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
