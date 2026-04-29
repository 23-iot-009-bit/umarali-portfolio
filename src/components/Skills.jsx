import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Layout, Server, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Backend & Frameworks",
    icon: <Server className="w-6 h-6" />,
    skills: [".NET Core", ".NET MVC", "C#", "RESTful APIs", "SQL Server"]
  },
  {
    title: "Internet of Things",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Embedded Systems", "Microcontrollers", "Sensors & Actuators", "C++", "IoT Protocols (MQTT)"]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "UI/Design"]
  }
];

export function Skills() {
  return (
    <Section id="skills" title="My Skills" subtitle="Technologies and tools I specialize in.">
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            
            <div className="bg-primary-500/20 text-primary-600 dark:text-primary-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10">{category.title}</h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
