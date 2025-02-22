import { RiGithubFill, RiLinkedinBoxFill, RiXrpFill } from "@remixicon/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useEffect(function () {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text", {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(
        ".contact-icon",
        {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
        contactRef
      );
    }, contactRef);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 contact-text text-3xl font-medium lg:text-4xl">
          Contact
        </h2>
        <p className="contact-text mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email :{" "}
          <a href="mailto:mirwais.sanaie@gmail.com" className="border-b">
            mirwais.sanaie@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/mirwais-sanaie-2a5760292"
            target="_blank"
            rel="norepenner noreferrer"
            className="contact-icon"
            aria-label="visit my linkedin profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/mirwais-sanaie"
            target="_blank"
            rel="norepenner noreferrer"
            className="contact-icon"
            aria-label="visit my github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://x.com/MirwaisSan98138"
            target="_blank"
            rel="norepenner noreferrer"
            className="contact-icon"
            aria-label="visit my X profile"
          >
            <RiXrpFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
