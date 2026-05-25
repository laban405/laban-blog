import Image from "next/image";
import { updates } from "../../data";

export function UpdatesSection() {
  return (
    <section className="section" id="project">
      <div className="container">
        <div className="row-social">
          <h2 className="sec-title">Recent Updates</h2>
          <button className="pill-btn">See all news</button>
        </div>
        <div className="updates-grid">
          {updates.map((src, i) => (
            <article className="news-card" key={src + i}>
              <Image src={src} alt={`News ${i + 1}`} width={560} height={176} />
              <p className="muted">April 25, 2024</p>
              <h3 className="news-title">{`News Title ${String(i + 1).padStart(2, "0")}`}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
