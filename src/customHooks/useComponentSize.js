import { useEffect, useRef, useState } from 'react';

/**
 * useComponentBounding returns a ref object to reference an element by
 * being set in the 'ref' property of the element. And a bounding object which is the size
 * and position of the relative position of the element referenced by ref
 * @returns
 */
export const useComponentBounding = () => {
  const ref = useRef(null);
  const [bounding, setBounding] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  useEffect(() => {
    const handleBounding = () =>
      setBounding(ref.current.getBoundingClientRect());
    handleBounding();
    window.addEventListener('resize', handleBounding);
    return () => window.removeEventListener('resize', handleBounding);
  }, [ref]);

  return { ref, bounding };
};
