export default function Home() {
  return (
    <main style={{ background: "#f7f4ee", color: "#111", minHeight: "100vh", fontFamily: "serif" }}>
      
      <section style={{ padding: "120px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ letterSpacing: "0.3em", fontSize: "12px", color: "#6b645c" }}>
          ARBROATH AD 1320
        </p>

        <h1 style={{ fontSize: "64px", marginTop: "20px" }}>
          Sea Salt
        </h1>

        <p style={{ fontSize: "20px", marginTop: "20px", color: "#555" }}>
          The sea, refined into ritual.
        </p>

        <div style={{ marginTop: "40px" }}>
          <button style={{
            padding: "12px 24px",
            background: "#111",
            color: "#fff",
            border: "none",
            marginRight: "10px"
          }}>
            Discover
          </button>

          <button style={{
            padding: "12px 24px",
            border: "1px solid #111",
            background: "transparent"
          }}>
            Collection
          </button>
        </div>
      </section>

      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px" }}>
            A quiet luxury shaped by sea and time
          </h2>

          <p style={{ marginTop: "20px", lineHeight: "1.8", color: "#444" }}>
            Arbroath AD 1320 Sea Salt nasce come gesto di gusto.
            Un prodotto che unisce memoria, mare e materia.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px" }}>
            Essential. Mineral. Pure.
          </h2>

          <p style={{ marginTop: "20px", lineHeight: "1.8", color: "#444" }}>
            Un sale pensato per esaltare, non coprire.
            Una presenza silenziosa ma decisiva.
          </p>
        </div>
      </section>

      <section style={{ padding: "100px 40px", background: "#111", color: "#fff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px" }}>
            Designed to be remembered
          </h2>

          <button style={{
            marginTop: "30px",
            padding: "12px 24px",
            background: "#fff",
            color: "#000",
            border: "none"
          }}>
            Request Access
          </button>
        </div>
      </section>

    </main>
  );
}
