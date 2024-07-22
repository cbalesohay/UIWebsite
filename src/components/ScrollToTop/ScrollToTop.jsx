import { useLayoutEffect } from 'react';

export const ScrollToTop = () => {
  
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
}
