import { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, CalendarDays, CheckCircle } from 'lucide-react';
import './NewsletterStrategy.css';

const NewsletterStrategy = ({ data }) => {
  return (
    <section className="section newsletter-section bg-secondary">
      <div className="container">
        <div className="newsletter-grid">
           
           <motion.div 
             className="newsletter-content"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="section-title text-primary">{data.title}</h2>
             <p className="newsletter-subtitle">
               A consistent touchpoint to keep your audience engaged, informed, and connected to the community ecosystem.
             </p>
             
             <div className="newsletter-frequency">
               <CalendarDays size={24} className="text-accent" />
               <span>Frequency: <strong>{data.frequency}</strong></span>
             </div>

             <div className="newsletter-themes">
               <h3>Core Themes & Content Pillars</h3>
               <ul>
                 {data.themes.map((theme, i) => (
                   <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                   >
                     <CheckCircle size={20} className="text-accent" />
                     {theme}
                   </motion.li>
                 ))}
               </ul>
             </div>
           </motion.div>

           <motion.div 
             className="newsletter-visual"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
           >
              <div className="glass-panel mockup-panel">
                <div className="mockup-header">
                  <Mail size={24} />
                  <span>The {data.title.split(' ')[0]}</span>
                </div>
                <div className="mockup-body">
                  <div className="skeleton-line title"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-image"></div>
                  <div className="skeleton-line button"></div>
                </div>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default memo(NewsletterStrategy);
