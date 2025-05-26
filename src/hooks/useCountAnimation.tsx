
import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  target: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCountAnimation = ({ target, duration = 2000, startOnView = true }: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      // Start animation immediately if not waiting for view
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        } else if (!entry.isIntersecting && isVisible) {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, startOnView]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(target * easeOutCubic));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return { count, elementRef };
};
