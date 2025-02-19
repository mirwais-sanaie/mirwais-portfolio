import { RiGithubFill, RiLinkedinBoxFill, RiXrpFill } from "@remixicon/react";
import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email :{" "}
          <a href="mailto:mirwais.sanaie@gmail.com" className="border-b">
            mirwais.sanaie@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/mirwais-sanaie-2a5760292"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my linkedin profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/mirwais-sanaie"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://x.com/MirwaisSan98138"
            target="_blank"
            rel="noopener noreferrer"
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
