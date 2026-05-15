import Database from "better-sqlite3";
import Image from "next/image";
import path from "path";

const db = new Database(
  path.join(process.cwd(), "public", "arbroath.db")
);
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
    .get(params.serial) as any;

  if (!kid) {
    return (
      <main className="min-h-screen bg-black text-[#d4af37] flex items-center justify-center">
        <h1 className="text-4xl">Jar Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-[#d4af37] px-6 py-12">
      <div className="max-w-4xl mx-auto border border-[#d4af37] p-8 rounded-xl bg-[#050505]">

        <div className="flex justify-center mb-10">
          <Image
            src="/arbroath-logo-black-header.png"
            alt="Arbroath"
            width={280}
            height={280}
          />
        </div>

        <div className="text-center mb-10">
          <p className="tracking-[0.4em] text-sm mb-3">
            DIGITAL CASK PASSPORT
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Sicilian Sea Salt
            <br />
            Aged in Islay Whisky Casks
          </h1>

          <p className="text-xl">
            VERIFIED CHILD JAR
          </p>
        </div>

        <div className="border-t border-[#d4af37] pt-8 space-y-5 text-lg">

          <div>
            <span className="font-bold">Serial:</span> {kid.serial}
          </div>

          <div>
            <span className="font-bold">Father Cask:</span> {kid.parent_id}
          </div>

          <div>
            <span className="font-bold">Edition:</span>{" "}
            {kid.unit_number} of 666
          </div>

          <div>
            <span className="font-bold">Status:</span> VERIFIED AUTHENTIC
          </div>

          <div>
            <span className="font-bold">Scan Count:</span> {kid.scans}
          </div>

        </div>

        <div className="mt-12 border-t border-[#d4af37] pt-10">

          <h2 className="text-3xl font-bold mb-6">
            Culinary Experience
          </h2>

          <ul className="space-y-3 text-lg">
            <li>• Oyster finish with citrus oil</li>
            <li>• Wagyu crystal salt pairing</li>
            <li>• Tuna tartare with lemon zest</li>
            <li>• Dark chocolate sea salt experience</li>
          </ul>

        </div>

        <div className="mt-12 border-t border-[#d4af37] pt-10">

          <h2 className="text-3xl font-bold mb-6">
            Elyas Black Box Analysis
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            This numbered jar is tracked inside the Elyas provenance ecosystem.
            The digital passport can evolve with future recipes, chef pairings,
            blockchain verification, authenticity scans and multimedia content.
          </p>

        </div>

        <div className="mt-12 text-center text-sm tracking-[0.3em] text-[#d4af37]">
          ELYAS INSIDE
        </div>

      </div>
    </main>
  );
}
