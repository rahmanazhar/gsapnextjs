import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Works = () => {
  const worksRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      worksRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: worksRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      }
    );

    gsap.to(worksRef.current, {
      scrollTrigger: {
        trigger: worksRef.current,
        start: 'bottom center',
        end: 'bottom top',
        onLeave: () => gsap.to(worksRef.current, { opacity: 0 }),
      },
    });
  }, []);

  return (
    <section ref={worksRef} className="works h-screen w-screen bg-yellow-700">
      {/* Works content here */}
    </section>
  );
};

export default Works;
