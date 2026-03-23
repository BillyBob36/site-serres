"use client";
import { bloc4Config, fonts } from "@/data/siteConfig";

export default function Bloc4Defi() {
  const c = bloc4Config;

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-16 overflow-hidden relative"
      style={{ backgroundColor: c.backgroundColor }}
    >
      {/* Image de fond en filigrane */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <img
          src={c.backgroundImage}
          alt=""
          className="w-full max-w-[900px] h-auto object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* Badge */}
        <div
          className="rounded-lg px-5 py-1.5 border mb-4"
          style={{
            borderColor: c.badge.borderColor,
            backgroundColor: c.badge.backgroundColor,
          }}
        >
          <span
            className="text-[13px] sm:text-[14px] font-medium"
            style={{ color: c.badge.textColor, fontFamily: fonts.body }}
          >
            {c.badge.text}
          </span>
        </div>

        {/* Titre */}
        <h2 className="leading-[1.3] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 mb-3 w-full">
          <span 
            className="text-lg sm:text-xl lg:text-[1.5rem] font-bold"
            style={{ color: "#000", fontFamily: fonts.body }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-xl sm:text-2xl lg:text-[2rem] font-medium"
            style={{
              color: "#000",
              fontFamily: fonts.heading,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor,
              textDecorationThickness: "0.08em",
              textUnderlineOffset: "6px",
            }}
          >
            {c.title.highlight}
          </span>
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.6] mb-6 sm:mb-8 font-light max-w-2xl"
          style={{ color: "#444", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        {/* Grille 2x2 de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {c.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 px-5 sm:px-6 py-5 sm:py-6 text-left flex flex-col justify-between"
            >
              <div>
                <h3
                  className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold mb-2 leading-tight"
                  style={{ color: "#000", fontFamily: fonts.body }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[12px] sm:text-[13px] leading-[1.6] font-light mb-4"
                  style={{ color: "#444", fontFamily: fonts.body }}
                >
                  {card.text}
                </p>
              </div>
              <div>
                <span
                  className="inline-block rounded-full px-4 py-1.5 text-[11px] sm:text-[12px] font-bold"
                  style={{
                    backgroundColor: card.badgeColor,
                    color: card.badgeTextColor,
                    fontFamily: fonts.body,
                  }}
                >
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
