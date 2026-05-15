import Database from "better-sqlite3";
import Image from "next/image";
import path from "path";

const db = new Database(path.join(process.cwd(), "public", "arbroath.db"));

export default function KidPage({
  params,
}: {
  params: { serial: string };
}) {
  const kid = db
    .prepare(`SELECT * FROM child_jars WHERE serial = ?`)
    .get(params.serial) as any;

  if (!kid) {
    return (
      <main style={{ minHeight: "100vh", background: "#000", color: "#d4af37", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Jar Not Found</h1>
      </main>
    );
  }

  const edition = `${kid.unit_number} of 666`;

  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(circle at top,#18120a,#000 55%)", color: "#e7c15a", padding: 20, fontFamily: "Georgia, serif" }}>
      <section style={{ maxWidth: 1050, margin: "0 auto", border: "1px solid #d4af37", borderRadius: 18, padding: 32, background: "rgba(0,0,0,.82)", boxShadow: "0 0 60px rgba(212,175,55,.18)" }}>

        <div style={{ textAlign: "center" }}>
          <Image src="/arbroath-logo-black-header.png" alt="Arbroath" width={330} height={250} />
          <p style={{ letterSpacing: 8, fontSize: 13, marginTop: 24 }}>DIGITAL CASK PASSPORT</p>
          <h1 style={{ fontSize: 50, lineHeight: 1.05, margin: "20px 0", color: "#f0c72f" }}>
            Sicilian Sea Salt<br />Aged in Islay Whisky Casks
          </h1>
          <p style={{ fontSize: 18 }}>VERIFIED CHILD JAR</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18, marginTop: 38 }}>
          <Card title="Serial" value={kid.serial} />
          <Card title="Father Cask" value={kid.parent_id} />
          <Card title="Edition" value={edition} />
          <Card title="Status" value="VERIFIED AUTHENTIC" />
        </div>

        <div style={{ marginTop: 36, textAlign: "center" }}>
          <div style={{ display: "inline-block", border: "6px double #d4af37", padding: 16, boxShadow: "0 0 35px rgba(212,175,55,.25)" }}>
            <Image src="/qr-code_SALT.png" alt="Verification QR" width={220} height={220} />
          </div>
          <p style={{ letterSpacing: 4, marginTop: 18 }}>SCAN TO UNLOCK THE STORY</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 16, marginTop: 36 }}>
          <Button title="RECIPES" subtitle="Chef creations" />
          <Button title="ANALYSIS" subtitle="Mineral profile" />
          <Button title="LEONARDO BLACK BOX" subtitle="Purity diagram" />
          <Button title="PROVENANCE" subtitle="Origin journey" />
          <Button title="STORY" subtitle="Video & heritage" />
        </div>

        <Section title="What is ELYAS?">
          ELYAS is the proprietary intelligence layer inside the Arbroath provenance system. It connects identity, purity data, scan behaviour, anti-counterfeit logic and future blockchain certification into one living digital passport.
        </Section>

        <Section title="Leonardo Black Box">
          A proprietary analysis module designed to visualise purity, stability, maturation profile, mineral signature and authenticity score. This will become the scientific heart of the certificate.
        </Section>

        <Section title="Culinary Experience">
          Oyster finish with citrus oil · Wagyu crystal salt pairing · Tuna tartare with lemon zest · Dark chocolate sea salt experience.
        </Section>

        <div style={{ marginTop: 38, textAlign: "center", border: "1px solid #d4af37", padding: 14, letterSpacing: 5, fontSize: 18 }}>
          ELYAS INSIDE
        </div>

      </section>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{ border: "1px solid rgba(212,175,55,.45)", padding: 22, borderRadius: 14, background: "rgba(255,255,255,.03)" }}>
      <p style={{ fontSize: 12, letterSpacing: 3, color: "#b68b2c" }}>{title}</p>
      <p style={{ fontSize: 20, color: "#f5e0a0", wordBreak: "break-word" }}>{value}</p>
    </div>
  );
}

function Button({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ border: "1px solid #b68b2c", padding: 22, borderRadius: 14, textAlign: "center", background: "linear-gradient(180deg,#120d06,#030303)" }}>
      <h3 style={{ letterSpacing: 2, color: "#f0c72f" }}>{title}</h3>
      <p style={{ color: "#cbb27a" }}>{subtitle}</p>
      <p style={{ marginTop: 12 }}>VIEW →</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 34, borderTop: "1px solid rgba(212,175,55,.5)", paddingTop: 26 }}>
      <h2 style={{ fontSize: 30, color: "#f0c72f" }}>{title}</h2>
      <p style={{ fontSize: 18, lineHeight: 1.7, color: "#d9c999" }}>{children}</p>
    </section>
  );
}
