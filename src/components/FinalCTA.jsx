import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = ({ data }) => {
  return (
    <section id="contact" className="section final-cta-section">
      <div className="container">
         <motion.div 
           className="cta-container glass-panel"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
            <div className="cta-content text-center">
               <h2 className="cta-title">{data.title}</h2>
               <p className="cta-thankyou">{data.thankYou}</p>
               
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Link 
                   to="/quotes"
                   className="btn-primary cta-button-link"
                   style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                 >
                   {data.buttonText} <ArrowRight size={24} className="ml-2" />
                 </Link>
               </motion.div>
            </div>
            
            <div className="cta-decorative-circle"></div>
            <div className="cta-decorative-circle small"></div>
         </motion.div>
      </div>
    </section>
  );
};

export default memo(FinalCTA);
