export default function LotPage({ params }: { params: { id: string } }) {
  const lotId = params.id;

  return (
    <main style={{
      background: "#f5f1eb",
      padding: "60px",
      fontFamily: "serif",
      minHeight: "100vh"
    }}>
      
      <p style={{ letterSpacing: "2px", fontSize: "12px" }}>
        ARBROATH A.D. 1320
      </p>

      <h1 style={{ fontSize: "48px", margin: "10px 0" }}>
        Lot Traceability
      </h1>

      <p style={{ fontSize: "22px", color: "#6b5e55" }}>
        Islay Edition
      </p>

      <div style={{
        background: "#e8e0d8",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "30px"
      }}>
        <p>Registered Lot</p>
        <h2>{lotId}</h2>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>The Independent Spirit of Scotland</h2>

        <p style={{ marginTop: "20px", maxWidth: "600px" }}>
          This lot began its maturation on March 23, 2026 and will reach its
          optimal profile on May 30, 2026.
        </p>

        <p style={{ marginTop: "20px", maxWidth: "600px" }}>
          Using our Leonardo Black Box system, we continuously monitor
          temperature, humidity, and vibration to ensure the highest quality
          maturation process.
        </p>

        <p style={{ marginTop: "20px", maxWidth: "600px" }}>
          All data and product lifecycle are certified by the proprietary
          E.L.Y.A.S.-A.I. system.
        </p>
      </div>

    </main>
  );
}
