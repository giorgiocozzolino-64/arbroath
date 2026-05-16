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
      <main style={styles.notFound}>
        <h1>Jar Not Found</h1>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.shell}>
        <aside style={styles.sidebar}>
          <div style={styles.brandMark}>A</div>

          <h1 style={styles.brandName}>ARBROATH</h1>
          <div style={styles.brandSub}>A.D. 1320</div>
          <div style={styles.passportText}>DIGITAL CASK PASSPORT</div>

          <div style={styles.collectorBox}>
            <div style={styles.smallGold}>VERIFIED COLLECTOR UNIT</div>
            <div style={styles.bigNumber}>{kid.unit_number}</div>
            <div style={styles.ofText}>OF 666</div>
            <div style={styles.microText}>UNIQUE · VERIFIED · AUTHENTIC</div>
          </div>

          <div style={styles.identityBox}>
            <IdentityRow icon="▣" label="SERIAL" value={kid.serial} />
            <IdentityRow icon="♜" label="FATHER CASK" value={kid.parent_id} />
            <IdentityRow icon="♛" label="EDITION" value={`${kid.unit_number} of 666`} />
            <IdentityRow icon="◆" label="STATUS" value="VERIFIED AUTHENTIC" />
          </div>

          <nav style={styles.navStack}>
            <NavButton icon="♨" title="RECIPES" />
            <NavButton icon="◈" title="ANALYSIS" />
            <NavButton icon="✧" title="LEONARDO BLACK BOX" />
            <NavButton icon="⌖" title="PROVENANCE" />
            <NavButton icon="▷" title="STORY" />
          </nav>

          <div style={styles.elyasBadge}>
            <div style={styles.elyasOrb}>✧</div>
            <div style={styles.elyasTitle}>ELYAS INSIDE</div>
            <div style={styles.elyasSub}>DIGITAL PROVENANCE INTELLIGENCE</div>
          </div>
        </aside>

        <section style={styles.main}>
          <div style={styles.topGrid}>
            <div style={styles.photoPanel}>
              <Image
                src="/salt-crystals.jpg"
                alt="Salt Crystals"
                width={900}
                height={650}
                style={styles.coverImage}
                priority
              />
            </div>

            <div style={styles.videoPanel}>
              <div style={styles.videoTitle}>THE SPIRIT OF ISLAY</div>
              <div style={styles.videoSubtitle}>THE SEA. THE CASK. THE TIME.</div>

              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                style={styles.video}
              >
                <source src="/islay-film.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div style={styles.audioRow}>
            <div style={styles.playCircle}>▶</div>

            <div style={{ flex: 1 }}>
              <h2 style={styles.panelTitle}>ARBROATH AMBIENT</h2>
              <p style={styles.panelText}>
                A cinematic ambient soundscape inspired by Islay winds and
                Sicilian salt harvesting.
              </p>

              <audio controls style={styles.audio}>
                <source src="/arbroath-ambient.mp3" type="audio/mpeg" />
              </audio>
            </div>

            <div style={styles.seal}>
              <div style={styles.sealA}>A</div>
              <div style={styles.signature}>Arbroath</div>
            </div>
          </div>

          <div style={styles.middleGrid}>
            <Panel title="WHAT IS ELYAS?">
              <div style={styles.elyasDiagram}>ELYAS</div>
              <p style={styles.panelText}>
                ELYAS is the proprietary intelligence layer inside the Arbroath
                provenance ecosystem. It connects identity, purity data, scan
                behaviour, anti-counterfeit logic and future blockchain
                certification into one living digital passport.
              </p>
            </Panel>

            <Panel title="LEONARDO BLACK BOX">
              <p style={styles.panelText}>
                A proprietary analysis module designed to visualise purity,
                stability, maturation profile, mineral signature and authenticity
                score.
              </p>

              <div style={styles.radarWrap}>
                <div style={styles.radar}>
                  <span style={{ top: 0, left: "50%" }}>PURITY<br />98.7%</span>
                  <span style={{ top: "43%", right: 0 }}>AUTHENTICITY<br />99.1%</span>
                  <span style={{ bottom: 0, right: "18%" }}>MATURATION<br />95.8%</span>
                  <span style={{ bottom: 0, left: "16%" }}>MINERAL<br />97.4%</span>
                  <span style={{ top: "43%", left: 0 }}>STABILITY<br />96.2%</span>
                </div>
              </div>
            </Panel>
          </div>

          <div style={styles.culinary}>
            <h2 style={styles.largeTitle}>CULINARY EXPERIENCE</h2>

            <div style={styles.recipeGrid}>
              <Recipe icon="🦪" title="Oyster finish" text="with citrus oil" />
              <Recipe icon="🥩" title="Wagyu crystal" text="salt pairing" />
              <Recipe icon="🍅" title="Tuna tartare" text="with lemon zest" />
              <Recipe icon="🍫" title="Dark chocolate" text="sea salt experience" />
            </div>
          </div>

          <div style={styles.provenance}>
            <h2 style={styles.largeTitle}>PROVENANCE JOURNEY</h2>

            <div style={styles.journeyGrid}>
              <Journey icon="≈" title="SICILIAN SEA" text="Harvested by hand" />
              <Journey icon="◉" title="ISLAY CASKS" text="Aged with time and spirit" />
              <Journey icon="◇" title="NATURAL TRANSFORMATION" text="Minerals absorb the cask essence" />
              <Journey icon="▣" title="LIMITED EDITION" text="Bottled as one of 666 unique jars" />
              <Journey icon="✓" title="VERIFIED AUTHENTIC" text="Protected by ELYAS" />
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          EVERY CRYSTAL HAS A STORY. EVERY STORY IS VERIFIED.
          <br />
          ARBROATH — HERITAGE · SCIENCE · TIME · SPIRIT
        </footer>
      </div>
    </main>
  );
}

function IdentityRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={styles.identityRow}>
      <div style={styles.identityIcon}>{icon}</div>
      <div>
        <div style={styles.identityLabel}>{label}</div>
        <div style={styles.identityValue}>{value}</div>
      </div>
    </div>
  );
}

function NavButton({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={styles.navButton}>
      <span style={styles.navIcon}>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={styles.panel}>
      <h2 style={styles.panelTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Recipe({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={styles.recipe}>
      <div style={styles.recipeImage}>{icon}</div>
      <div style={styles.recipeTitle}>{title}</div>
      <div style={styles.recipeText}>{text}</div>
    </div>
  );
}

function Journey({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={styles.journeyItem}>
      <div style={styles.journeyIcon}>{icon}</div>
      <div style={styles.journeyTitle}>{title}</div>
      <div style={styles.journeyText}>{text}</div>
    </div>
  );
}

const gold = "#d4a63c";
const goldBright = "#f1c95a";
const cream = "#ead7a2";
const border = "1px solid rgba(212,166,60,.55)";
const panelBg = "linear-gradient(180deg, rgba(12,12,10,.96), rgba(2,2,2,.98))";

const styles: Record<string, React.CSSProperties> = {
  notFound: {
    minHeight: "100vh",
    background: "#000",
    color: gold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Georgia, serif",
  },

  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 50% -10%, rgba(73,47,11,.55), #030302 36%, #000 100%)",
    color: cream,
    padding: 14,
    fontFamily: "Georgia, serif",
  },

  shell: {
    maxWidth: 1560,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "330px 1fr",
    gap: 14,
  },

  sidebar: {
    border: border,
    borderRadius: 10,
    background: panelBg,
    padding: 18,
    minHeight: "calc(100vh - 28px)",
  },

  brandMark: {
    color: goldBright,
    fontSize: 82,
    lineHeight: 1,
    textAlign: "center",
    textShadow: "0 0 20px rgba(212,166,60,.3)",
  },

  brandName: {
    color: cream,
    fontSize: 42,
    letterSpacing: 4,
    textAlign: "center",
    margin: "8px 0 0",
  },

  brandSub: {
    textAlign: "center",
    color: gold,
    letterSpacing: 5,
    fontSize: 17,
    marginTop: 2,
  },

  passportText: {
    textAlign: "center",
    color: gold,
    letterSpacing: 6,
    fontSize: 13,
    margin: "26px 0 22px",
  },

  collectorBox: {
    border: border,
    borderRadius: 10,
    padding: 20,
    textAlign: "center",
    background: "radial-gradient(circle at top, rgba(212,166,60,.12), rgba(0,0,0,.92))",
  },

  smallGold: {
    color: gold,
    fontSize: 12,
    letterSpacing: 2,
  },

  bigNumber: {
    color: goldBright,
    fontSize: 72,
    lineHeight: 1,
    marginTop: 14,
  },

  ofText: {
    color: cream,
    fontSize: 26,
    letterSpacing: 3,
    marginTop: 8,
  },

  microText: {
    color: gold,
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 20,
  },

  identityBox: {
    border: border,
    borderRadius: 10,
    padding: 18,
    marginTop: 14,
  },

  identityRow: {
    display: "grid",
    gridTemplateColumns: "34px 1fr",
    gap: 12,
    alignItems: "start",
    marginBottom: 22,
  },

  identityIcon: {
    color: gold,
    fontSize: 25,
  },

  identityLabel: {
    color: gold,
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  identityValue: {
    color: "#fff4c6",
    fontSize: 13,
    wordBreak: "break-word",
  },

  navStack: {
    display: "grid",
    gap: 10,
    marginTop: 14,
  },

  navButton: {
    border: border,
    borderRadius: 8,
    padding: "16px 14px",
    color: goldBright,
    background: "rgba(0,0,0,.55)",
    display: "flex",
    alignItems: "center",
    gap: 14,
    letterSpacing: 1,
    fontSize: 14,
  },

  navIcon: {
    fontSize: 28,
    color: gold,
  },

  elyasBadge: {
    border: border,
    borderRadius: 10,
    padding: 24,
    marginTop: 18,
    textAlign: "center",
    background: "radial-gradient(circle, rgba(212,166,60,.10), transparent 62%)",
  },

  elyasOrb: {
    fontSize: 62,
    color: gold,
  },

  elyasTitle: {
    color: goldBright,
    fontSize: 28,
    letterSpacing: 6,
    marginTop: 10,
  },

  elyasSub: {
    color: gold,
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 8,
  },

  main: {
    display: "grid",
    gap: 14,
  },

  topGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.45fr",
    gap: 14,
  },

  photoPanel: {
    border: border,
    borderRadius: 10,
    overflow: "hidden",
    background: "#050505",
    minHeight: 360,
  },

  coverImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  videoPanel: {
    border: border,
    borderRadius: 10,
    overflow: "hidden",
    background: "#050505",
    textAlign: "center",
    minHeight: 360,
  },

  videoTitle: {
    color: goldBright,
    fontSize: 31,
    letterSpacing: 7,
    paddingTop: 26,
  },

  videoSubtitle: {
    color: gold,
    fontSize: 14,
    letterSpacing: 5,
    margin: "8px 0 14px",
  },

  video: {
    width: "100%",
    height: 290,
    objectFit: "cover",
    display: "block",
  },

  audioRow: {
    border: border,
    borderRadius: 10,
    background: panelBg,
    padding: 30,
    display: "grid",
    gridTemplateColumns: "76px 1fr 210px",
    gap: 26,
    alignItems: "center",
  },

  playCircle: {
    width: 62,
    height: 62,
    borderRadius: "50%",
    border: border,
    color: goldBright,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
  },

  audio: {
    width: "100%",
    accentColor: gold,
    marginTop: 14,
  },

  seal: {
    textAlign: "center",
  },

  sealA: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    border: "4px double rgba(212,166,60,.8)",
    color: goldBright,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 54,
    boxShadow: "0 0 30px rgba(212,166,60,.18)",
  },

  signature: {
    color: gold,
    fontSize: 34,
    fontStyle: "italic",
    marginTop: 8,
  },

  middleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.35fr",
    gap: 14,
  },

  panel: {
    border: border,
    borderRadius: 10,
    background: panelBg,
    padding: 30,
  },

  panelTitle: {
    color: goldBright,
    fontSize: 26,
    letterSpacing: 3,
    margin: "0 0 18px",
    fontWeight: 400,
  },

  panelText: {
    color: "#dec98e",
    lineHeight: 1.8,
    fontSize: 16,
  },

  elyasDiagram: {
    width: 130,
    height: 130,
    borderRadius: "50%",
    border: "1px solid rgba(212,166,60,.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: goldBright,
    letterSpacing: 4,
    margin: "0 auto 20px",
    background: "repeating-radial-gradient(circle, rgba(212,166,60,.18) 0 1px, transparent 1px 18px)",
  },

  radarWrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },

  radar: {
    position: "relative",
    width: 270,
    height: 250,
    background:
      "radial-gradient(circle, rgba(212,166,60,.28) 0 2px, transparent 3px), conic-gradient(from 0deg, transparent, rgba(212,166,60,.55), transparent)",
    clipPath: "polygon(50% 0, 98% 38%, 80% 100%, 20% 100%, 2% 38%)",
    border: "1px solid rgba(212,166,60,.45)",
  },

  culinary: {
    border: border,
    borderRadius: 10,
    background: panelBg,
    padding: 30,
  },

  largeTitle: {
    color: goldBright,
    fontSize: 30,
    letterSpacing: 3,
    margin: "0 0 22px",
    fontWeight: 400,
  },

  recipeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 18,
  },

  recipe: {
    border: border,
    borderRadius: 8,
    textAlign: "center",
    padding: 16,
    background: "rgba(0,0,0,.55)",
  },

  recipeImage: {
    height: 100,
    fontSize: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  recipeTitle: {
    color: cream,
    fontSize: 16,
    marginTop: 6,
  },

  recipeText: {
    color: "#d2b36b",
    fontSize: 14,
    marginTop: 4,
  },

  provenance: {
    border: border,
    borderRadius: 10,
    background: panelBg,
    padding: 30,
  },

  journeyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16,
    textAlign: "center",
  },

  journeyItem: {
    position: "relative",
  },

  journeyIcon: {
    color: cream,
    fontSize: 58,
    lineHeight: 1,
    marginBottom: 14,
  },

  journeyTitle: {
    color: goldBright,
    fontSize: 15,
    letterSpacing: 2,
    marginBottom: 8,
  },

  journeyText: {
    color: "#d6bd81",
    fontSize: 14,
    lineHeight: 1.45,
  },

  footer: {
    gridColumn: "1 / -1",
    border: border,
    borderRadius: 8,
    padding: 22,
    textAlign: "center",
    color: goldBright,
    letterSpacing: 6,
    fontSize: 16,
    background: "rgba(0,0,0,.82)",
    lineHeight: 1.8,
  },
};
