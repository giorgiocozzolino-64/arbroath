export default function Home() {
  return (
    <main
      style={{
        background: "#f7f4ee",
        color: "#111",
        minHeight: "100vh",
        fontFamily: "serif",
        padding: "80px 40px",
      }}
    >
      <p style={{ letterSpacing: "0.3em", fontSize: "12px", color: "#6b645c" }}>
        ARBROATH AD 1320
      </p>

      <h1 style={{ fontSize: "64px", marginTop: "20px" }}>Sea Salt</h1>

      <p style={{ fontSize: "20px", marginTop: "20px", color: "#555" }}>
        The sea, refined into ritual.
      </p>

      <section style={{ marginTop: "80px", maxWidth: "900px" }}>
        <h2 style={{ fontSize: "40px" }}>
          A quiet luxury shaped by sea and time
        </h2>

        <p style={{ marginTop: "20px", lineHeight: "1.8", color: "#444" }}>
          Arbroath AD 1320 Sea Salt nasce come gesto di gusto. Un prodotto che
          unisce memoria, mare e materia.
        </p>
      </section>
    </main>
  );
}
