import { memo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BadgeDollarSign } from 'lucide-react';
import './PaidMediaResults.css';

const PaidMediaResults = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section paid-media-section">
      <div className="container">
         <motion.div 
           className="paid-header text-center"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h2 className="section-title text-white">{data.title}</h2>
           <p className="paid-subtitle">Data-driven acquisition campaigns maximizing your budget efficiency.</p>
         </motion.div>
         
         <div className="paid-media-visual">
           <img src={data.imageUrl} alt="Paid Media Visual" className="paid-image" loading="lazy" />
         </div>

         <motion.div 
           className="paid-metrics-grid"
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.div className="paid-metric-card" variants={itemVariants}>
              <div className="paid-icon"><TrendingUp size={32} /></div>
              <span className="paid-value">{data.roas}</span>
              <span className="paid-label">Return on Ad Spend</span>
           </motion.div>
           
           <motion.div className="paid-metric-card" variants={itemVariants}>
              <div className="paid-icon"><Target size={32} /></div>
              <span className="paid-value">{data.conversions}</span>
              <span className="paid-label">Total Conversions</span>
           </motion.div>
           
           <motion.div className="paid-metric-card" variants={itemVariants}>
              <div className="paid-icon"><BadgeDollarSign size={32} /></div>
              <span className="paid-value">{data.costPerAcquisition}</span>
              <span className="paid-label">Cost per Acquisition</span>
           </motion.div>
         </motion.div>
         
         <motion.div 
           className="paid-insight-panel"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
         >
           <div className="insight-badge">Key Insight</div>
           <p>{data.insights}</p>
         </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="paid-bg-pattern"></div>
    </section>
  );
};

export default memo(PaidMediaResults);
