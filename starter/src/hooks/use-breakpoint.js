import { useEffect, useRef, useState } from 'react';

function useBreakpoint(screens, breakpoint, defaultValue = false) {
  const [match, setMatch] = useState(defaultValue);
  const matchRef = useRef(defaultValue);

  useEffect(() => {
    const track = () => {
      const value = screens[breakpoint] ?? '999999px';
      const query = window.matchMedia(`(min-width: ${value})`);
      matchRef.current = query.matches;

      if (matchRef.current != match) {
        setMatch(matchRef.current);
      }
    };

    track();
    window.addEventListener('resize', track);

    return () => {
      window.removeEventListener('resize', track);
    };
  });

  return match;
}

export default useBreakpoint;
