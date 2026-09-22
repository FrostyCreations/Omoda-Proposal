import { memo } from 'react';
import { motion } from 'framer-motion';
import './ChannelPerformance.css';

const ChannelPerformance = ({ data }) => {
  return (
    <section className="section channel-section">
      <div className="container">
        
        {/* Background Decorative Circle */}
        <div className="bg-circle-left"></div>

        <div className="channel-grid">
           {/* Left side: Overlapping Cards a la Slide 4 */}
           <div className="channel-cards-area">
             {data.channels.map((channel, i) => (
                <motion.div 
                  key={i}
                  className={`channel-card ${i % 2 === 0 ? 'card-light' : 'card-dark'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <div className="channel-status">{channel.status}</div>
                  <h3 className="channel-name">{channel.name}</h3>
                  <p className="channel-highlight">{channel.highlight}</p>
                </motion.div>
             ))}
           </div>

           {/* Right side: Text details */}
           <motion.div 
             className="channel-text-content"
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="channel-title">{data.title}</h2>
             <p className="channel-subtitle">
               An in-depth analysis of your current digital touchpoints reveals strong foundations with specific opportunities for massive systemic growth across key platforms.
             </p>
             
             <div className="channel-icon-badge">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ChannelPerformance);
