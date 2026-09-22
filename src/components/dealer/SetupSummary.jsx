import { memo } from 'react';
import './dealer.css';

const SetupSummary = ({ data }) => (
  <section className="dealer-section summary-section">
    <div className="container">
      <h2 className="dealer-title">{data.title}</h2>
      <div className="spec-sheet">
        <div className="spec-sheet-row head">
          <span>{data.columns[0]}</span>
          <span>{data.columns[1]}</span>
        </div>
        {data.rows.map((row) => (
          <div key={row.service} className="spec-sheet-row">
            <span>{row.service}</span>
            <span className="spec-sheet-amount">{row.price}</span>
          </div>
        ))}
        <div className="spec-sheet-row total">
          <span>{data.total.label}</span>
          <span className="spec-sheet-amount">{data.total.amount}</span>
        </div>
        <div className="spec-sheet-row">
          <span>{data.deposit.label}</span>
          <span className="spec-sheet-amount">{data.deposit.amount}</span>
        </div>
        <div className="spec-sheet-row">
          <span>{data.balance.label}</span>
          <span className="spec-sheet-amount">{data.balance.amount}</span>
        </div>
      </div>
      <p className="dealer-body summary-note">{data.note}</p>
    </div>
  </section>
);

export default memo(SetupSummary);
