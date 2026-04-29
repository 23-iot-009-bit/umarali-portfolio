import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { ExternalLink, Github, Code2, Cpu } from 'lucide-react';

const projects = [
  {
    title: "Smart Home Dashboard",
    description: "A centralized dashboard to monitor and control IoT devices around the home. Built the backend API using .NET Core to handle MQTT streams.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    tags: [".NET Core", "React", "MQTT", "ESP32"],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Inventory Management System",
    description: "Enterprise-level inventory tracker developed with .NET MVC and SQL Server. Features user roles, real-time stock alerts, and reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: [".NET MVC", "C#", "SQL Server", "Bootstrap"],
    icon: <Code2 className="w-5 h-5" />
  },
  {
    title: "Weather Station Node",
    description: "An IoT node that collects environmental data using various sensors and pushes it to a cloud database for visualization.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tags: ["C++", "Arduino", "IoT", "Sensors"],
    icon: <Cpu className="w-5 h-5" />
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Some of my recent work in IoT and .NET development.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col group"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6 flex-1 flex flex-col relative z-20 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <a href="#" className="text-sm font-medium flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href="#" className="text-sm font-medium flex items-center gap-2 hover:text-primary-500 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
