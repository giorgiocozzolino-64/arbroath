import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(process.cwd(), "arbroath.db"));

type Kid = {
  serial: string;
  parent_id: string;
  unit_number: number;
  status: string;
  scans: number;
  verification_url: string;
};

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
    .get(params.serial) as Kid | undefined;

  if (!kid) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl">Jar Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070604] text-[#f7ead2]">
      <section className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full border border-[#b89455]/40 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#15110b] to-[#050403] shadow-2xl">
          
          <div className="mb-8 flex justify-between items-start gap-6">
            <div>
              <p className="text-[#b89455] tracking-[0.35em] text-xs uppercase mb-3">
                Digital Jar Passport
              </p>
              <h1 className="text-4xl md:text-6xl font-serif">
                Arbroath Sicilian Sea Salt
              </h1>
              <p className="mt-4 text-[#d8c39b] max-w-2xl">
                Verified derivative unit from Father Cask B04. A numbered luxury
                salt jar with live provenance, authenticity and culinary experience.
              </p>
            </div>

            <div className="text-right">
              <div className="inline-block rounded-full border border-green-400/50 px-4 py-2 text-green-300 text-sm">
                VERIFIED
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl border border-[#b89455]/30 p-5 bg-black/30">
              <p className="text-xs uppercase text-[#b89455] mb-2">Serial</p>
              <p className="break-all">{kid.serial}</p>
            </div>

            <div className="rounded-2xl border border-[#b89455]/30 p-5 bg-black/30">
              <p className="text-xs uppercase text-[#b89455] mb-2">Father Cask</p>
              <p>{kid.parent_id}</p>
            </div>

            <div className="rounded-2xl border border-[#b89455]/30 p-5 bg-black/30">
              <p className="text-xs uppercase text-[#b89455] mb-2">Edition</p>
              <p>Jar #{kid.unit_number} of 666</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-3xl border border-[#b89455]/30 p-6 bg-[#0d0a06]">
              <h2 className="text-2xl font-serif mb-4">Authenticity</h2>
              <p>Status: <strong>{kid.status}</strong></p>
              <p>Scan count: <strong>{kid.scans}</strong></p>
              <p className="mt-4 text-sm text-[#d8c39b]">
                This jar is a verified child unit generated from the Father Cask
                registry AAD1320-ISE-20260323-B04.
              </p>
            </div>

            <div className="rounded-3xl border border-[#b89455]/30 p-6 bg-[#0d0a06]">
              <h2 className="text-2xl font-serif mb-4">Culinary Experience</h2>
              <ul className="space-y-2 text-[#d8c39b]">
                <li>• Oyster finish with citrus oil</li>
                <li>• Wagyu salt crystal touch</li>
                <li>• Tuna tartare with lemon zest</li>
                <li>• Dark chocolate sea salt pairing</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#b89455]/30 p-6 bg-black/40">
            <h2 className="text-2xl font-serif mb-4">Father Story</h2>
            <p className="text-[#d8c39b] leading-relaxed">
              Born from the Arbroath A.D. 1320 provenance system, this numbered
              jar belongs to a limited 666-unit release derived from Father Cask B04.
              Its passport can evolve over time with chef recipes, videos,
              provenance media, scan history and future blockchain notarization.
            </p>
          </div>

          <div className="mt-8 text-xs text-[#8f7b55]">
            NFC ready · QR dynamic · Anti-counterfeit layer · Digital provenance
          </div>
        </div>
      </section>
    </main>
  );
}
