import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Cpu, Wifi } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob pointer-events-none" />
      <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8 border border-primary-100 dark:border-primary-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            IoT Developer & Enthusiast
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I&apos;m <span className="text-gradient">Umar Ali</span>
            <br />
            IoT 6th Semester.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            I specialize in the Internet of Things, building connected systems and smart solutions. 
            Passionate about bridging hardware and software to create innovative technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 ml-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} ariaLabel="GitHub" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} ariaLabel="LinkedIn" />
              <SocialLink href="mailto:your.email@example.com" icon={<Mail className="w-5 h-5" />} ariaLabel="Email" />
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 border-dashed animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 border-dotted animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-primary-400/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm rounded-full glass-card">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center justify-center"
                  >
                     <Cpu className="w-24 h-24 text-primary-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] mb-4" />
                     <Wifi className="w-8 h-8 text-purple-500 animate-pulse" />
                  </motion.div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
}

function SocialLink({ href, icon, ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600/30 dark:hover:border-primary-400/30 hover:scale-110 transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}
