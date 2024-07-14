import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Achievements = () => {
  const achievementsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      achievementsRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      }
    );

    gsap.to(achievementsRef.current, {
      scrollTrigger: {
        trigger: achievementsRef.current,
        start: 'bottom center',
        end: 'bottom top',
        onLeave: () => gsap.to(achievementsRef.current, { opacity: 0 }),
      },
    });
  }, []);

  return (
    <section ref={achievementsRef} className="achievements h-screen w-screen bg-lime-700">
      {/* Achievements content here */}
    </section>
  );
};

export default Achievements;
