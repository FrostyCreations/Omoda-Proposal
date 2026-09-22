import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './dealer.css';

const RoadAhead = ({ data }) => (
  <section className="dealer-section">
    <div className="container">
      <div className="road-ahead">
        <h2 className="road-ahead-title">{data.title}</h2>
        {data.paragraphs.map((text, i) => <p key={i} className="road-ahead-text">{text}</p>)}
        <Link to="/quotes" className="btn-primary road-ahead-cta">
          View Quotes and Approve <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default memo(RoadAhead);
