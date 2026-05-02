export default function Page() {
  const cardStyle = {
    background: "rgba(255,255,255,.75)",
    border: "1px solid #e6ddd2",
    borderRadius: 18,
    padding: 22,
  };

  const infoItems = [
    ["Product", "Sicilian Sea Salt"],
    ["Cask", "100KG"],
    ["Edition", "Islay"],
    ["Status", "Verified / Maturing"],
    ["Maturation Start", "23 March 2026"],
    ["Maturation End", "30 May 2026"],
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ebe6dd",
        padding: 30,
        fontFamily: "Georgia, 'Times New Roman', serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 1100,
          background: "#fbfaf7",
          borderRadius: 30,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
        }}
      >
        <header
          style={{
            background:
              "radial-gradient(circle at 82% 20%, rgba(196,160,82,.16), transparent 28%), #0b0b0b",
            color: "white",
            padding: "42px 60px 54px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 300px",
              alignItems: "center",
              gap: 44,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  letterSpacing: "0.35em",
                  color: "#d8c7a2",
                  fontWeight: 700,
                  marginBottom: 46,
                  borderBottom: "1px solid rgba(216,199,162,.55)",
                  paddingBottom: 10,
                }}
              >
                ARBROATH A.D. 1320
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: 64,
                  lineHeight: 0.9,
                  letterSpacing: "-0.05em",
                  maxWidth: 720,
                }}
              >
                Digital Cask Passport
              </h1>

              <p
                style={{
                  margin: "18px 0 0",
                  fontSize: 22,
                  color: "#e3dbcf",
                  fontWeight: 700,
                }}
              >
                Sicilian Sea Salt — Islay Edition
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderLeft: "1px solid rgba(216,199,162,.28)",
                minHeight: 260,
              }}
            >
              <img
                src="/arbroath-logo.png"
                alt="Arbroath"
                style={{
                  width: 230,
                  height: "auto",
                  objectFit: "contain",
                  opacity: 0.96,
                  filter:
                    "brightness(1.7) contrast(1.15) drop-shadow(0 10px 28px rgba(0,0,0,.45))",
                }}
              />
            </div>
          </div>
        </header>

        <section style={{ padding: "50px 60px 70px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 40,
              gap: 30,
            }}
          >
            <div>
              <p style={{ margin: "0 0 8px", color: "#6f6a64", fontSize: 13 }}>
                Registered Lot
              </p>
              <h2
                style={{
                  margin: 0,
                  fontSize: 36,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                AAD1320-ISE-20260323-B01
              </h2>
            </div>

            <div
              style={{
                background: "#e9e3dc",
                borderRadius: 999,
                padding: "12px 22px",
                fontSize: 14,
                fontWeight: 700,
                whiteSpace: "nowrap",
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
              marginBottom: 45,
            }}
          >
            {infoItems.map(([label, value]) => (
              <div key={label} style={cardStyle}>
                <p style={{ margin: "0 0 10px", color: "#6f6a64", fontSize: 13 }}>
                  {label}
                </p>
                <p style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <section
            style={{
              background: "#f2eee8",
              borderRadius: 22,
              padding: 32,
              marginBottom: 35,
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                color: "#77716a",
                fontSize: 12,
                letterSpacing: "0.25em",
                fontWeight: 700,
              }}
            >
              MATURATION TIMELINE
            </p>

            <h3
              style={{
                margin: "0 0 30px",
                fontSize: 38,
                letterSpacing: "-0.04em",
                lineHeight: 1,
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
              <div style={{ background: "white", borderRadius: 16, padding: 26 }}>
                <p style={{ margin: "0 0 20px", color: "#6f6a64" }}>Start</p>
                <p style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>
                  23 March 2026
                </p>
              </div>

              <div style={{ background: "white", borderRadius: 16, padding: 26 }}>
                <p style={{ margin: "0 0 20px", color: "#6f6a64" }}>
                  Target Completion
                </p>
                <p style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>
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
            }}
          >
            <div style={{ ...cardStyle, padding: 30 }}>
              <p
                style={{
                  margin: "0 0 25px",
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  color: "#77716a",
                  fontWeight: 700,
                }}
              >
                LEONARDO BLACK BOX
              </p>

              <h3 style={{ margin: "0 0 20px", fontSize: 30, lineHeight: 1.1 }}>
                Environmental monitoring
              </h3>

              <p style={{ margin: 0, lineHeight: 1.7, fontSize: 17 }}>
                Temperature, humidity and vibrations are monitored throughout
                the maturation cycle, creating a continuous environmental record.
              </p>
            </div>

            <div style={{ ...cardStyle, padding: 30 }}>
              <p
                style={{
                  margin: "0 0 25px",
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  color: "#77716a",
                  fontWeight: 700,
                }}
              >
                E.L.Y.A.S.-A.I.
              </p>

              <h3 style={{ margin: "0 0 20px", fontSize: 30, lineHeight: 1.1 }}>
                Certified intelligence layer
              </h3>

              <p style={{ margin: 0, lineHeight: 1.7, fontSize: 17 }}>
                The process is supported by a certified E.L.Y.A.S.-A.I. system,
                protecting traceability, quality control and digital integrity.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
