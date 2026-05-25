export const globalStyles = `
  :root {
    --bg: #eceef1;
    --bg-top: #f6f7f8;
    --text: #22262d;
    --muted: #5e6570;
    --line: #c8ced6;
    --accent: #7f6cf4;
    --accent-2: #6a57dd;
    --card: #f2f4f7;
    --footer: #1f242c;
  }

  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; scroll-behavior: smooth; }
  body {
    background: radial-gradient(1200px 600px at 10% 0%, var(--bg-top) 0%, var(--bg) 45%, #e8ebf0 100%);
    color: var(--text);
    font-family: var(--font-stack-sans-text), sans-serif;
    line-height: 1.52;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: var(--font-stack-sans-notch), sans-serif;
    letter-spacing: -0.035em;
    line-height: 1.03;
    font-weight: 600;
  }

  p, li, a, span, input, textarea, button { font-family: var(--font-stack-sans-text), sans-serif; }
  a { color: inherit; text-decoration: none; }

  .container { max-width: 1160px; margin: 0 auto; padding: 0 28px; }
  .caps { text-transform: uppercase; letter-spacing: 0.12em; font-size: 11px; }
  .muted { color: var(--muted); font-size: 13.5px; }
  .section { border-top: 1px solid var(--line); padding: 90px 0; }

  .micro-top { height: 22px; border-bottom: 1px solid var(--line); }
  .micro-top-inner { height: 100%; display: flex; align-items: center; justify-content: space-between; font-size: 10px; color: var(--muted); }

  .topnav { position: sticky; top: 0; z-index: 60; border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--bg) 88%, #fff 12%); backdrop-filter: blur(8px); }
  .topnav-inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .brand { font-size: 32px; font-weight: 700; letter-spacing: -0.03em; }
  .nav-links { display: flex; gap: 34px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; }

  .pill-btn, .ghost-pill {
    border-radius: 999px;
    padding: 10px 22px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
  }
  .pill-btn { border: 1px solid var(--accent); background: var(--accent); color: #fff; }
  .ghost-pill { border: 1px solid var(--text); color: var(--text); background: transparent; }

  .hero { padding: 74px 0 68px; }
  .hero-title { font-size: clamp(54px, 8.2vw, 88px); max-width: 900px; letter-spacing: -0.045em; }
  .hero-subtitle { font-size: 16px; margin-bottom: 8px; }
  .hero-grid { display: grid; grid-template-columns: 220px 1fr; gap: 30px; margin-top: 38px; }
  .stat-big { font-size: 46px; font-weight: 700; letter-spacing: -0.03em; }
  .row-social { margin-top: 34px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
  .socials { display: flex; gap: 18px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; }

  .sec-title { font-size: clamp(46px, 5vw, 64px); }
  .center-title { font-size: clamp(54px, 6vw, 74px); text-align: center; }

  .about-wrap { display: grid; grid-template-columns: 1fr 1.1fr 160px; gap: 28px; align-items: center; }
  .portrait-block { border-radius: 8px; background: var(--accent); min-height: 330px; display: flex; align-items: flex-end; justify-content: center; overflow: hidden; }
  .portrait-block img { width: 92%; height: auto; }
  .stats-col { display: grid; gap: 24px; }
  .stats-col .n { font-size: 40px; font-weight: 700; letter-spacing: -0.03em; }

  .cards { margin-top: 30px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
  .card { background: var(--card); border: 1px solid var(--line); border-radius: 8px; min-height: 190px; padding: 22px; }
  .card.cta { background: #d8d1ff; border-color: #c6baff; }
  .card-title { font-size: 28px; margin-bottom: 10px; }

  .expertise-grid, .career-grid, .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; }
  .list-line { border-bottom: 1px solid var(--line); padding: 16px 0; }
  .list-line .top { display: flex; justify-content: space-between; gap: 12px; font-size: 25px; font-family: var(--font-stack-sans-notch), sans-serif; }
  .score { color: var(--accent); font-size: 16px; white-space: nowrap; }
  .company { margin-bottom: 5px; }

  .testimonial-head { display: grid; grid-template-columns: 1.05fr 1fr; gap: 34px; align-items: center; margin-bottom: 16px; }
  .testimonial-head img { width: 100%; height: 220px; object-fit: cover; border-radius: 8px; }
  .testi-list .item { border-top: 1px solid var(--line); padding: 26px 0; display: grid; grid-template-columns: 170px 220px 1fr; gap: 16px; }
  .stars { color: #f2bf2b; letter-spacing: 0.12em; }

  .updates-grid { margin-top: 24px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .news-card img { width: 100%; height: 170px; object-fit: cover; border-radius: 6px; }
  .news-title { font-size: 32px; margin-top: 4px; }

  .contact-lines { margin-top: 20px; }
  .contact-lines p { margin: 0 0 8px; }
  .contact-form { display: grid; gap: 14px; }
  .contact-form input, .contact-form textarea {
    border: none; border-bottom: 1px solid #b5bbc4; background: transparent;
    padding: 10px 0; font-size: 14px; color: var(--text); outline: none;
  }

  .footer-dark { margin-top: 0; padding: 72px 0 44px; background: var(--footer); color: #f0f3f8; }
  .footer-dark .hero-line { font-size: clamp(62px, 8.5vw, 98px); letter-spacing: -0.045em; margin: 10px 0 24px; }
  .footer-meta { border-top: 1px solid #3d4451; padding-top: 16px; color: #c7cfdd; }

  @media (max-width: 980px) {
    .nav-links { display: none; }
    .hero-grid, .about-wrap, .expertise-grid, .career-grid, .contact-grid, .testimonial-head, .testi-list .item { grid-template-columns: 1fr; }
    .cards, .updates-grid { grid-template-columns: 1fr; }
    .section { padding: 70px 0; }
    .news-title { font-size: 26px; }
  }
`;
