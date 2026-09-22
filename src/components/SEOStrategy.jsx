import { memo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Settings } from 'lucide-react';
import './SEOStrategy.css';

const SEOStrategy = ({ data }) => {
  const icons = [
    <Settings key="settings" size={28} />,
    <MapPin key="map" size={28} />,
    <Search key="search" size={28} />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section seo-section">
      <div className="container">
        <div className="seo-grid">
          
          <motion.div 
            className="seo-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="seo-glass-badge">
               <span className="seo-rank">#1</span>
               <span>Search Visibility</span>
            </div>
          </motion.div>

          <div className="seo-content">
             <motion.h2 
               className="section-title text-primary"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               {data.title}
             </motion.h2>
             <motion.p 
               className="seo-subtitle"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
             >
               Dominating the search results pages to ensure that when your target audience searches for your premium solutions, you are the undeniable authority.
             </motion.p>
             
             <motion.ul 
               className="seo-list"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
             >
               {data.focusAreas.map((area, i) => (
                 <motion.li key={i} variants={itemVariants}>
                    <div className="seo-icon-box">{icons[i % icons.length]}</div>
                    <span>{area}</span>
                 </motion.li>
               ))}
             </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(SEOStrategy);
