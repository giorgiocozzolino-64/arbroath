<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Digital Cask Passport</title>
  <style>
    :root {
      --ink: #0f0f0f;
      --muted: #6f6a64;
      --paper: #fbfaf8;
      --panel: #f3f0eb;
      --line: #e9e3dc;
      --pill: #e9e3dc;
      --white: #ffffff;
    }

    * { box-sizing: border-box; }

    html, body {
      margin: 0;
      padding: 0;
      background: #efede9;
      color: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
    }

    body {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    .passport {
      width: 100%;
      max-width: 980px;
      min-height: 100vh;
      background: var(--paper);
      overflow: hidden;
    }

    .brand {
      text-align: center;
      padding: 18px 24px 10px;
      background: var(--paper);
    }

    .brand img {
      width: 250px;
      max-width: 70%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .hero {
      background: #101010;
      color: #fff;
      padding: 34px 50px 38px;
    }

    .hero h1 {
      margin: 0;
      font-size: 52px;
      line-height: 0.95;
      letter-spacing: -0.03em;
      font-weight: 700;
    }

    .subtitle {
      margin: 16px 0 0;
      font-size: 20px;
      font-weight: 700;
    }

    .content {
      padding: 40px 50px 60px;
    }

    .lot-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      margin-bottom: 28px;
    }

    .eyebrow {
      margin: 0 0 8px;
      color: var(--muted);
      font-size: 13px;
    }

    .lot {
      margin: 0;
      font-size: 32px;
      letter-spacing: -0.02em;
    }

    .verified {
      flex: 0 0 auto;
      background: var(--pill);
      border-radius: 999px;
      padding: 11px 20px;
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 38px;
    }

    .card {
      background: rgba(255,255,255,0.74);
      border: 1px solid var(--line);
      border-radius: 17px;
      padding: 20px 20px 18px;
      min-height: 82px;
    }

    .card.wide { grid-column: span 1; }

    .label {
      margin: 0 0 10px;
      color: var(--muted);
      font-size: 13px;
    }

    .value {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
    }

    .timeline {
      background: var(--panel);
      border-radius: 18px;
      padding: 30px;
      margin-bottom: 30px;
    }

    .kicker {
      margin: 0 0 10px;
      color: var(--muted);
      font-size: 12px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
    }

    .timeline h2 {
      margin: 0 0 24px;
      font-size: 34px;
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    .timeline-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .large-card {
      background: #fff;
      border-radius: 14px;
      padding: 22px;
      min-height: 108px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .system-card {
      background: rgba(255,255,255,0.72);
      border: 1px solid var(--line);
      border-radius: 17px;
      padding: 28px;
      min-height: 130px;
    }

    @media (max-width: 760px) {
      .hero, .content { padding-left: 24px; padding-right: 24px; }
      .hero h1 { font-size: 42px; }
      .lot-row { flex-direction: column; align-items: flex-start; }
      .grid { grid-template-columns: repeat(2, 1fr); }
      .timeline-grid, .footer-grid { grid-template-columns: 1fr; }
    }

    @media print {
      @page { size: A4; margin: 0; }
      html, body { background: #fff; }
      body { display: block; }
      .passport {
        max-width: none;
        width: 100%;
        min-height: auto;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .brand img { width: 220px; }
      .hero { padding: 30px 46px 34px; }
      .content { padding: 36px 46px 52px; }
    }
  </style>
</head>
<body>
  <main class="passport">
    <section class="brand">
      <img src="arbroath-logo.png" alt="Arbroath - A.D. 1320" />
    </section>

    <header class="hero">
      <h1>Digital Cask Passport</h1>
      <p class="subtitle">Sicilian Sea Salt — Islay Edition</p>
    </header>

    <section class="content">
      <div class="lot-row">
        <div>
          <p class="eyebrow">Registered Lot</p>
          <h2 class="lot">AAD1320-ISE-20260323-B01</h2>
        </div>
        <div class="verified">✓ Verified Digital Record</div>
      </div>

      <div class="grid">
        <article class="card">
          <p class="label">Product</p>
          <p class="value">Sicilian Sea Salt</p>
        </article>
        <article class="card">
          <p class="label">Cask</p>
          <p class="value">100KG</p>
        </article>
        <article class="card">
          <p class="label">Edition</p>
          <p class="value">Islay</p>
        </article>
        <article class="card">
          <p class="label">Status</p>
          <p class="value">Verified / Maturing</p>
        </article>
        <article class="card">
          <p class="label">Maturation Start</p>
          <p class="value">23 March 2026</p>
        </article>
        <article class="card">
          <p class="label">Maturation End</p>
          <p class="value">30 May 2026</p>
        </article>
      </div>

      <section class="timeline">
        <p class="kicker">Maturation Timeline</p>
        <h2>From sea to cask identity</h2>
        <div class="timeline-grid">
          <article class="large-card">
            <p class="label">Start</p>
            <p class="value">23 March 2026</p>
          </article>
          <article class="large-card">
            <p class="label">Target Completion</p>
            <p class="value">30 May 2026</p>
          </article>
        </div>
      </section>

      <section class="footer-grid">
        <article class="system-card">
          <p class="kicker">Leonardo Black Box</p>
          <p class="value">Traceability record active</p>
        </article>
        <article class="system-card">
          <p class="kicker">E.L.Y.A.S.-A.I.</p>
          <p class="value">Verified maturation intelligence</p>
        </article>
      </section>
    </section>
  </main>
</body>
</html>
