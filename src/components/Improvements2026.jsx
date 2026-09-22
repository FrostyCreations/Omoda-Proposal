import { memo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Plus, ArrowUpRight } from 'lucide-react';
import './Improvements.css';

const Improvements2026 = ({ data }) => {
  return (
    <section className="section improvements-section">
      <div className="container">
        <div className="improvements-grid">
           <motion.div 
             className="improvements-text"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="section-title">{data.title}</h2>
              <p className="section-subtitle">{data.subtitle}</p>
              <div className="dec-line-grow"></div>
           </motion.div>

           <div className="improvements-cards">
              {data.items.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="imp-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="imp-icon-box">
                    <ArrowUpRight size={24} color="var(--accent-primary)" />
                  </div>
                  <div className="imp-info">
                    <h3 className="imp-title">{item.title}</h3>
                    <p className="imp-desc">{item.description}</p>
                    <div className="imp-metric">
                       <TrendingUp size={16} /> <span>{item.expectation}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Improvements2026);
