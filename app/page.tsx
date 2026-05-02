export default function Page() {
  const infoItems = [
    ["Product", "Sicilian Sea Salt"],
    ["Cask", "100KG"],
    ["Edition", "Islay"],
    ["Status", "Verified / Maturing"],
    ["Maturation Start", "23 March 2026"],
    ["Maturation End", "30 May 2026"],
  ];

  const cardStyle = {
    background: "rgba(255,255,255,.82)",
    border: "1px solid #d8c9b2",
    borderRadius: 16,
    padding: 22,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#e7dfd0",
        padding: 34,
        fontFamily: "Georgia, 'Times New Roman', serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 1120,
          background: "#fbf7ee",
          borderRadius: 18,
          border: "1px solid #bfa46d",
          boxShadow: "0 34px 90px rgba(40,28,12,.22)",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            position: "relative",
            background:
              "radial-gradient(circle at 82% 22%, rgba(191,164,109,.18), transparent 30%), linear-gradient(135deg, #070707 0%, #15120d 100%)",
            color: "white",
            padding: "46px 64px 52px",
            borderBottom: "6px double #bfa46d",
          }}
        >
          <img
            src="/arbroath-logo-black-header.png"
            alt="Arbroath"
            style={{
              position: "absolute",
              right: 54,
              top: 34,
              width: 245,
              height: "auto",
              opacity: 0.9,
              filter: "brightness(1.12) contrast(1.08)",
            }}
          />

          <div
            style={{
              maxWidth: 720,
              position: "relative",
              zIndex: 2,
            }}
          >
            <p
              style={{
                margin: "0 0 24px",
                color: "#d9bd78",
                fontSize: 12,
                letterSpacing: "0.38em",
                fontWeight: 700,
                borderBottom: "1px solid rgba(217,189,120,.65)",
                display: "inline-block",
                paddingBottom: 10,
              }}
            >
              ARBROATH A.D. 1320
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: 66,
                lineHeight: 0.9,
                letterSpacing: "-0.055em",
              }}
            >
              Digital Cask Passport
            </h1>

            <p
              style={{
                margin: "18px 0 0",
                fontSize: 23,
                color: "#eee5d2",
                fontWeight: 700,
              }}
            >
              Sicilian Sea Salt — Islay Edition
            </p>
          </div>
        </header>

        <section
          style={{
            position: "relative",
            padding: "56px 64px 76px",
            background:
              "linear-gradient(180deg, #fbf7ee 0%, #f7f0e4 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 22,
              border: "1px solid rgba(191,164,109,.45)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 30,
                marginBottom: 40,
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 9px",
                    color: "#6e6252",
                    fontSize: 13,
                  }}
                >
                  Registered Lot
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: 38,
                    lineHeight: 1,
                    letterSpacing: "-0.035em",
                  }}
                >
                  AAD1320-ISE-20260323-B01
                </h2>
              </div>

              <div
                style={{
                  background: "#efe5d2",
                  border: "1px solid #d5bd8c",
                  borderRadius: 999,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  boxShadow: "0 8px 24px rgba(80,55,20,.08)",
                }}
              >
                ✓ Verified Digital Record
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                marginBottom: 46,
              }}
            >
              {infoItems.map(([label, value]) => (
                <div key={label} style={cardStyle}>
                  <p
                    style={{
                      margin: "0 0 11px",
                      color: "#6e6252",
                      fontSize: 13,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 19,
                      fontWeight: 700,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <section
              style={{
                background: "#efe8da",
                border: "1px solid #d8c9b2",
                borderRadius: 18,
                padding: 34,
                marginBottom: 38,
              }}
            >
              <p
                style={{
                  margin: "0 0 14px",
                  color: "#756a5a",
                  fontSize: 12,
                  letterSpacing: "0.28em",
                  fontWeight: 700,
                }}
              >
                MATURATION TIMELINE
              </p>

              <h3
                style={{
                  margin: "0 0 30px",
                  fontSize: 39,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                From sea to cask identity
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    background: "#fffaf1",
                    border: "1px solid #e2d4bd",
                    borderRadius: 14,
                    padding: 26,
                  }}
                >
                  <p style={{ margin: "0 0 20px", color: "#6e6252" }}>
                    Start
                  </p>
                  <p style={{ margin: 0, fontSize: 27, fontWeight: 700 }}>
                    23 March 2026
                  </p>
                </div>

                <div
                  style={{
                    background: "#fffaf1",
                    border: "1px solid #e2d4bd",
                    borderRadius: 14,
                    padding: 26,
                  }}
                >
                  <p style={{ margin: "0 0 20px", color: "#6e6252" }}>
                    Target Completion
                  </p>
                  <p style={{ margin: 0, fontSize: 27, fontWeight: 700 }}>
                    30 May 2026
                  </p>
                </div>
              </div>
            </section>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginBottom: 36,
              }}
            >
              <div style={{ ...cardStyle, padding: 32 }}>
                <p
                  style={{
                    margin: "0 0 25px",
                    fontSize: 12,
                    letterSpacing: "0.27em",
                    color: "#756a5a",
                    fontWeight: 700,
                  }}
                >
                  LEONARDO BLACK BOX
                </p>
                <h3
                  style={{
                    margin: "0 0 20px",
                    fontSize: 31,
                    lineHeight: 1.1,
                  }}
                >
                  Environmental monitoring
                </h3>
                <p style={{ margin: 0, lineHeight: 1.7, fontSize: 17 }}>
                  Temperature, humidity and vibrations are monitored throughout
                  the maturation cycle, creating a continuous environmental
                  record.
                </p>
              </div>

              <div style={{ ...cardStyle, padding: 32 }}>
                <p
                  style={{
                    margin: "0 0 25px",
                    fontSize: 12,
                    letterSpacing: "0.27em",
                    color: "#756a5a",
                    fontWeight: 700,
                  }}
                >
                  E.L.Y.A.S.-A.I.
                </p>
                <h3
                  style={{
                    margin: "0 0 20px",
                    fontSize: 31,
                    lineHeight: 1.1,
                  }}
                >
                  Certified intelligence layer
                </h3>
                <p style={{ margin: 0, lineHeight: 1.7, fontSize: 17 }}>
                  The process is supported by a certified E.L.Y.A.S.-A.I.
                  system, protecting traceability, quality control and digital
                  integrity.
                </p>
              </div>
            </div>

            <footer
              style={{
                borderTop: "1px solid #cdb98e",
                paddingTop: 26,
                display: "flex",
                justifyContent: "space-between",
                gap: 24,
                color: "#6e6252",
                fontSize: 13,
              }}
            >
              <div>
                <strong style={{ color: "#19140d" }}>Digital Seal</strong>
                <br />
                Verified under Arbroath A.D. 1320 registry protocol.
              </div>

              <div style={{ textAlign: "right" }}>
                <strong style={{ color: "#19140d" }}>Record Class</strong>
                <br />
                Notarial-style maturation certificate.
              </div>
            </footer>
          </div>
        </section>
      </section>
    </main>
  );
}
