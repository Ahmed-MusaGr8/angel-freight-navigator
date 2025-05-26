
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Milestone {
  year: string;
  event: string;
  description: string;
}

interface MilestoneAnimationProps {
  milestones: Milestone[];
}

const MilestoneAnimation = ({ milestones }: MilestoneAnimationProps) => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = milestones.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleMilestones(prev => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        },
        { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
      );

      if (milestoneRefs.current[index]) {
        observer.observe(milestoneRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [milestones]);

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
      
      {milestones.map((milestone, index) => (
        <div
          key={index}
          ref={el => milestoneRefs.current[index] = el}
          className={`relative flex items-center mb-12 transition-all duration-1000 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          } ${
            visibleMilestones.includes(index) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
            <Card className="border-0 shadow-lg transform transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{milestone.event}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </CardContent>
            </Card>
          </div>
          
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transition-all duration-700 ${
              visibleMilestones.includes(index) ? 'scale-100 bg-primary' : 'scale-0 bg-gray-300'
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MilestoneAnimation;
