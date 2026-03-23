"use client";
import { bloc10Config, fonts } from "@/data/siteConfig";

export default function Bloc10Conditions() {
  const c = bloc10Config;

  // Séparer les cartes en deux colonnes
  const leftCards = c.cards.filter(card => card.side === "left");
  const rightCards = c.cards.filter(card => card.side === "right");

  return (
    <section
      id={c.id}
      className="w-full py-4 sm:py-5 lg:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="rounded-lg px-4 sm:px-6 py-1.5 border mb-3"
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

        {/* Titre */}
        <h2 className="leading-[1.2] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-0 mb-2 w-full">
          <span
            className="text-lg sm:text-xl lg:text-[1.6rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.prefix}
          </span>
          <span
            className="text-xl sm:text-2xl lg:text-[2rem] font-medium"
            style={{
              color: c.title.textColor,
              fontFamily: fonts.heading,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor,
              textDecorationThickness: "0.1em",
              textUnderlineOffset: "4px",
            }}
          >
            {c.title.highlight}
          </span>
          <span
            className="text-lg sm:text-xl lg:text-[1.6rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.suffix}
          </span>
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.6] mb-5 sm:mb-6 font-light max-w-xl whitespace-pre-line"
          style={{ color: "#555", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        {/* Layout 2 colonnes décalées */}
        {/* L'espace horizontal (gap-x) est réduit pour s'approcher de l'espace vertical (gap-y) */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 w-full max-w-[950px] items-start">
          
          {/* Colonne Gauche */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full md:w-1/2">
            {leftCards.map((card, i) => (
              <div
                key={i}
                className="w-full border-2 px-5 py-4 text-left"
                style={{
                  borderColor: c.cardBorderColor,
                  backgroundColor: c.backgroundColor,
                }}
              >
                <h3
                  className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold mb-2"
                  style={{ color: "#000", fontFamily: fonts.body }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[11px] sm:text-[12px] lg:text-[13px] leading-[1.5] font-light"
                  style={{ color: "#333", fontFamily: fonts.body }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Colonne Droite - Décalée vers le bas sur desktop */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full md:w-1/2 md:mt-10 lg:mt-12">
            {rightCards.map((card, i) => (
              <div
                key={i}
                className="w-full border-2 px-5 py-4 text-left"
                style={{
                  borderColor: c.cardBorderColor,
                  backgroundColor: c.backgroundColor,
                }}
              >
                <h3
                  className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold mb-2"
                  style={{ color: "#000", fontFamily: fonts.body }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[11px] sm:text-[12px] lg:text-[13px] leading-[1.5] font-light"
                  style={{ color: "#333", fontFamily: fonts.body }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <a
          href={c.cta.href}
          className="mt-6 sm:mt-8 rounded-lg px-6 py-2.5 text-[12px] sm:text-[13px] font-bold transition-transform hover:scale-105"
          style={{
            backgroundColor: c.cta.backgroundColor,
            color: c.cta.textColor,
            fontFamily: fonts.body,
          }}
        >
          {c.cta.text}
        </a>

      </div>
    </section>
  );
}
