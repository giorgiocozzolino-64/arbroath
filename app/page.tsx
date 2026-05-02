export default function Page() {
  return (
    <main className="min-h-screen bg-[#efede9] flex justify-center">
      <section className="w-full max-w-[980px] bg-[#fbfaf8] text-[#0f0f0f] font-serif">
        <div className="text-center px-6 pt-5 pb-3">
          <img
            src="/arbroath-logo.png"
            alt="Arbroath - A.D. 1320"
            className="mx-auto w-[250px] max-w-[70%] h-auto"
          />
        </div>

        <header className="bg-[#101010] text-white px-12 py-9">
          <h1 className="text-[52px] leading-none font-bold tracking-[-0.03em]">
            Digital Cask Passport
          </h1>
          <p className="mt-4 text-xl font-bold">
            Sicilian Sea Salt — Islay Edition
          </p>
        </header>

        <div className="px-12 py-10">
          <div className="flex justify-between items-center gap-6 mb-7">
            <div>
              <p className="text-sm text-[#6f6a64] mb-2">Registered Lot</p>
              <h2 className="text-[32px] font-bold tracking-[-0.02em]">
                AAD1320-ISE-20260323-B01
              </h2>
            </div>
            <div className="bg-[#e9e3dc] rounded-full px-5 py-3 text-sm font-bold whitespace-nowrap">
              ✓ Verified Digital Record
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-10">
            {[
              ["Product", "Sicilian Sea Salt"],
              ["Cask", "100KG"],
              ["Edition", "Islay"],
              ["Status", "Verified / Maturing"],
              ["Maturation Start", "23 March 2026"],
              ["Maturation End", "30 May 2026"],
            ].map(([label, value]) => (
              <article
                key={label}
                className="bg-white/75 border border-[#e9e3dc] rounded-[17px] p-5 min-h-[82px]"
              >
                <p className="text-sm text-[#6f6a64] mb-2">{label}</p>
                <p className="text-lg font-bold">{value}</p>
              </article>
            ))}
          </div>

          <section className="bg-[#f3f0eb] rounded-[18px] p-8 mb-8">
            <p className="uppercase tracking-[0.22em] text-xs text-[#6f6a64] font-bold mb-3">
              Maturation Timeline
            </p>
            <h2 className="text-[34px] leading-tight font-bold tracking-[-0.03em] mb-6">
              From sea to cask identity
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <article className="bg-white rounded-[14px] p-6 min-h-[108px]">
                <p className="text-sm text-[#6f6a64] mb-3">Start</p>
                <p className="text-2xl font-bold">23 March 2026</p>
              </article>
              <article className="bg-white rounded-[14px] p-6 min-h-[108px]">
                <p className="text-sm text-[#6f6a64] mb-3">
                  Target Completion
                </p>
                <p className="text-2xl font-bold">30 May 2026</p>
              </article>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <article className="bg-white/75 border border-[#e9e3dc] rounded-[17px] p-7 min-h-[130px]">
              <p className="uppercase tracking-[0.22em] text-xs text-[#6f6a64] font-bold mb-3">
                Leonardo Black Box
              </p>
              <p className="text-lg font-bold">Traceability record active</p>
            </article>

            <article className="bg-white/75 border border-[#e9e3dc] rounded-[17px] p-7 min-h-[130px]">
              <p className="uppercase tracking-[0.22em] text-xs text-[#6f6a64] font-bold mb-3">
                E.L.Y.A.S.-A.I.
              </p>
              <p className="text-lg font-bold">
                Verified maturation intelligence
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
