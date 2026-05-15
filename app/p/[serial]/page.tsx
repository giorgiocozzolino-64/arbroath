import Database from "better-sqlite3";
import Image from "next/image";
import path from "path";

const db = new Database(path.join(process.cwd(), "public", "arbroath.db"));

export default function KidPage({ params }: { params: { serial: string } }) {
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

  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(circle at top,#14100a,#000 58%)", color: "#e7c15a", padding: 18, fontFamily: "Georgia, serif" }}>
      <section style={{ maxWidth: 980, margin: "0 auto", border: "1px solid #d4af37", borderRadius: 18, padding: "26px 32px 38px", background: "rgba(0,0,0,.9)", boxShadow: "0 0 70px rgba(212,175,55,.14)" }}>
        
        <div style={{ textAlign: "center" }}>
          <Image src="/arbroath-logo-black-header.png" alt="Arbroath" width={235} height={170} />

          <p style={{ letterSpacing: 8, fontSize: 11, marginTop: 10, color: "#c89f3d" }}>
            DIGITAL CASK PASSPORT
          </p>

          <h1 style={{ fontSize: 46, lineHeight: 1.06, margin: "18px 0 12px", color: "#f0c72f" }}>
            Sicilian Sea Salt
            <br />
            Aged in Islay Whisky Casks
          </h1>

          <p style={{ fontSize: 16, letterSpacing: 4, color: "#d7b45a" }}>
            VERIFIED CHILD JAR
          </p>
        </div>

        <div style={{ marginTop: 34, textAlign: "center", border: "1px solid rgba(212,175,55,.45)", borderRadius: 18, padding: "34px 24px", background: "linear-gradient(180deg,rgba(40,30,10,.32),rgba(0,0,0,.88))", boxShadow: "0 0 42px rgba(212,175,55,.12)" }}>
          <p style={{ letterSpacing: 8, fontSize: 11, color: "#b68b2c", marginBottom: 14 }}>
            VERIFIED COLLECTOR UNIT
          </p>

          <h2 style={{ fontSize: 84, color: "#f0c72f", margin: 0, lineHeight: 1 }}>
            {kid.unit_number}
          </h2>

          <p style={{ fontSize: 28, letterSpacing: 7, marginTop: 8, color: "#f5deb0" }}>
            OF 666
          </p>

          <div style={{ width: 110, height: 1, background: "#d4af37", margin: "24px auto" }} />

          <p style={{ letterSpacing: 4, fontSize: 13, color: "#d7b45a" }}>
            UNIQUE · VERIFIED · AUTHENTIC
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, marginTop: 28 }}>
          <Card title="Serial" value={kid.serial} />
          <Card title="Father Cask" value={kid.parent_id} />
          <Card title="Edition" value={`${kid.unit_number} of 666`} />
          <Card title="Status" value="VERIFIED AUTHENTIC" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 14, marginTop: 30 }}>
          <Button title="RECIPES" subtitle="Chef creations" />
          <Button title="ANALYSIS" subtitle="Mineral profile" />
          <Button title="LEONARDO BLACK BOX" subtitle="Purity diagram" />
          <Button title="PROVENANCE" subtitle="Origin journey" />
          <Button title="STORY" subtitle="Video & heritage" />
        </div>

        <Section title="What is ELYAS?">
          ELYAS is the proprietary intelligence layer inside the Arbroath provenance ecosystem. It connects identity, purity data, scan behaviour, anti-counterfeit logic and future blockchain certification into one living digital passport.
        </Section>

        <Section title="Leonardo Black Box">
          A proprietary analysis module designed to visualise purity, stability, maturation profile, mineral signature and authenticity score.
        </Section>

        <Section title="Culinary Experience">
          Oyster finish with citrus oil · Wagyu crystal salt pairing · Tuna tartare with lemon zest · Dark chocolate sea salt experience.
        </Section>

        <div style={{ marginTop: 34, textAlign: "center", border: "1px solid #d4af37", padding: 13, letterSpacing: 6, fontSize: 16 }}>
          ELYAS INSIDE
        </div>
      </section>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{ border: "1px solid rgba(212,175,55,.45)", padding: 18, borderRadius: 14, background: "rgba(255,255,255,.03)" }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: "#b68b2c" }}>{title}</p>
      <p style={{ fontSize: 17, color: "#f5e0a0", wordBreak: "break-word" }}>{value}</p>
    </div>
  );
}

function Button({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ border: "1px solid #b68b2c", padding: 18, borderRadius: 14, textAlign: "center", background: "linear-gradient(180deg,#120d06,#030303)" }}>
      <h3 style={{ letterSpacing: 2, color: "#f0c72f", fontSize: 15 }}>{title}</h3>
      <p style={{ color: "#cbb27a", fontSize: 14 }}>{subtitle}</p>
      <p style={{ marginTop: 10 }}>VIEW →</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 30, borderTop: "1px solid rgba(212,175,55,.5)", paddingTop: 22 }}>
      <h2 style={{ fontSize: 28, color: "#f0c72f" }}>{title}</h2>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "#d9c999" }}>{children}</p>
    </section>
  );
}
