import { memo } from 'react';
import './dealer.css';

// The dealership's own logo lockup; the white version sits on the charcoal footer
const BrandLockup = ({ client, inverted = false }) => (
  <img
    src={inverted ? client.logoWhiteUrl : client.logoUrl}
    alt={client.name}
    className={`brand-logo${inverted ? ' inverted' : ''}`}
  />
);

export default memo(BrandLockup);
