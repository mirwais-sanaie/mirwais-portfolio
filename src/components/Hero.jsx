import { useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import Mirwais from "../../public/Mirwais.webp";

function Hero() {
  const heroRef = useRef(null);
  return (
    <section
      className="flex min-h-screen flex-col pt-21 items-center justify-center gap-4 lg:gap-6"
      ref={heroRef}
    >
      <div>
        <h1 className="hero-title text-4xl uppercase lg:text-5xl">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tight lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        download
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
