import React, { useRef, useEffect } from 'react';
import './ClientLogos.css';

const ClientLogos = ({ data }) => {
  // Triple the array to create a safe buffer for infinite drag/scroll
  const scrollLogos = [...data.logos, ...data.logos, ...data.logos, ...data.logos];
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const animationRef = useRef(null);
  const isHovered = useRef(false);
  const hasDragged = useRef(false);

  // Auto scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let pos = slider.scrollLeft;

    const play = () => {
      if (!isDown.current && !isHovered.current) {
        pos += 0.6; // Speed setting
        // Since we have 4 sets of logos, passing the first set seamlessly resets
        const singleSetWidth = slider.scrollWidth / 4;
        if (pos >= singleSetWidth * 2) {
          pos = singleSetWidth; // reset to middle to allow dragging backwards too seamlessly
        } else if (pos <= 0) {
          pos = singleSetWidth;
        }
        slider.scrollLeft = pos;
      } else {
        // Sync positional state with the drag action
        pos = slider.scrollLeft;
      }
      animationRef.current = requestAnimationFrame(play);
    };

    // Initialize slightly inward to allow back-dragging initially
    setTimeout(() => {
        if(sliderRef.current) sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 4;
    }, 100);

    animationRef.current = requestAnimationFrame(play);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseDown = (e) => {
    isDown.current = true;
    hasDragged.current = false;
    sliderRef.current.classList.add('active');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftPos.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    isHovered.current = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }
    
    sliderRef.current.scrollLeft = scrollLeftPos.current - walk;
    
    // Bounds check for infinite dragging wrap
    const slider = sliderRef.current;
    const singleSetWidth = slider.scrollWidth / 4;
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = singleSetWidth;
        startX.current = e.pageX - slider.offsetLeft;
        scrollLeftPos.current = slider.scrollLeft;
    } else if (slider.scrollLeft >= singleSetWidth * 3) {
        slider.scrollLeft = singleSetWidth * 2;
        startX.current = e.pageX - slider.offsetLeft;
        scrollLeftPos.current = slider.scrollLeft;
    }
  };

  return (
    <section className="client-logos-section">
      <div className="container" style={{ position: 'relative' }}>
        {data.title && <h3 className="client-logos-title">{data.title}</h3>}
        {/* Gradients mask container */}
        <div className="logo-mask">
          <div 
            className="logo-slider draggable"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => isHovered.current = true}
          >
            <div className="logo-track">
              {scrollLogos.map((client, index) => (
                <a 
                  key={index} 
                  href={client.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="client-logo-link"
                  draggable="false"
                  onClick={(e) => {
                    if (hasDragged.current) e.preventDefault();
                  }}
                >
                  <div className="logo-tooltip">{client.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</div>
                  <img 
                    src={client.url} 
                    alt={client.name} 
                    className="client-logo-img" 
                    draggable="false" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
