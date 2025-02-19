import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <h2></h2>
    </section>
  );
}

export default Contact;
