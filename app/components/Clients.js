import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Clients = () => {
  const clientsRef = useRef(null);

  useEffect(() => {
    gsap.to(clientsRef.current, {
      xPercent: -300,
      scrollTrigger: {
        trigger: clientsRef.current,
        start: 'top center',
        end: 'bottom+=300% center',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={clientsRef} className="clients h-screen w-screen flex bg-teal-400">
      {/* Four full divs for clients content */}
      <div className="client w-screen h-screen">Client 1</div>
      <div className="client w-screen h-screen">Client 2</div>
      <div className="client w-screen h-screen">Client 3</div>
      <div className="client w-screen h-screen">Client 4</div>
    </section>
  );
};

export default Clients;
