import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + 'px';
        dotRef.current.style.top = e.clientY - 5 + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX - 18 + 'px';
        ringRef.current.style.top = e.clientY - 18 + 'px';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.body.style.cursor = '';
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="custom-cursor hidden lg:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden lg:block" />
    </>
  );
};
