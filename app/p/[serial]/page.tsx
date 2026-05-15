import Database from "better-sqlite3";

const db = new Database("arbroath.db");

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
    .get(params.serial);

  if (!kid) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div>
          <h1>Jar Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#2d241c] p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-light mb-4">
          Digital Jar Passport
        </h1>

        <div className="border p-6 rounded-xl bg-white">

          <p><strong>Serial:</strong> {kid.serial}</p>

          <p><strong>Parent Cask:</strong> {kid.parent_id}</p>

          <p><strong>Unit Number:</strong> {kid.unit_number}</p>

          <p><strong>Status:</strong> {kid.status}</p>

          <p><strong>Scans:</strong> {kid.scans}</p>

          <div className="mt-8 p-4 border rounded-lg">
            VERIFIED DERIVATIVE UNIT
          </div>

        </div>
      </div>
    </main>
  );
}
