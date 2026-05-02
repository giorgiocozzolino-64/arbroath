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
    <main className="min-h-screen bg-[#ebe6dd] flex justify-center font-serif p-6">
      <section className="w-full max-w-[1120px] bg-[#fbfaf7] rounded-[34px] overflow-hidden shadow-[0_30px_90px_rgba(20,15,10,0.18)] border border-[#ded6ca]">
        <header className="relative overflow-hidden bg-[#0b0b0a] text-white px-[64px] pt-[34px] pb-[48px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(202,169,98,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative flex items-start justify-between gap-8 mb-7">
            <div>
              <p className="text-[11px] tracking-[0.36em] text-[#d8c7a2] font-bold">
                ARBROATH A.D. 1320
              </p>
              <div className="mt-3 h-[1px] w-[210px] bg-gradient-to-r from-[#c9a85f] to-transparent" />
            </div>

            <div className="rounded-full border border-[#c9a85f]/45 bg-white/5 p-3 shadow-[0_0_40px_rgba(201,168,95,0.15)]">
              <img
                src="/arbroath-logo.png"
                alt="Arbroath"
                className="w-[76px] h-auto opacity-90 mix-blend-lighten"
              />
            </div>
          </div>

          <div className="relative max-w-[820px]">
            <h1 className="text-[68px] leading-[0.88] font-bold tracking-[-0.055em]">
              Digital Cask Passport
            </h1>
            <p className="mt-5 text-[23px] text-[#e4ddd0] font-medium">
              Sicilian Sea Salt — Islay Edition
            </p>
          </div>
        </header>

        <section className="px-[64px] pt-[52px] pb-[76px]">
          <div className="flex justify-between items-start gap-8 mb-10">
            <div>
              <p className="text-[13px] text-[#756d62] mb-2">Registered Lot</p>
              <h2 className="text-[38px] leading-tight font-bold tracking-[-0.04em]">
                AAD1320-ISE-20260323-B01
              </h2>
            </div>

            <div className="bg-[#eee7dc] border border-[#ded2c0] rounded-full px-6 py-3 text-[14px] font-bold shadow-sm whitespace-nowrap">
              ✓ Verified Digital Record
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 mb-12">
            {items.map(([label, value]) => (
              <article
                key={label}
                className="bg-white/75 border border-[#e3d9cb] rounded-[20px] p-5 min-h-[96px] shadow-[0_10px_28px_rgba(50,38,25,0.04)]"
              >
                <p className="text-[13px] text-[#756d62] mb-3">{label}</p>
                <p className="text-[19px] font-bold leading-snug">{value}</p>
              </article>
            ))}
          </div>

          <section className="bg-[#f2eee7] border border-[#e5dccf] rounded-[26px] p-9 mb-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <p className="uppercase tracking-[0.28em] text-[12px] text-[#7a7267] mb-4 font-bold">
              Maturation Timeline
            </p>

            <h3 className="text-[40px] leading-none font-bold tracking-[-0.045em] mb-8">
              From sea to cask identity
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <article className="bg-white rounded-[18px] p-7 min-h-[124px] shadow-[0_14px_34px_rgba(50,38,25,0.05)]">
                <p className="text-[15px] text-[#756d62] mb-5">Start</p>
                <p className="text-[28px] font-bold">23 March 2026</p>
              </article>

              <article className="bg-white rounded-[18px] p-7 min-h-[124px] shadow-[0_14px_34px_rgba(50,38,25,0.05)]">
                <p className="text-[15px] text-[#756d62] mb-5">
                  Target Completion
                </p>
                <p className="text-[28px] font-bold">30 May 2026</p>
              </article>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6">
            <article className="bg-white/75 border border-[#e3d9cb] rounded-[24px] p-9 min-h-[270px] shadow-[0_18px_45px_rgba(50,38,25,0.05)]">
              <p className="uppercase tracking-[0.28em] text-[12px] text-[#7a7267] mb-7 font-bold">
                Leonardo Black Box
              </p>
              <h3 className="text-[34px] leading-tight font-bold tracking-[-0.04em] mb-7">
                Environmental
                <br />
                monitoring
              </h3>
              <p className="text-[17px] leading-8 text-[#201b16]">
                Temperature, humidity and vibrations are monitored throughout
                the maturation cycle, creating a continuous environmental
                record.
              </p>
            </article>

            <article className="bg-white/75 border border-[#e3d9cb] rounded-[24px] p-9 min-h-[270px] shadow-[0_18px_45px_rgba(50,38,25,0.05)]">
              <p className="uppercase tracking-[0.28em] text-[12px] text-[#7a7267] mb-7 font-bold">
                E.L.Y.A.S.-A.I.
              </p>
              <h3 className="text-[34px] leading-tight font-bold tracking-[-0.04em] mb-7">
                Certified intelligence layer
              </h3>
              <p className="text-[17px] leading-8 text-[#201b16]">
                The process is supported by a certified E.L.Y.A.S.-A.I. system,
                protecting traceability, quality control and digital integrity.
              </p>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
}
