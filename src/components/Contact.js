import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Retrieve form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:nowfillbk@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )} (Contact Email: ${email})`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
