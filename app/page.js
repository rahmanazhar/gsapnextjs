"use client";
import { useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useIsomorphicLayoutEffect from "./helpers/isomorphicLayout";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Scroll = () => {
  const horizontalSection = useRef();
  const pinSection = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(
      () => {

        const slides2 = gsap.utils.toArray(".pin-panel");
        gsap.to(slides2, {
          scrollTrigger: {
            trigger: pinSection.current,
            pin: true,
            start: "top top",
            end: "+=300%",
            markers: true,
            scrub: 1.5,
          },
        });
        gsap.to(
          '.pin-section',
          {
            y: -200,
            scale: 0.5,
            duration: 1,
          }
        );
        const slides = gsap.utils.toArray(".horizontal-panel");
        gsap.to(slides, {
          xPercent: -100 * (slides.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSection.current,
            pin: true,
            start: 'top top',
            end: '+=300%',
            markers: true,
            scrub: 0.5,
          },
        });
      },
      [horizontalSection, pinSection]
    );
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>GSAP Horizontal Scroll NextJS</title>
        <meta
          name="description"
          content="Horiontal scroll using ScrollTrigger in a NextJS app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="blue"></section>
      <section className="pin-section" ref={pinSection}>
        <div className="pin-panel green2"></div>
      </section>
      <section className="horizontal-section" ref={horizontalSection}>
        <div className="horizontal-panel red"></div>
        <div className="horizontal-panel purple"></div>
        <div className="horizontal-panel green"></div>
      </section>
      <section className="gray"></section>
    </>
  );
};

export default Scroll;
