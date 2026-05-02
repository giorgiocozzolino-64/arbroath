export default function Page() {
  const infoItems = [
    ["Product", "Sicilian Sea Salt"],
    ["Cask", "100KG"],
    ["Edition", "Islay"],
    ["Status", "Verified / Maturing"],
    ["Maturation Start", "23 March 2026"],
    ["Maturation End", "30 May 2026"],
  ];

  const lotNumber = "AAD1320-ISE-20260323-B01";

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .page {
          min-height: 100vh;
          background: #e7dfd0;
          padding: 34px;
          font-family: Georgia, 'Times New Roman', serif;
          display: flex;
          justify-content: center;
        }

        .certificate {
          width: 100%;
          max-width: 1120px;
          background: #fbf7ee;
          border-radius: 18px;
          border: 1px solid #bfa46d;
          box-shadow: 0 34px 90px rgba(40,28,12,.22);
          overflow: hidden;
        }

        .hero {
          position: relative;
          background:
            radial-gradient(circle at 84% 14%, rgba(191,164,109,.18), transparent 32%),
            linear-gradient(135deg, #070707 0%, #17130d 100%);
          color: white;
          padding: 54px 64px 50px;
          border-bottom: 6px double #bfa46d;
          min-height: 258px;
        }

        .heroLogo {
          position: absolute;
          right: 56px;
          top: -16px;
          width: 245px;
          height: auto;
          opacity: .95;
          filter: brightness(1.16) contrast(1.08) drop-shadow(0 18px 38px rgba(0,0,0,.48));
        }

        .heroContent {
          max-width: 720px;
          position: relative;
          z-index: 2;
        }

        .brandLine {
          margin: 0 0 34px;
          color: #d9bd78;
          font-size: 12px;
          letter-spacing: .38em;
          font-weight: 700;
          border-bottom: 1px solid rgba(217,189,120,.7);
          display: inline-block;
          padding-bottom: 10px;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: 66px;
          line-height: .9;
          letter-spacing: -.055em;
          font-weight: 400;
        }

        .subtitle {
          margin: 18px 0 0;
          font-size: 23px;
          color: #eee5d2;
          font-weight: 700;
        }

        .body {
          position: relative;
          padding: 56px 64px 76px;
          background: linear-gradient(180deg, #fbf7ee 0%, #f7f0e4 100%);
        }

        .innerBorder {
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(191,164,109,.45);
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 2;
        }

        .lotRow {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          margin-bottom: 40px;
        }

        .label {
          margin: 0 0 11px;
          color: #6e6252;
          font-size: 13px;
        }

        .lot {
          margin: 0;
          font-size: 38px;
          line-height: 1;
          letter-spacing: -.035em;
        }

        .badge {
          background: #efe5d2;
          border: 1px solid #d5bd8c;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(80,55,20,.08);
        }

        .infoGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 46px;
        }

        .card {
          background: rgba(255,255,255,.84);
          border: 1px solid #d8c9b2;
          border-radius: 16px;
          padding: 22px;
        }

        .value {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
        }

        .qrSection {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px;
          background: rgba(255,255,255,.78);
          border: 1px solid #d8c9b2;
          border-radius: 16px;
          margin-bottom: 38px;
        }

        .qrImage {
          width: 132px;
          height: 132px;
          object-fit: contain;
          background: #fff;
          border: 1px solid #d8c9b2;
          border-radius: 10px;
          padding: 8px;
        }

        .qrText {
          flex: 1;
        }

        .qrText h3 {
          margin: 0 0 10px;
          font-size: 26px;
          line-height: 1.1;
        }

        .qrText p {
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          color: #4d4338;
        }

        .timeline {
          background: #efe8da;
          border: 1px solid #d8c9b2;
          border-radius: 18px;
          padding: 34px;
          margin-bottom: 38px;
        }

        .kicker {
          margin: 0 0 14px;
          color: #756a5a;
          font-size: 12px;
          letter-spacing: .28em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .timelineTitle {
          margin: 0 0 30px;
          font-size: 39px;
          line-height: 1;
          letter-spacing: -.04em;
          font-weight: 400;
        }

        .twoGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .miniCard {
          background: #fffaf1;
          border: 1px solid #e2d4bd;
          border-radius: 14px;
          padding: 26px;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 36px;
        }

        .footerCard {
          background: rgba(255,255,255,.84);
          border: 1px solid #d8c9b2;
          border-radius: 16px;
          padding: 32px;
        }

        .footerCard h3 {
          margin: 0 0 20px;
          font-size: 31px;
          line-height: 1.1;
          font-weight: 400;
        }

        .footerCard p {
          margin: 0;
          line-height: 1.7;
          font-size: 17px;
        }

        .sealFooter {
          border-top: 1px solid #cdb98e;
          padding-top: 26px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          color: #6e6252;
          font-size: 13px;
          line-height: 1.6;
        }

        .sealFooter strong {
          color: #19140d;
        }

        @media (max-width: 900px) {
          .page { padding: 14px; }

          .hero {
            padding: 34px 28px 38px;
            min-height: auto;
          }

          .heroLogo {
            position: relative;
            right: auto;
            top: auto;
            display: block;
            width: 170px;
            margin: 0 auto 28px;
          }

          .brandLine {
            margin-bottom: 28px;
            font-size: 11px;
            letter-spacing: .28em;
          }

          h1 { font-size: 46px; }

          .subtitle { font-size: 19px; }

          .body { padding: 38px 28px 54px; }

          .innerBorder { inset: 14px; }

          .lotRow {
            flex-direction: column;
            gap: 22px;
          }

          .lot {
            font-size: 30px;
            line-height: 1.05;
            word-break: break-word;
          }

          .infoGrid { grid-template-columns: repeat(2, 1fr); }

          .qrSection {
            flex-direction: column;
            text-align: center;
          }

          .qrImage {
            width: 150px;
            height: 150px;
          }

          .timelineTitle { font-size: 32px; }

          .twoGrid,
          .footerGrid {
            grid-template-columns: 1fr;
          }

          .sealFooter {
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .page { padding: 0; }

          .certificate {
            border-radius: 0;
            border-left: 0;
            border-right: 0;
          }

          .hero { padding: 30px 22px 34px; }

          .heroLogo {
            width: 150px;
            margin-bottom: 24px;
          }

          .brandLine {
            font-size: 10px;
            letter-spacing: .22em;
            margin-bottom: 24px;
          }

          h1 {
            font-size: 39px;
            letter-spacing: -.045em;
          }

          .subtitle {
            font-size: 17px;
            line-height: 1.25;
          }

          .body { padding: 34px 22px 48px; }

          .lot { font-size: 25px; }

          .badge {
            width: 100%;
            text-align: center;
          }

          .infoGrid {
            grid-templateColumns: 1fr;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .card,
          .footerCard,
          .miniCard {
            padding: 20px;
          }

          .qrSection {
            padding: 20px;
          }

          .qrImage {
            width: 138px;
            height: 138px;
          }

          .timeline { padding: 24px; }

          .timelineTitle {
            font-size: 29px;
            line-height: 1.05;
          }
        }
      `}</style>

      <main className="page">
        <section className="certificate">
          <header className="hero">
            <img
              src="/arbroath-logo-black-header.png"
              alt="Arbroath"
              className="heroLogo"
            />

            <div className="heroContent">
              <p className="brandLine">ARBROATH A.D. 1320</p>
              <h1>Digital Cask Passport</h1>
              <p className="subtitle">Sicilian Sea Salt — Islay Edition</p>
            </div>
          </header>

          <section className="body">
            <div className="innerBorder" />

            <div className="content">
              <div className="lotRow">
                <div>
                  <p className="label">Registered Lot</p>
                  <h2 className="lot">{lotNumber}</h2>
                </div>

                <div className="badge">✓ Verified Digital Record</div>
              </div>

              <div className="infoGrid">
                {infoItems.map(([label, value]) => (
                  <div key={label} className="card">
                    <p className="label">{label}</p>
                    <p className="value">{value}</p>
                  </div>
                ))}
              </div>

              <section className="qrSection">
                <img
                  src="/qr-code_SALT.png"
                  alt="Digital verification QR code"
                  className="qrImage"
                />

                <div className="qrText">
                  <p className="kicker">Digital Verification</p>
                  <h3>Scan to verify authenticity</h3>
                  <p>
                    Access the registered lot, maturation status, environmental
                    monitoring record and verified digital identity for this
                    Sicilian Sea Salt — Islay Edition cask.
                  </p>
                </div>
              </section>

              <section className="timeline">
                <p className="kicker">Maturation Timeline</p>
                <h3 className="timelineTitle">From sea to cask identity</h3>

                <div className="twoGrid">
                  <div className="miniCard">
                    <p className="label">Start</p>
                    <p className="value">23 March 2026</p>
                  </div>

                  <div className="miniCard">
                    <p className="label">Target Completion</p>
                    <p className="value">30 May 2026</p>
                  </div>
                </div>
              </section>

              <div className="footerGrid">
                <div className="footerCard">
                  <p className="kicker">Leonardo Black Box</p>
                  <h3>Environmental monitoring</h3>
                  <p>
                    Temperature, humidity and vibrations are monitored throughout
                    the maturation cycle, creating a continuous environmental
                    record.
                  </p>
                </div>

                <div className="footerCard">
                  <p className="kicker">E.L.Y.A.S.-A.I.</p>
                  <h3>Certified intelligence layer</h3>
                  <p>
                    The process is supported by a certified E.L.Y.A.S.-A.I.
                    system, protecting traceability, quality control and digital
                    integrity.
                  </p>
                </div>
              </div>

              <footer className="sealFooter">
                <div>
                  <strong>Digital Seal</strong>
                  <br />
                  Verified under Arbroath A.D. 1320 registry protocol.
                </div>

                <div>
                  <strong>Record Class</strong>
                  <br />
                  Notarial-style maturation certificate.
                </div>
              </footer>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
