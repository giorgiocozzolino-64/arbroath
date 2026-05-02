import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f0e8]">
      <div className="mx-auto max-w-6xl bg-white shadow-sm">

        {/* HERO HEADER */}
        <header className="bg-[#0b0b0b] px-8 py-14 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <Image
              src="/arbroath-logo-full.png"
              alt="Arbroath A.D. 1320"
              width={420}
              height={420}
              className="mb-8 h-auto w-[330px]"
              priority
            />

            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl">
              Digital Cask Passport
            </h1>

            <p className="mt-4 font-serif text-xl text-stone-300">
              Sicilian Sea Salt — Islay Edition
            </p>
          </div>
        </header>

        {/* CONTENT */}
        <section className="px-8 py-12 md:px-14">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-2 text-sm text-stone-500">Registered Lot</p>
              <h2 className="font-serif text-4xl font-bold tracking-tight">
                AAD1320-ISE-20260323-B01
              </h2>
            </div>

            <div className="rounded-full bg-[#eee8de] px-6 py-3 font-serif text-sm font-bold">
              ✓ Verified Digital Record
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <InfoCard label="Product" value="Sicilian Sea Salt" />
            <InfoCard label="Cask" value="100KG" />
            <InfoCard label="Edition" value="Islay" />
            <InfoCard label="Status" value="Verified / Maturing" />
            <InfoCard label="Maturation Start" value="23 March 2026" />
            <InfoCard label="Maturation End" value="30 May 2026" />
          </div>

          <div className="mt-10 rounded-3xl bg-[#f3efe8] p-8">
            <p className="mb-3 tracking-[0.3em] text-sm text-stone-600">
              MATURATION TIMELINE
            </p>

            <h3 className="mb-8 font-serif text-4xl font-bold">
              From sea to cask identity
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard label="Start" value="23 March 2026" large />
              <InfoCard label="Target Completion" value="30 May 2026" large />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({
  label,
  value,
  large = false,
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#e8ded2] bg-white p-6">
      <p className="mb-3 text-sm text-stone-500">{label}</p>
      <p
        className={`font-serif font-bold ${
          large ? "text-3xl" : "text-xl"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
