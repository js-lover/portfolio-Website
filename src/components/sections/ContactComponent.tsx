import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !surname || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm("sbarisaydin", "template_ohevla3", form.current, {
          publicKey: "zNv6Q15m8dbrPyNsd",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Message sent successfully!");
            setEmail("");
            setName("");
            setSurname("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form referansı bulunamadı.");
    }
  };

  return (
    <div id="contact" className="relative w-full flex flex-col items-center justify-center gap-8 py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="blob-1 bottom-20 left-10 animate-blob"></div>
      <div className="blob-2 top-20 right-10 animate-blob" style={{ animationDelay: "-3s" }}></div>

      {/* Section Title */}
      <div className="text-center relative z-10 mb-8">
        <h1 className="font-black text-4xl md:text-6xl text-[var(--text-primary)] section-title mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Let's connect and discuss your next project
        </p>
      </div>

      {/* Contact Container */}
      <div className="flex md:flex-row flex-col justify-center items-stretch gap-6 md:gap-8 w-full max-w-6xl relative z-10">
        {/* Info Card */}
        <div className="glass-card rounded-3xl p-8 md:p-10 w-full md:w-2/5 flex flex-col justify-between border border-[var(--glass-border)]">
          <div>
            <div className="inline-block p-3 bg-gradient-primary rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-black gradient-text mb-4">
              Let's Work Together
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              I'm always open to discussing my projects, brainstorming new ideas,
              or just saying hello. Feel free to reach out to me by sending an
              email or by filling out the form. I believe we can shape the
              digital world together.
            </p>
          </div>

          {/* Contact Info Icons */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <div className="p-2 bg-[var(--bg-hero)] rounded-lg">
                <svg className="w-5 h-5 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">serhatbarisaydin@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
              <div className="p-2 bg-[var(--bg-hero)] rounded-lg">
                <svg className="w-5 h-5 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-medium">Istanbul, Turkey</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          className="glass-card rounded-3xl p-8 md:p-10 w-full md:w-3/5 flex flex-col gap-5 border border-[var(--glass-border)]"
          onSubmit={sendEmail}
        >
          {/* Name and Surname Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="input-modern"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[var(--text-secondary)]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="input-modern"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                name="surname"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[var(--text-secondary)]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="input-modern"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="user_email"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[var(--text-secondary)]">
              Your Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              className="input-modern min-h-[150px] resize-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="user_message"
            />
          </div>

          {/* Submit Button */}
          <button className="btn-modern w-full mt-2 flex items-center justify-center gap-2" type="submit">
            <span>Send Message</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
