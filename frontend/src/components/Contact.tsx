import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // add current time
    const timeInput = form.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    ).then(
      () => {
        setStatus("Message sent successfully. I will contact you soon.");
      },
      () => {
        setStatus("Failed to send message. Please try again later.");
      }
    );

    form.reset();
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="card">
        <form onSubmit={sendEmail}>

          <input type="text" name="name" placeholder="Your Name" required />
          <br /><br />

          <input type="email" name="email" placeholder="Your Email" required />
          <br /><br />

          <input type="hidden" name="time" />

          <textarea name="message" placeholder="Your Message" required />
          <br /><br />

          <button type="submit">Send Message</button>

        </form>

        {status && <p>{status}</p>}
      </div>
    </section>
  );
}
