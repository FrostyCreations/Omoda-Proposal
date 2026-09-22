import { memo } from 'react';
import OptimizedImage from '../OptimizedImage';
import './dealer.css';

// Renders the content blocks shared by services and their sub-services: paragraphs, lists and notes
export const ContentBlocks = ({ content = [] }) => content.map((block, i) => {
  if (block.type === 'list') {
    return (
      <div key={i} className="dealer-list">
        {block.title && <p className="dealer-list-title">{block.title}</p>}
        <ul>
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      </div>
    );
  }
  if (block.type === 'note') return <p key={i} className="dealer-note">{block.text}</p>;
  return <p key={i} className="dealer-body">{block.text}</p>;
});

// Charcoal label bar from the dealer's model cards: amount in the display face, label underneath
export const PriceBar = ({ prices = [] }) => (
  <div className="model-card-bar">
    {prices.map((price, i) => (
      <div key={i} className={`model-card-price${i > 0 ? ' secondary' : ''}${price.pending ? ' pending' : ''}`}>
        <span className="model-card-amount">{price.amount}</span>
        <span className="model-card-caption">
          {price.label}{price.suffix ? ` · ${price.suffix}` : ''}
        </span>
      </div>
    ))}
  </div>
);

const Service = ({ data }) => {
  const imageFirst = Number(data.number) % 2 === 1;

  return (
    <section className={`dealer-section service${imageFirst ? '' : ' alt'}`}>
      <div className="container">
        <div className={`dealer-split${imageFirst ? ' image-first' : ''}`}>
          <div className="service-copy">
            <span className="dealer-eyebrow">{String(data.number).padStart(2, '0')}</span>
            <h2 className="dealer-title">{data.title}</h2>
            <h3 className="service-subtitle">{data.subtitle}</h3>
            <ContentBlocks content={data.content} />
          </div>
          <div className="model-card">
            <div className={`model-card-media${data.imageFit === 'contain' ? ' contain' : ''}`}>
              <OptimizedImage src={data.imageUrl} alt="" className="model-card-img" />
            </div>
            {data.prices && <PriceBar prices={data.prices} />}
          </div>
        </div>

        {data.blocks && (
          <div className="sub-service-grid">
            {data.blocks.map((block, i) => (
              <article key={i} className="sub-service">
                <div className="sub-service-body">
                  <h3 className="sub-service-title">{block.title}</h3>
                  <ContentBlocks content={block.content} />
                </div>
                <PriceBar prices={block.prices} />
              </article>
            ))}
          </div>
        )}

        {data.footnote && <p className="dealer-note service-footnote">{data.footnote}</p>}
      </div>
    </section>
  );
};

export default memo(Service);
