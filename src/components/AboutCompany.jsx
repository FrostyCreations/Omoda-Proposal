import { memo } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import './AboutCompany.css';

const AboutCompany = ({ data }) => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-content-wrapper">
          <motion.div 
            className="about-text-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-title">{data.title || "About Big On Digital"}</h2>
            <div className="about-description" dangerouslySetInnerHTML={{ __html: data.description }} />
          </motion.div>

          <motion.div 
            className="team-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.team && data.team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image-container">
                  <OptimizedImage src={member.image} alt={member.name} className="member-image" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <p className="member-subtitle">{member.subtitle}</p>
                  <p className="member-desc">{member.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutCompany);
