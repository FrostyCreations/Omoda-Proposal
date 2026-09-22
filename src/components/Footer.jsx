import React from 'react';
import { useEditor } from '../context/EditorContext';
import BrandLockup from './dealer/BrandLockup';
import './Footer.css';

const Footer = () => {
  const { data } = useEditor();
  const client = data.client || {};

  return (
    <footer className="footer">
      <div className="container">
        {client.logoWhiteUrl && (
          <div className="footer-brand">
            <BrandLockup client={client} inverted />
            <span className="footer-rule"></span>
          </div>
        )}
        <div className="footer-bottom">
          <p className="copyright">© 2026 Big On Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
