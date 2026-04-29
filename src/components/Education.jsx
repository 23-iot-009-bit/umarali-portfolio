import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { BookOpen, GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <Section id="education" title="Education & Coursework" subtitle="My academic background and current studies.">
      <div className="max-w-4xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="bg-primary-500/20 text-primary-600 dark:text-primary-400 p-4 rounded-2xl shrink-0">
              <GraduationCap className="w-10 h-10" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Internet of Things (IoT)</h3>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6">
                Currently in 6th Semester
              </p>
              
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Focusing on the integration of hardware and software to create smart, connected environments. 
                  Gaining hands-on experience with microcontrollers, backend systems like .NET, and networking protocols.
                </p>
              </div>

              <h4 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-gray-100">
                <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                Key Subjects & Coursework
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Embedded Systems Design",
                  "Microcontrollers & Arduino",
                  "Enterprise Application Dev (.NET)",
                  "Data Communication & Networks",
                  "Sensors and Actuators",
                  "Software Engineering"
                ].map((subject, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
