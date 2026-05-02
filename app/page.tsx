export default function Page() {
  const card = {
    background: "rgba(255,255,255,.75)",
    border: "1px solid #e6ddd2",
    borderRadius: 18,
    padding: 22,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ebe6dd",
        padding: 30,
        fontFamily: "Georgia, serif",
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
        {/* HEADER */}
        <header
          style={{
            background: "#0b0b0b",
            color: "white",
            padding: "36px 60px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.35em",
                color: "#d8c7a2",
                fontWeight: 700,
              }}
            >
              ARBROATH A.D. 1320
            </span>

            {/* LOGO */}
            <img
              src="/arbroath-logo.png"
              alt="Arbroath"
              style={{
                width: 260,
                height: "auto",
                opacity: 1,
                filter: "brightness(1.6)",
              }}
            />
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 64,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
            }}
          >
            Digital Cask Passport
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 22,
              color: "#e3dbcf",
              fontWeight: 600,
            }}
          >
            Sicilian Sea Salt — Islay Edition
          </p>
        </header>

        {/* CONTENT */}
        <section style={{ padding: "50px 60px 70px" }}>
          {/* LOT */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 40,
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
              }}
            >
              ✓ Verified Digital Record
            </div>
          </div>

          {/* GRID INFO */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginBottom: 45,
            }}
          >
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

          {/* TIMELINE */}
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
                marginBottom: 14,
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
                marginBottom: 30,
                fontSize: 38,
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
              <div style={{ background: "white", borderRadius: 16, padding: 26 }}>
                <p style={{ marginBottom: 20, color: "#6f6a64" }}>Start</p>
                <p style={{ fontSize: 26, fontWeight: 700 }}>
                  23 March 2026
                </p>
              </div>

              <div style={{ background: "white", borderRadius: 16, padding: 26 }}>
                <p style={{ marginBottom: 20, color: "#6f6a64" }}>
                  Target Completion
                </p>
                <p style={{ fontSize: 26, fontWeight: 700 }}>
                  30 May 2026
                </p>
              </div>
            </div>
          </section>

          {/* EXTRA INFO (QUELLA CHE TI MANCAVA) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <div style={{ ...card, padding: 30 }}>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  color: "#77716a",
                  marginBottom: 25,
                  fontWeight: 700,
                }}
              >
                LEONARDO BLACK BOX
              </p>

              <h3 style={{ fontSize: 30, marginBottom: 20 }}>
                Environmental monitoring
              </h3>

              <p style={{ lineHeight: 1.7 }}>
                Temperature, humidity and vibrations are monitored throughout
                the maturation cycle, creating a continuous environmental record.
              </p>
            </div>

            <div style={{ ...card, padding: 30 }}>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  color: "#77716a",
                  marginBottom: 25,
                  fontWeight: 700,
                }}
              >
                E.L.Y.A.S.-A.I.
              </p>

              <h3 style={{ fontSize: 30, marginBottom: 20 }}>
                Certified intelligence layer
              </h3>

              <p style={{ lineHeight: 1.7 }}>
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
