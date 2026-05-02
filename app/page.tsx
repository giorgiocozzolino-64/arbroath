export default function Page() {
  const card = {
    background: "rgba(255,255,255,.72)",
    border: "1px solid #e6ddd2",
    borderRadius: 18,
    padding: 22,
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#eee9df",
      padding: 24,
      fontFamily: "Georgia, 'Times New Roman', serif",
      display: "flex",
      justifyContent: "center",
    }}>
      <section style={{
        width: "100%",
        maxWidth: 1080,
        background: "#fbfaf7",
        borderRadius: 30,
        overflow: "hidden",
      }}>
        <header style={{
          background: "#101010",
          color: "white",
          padding: "34px 56px 42px",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 22,
          }}>
            <div style={{
              letterSpacing: "0.35em",
              fontSize: 12,
              color: "#d8c7a2",
              fontWeight: 700,
            }}>
              ARBROATH A.D. 1320
            </div>

            <img
              src="/arbroath-logo.png"
              alt="Arbroath"
              style={{
                width: 72,
                height: "auto",
                objectFit: "contain",
                opacity: 0.9,
              }}
            />
          </div>

          <h1 style={{
            margin: 0,
            fontSize: 64,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}>
            Digital Cask Passport
          </h1>

          <p style={{
            margin: "18px 0 0",
            fontSize: 22,
            color: "#e3dbcf",
            fontWeight: 700,
          }}>
            Sicilian Sea Salt — Islay Edition
          </p>
        </header>

        <section style={{ padding: "48px 56px 70px" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 38,
          }}>
            <div>
              <p style={{ margin: "0 0 8px", color: "#6f6a64", fontSize: 13 }}>
                Registered Lot
              </p>
              <h2 style={{
                margin: 0,
                fontSize: 36,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}>
                AAD1320-ISE-20260323-B01
              </h2>
            </div>

            <div style={{
              background: "#e9e3dc",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 14,
              fontWeight: 700,
            }}>
              ✓ Verified Digital Record
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 44,
          }}>
            {[
              ["Product", "Sicilian Sea Salt"],
              ["Cask", "100KG"],
              ["Edition", "Islay"],
              ["Status", "Verified / Maturing"],
              ["Maturation Start", "23 March 2026"],
              ["Maturation End", "30 May 2026"],
            ].map(([label, value]) => (
              <div key={label} style={card}>
                <p style={{ margin: "0 0 10px", color: "#6f6a64", fontSize: 13 }}>
                  {label}
                </p>
                <p style={{ margin: 0, fontSize: 19, fontWeight: 700 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <section style={{
            background: "#f2eee8",
            borderRadius: 22,
            padding: 32,
            marginBottom: 34,
          }}>
            <p style={{
              margin: "0 0 14px",
              color: "#77716a",
              fontSize: 12,
              letterSpacing: "0.25em",
              fontWeight: 700,
            }}>
              MATURATION TIMELINE
            </p>

            <h3 style={{
              margin: "0 0 28px",
              fontSize: 38,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}>
              From sea to cask identity
            </h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
            }}>
              <div style={{ background: "white", borderRadius: 16, padding: 26 }}>
                <p style={{ margin: "0 0 22px", color: "#6f6a64", fontSize: 15 }}>
                  Start
                </p>
                <p style={{ margin: 0, fontSize: 27, fontWeight: 700 }}>
                  23 March 2026
                </p>
              </div>

              <div style={{ background: "white", borderRadius: 16, padding: 26 }}>
                <p style={{ margin: "0 0 22px", color: "#6f6a64", fontSize: 15 }}>
                  Target Completion
                </p>
                <p style={{ margin: 0, fontSize: 27, fontWeight: 700 }}>
                  30 May 2026
                </p>
              </div>
            </div>
          </section>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}>
            <div style={{ ...card, padding: 32, minHeight: 230 }}>
              <p style={{
                margin: "0 0 26px",
                color: "#77716a",
                fontSize: 12,
                letterSpacing: "0.25em",
                fontWeight: 700,
              }}>
                LEONARDO BLACK BOX
              </p>
              <h3 style={{ margin: "0 0 22px", fontSize: 32, lineHeight: 1.08 }}>
                Environmental monitoring
              </h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7 }}>
                Temperature, humidity and vibrations are monitored throughout the
                maturation cycle, creating a continuous environmental record.
              </p>
            </div>

            <div style={{ ...card, padding: 32, minHeight: 230 }}>
              <p style={{
                margin: "0 0 26px",
                color: "#77716a",
                fontSize: 12,
                letterSpacing: "0.25em",
                fontWeight: 700,
              }}>
                E.L.Y.A.S.-A.I.
              </p>
              <h3 style={{ margin: "0 0 22px", fontSize: 32, lineHeight: 1.08 }}>
                Certified intelligence layer
              </h3>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7 }}>
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
