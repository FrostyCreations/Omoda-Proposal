import { memo } from 'react';
import './dealer.css';

const Packages = ({ data }) => (
  <section className="dealer-section packages-section">
    <div className="container">
      <h2 className="dealer-title">{data.title}</h2>
      <div className="package-grid">
        {data.packages.map((pkg) => (
          <article key={pkg.id} className={`package-card${pkg.featured ? ' featured' : ''}`}>
            <div className="package-head">
              <span className="dealer-eyebrow">{pkg.label}</span>
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-description">{pkg.description}</p>
            </div>

            <div className="package-body">
              <div className="spec-sheet compact">
                <div className="spec-sheet-row head">
                  <span>{data.columns[0]}</span>
                  <span>{data.columns[1]}</span>
                </div>
                {pkg.items.map((item) => (
                  <div key={item.service} className={`spec-sheet-row${item.pending ? ' pending' : ''}`}>
                    <span>{item.service}</span>
                    <span className="spec-sheet-amount">{item.value}</span>
                  </div>
                ))}
                <div className="spec-sheet-row">
                  <span>Total package value</span>
                  <span className="spec-sheet-amount">{pkg.totalValue}</span>
                </div>
                {pkg.discount && (
                  <div className="spec-sheet-row">
                    <span>Package discount</span>
                    <span className="spec-sheet-amount">{pkg.discount}</span>
                  </div>
                )}
              </div>
              {pkg.mediaBudget && <p className="dealer-note package-media">{pkg.mediaBudget}</p>}
            </div>

            <div className="model-card-bar">
              <div className="model-card-price">
                <span className="model-card-amount">{pkg.price}</span>
                <span className="model-card-caption">Monthly package price</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default memo(Packages);
