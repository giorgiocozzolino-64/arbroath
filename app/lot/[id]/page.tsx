const lots: Record<
  string,
  {
    product: string;
    edition: string;
    cask: string;
    status: string;
    start: string;
    end: string;
  }
> = {
  "AAD1320-ISE-20260323-B01": {
    product: "Sicilian Sea Salt",
    edition: "Islay",
    cask: "100KG",
    status: "Maturing",
    start: "23 March 2026",
    end: "30 May 2026",
  },
  "AAD1320-ISE-20260401-B02": {
    product: "Sicilian Sea Salt",
    edition: "Islay",
    cask: "100KG",
    status: "Resting",
    start: "1 April 2026",
    end: "10 June 2026",
  },
};

export default function LotPage({ params }: { params: { id: string } }) {
  const lotId = params.id;
  const lot = lots[lotId];

  if (!lot) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f7f4ee",
          color: "#111",
          fontFamily: "Georgia, serif",
          padding: "80px 40px",
        }}
      >
        <section
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "28px",
            padding: "56px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ letterSpacing: "0.32em", fontSize: "12px", color: "#7a746d" }}>
            ARBROATH A.D. 1320
          </p>

          <h1 style={{ fontSize: "48px", margin: "18px 0" }}>
            Lot Not Registered
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#4a443d" }}>
            This lot is not currently present in the Arbroath digital registry.
          </p>

          <p style={{ marginTop: "28px", fontSize: "16px", color: "#7a746d" }}>
            Requested ID: {lotId}
          </p>
        </section>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ee",
        color: "#111",
        fontFamily: "Georgia, serif",
        padding: "48px 24px",
      }}
    >
      <section
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "28px",
          padding: "56px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ letterSpacing: "0.32em", fontSize: "12px", color: "#7a746d" }}>
          ARBROATH A.D. 1320
        </p>

        <h1 style={{ fontSize: "58px", margin: "18px 0 8px" }}>
          Digital Cask Passport
        </h1>

        <p style={{ fontSize: "22px", color: "#5d554d", marginBottom: "36px" }}>
          {lot.product} — {lot.edition} Edition
        </p>

        <div
          style={{
            background: "#f0ebe3",
            borderRadius: "20px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <p style={{ margin: 0, fontSize: "13px", color: "#7a746d" }}>
            Registered Lot
          </p>

          <h2 style={{ fontSize: "30px", margin: "10px 0 0", wordBreak: "break-word" }}>
            {lotId}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "18px",
            marginBottom: "42px",
          }}
        >
          {[
            ["Product", lot.product],
            ["Cask", lot.cask],
            ["Edition", lot.edition],
            ["Status", lot.status],
            ["Maturation Start", lot.start],
            ["Maturation End", lot.end],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                border: "1px solid #ece7df",
                borderRadius: "18px",
                padding: "22px",
              }}
            >
              <p style={{ margin: 0, fontSize: "13px", color: "#7a746d" }}>
                {label}
              </p>

              <p style={{ margin: "10px 0 0", fontSize: "20px" }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: "38px" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "14px" }}>
            Maturation Record
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#4a443d" }}>
            This lot began its maturation process on {lot.start} and will
            continue until {lot.end}.
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#4a443d" }}>
            Throughout its evolution, environmental conditions are continuously
            monitored by our proprietary Leonardo Black Box system, capturing
            temperature, vibrations, and humidity in real time.
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#4a443d" }}>
            The entire process is supported by a certified E.L.Y.A.S.-A.I.
            system, ensuring advanced traceability, consistent quality, and the
            integrity of its digital identity.
          </p>
        </section>

        <section
          style={{
            borderTop: "1px solid #ece7df",
            paddingTop: "28px",
          }}
        >
          <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>
            Verification
          </h2>

          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4a443d" }}>
            This digital record connects the physical cask to its certified
            product identity, supporting provenance, authenticity, and premium
            traceability.
          </p>
        </section>
      </section>
    </main>
  );
}
