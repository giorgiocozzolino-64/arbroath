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
  const qrData = `https://arbroath.io/verify/${lotNumber}`;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .page {
          min-height: 100vh;
          background: 
            radial-gradient(circle at 30% 20%, rgba(191,164,109,0.08), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(191,164,109,0.06), transparent 50%),
            #e7dfd0;
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
          box-shadow: 
            0 34px 90px rgba(40,28,12,.22),
            0 8px 24px rgba(40,28,12,.12),
            inset 0 1px 0 rgba(255,255,255,.5);
          overflow: hidden;
          position: relative;
        }

        /* Watermark pattern */
        .certificate::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(191,164,109,0.02) 80px,
              rgba(191,164,109,0.02) 160px
            );
          pointer-events: none;
          z-index: 1;
        }

        .hero {
          position: relative;
          background:
            radial-gradient(ellipse at 84% 14%, rgba(191,164,109,.22), transparent 38%),
            radial-gradient(circle at 10% 80%, rgba(40,28,12,.15), transparent 40%),
            linear-gradient(135deg, #070707 0%, #1a1410 50%, #17130d 100%);
          color: white;
          padding: 54px 64px 50px;
          border-bottom: 6px double #bfa46d;
          min-height: 258px;
          overflow: hidden;
        }

        /* Decorative corner accents */
        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 180px;
          height: 180px;
          background: 
            linear-gradient(135deg, transparent 40%, rgba(191,164,109,0.08) 41%, transparent 42%),
            linear-gradient(45deg, transparent 40%, rgba(191,164,109,0.06) 41%, transparent 42%);
          pointer-events: none;
        }

        .heroLogo {
          position: absolute;
          right: 56px;
          top: -16px;
          width: 245px;
          height: auto;
          opacity: .95;
          filter: brightness(1.16) contrast(1.08) drop-shadow(0 18px 38px rgba(0,0,0,.48));
          animation: fadeInUp 0.8s ease-out 0.2s both;
          z-index: 3;
        }

        .heroContent {
          max-width: 720px;
          position: relative;
          z-index: 2;
          animation: fadeInUp 0.8s ease-out both;
        }

        .brandLine {
          margin: 0 0 34px;
          color: #d9bd78;
          font-size: 11px;
          letter-spacing: 0.42em;
          font-weight: 700;
          text-transform: uppercase;
          font-variant: small-caps;
          border-bottom: 1px solid rgba(217,189,120,.7);
          display: inline-block;
          padding-bottom: 10px;
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
          letter-spacing: -.015em;
        }

        .body {
          position: relative;
          padding: 56px 64px 76px;
          background: 
            linear-gradient(180deg, #fbf7ee 0%, #f7f0e4 100%);
          z-index: 2;
        }

        .innerBorder {
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(191,164,109,.45);
          pointer-events: none;
          border-radius: 8px;
        }

        /* Decorative corner elements */
        .innerBorder::before,
        .innerBorder::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid rgba(191,164,109,.6);
        }

        .innerBorder::before {
          top: -1px;
          left: -1px;
          border-right: none;
          border-bottom: none;
        }

        .innerBorder::after {
          bottom: -1px;
          right: -1px;
          border-left: none;
          border-top: none;
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
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .label {
          margin: 0 0 11px;
          color: #6e6252;
          font-size: 11px;
          letter-spacing: 0.32em;
          font-weight: 700;
          text-transform: uppercase;
          font-variant: small-caps;
        }

        .lot {
          margin: 0;
          font-size: 38px;
          line-height: 1;
          letter-spacing: 0.02em;
          font-family: 'Courier New', monospace;
          font-weight: 700;
          color: #19140d;
        }

        .badge {
          background: 
            linear-gradient(135deg, #f5ebd8 0%, #efe5d2 100%);
          border: 2px solid #d5bd8c;
          border-radius: 999px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 
            0 8px 24px rgba(80,55,20,.12),
            inset 0 1px 0 rgba(255,255,255,.6);
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: all 0.3s ease;
        }

        .badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.4),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .badge:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 12px 32px rgba(80,55,20,.18),
            inset 0 1px 0 rgba(255,255,255,.8);
        }

        .infoGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 46px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .card {
          background: rgba(255,255,255,.88);
          border: 1px solid #d8c9b2;
          border-radius: 16px;
          padding: 22px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #bfa46d, #d5bd8c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(80,55,20,.14);
          border-color: #bfa46d;
          background: rgba(255,255,255,.98);
        }

        .card:hover::before {
          transform: scaleX(1);
        }

        .value {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
          color: #19140d;
          transition: color 0.3s ease;
        }

        .card:hover .value {
          color: #8b6f3d;
        }

        .timeline {
          background: 
            linear-gradient(135deg, #f2ebd9 0%, #efe8da 100%);
          border: 1px solid #d8c9b2;
          border-radius: 18px;
          padding: 34px;
          margin-bottom: 38px;
          box-shadow: 0 4px 16px rgba(80,55,20,.06);
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .kicker {
          margin: 0 0 14px;
          color: #756a5a;
          font-size: 11px;
          letter-spacing: 0.32em;
          font-weight: 700;
          text-transform: uppercase;
          font-variant: small-caps;
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
          transition: all 0.3s ease;
          cursor: default;
        }

        .miniCard:hover {
          background: #fff;
          border-color: #d5bd8c;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(80,55,20,.1);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 36px;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .footerCard {
          background: rgba(255,255,255,.88);
          border: 1px solid #d8c9b2;
          border-radius: 16px;
          padding: 32px;
          transition: all 0.35s ease;
          cursor: default;
        }

        .footerCard:hover {
          background: rgba(255,255,255,.98);
          border-color: #bfa46d;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(80,55,20,.12);
        }

        .footerCard h3 {
          margin: 0 0 20px;
          font-size: 31px;
          line-height: 1.1;
          font-weight: 400;
          letter-spacing: -.02em;
        }

        .footerCard p {
          margin: 0;
          line-height: 1.7;
          font-size: 17px;
          color: #4a3f32;
        }

        .sealFooter {
          border-top: 1px solid #cdb98e;
          padding-top: 26px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          color: #6e6252;
          font-size: 13px;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.7s both;
        }

        .sealFooter strong {
          color: #19140d;
          font-weight: 700;
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-variant: small-caps;
        }

        /* QR Code section */
        .qrSection {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: rgba(255,255,255,.7);
          border: 1px solid #e2d4bd;
          border-radius: 12px;
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease-out 0.65s both;
        }

        .qrCode {
          width: 100px;
          height: 100px;
          background: white;
          border: 2px solid #d8c9b2;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(80,55,20,.08);
        }

        .qrCode svg {
          width: 80px;
          height: 80px;
        }

        .qrInfo {
          flex: 1;
        }

        .qrInfo .label {
          margin-bottom: 6px;
        }

        .qrInfo p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: #5a5044;
        }

        .qrInfo code {
          display: inline-block;
          margin-top: 6px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: #8b6f3d;
          background: rgba(191,164,109,.1);
          padding: 4px 8px;
          border-radius: 4px;
        }

        /* Certificate metadata */
        .certMeta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: rgba(239,229,210,.4);
          border-radius: 12px;
          margin-bottom: 32px;
          font-size: 12px;
          color: #6e6252;
          animation: fadeInUp 0.8s ease-out 0.35s both;
        }

        .certMeta strong {
          color: #19140d;
          font-weight: 700;
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
            font-size: 10px;
            letter-spacing: .32em;
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

          .timelineTitle { font-size: 32px; }

          .twoGrid,
          .footerGrid {
            grid-template-columns: 1fr;
          }

          .sealFooter {
            flex-direction: column;
          }

          .qrSection {
            flex-direction: column;
            text-align: center;
          }

          .certMeta {
            flex-direction: column;
            gap: 12px;
            text-align: center;
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
            font-size: 9px;
            letter-spacing: .28em;
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
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .card,
          .footerCard,
          .miniCard {
            padding: 20px;
          }

          .timeline { padding: 24px; }

          .timelineTitle {
            font-size: 29px;
            line-height: 1.05;
          }

          .qrCode {
            width: 90px;
            height: 90px;
          }

          .qrCode svg {
            width: 70px;
            height: 70px;
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
              <p className="brandLine">Arbroath A.D. 1320</p>
              <h1>Digital Cask Passport</h1>
              <p className="subtitle">Sicilian Sea Salt — Islay Edition</p>
            </div>
          </header>

          <section className="body">
            <div className="innerBorder" />

            <div className="content">
              <div className="certMeta">
                <div>
                  <strong>Certificate Issued:</strong> 23 March 2026
                </div>
                <div>
                  <strong>Registry ID:</strong> {lotNumber}
                </div>
                <div>
                  <strong>Document Type:</strong> Maturation Passport
                </div>
              </div>

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

              <div className="qrSection">
                <div className="qrCode">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#19140d" x="0" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="7" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="35" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="0" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="7" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="7" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="7" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="7" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="7" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="14" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="21" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="28" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="35" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="35" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="35" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="35" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="35" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="7" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="35" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="42" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="49" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="49" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="49" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="49" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="7" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="42" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="56" width="7" height="7"/>
                    <rect fill="#19140d" x="7" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="35" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="63" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="7" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="35" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="49" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="70" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="77" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="77" width="7" height="7"/>
                    <rect fill="#19140d" x="49" y="77" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="77" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="77" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="77" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="49" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="63" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="70" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="84" width="7" height="7"/>
                    <rect fill="#19140d" x="0" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="14" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="21" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="28" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="49" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="56" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="77" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="84" y="91" width="7" height="7"/>
                    <rect fill="#19140d" x="91" y="91" width="7" height="7"/>
                  </svg>
                </div>
                <div className="qrInfo">
                  <p className="label">Digital Verification</p>
                  <p>
                    Scan to verify authenticity and access complete cask history,
                    environmental data, and real-time maturation status.
                  </p>
                  <code>{qrData}</code>
                </div>
              </div>

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
                    record locked into the blockchain ledger.
                  </p>
                </div>

                <div className="footerCard">
                  <p className="kicker">E.L.Y.A.S.-A.I.</p>
                  <h3>Certified intelligence layer</h3>
                  <p>
                    The process is supported by a certified E.L.Y.A.S.-A.I.
                    system, protecting traceability, quality control and digital
                    integrity across the entire supply chain.
                  </p>
                </div>
              </div>

              <footer className="sealFooter">
                <div>
                  <strong>Digital Seal</strong>
                  Verified under Arbroath A.D. 1320 registry protocol.<br/>
                  Cryptographic signature: SHA-256 validated.
                </div>

                <div>
                  <strong>Record Class</strong>
                  Notarial-style maturation certificate.<br/>
                  IPFS distributed ledger compliant.
                </div>

                <div>
                  <strong>Issuing Authority</strong>
                  Arbroath Certification Bureau<br/>
                  Est. A.D. 1320 · Scotland
                </div>
              </footer>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
