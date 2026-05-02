import Image from "next/image";

export default function Page() {
  return (
    <div>

      {/* HEADER HERO */}
      <header className="bg-[#0b0b0b] text-white px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* LOGO */}
          <Image
            src="/arbroath-logo-full.png"
            alt="Arbroath A.D. 1320"
            width={400}
            height={400}
            className="mb-10 w-[340px] h-auto"
            priority
          />

          {/* TITLE */}
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
            Digital Cask Passport
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-lg text-stone-300 font-serif">
            Sicilian Sea Salt — Islay Edition
          </p>

        </div>
      </header>

    </div>
  );
}
