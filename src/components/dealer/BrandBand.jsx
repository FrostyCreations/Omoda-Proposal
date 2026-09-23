import { memo } from 'react';
import { useEditor } from '../../context/EditorContext';
import BrandLockup from './BrandLockup';
import './dealer.css';

// Charcoal dealer band: the client's lockup, closing off the proposal before the agency section
const BrandBand = () => {
  const { data } = useEditor();
  const client = data.client || {};

  if (!client.logoWhiteUrl) return null;

  return (
    <div className="brand-band">
      <div className="container brand-band-inner">
        <BrandLockup client={client} inverted />
        <span className="brand-band-rule" />
      </div>
    </div>
  );
};

export default memo(BrandBand);
