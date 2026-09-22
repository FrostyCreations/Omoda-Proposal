import { memo } from 'react';
import OptimizedImage from '../OptimizedImage';
import './dealer.css';

const Introduction = ({ data }) => (
  <section className="dealer-section">
    <div className="container">
      <div className="dealer-split">
        <div>
          <span className="dealer-eyebrow">{data.eyebrow}</span>
          <h2 className="dealer-title">{data.title}</h2>
          {data.paragraphs.map((text, i) => <p key={i} className="dealer-body">{text}</p>)}
        </div>
        <div className="model-card">
          <div className="model-card-media">
            <OptimizedImage src={data.imageUrl} alt="" className="model-card-img" />
          </div>
        </div>
      </div>

      <h3 className="dealer-subheading">{data.objectivesTitle}</h3>
      <ol className="spec-strip">
        {data.objectives.map((text, i) => (
          <li key={i} className="spec-tile">
            <span className="spec-tile-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="spec-tile-text">{text}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default memo(Introduction);
