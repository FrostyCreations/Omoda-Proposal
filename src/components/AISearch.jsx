import { memo } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import './AISearch.css';

const AISearch = ({ data }) => {
  return (
    <section className="section ai-section">
      <div className="ai-overlay"></div>
      <div className="container ai-container">
         <motion.div 
           className="ai-content text-center"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           <div className="ai-icon-pulse">
             <Bot size={56} className="text-white relative z-10" />
             <div className="pulse-ring"></div>
             <div className="pulse-ring delay"></div>
           </div>
           
           <h2 className="ai-title">
             {data.title} <Sparkles className="inline-sparkle" size={32} />
           </h2>
           
           <p className="ai-description">
             {data.description}
           </p>

           <div className="ai-engines">
             <span className="engine-badge">ChatGPT</span>
             <span className="engine-badge">Perplexity</span>
             <span className="engine-badge">Gemini</span>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default memo(AISearch);
