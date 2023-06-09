import { useState, useEffect } from 'react';

export const useMediaQuery = () => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches]);

    return matches;
}

export default useMediaQuery;