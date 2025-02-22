import { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import Mirwais from "../../public/Mirwais.webp";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero-title", { duration: 1.5, text: PROFILE.name, ease: "none" })
        .to(
          ".hero-subheading",
          { duration: 1.2, text: PROFILE.role, ease: "none" },
          "-=0.5"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            scale: 0.9,
            y: 100,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    window.location.href = "./myResume.pdf";
  };

  return (
    <section
      className="flex min-h-screen flex-col pt-21 items-center justify-center gap-4 lg:gap-6"
      ref={heroRef}
    >
      <div>
        <h1 className="hero-title text-4xl uppercase lg:text-5xl"></h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent"></h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tight lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <a
        href="./myResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        onClick={(e) => handleDownloadClick(e)}
        className="hero-btn mb-3 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
      >
        <span>Download resume</span>
        <RiArrowRightUpLine />
      </a>
      <img
        className="hero-img rounded-3xl border border-purple-300/20 p-1"
        src={Mirwais}
        alt={PROFILE.name}
        width={300}
        height={350}
      />
    </section>
  );
}

export default Hero;
