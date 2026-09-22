import { memo } from 'react';
import './dealer.css';

const PartHeader = ({ data }) => (
  <section className="part-header">
    {data.imageUrl && <img src={data.imageUrl} alt="" className="part-header-img" loading="lazy" />}
    <div className="part-header-overlay" />
    <div className="container part-header-content">
      <h2 className="part-header-title">{data.title}</h2>
    </div>
  </section>
);

export default memo(PartHeader);
