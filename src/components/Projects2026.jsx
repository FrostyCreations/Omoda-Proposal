import { memo } from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Code, Megaphone, Smartphone, Presentation } from 'lucide-react';
import './Projects.css';

const Projects2026 = ({ data }) => {
  const iconMap = {
    Layout, Palette, Code, Megaphone, Smartphone, Presentation
  };

  return (
    <section className="section projects-section">
      <div className="container">
        <motion.div 
          className="projects-grid-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {data.projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Layout;
            return (
              <motion.div 
                key={i} 
                className="project-tile"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="tile-icon">
                  <Icon size={24} />
                </div>
                <div className="tile-content">
                  <h3 className="tile-title">{project.title}</h3>
                  <p className="tile-desc">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Projects2026);
