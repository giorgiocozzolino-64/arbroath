export default function Page() {
  const items = [
    ["Product", "Sicilian Sea Salt"],
    ["Cask", "100KG"],
    ["Edition", "Islay"],
    ["Status", "Verified / Maturing"],
    ["Maturation Start", "23 March 2026"],
    ["Maturation End", "30 May 2026"],
  ];

  return (
    <main className="min-h-screen bg-[#f1eee9] flex justify-center font-serif">
      <section className="w-full max-w-[984px] bg-[#fbfaf8] text-[#050505] shadow-2xl">
        <header className="bg-[#111111] text-white px-[62px] pt-[42px] pb-[38px]">
          <h1 className="text-[58px] leading-[0.9] font-bold tracking-[-0.04em]">
            Digital Cask Passport
          </h1>
          <p className="mt-5 text-[22px] font-bold">
            Sicilian Sea Salt — Islay Edition
          </p>
        </header>

        <section className="px-[62px] pt-[42px] pb-[70px]">
          <div className="flex items-center justify-between gap-8 mb-9">
            <div>
              <p className="text-[13px] text-[#6f6a64] mb-2">
                Registered Lot
              </p>
              <h2 className="text-[34px] leading-tight font-bold tracking-[-0.03em]">
                AAD1320-ISE-20260323-B01
              </h2>
            </div>

            <div className="bg-[#e9e3dc] rounded-full px-5 py-3 text-[14px] font-bold whitespace-nowrap">
              ✓ Verified Digital Record
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-10">
            {items.map(([label, value]) => (
              <article
                key={label}
                className="bg-white/70 border border-[#e7dfd6] rounded-[17px] px-5 py-5 min-h-[82px]"
              >
                <p className="text-[13px] text-[#6f6a64] mb-2">{label}</p>
                <p className="text-[18px] font-bold leading-snug">{value}</p>
              </article>
            ))}
          </div>

          <section className="bg-[#f2eee8] rounded-[20px] px-8 pt-8 pb-7 mb-8">
            <p className="uppercase tracking-[0.24em] text-[12px] text-[#77716a] font-bold mb-3">
              Maturation Timeline
            </p>

            <h3 className="text-[36px] leading-none font-bold tracking-[-0.04em] mb-7">
              From sea to cask identity
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <article className="bg-white rounded-[15px] px-6 py-6 min-h-[108px]">
                <p className="text-[15px] text-[#6f6a64] mb-5">Start</p>
                <p className="text-[25px] font-bold">23 March 2026</p>
              </article>

              <article className="bg-white rounded-[15px] px-6 py-6 min-h-[108px]">
                <p className="text-[15px] text-[#6f6a64] mb-5">
                  Target Completion
                </p>
                <p className="text-[25px] font-bold">30 May 2026</p>
              </article>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <article className="bg-white/70 border border-[#e7dfd6] rounded-[18px] p-7 min-h-[135px]">
              <p className="uppercase tracking-[0.24em] text-[12px] text-[#77716a] font-bold mb-4">
                Leonardo Black Box
              </p>
              <p className="text-[18px] font-bold">
                Traceability record active
              </p>
            </article>

            <article className="bg-white/70 border border-[#e7dfd6] rounded-[18px] p-7 min-h-[135px]">
              <p className="uppercase tracking-[0.24em] text-[12px] text-[#77716a] font-bold mb-4">
                E.L.Y.A.S.-A.I.
              </p>
              <p className="text-[18px] font-bold">
                Verified maturation intelligence
              </p>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
}
