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
    <main className="min-h-screen bg-[#f1eee9] flex justify-center font-serif p-6">
      <section className="w-full max-w-[1100px] bg-[#fbfaf8] rounded-[30px] overflow-hidden shadow-xl">

        {/* HEADER */}
        <header className="bg-[#0b0b0b] text-white px-[60px] pt-[28px] pb-[42px]">

          {/* LOGO */}
          <img
            src="/arbroath-logo.png"
            alt="Arbroath"
            className="w-[150px] mb-6 opacity-90"
          />

          <h1 className="text-[60px] leading-[0.9] font-bold tracking-[-0.04em]">
            Digital Cask Passport
          </h1>

          <p className="mt-4 text-[20px] text-[#d6d1c9] font-medium">
            Sicilian Sea Salt — Islay Edition
          </p>
        </header>

        {/* CONTENT */}
        <div className="px-[60px] pt-[50px] pb-[70px]">

          {/* LOT */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-[13px] text-[#6f6a64] mb-2">
                Registered Lot
              </p>
              <h2 className="text-[36px] font-bold tracking-[-0.03em]">
                AAD1320-ISE-20260323-B01
              </h2>
            </div>

            <div className="bg-[#e9e3dc] rounded-full px-6 py-3 text-[14px] font-bold">
              ✓ Verified Digital Record
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-4 gap-5 mb-12">
            {items.map(([label, value]) => (
              <div
                key={label}
                className="bg-white/70 border border-[#e7dfd6] rounded-[18px] p-5"
              >
                <p className="text-[13px] text-[#6f6a64] mb-2">
                  {label}
                </p>
                <p className="text-[18px] font-bold">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className="bg-[#f2eee8] rounded-[24px] p-8 mb-10">
            <p className="uppercase tracking-[0.25em] text-[12px] text-[#77716a] mb-3 font-bold">
              MATURATION TIMELINE
            </p>

            <h3 className="text-[38px] font-bold tracking-[-0.04em] mb-8">
              From sea to cask identity
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-[16px] p-6">
                <p className="text-[14px] text-[#6f6a64] mb-4">Start</p>
                <p className="text-[26px] font-bold">
                  23 March 2026
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-6">
                <p className="text-[14px] text-[#6f6a64] mb-4">
                  Target Completion
                </p>
                <p className="text-[26px] font-bold">
                  30 May 2026
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER CARDS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/70 border border-[#e7dfd6] rounded-[20px] p-8">
              <p className="uppercase tracking-[0.25em] text-[12px] text-[#77716a] mb-6 font-bold">
                LEONARDO BLACK BOX
              </p>

              <h3 className="text-[32px] font-bold mb-6">
                Environmental monitoring
              </h3>

              <p className="text-[17px] leading-7">
                Temperature, humidity and vibrations are monitored throughout
                the maturation cycle, creating a continuous environmental record.
              </p>
            </div>

            <div className="bg-white/70 border border-[#e7dfd6] rounded-[20px] p-8">
              <p className="uppercase tracking-[0.25em] text-[12px] text-[#77716a] mb-6 font-bold">
                E.L.Y.A.S.-A.I.
              </p>

              <h3 className="text-[32px] font-bold mb-6">
                Certified intelligence layer
              </h3>

              <p className="text-[17px] leading-7">
                The process is supported by a certified E.L.Y.A.S.-A.I. system,
                protecting traceability, quality control and digital integrity.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
