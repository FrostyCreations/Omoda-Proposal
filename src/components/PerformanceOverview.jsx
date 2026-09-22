import { memo } from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import './PerformanceOverview.css';

const PerformanceOverview = ({ data }) => {
  return (
    <section id="performance" className="performance-section">
      <div 
        className="perf-left-image" 
        style={{ backgroundImage: data.imageUrl ? `url(${data.imageUrl})` : undefined }}
      >
        {/* Rendered dynamic image from data.imageUrl */}
      </div>
      <div className="perf-right-content">
         <motion.div 
           className="perf-content-inner"
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <h2 className="perf-title">
             {data.title} <MousePointerClick size={48} className="inline-icon" />
           </h2>
           
           <div className="perf-metrics-list">
             {data.metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <span className="metric-label">{metric.label}</span>
                  <div className="metric-values">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-trend">{metric.trend}</span>
                  </div>
                </div>
             ))}
           </div>

           {data.price && (
             <div className="pricing-block">
               <div className="pricing-info">
                 <span className="pricing-label">Price:</span>
                 <span className="pricing-value">{data.price}</span>
               </div>
               {data.quoteUrl && (
                 <a href={data.quoteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                   View Quote
                 </a>
               )}
             </div>
           )}

         </motion.div>
         
         {/* Decorative striped circle in bottom right like the slide */}
         <div className="dec-circle-striped"></div>
      </div>
    </section>
  );
};

export default memo(PerformanceOverview);
