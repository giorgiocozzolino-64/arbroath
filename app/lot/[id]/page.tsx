export default function LotPage({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: "40px", fontFamily: "serif" }}>
      <p>ARBROATH A.D. 1320</p>
      <h1>Lot Traceability</h1>
      <h2>{params.id}</h2>
      <p>
        This lot began its maturation on March 23, 2026 and will reach its
        optimal profile on May 30, 2026.
      </p>
      <p>
        Leonardo Black Box monitors temperature, humidity and vibration.
      </p>
      <p>
        Certified by E.L.Y.A.S.-A.I.
      </p>
    </main>
  );
}
