import { memo } from 'react';
import { motion } from 'framer-motion';
import './dealer.css';

const DealerHero = ({ data }) => (
  <section id="home" className="dealer-hero">
    <img src={data.heroBgUrl} alt="" className="dealer-hero-img" />
    <div className="dealer-hero-overlay" />
    <div className="container dealer-hero-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="dealer-eyebrow light">{data.eyebrow}</span>
        <h1 className="dealer-hero-title">{data.title}</h1>
      </motion.div>
    </div>
  </section>
);

export default memo(DealerHero);
