import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
    });

    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'bottom top',
        end: 'bottom top',
        onLeave: () => gsap.to(videoRef.current, { opacity: 0 }),
      },
    });
  }, []);

  return (
    <section ref={videoRef} className="video h-screen w-screen bg-red-700">
      {/* Video content here */}
    </section>
  );
};

export default Video;
