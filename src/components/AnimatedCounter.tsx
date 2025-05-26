
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = '', className = '', duration = 2000 }: AnimatedCounterProps) => {
  const { count, elementRef } = useCountAnimation({ target, duration });

  return (
    <div ref={elementRef} className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export default AnimatedCounter;
