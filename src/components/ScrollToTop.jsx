import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Moving between the proposal and the quotes page should start at the top,
// otherwise the new page opens at the previous page's scroll position.
// Anchor links keep working because only a path change resets the scroll.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
