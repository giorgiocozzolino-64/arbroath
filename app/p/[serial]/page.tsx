import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(process.cwd(), "arbroath.db"));

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
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="border border-zinc-700 p-10 rounded-2xl bg-zinc-900">
        <h1 className="text-3xl font-bold mb-6">
          Arbroath Sicilian Sea Salt
        </h1>

        <div className="space-y-2 text-lg">
          <p>
            <strong>Serial:</strong> {kid.serial}
          </p>

          <p>
            <strong>Parent Cask:</strong> {kid.parent_id}
          </p>

          <p>
            <strong>Unit:</strong> #{kid.unit_number}
          </p>

          <p>
            <strong>Status:</strong> {kid.status}
          </p>

          <p>
            <strong>Scans:</strong> {kid.scans}
          </p>
        </div>
      </div>
    </main>
  );
}
