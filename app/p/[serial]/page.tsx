import Database from "better-sqlite3";

const db = new Database(process.cwd() + "/arbroath.db");

export default function KidPage({
  params,
}: {
  params: { serial: string };
}) {
  const kid = db
    .prepare(
      `
      SELECT * FROM child_jars
      WHERE serial = ?
    `
    )
    .get(params.serial) as any;

  if (!kid) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#050505",
          color: "#d4af37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        <h1>Jar Not Found</h1>
      </main>
    );
  }

  const unitLabel = `${kid.unit_number} of 666`;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a1a1a 0%, #050505 60%)",
        color: "#f5e7b2",
        padding: "40px 20px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <section
          style={{
            border: "1px solid rgba(212,175,55,0.3)",
            padding: "50px",
            background: "rgba(0,0,0,0.65)",
            borderRadius: "24px",
            boxShadow: "0 0 40px rgba(212,175,55,0.08)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
              fontSize: "12px",
              marginBottom: "20px",
            }}
          >
            DIGITAL JAR PASSPORT
          </p>

          <h1
            style={{
              fontSize: "64px",
              marginBottom: "10px",
              color: "#f7d774",
              textShadow: "0 0 18px rgba(212,175,55,0.2)",
            }}
          >
            ARBROATH
          </h1>

          <p
            style={{
              letterSpacing: "8px",
              marginBottom: "40px",
              color: "#c5a45a",
            }}
          >
            — A.D. 1320 —
          </p>

          <h2
            style={{
              fontSize: "36px",
              marginBottom: "14px",
            }}
          >
            Sicilian Sea Salt
            <br />
            Aged in Islay Whisky Casks
          </h2>

          <p
            style={{
              color: "#d4af37",
              fontSize: "24px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            VERIFIED AUTHENTICITY
          </p>

          {/* QR FRAME */}
          <div
            style={{
              width: "320px",
              height: "320px",
              margin: "0 auto",
              border: "6px solid #b68b2c",
              padding: "18px",
              background: "#050505",
              boxShadow: "0 0 35px rgba(212,175,55,0.15)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "4px solid #d4af37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af37",
                fontSize: "18px",
                letterSpacing: "3px",
              }}
            >
              QR ARTWORK
            </div>
          </div>

          <p
            style={{
              marginTop: "28px",
              color: "#c5a45a",
              letterSpacing: "2px",
            }}
          >
            SCAN TO UNLOCK
            <br />
            THE STORY. THE SCIENCE. THE LEGACY.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "inline-block",
              border: "1px solid #d4af37",
              padding: "12px 28px",
              borderRadius: "12px",
              color: "#f5d06f",
              letterSpacing: "3px",
            }}
          >
            ELYAS INSIDE
          </div>
        </section>

        {/* INFO GRID */}
        <section
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "SERIAL",
              value: kid.serial,
            },
            {
              title: "FATHER CASK",
              value: "B04",
            },
            {
              title: "NUMBERED EDITION",
              value: unitLabel,
            },
            {
              title: "STATUS",
              value: kid.status,
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                padding: "28px",
                borderRadius: "20px",
                background: "rgba(0,0,0,0.5)",
              }}
            >
              <p
                style={{
                  color: "#b68b2c",
                  letterSpacing: "3px",
                  fontSize: "12px",
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </p>

              <h3
                style={{
                  fontSize: "24px",
                  color: "#f5e7b2",
                }}
              >
                {item.value}
              </h3>
            </div>
          ))}
        </section>

        {/* BUTTONS */}
        <section
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "RECIPES",
            "LEONARDO BLACK BOX",
            "PROVENANCE",
            "ELYAS INSIDE",
          ].map((button) => (
            <button
              key={button}
              style={{
                background:
                  "linear-gradient(135deg,#1b1b1b,#0a0a0a)",
                border: "1px solid #d4af37",
                color: "#f5d06f",
                padding: "24px",
                borderRadius: "20px",
                fontSize: "16px",
                letterSpacing: "2px",
                cursor: "pointer",
                boxShadow: "0 0 18px rgba(212,175,55,0.08)",
              }}
            >
              {button}
            </button>
          ))}
        </section>

        {/* STORY */}
        <section
          style={{
            marginTop: "60px",
            border: "1px solid rgba(212,175,55,0.25)",
            padding: "40px",
            borderRadius: "24px",
            background: "rgba(0,0,0,0.55)",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "24px",
              color: "#f5d06f",
            }}
          >
            Father Cask Legacy
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#d9c999",
              fontSize: "18px",
            }}
          >
            This numbered child jar originates from Father Cask B04,
            part of the ARBROATH A.D. 1320 provenance collection.
            Sicilian Sea Salt crystals were matured inside Islay whisky
            casks to create a rare sensory identity inspired by smoke,
            maritime winds and Scottish heritage.
          </p>

          <p
            style={{
              marginTop: "24px",
              lineHeight: "1.9",
              color: "#d9c999",
              fontSize: "18px",
            }}
          >
            Each jar carries a dynamic digital passport powered by
            ELYAS provenance architecture with future integrations for
            scan analytics, anti-counterfeit validation, collectible
            ownership history and blockchain notarization.
          </p>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "70px",
            textAlign: "center",
            color: "#8f6d25",
            letterSpacing: "3px",
            fontSize: "12px",
          }}
        >
          ARBROATH • THE INDEPENDENT SPIRIT OF SCOTLAND
        </footer>
      </div>
    </main>
  );
}
