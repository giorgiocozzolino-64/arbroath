const lots: Record<string, any> = {
  "AAD1320-ISE-20260323-B01": {
    product: "Sicilian Sea Salt",
    edition: "Islay",
    cask: "100KG",
    status: "Verified / Maturing",
    start: "23 March 2026",
    end: "30 May 2026",
  },
};

export default function LotPage({ params }: { params: { id: string } }) {
  const lotId = params.id;
  const lot = lots[lotId];

  if (!lot) {
    return (
      <main style={{ minHeight: "100vh", background: "#f7f4ee", padding: "80px 24px", fontFamily: "Georgia, serif" }}>
        <section style={{ maxWidth: "760px", margin: "0 auto", background: "#fff", borderRadius: "28px", padding: "56px" }}>
          <p style={{ letterSpacing: "0.3em", fontSize: "12px", color: "#7a746d" }}>ARBROATH A.D. 1320</p>
          <h1 style={{ fontSize: "48px" }}>Lot Not Registered</h1>
          <p>This lot is not currently present in the Arbroath digital registry.</p>
          <p>Requested ID: {lotId}</p>
        </section>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f7f4ee", color: "#111", fontFamily: "Georgia, serif", padding: "40px 20px" }}>
      <section style={{ maxWidth: "1080px", margin: "0 auto", background: "#fff", borderRadius: "32px", overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,0.10)" }}>
        
        <div style={{ background: "#111", color: "#f7f4ee", padding: "42px 56px" }}>
          <p style={{ letterSpacing: "0.35em", fontSize: "12px", margin: 0 }}>
            ARBROATH A.D. 1320
          </p>
          <h1 style={{ fontSize: "62px", margin: "18px 0 10px" }}>
            Digital Cask Passport
          </h1>
          <p style={{ fontSize: "22px", color: "#d8d0c6", margin: 0 }}>
            {lot.product} — {lot.edition} Edition
          </p>
        </div>

        <div style={{ padding: "44px 56px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", marginBottom: "34px" }}>
            <div>
              <p style={{ margin: 0, color: "#7a746d", fontSize: "13px" }}>Registered Lot</p>
              <h2 style={{ fontSize: "34px", margin: "8px 0 0", wordBreak: "break-word" }}>{lotId}</h2>
            </div>

            <div style={{ background: "#f0ebe3", borderRadius: "999px", padding: "12px 20px", height: "fit-content", fontSize: "14px" }}>
              ✓ Verified Digital Record
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "16px", marginBottom: "42px" }}>
            {[
              ["Product", lot.product],
              ["Cask", lot.cask],
              ["Edition", lot.edition],
              ["Status", lot.status],
              ["Maturation Start", lot.start],
              ["Maturation End", lot.end],
            ].map(([label, value]) => (
              <div key={label} style={{ border: "1px solid #ece7df", borderRadius: "20px", padding: "22px", background: "#fff" }}>
                <p style={{ margin: 0, fontSize: "12px", color: "#7a746d" }}>{label}</p>
                <p style={{ margin: "10px 0 0", fontSize: "19px" }}>{value}</p>
              </div>
            ))}
          </div>

          <section style={{ background: "#f7f4ee", borderRadius: "24px", padding: "32px", marginBottom: "34px" }}>
            <p style={{ letterSpacing: "0.25em", fontSize: "12px", color: "#7a746d", marginTop: 0 }}>
              MATURATION TIMELINE
            </p>
            <h2 style={{ fontSize: "34px", marginTop: 0 }}>From sea to cask identity</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
              <div style={{ background: "#fff", borderRadius: "18px", padding: "24px" }}>
                <p style={{ margin: 0, color: "#7a746d" }}>Start</p>
                <h3 style={{ fontSize: "24px", marginBottom: 0 }}>{lot.start}</h3>
              </div>
              <div style={{ background: "#fff", borderRadius: "18px", padding: "24px" }}>
                <p style={{ margin: 0, color: "#7a746d" }}>Target Completion</p>
                <h3 style={{ fontSize: "24px", marginBottom: 0 }}>{lot.end}</h3>
              </div>
            </div>
          </section>

          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px", marginBottom: "34px" }}>
            <div style={{ border: "1px solid #ece7df", borderRadius: "24px", padding: "30px" }}>
              <p style={{ letterSpacing: "0.22em", fontSize: "12px", color: "#7a746d" }}>LEONARDO BLACK BOX</p>
              <h2 style={{ fontSize: "30px" }}>Environmental monitoring</h2>
              <p style={{ lineHeight: 1.7, color: "#4a443d" }}>
                Temperature, humidity and vibrations are monitored throughout the maturation cycle, creating a continuous environmental record.
              </p>
            </div>

            <div style={{ border: "1px solid #ece7df", borderRadius: "24px", padding: "30px" }}>
              <p style={{ letterSpacing: "0.22em", fontSize: "12px", color: "#7a746d" }}>E.L.Y.A.S.-A.I.</p>
              <h2 style={{ fontSize: "30px" }}>Certified intelligence layer</h2>
              <p style={{ lineHeight: 1.7, color: "#4a443d" }}>
                The process is supported by a certified E.L.Y.A.S.-A.I. system, protecting traceability, quality control and digital integrity.
              </p>
            </div>
          </section>

          <section style={{ borderTop: "1px solid #ece7df", paddingTop: "28px" }}>
            <h2 style={{ fontSize: "32px" }}>Verification Statement</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#4a443d" }}>
              This passport connects the physical cask to its certified digital identity, supporting provenance, authenticity and premium traceability.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
