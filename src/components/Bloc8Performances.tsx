"use client";
import { bloc8Config, fonts } from "@/data/siteConfig";

export default function Bloc8Performances() {
  const c = bloc8Config;

  return (
    <section
      id={c.id}
      className="w-full py-4 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="rounded-lg px-4 py-1.5 border mb-3 sm:mb-4"
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
        <h2 className="leading-[1.3] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 mb-2 w-full max-w-4xl mx-auto">
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
              fontFamily: fonts.heading, // Bodoni
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor, // Jaune
              textDecorationThickness: "0.08em",
              textUnderlineOffset: "6px",
            }}
          >
            {c.title.highlight}
          </span>
          <span 
            className="text-lg sm:text-xl lg:text-[1.5rem] font-bold"
            style={{ color: "#000", fontFamily: fonts.body }}
          >
            {c.title.part2}
          </span>
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] mb-4 sm:mb-6 font-light max-w-3xl whitespace-pre-line"
          style={{ color: "#333", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        {/* 4 Cartes (Couleurs pastel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mb-4 sm:mb-6">
          {c.cards.map((card, i) => (
            <div
              key={i}
              className="rounded-[24px] px-4 py-4 sm:py-5 flex flex-col items-center justify-center text-center shadow-sm"
              style={{ backgroundColor: card.backgroundColor }}
            >
              <div className="flex items-baseline justify-center mb-2">
                <span
                  className="text-[2.5rem] sm:text-[3rem] font-medium leading-none"
                  style={{ color: card.textColor, fontFamily: fonts.body }}
                >
                  {card.value}
                </span>
                {card.valueSuffix && (
                  <span
                    className="text-[13px] font-medium ml-1"
                    style={{ color: card.textColor, fontFamily: fonts.body }}
                  >
                    {card.valueSuffix}
                  </span>
                )}
              </div>
              
              {card.title && (
                <p
                  className="text-[14px] sm:text-[15px] font-bold leading-tight mb-2"
                  style={{ color: card.textColor, fontFamily: fonts.body }}
                >
                  {card.title}
                </p>
              )}
              
              <p
                className="text-[11px] sm:text-[12px] font-light leading-[1.5]"
                style={{ color: card.textColor, fontFamily: fonts.body }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bannière Verte du bas */}
        <div 
          className="w-full rounded-[24px] overflow-hidden relative text-left flex flex-col md:flex-row items-center justify-between p-5 sm:p-6 lg:p-8 shadow-md"
          style={{ backgroundColor: c.bottomBanner.backgroundColor }}
        >
          <img
            src="/images/agriculture.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[140%] opacity-15 pointer-events-none object-contain"
          />

          {/* Contenu gauche */}
          <div className="relative z-10 md:w-[65%] mb-8 md:mb-0">
            <h3 
              className="text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem] font-bold mb-4"
              style={{ color: "#FFF", fontFamily: fonts.body }}
            >
              {c.bottomBanner.title}
            </h3>
            <p 
              className="text-[12px] sm:text-[13px] leading-[1.6] font-light mb-6"
              style={{ color: "#FFF", fontFamily: fonts.body }}
              dangerouslySetInnerHTML={{ __html: c.bottomBanner.text }}
            />
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {c.bottomBanner.ctas.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className="rounded-md px-6 py-2.5 text-[12px] sm:text-[13px] font-bold transition-transform hover:scale-105 text-center flex items-center justify-center"
                  style={{
                    backgroundColor: cta.backgroundColor,
                    color: cta.textColor,
                    border: cta.borderColor ? `1px solid ${cta.borderColor}` : "none",
                    fontFamily: fonts.body,
                  }}
                >
                  {cta.text}
                </a>
              ))}
            </div>
          </div>

          {/* Gros chiffre droit */}
          <div className="relative z-10 md:w-[30%] flex justify-center md:justify-end">
            <span 
              className="text-[5rem] sm:text-[6rem] lg:text-[8rem] leading-none"
              style={{ 
                color: "#FFF", 
                fontFamily: fonts.heading, // Bodoni pour le gros chiffre
                fontWeight: 400 
              }}
            >
              {c.bottomBanner.bigValue}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
