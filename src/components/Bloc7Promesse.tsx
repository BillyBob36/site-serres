"use client";
import { bloc7Config, fonts } from "@/data/siteConfig";

export default function Bloc7Promesse() {
  const c = bloc7Config;

  return (
    <section
      id={c.id}
      className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, ${c.backgroundColorTop} 0%, ${c.backgroundColorBottom} 100%)`,
        minHeight: "calc(100vh - 128px)", // Pour forcer la pleine page si c'est la fin, ou juste être généreux
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full">
        
        {/* Badge */}
        <div
          className="rounded-lg px-4 sm:px-5 py-1.5 border mb-6 sm:mb-8"
          style={{
            borderColor: c.badge.borderColor,
            backgroundColor: c.badge.backgroundColor,
          }}
        >
          <span
            className="text-[12px] sm:text-[13px] font-medium"
            style={{ color: c.badge.textColor, fontFamily: fonts.body }}
          >
            {c.badge.text}
          </span>
        </div>

        {/* Titre (Bodoni) */}
        <h2 
          className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2.2rem] leading-[1.3] mb-5 sm:mb-6 w-full max-w-4xl"
          style={{ fontFamily: fonts.heading, color: c.title.textColor, fontWeight: 500 }}
        >
          {c.title.part1}
          <span style={{ color: c.title.highlightColor }}>{c.title.highlight1}</span>
          <span className="block sm:inline">{c.title.part2}</span>
          <span style={{ color: c.title.highlightColor }}>{c.title.highlight2}</span>
          {c.title.part3}
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[11px] sm:text-[13px] lg:text-[14px] leading-[1.6] mb-10 sm:mb-14 font-light italic max-w-2xl whitespace-pre-line"
          style={{ color: "rgba(255, 255, 255, 0.9)", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        {/* 3 Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mb-10 sm:mb-14">
          {c.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] px-4 py-4 sm:py-5 flex flex-col items-center text-center shadow-xl"
              style={{ boxShadow: "0 15px 40px -5px rgba(0,0,0,0.15)" }}
            >
              <span
                className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-medium leading-none mb-1"
                style={{ color: card.valueColor, fontFamily: fonts.body }} // Poppins sur la maquette, pas Bodoni
              >
                {card.value}
              </span>
              <p
                className="text-[13px] sm:text-[14px] font-medium leading-tight mb-0.5"
                style={{ color: "#000", fontFamily: fonts.body }}
              >
                {card.text1}
              </p>
              <p
                className="text-[11px] sm:text-[12px] font-light leading-tight"
                style={{ color: "#444", fontFamily: fonts.body }}
              >
                {card.text2}
              </p>
            </div>
          ))}
        </div>

        {/* Boutons (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          {c.ctas.map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              className="rounded-lg px-6 sm:px-8 py-3 text-[13px] sm:text-[14px] font-bold transition-transform hover:scale-105 text-center min-w-[220px]"
              style={{
                backgroundColor: cta.backgroundColor,
                color: cta.textColor,
                fontFamily: fonts.body,
              }}
            >
              {cta.text}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
