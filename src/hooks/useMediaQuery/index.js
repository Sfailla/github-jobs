import React from 'react';

export default function useMediaQuery(query) {
  const [matches, setMatches] = useMediaQuery(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    media.addEventListener(listener);

    return () => {
      media.removeEventListener(listener);
    };
  }, [matches, setMatches, query]);

  return matches;
}
