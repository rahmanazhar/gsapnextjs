import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom+=100% top',
        pin: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={heroRef} className="hero h-screen w-screen bg-white">
      {/* Hero content here */}
    </section>
  );
};

export default Hero;
