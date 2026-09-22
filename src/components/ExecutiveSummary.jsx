import { memo } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './ExecutiveSummary.css';

const ExecutiveSummary = ({ data, agencyName }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section id="summary" className="section summary-section">
      <div 
        className="container summary-container"
        style={{
          gridTemplateColumns: data.splitRatio ? `${100 - data.splitRatio}% ${data.splitRatio}%` : '1fr 1.5fr'
        }}
      >
        
        {/* Left Side: Images & Visuals */}
        <motion.div 
          className="summary-visuals"
          initial={isMobile ? {} : { opacity: 0, x: -30 }}
          whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="visual-ring"></div>
          
          <div className="visual-square">
             <div className="floating-badge">
               <Rocket size={18} color="#fff" />
             </div>
              {data.image1 ? (
                <OptimizedImage src={data.image1} alt="Introduction Visual" className="intro-image-main" />
              ) : (
                <div className="image-placeholder bg-light-gray"></div>
              )}
          </div>
          
          <motion.div 
            className="visual-circle-accent"
            initial={isMobile ? {} : { opacity: 0, scale: 0.8 }}
            whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
              {data.image2 ? (
                <OptimizedImage src={data.image2} alt="Introduction Detail" className="intro-image-accent" />
              ) : (
                <div className="placeholder-inner-square bg-gray-solid"></div>
              )}
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="summary-content"
          initial={isMobile ? {} : "hidden"}
          whileInView={isMobile ? {} : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 
            className="section-title summary-title"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            {data.title}
          </motion.h2>
          
          <motion.div 
            className="summary-text"
            style={{ lineHeight: data.lineHeight || '1.8' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <p style={{ lineHeight: 'inherit' }}>{data.content}</p>
          </motion.div>

          {data.price && (
            <motion.div 
              className="pricing-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <div className="pricing-info">
                <span className="pricing-label">Price:</span>
                <span className="pricing-value">{data.price}</span>
              </div>
              {data.quoteUrl && (
                <a href={data.quoteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Quote
                </a>
              )}
            </motion.div>
          )}

        </motion.div>

      </div>
      
      <div className="decorative-lines bottom-right"></div>
    </section>
  );
};

export default memo(ExecutiveSummary);
