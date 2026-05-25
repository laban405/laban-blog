export function ContactSection() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <h2 className="sec-title">Contact</h2>
          <p className="muted">Feel free to reach out for collaborations, inquiries, or just a quick conversation.</p>
          <div className="contact-lines muted">
            <p>contact@finharperdesigns.com</p>
            <p>+1 (555) 123-4567</p>
            <p>123 Design Ave, San Francisco, CA</p>
          </div>
        </div>
        <form className="contact-form">
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <input placeholder="Your Phone" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows={4} />
          <button type="button" className="pill-btn" style={{ width: "fit-content" }}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
