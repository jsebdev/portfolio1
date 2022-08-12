import { useEffect, useState } from 'react';

const getWindowsSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useWindowsSize = () => {
  const [windowsSize, setWindowsSize] = useState(getWindowsSize());

  useEffect(() => {
    const handleWindowsSize = () => setWindowsSize(getWindowsSize());
    window.addEventListener('resize', handleWindowsSize);
    return () => window.removeEventListener('resize', handleWindowsSize);
  });

  return windowsSize;
};
