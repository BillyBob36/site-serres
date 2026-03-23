"use client";
import { bloc6Config, fonts } from "@/data/siteConfig";

export default function Bloc6Fonctionnement() {
  const c = bloc6Config;

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-16 overflow-hidden relative"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="rounded-lg px-4 py-1.5 border mb-4"
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
        <h2 className="leading-[1.3] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 mb-4 w-full max-w-5xl mx-auto">
          <span 
            className="text-xl sm:text-2xl lg:text-[1.8rem] font-bold"
            style={{ color: "#000", fontFamily: fonts.body }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-2xl sm:text-3xl lg:text-[2.2rem]"
            style={{
              color: "#000",
              fontFamily: fonts.heading, // Bodoni
              fontWeight: 500,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor, // Jaune
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            }}
          >
            {c.title.highlight}
          </span>
          <span 
            className="text-xl sm:text-2xl lg:text-[1.8rem] font-bold"
            style={{ color: "#000", fontFamily: fonts.body }}
          >
            {c.title.part2}
          </span>
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.6] mb-8 sm:mb-12 font-light max-w-3xl whitespace-pre-line"
          style={{ color: "#333", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        {/* Cartes et Ligne de connexion */}
        <div className="relative w-full max-w-5xl mx-auto mt-4">
          
          {/* Ligne horizontale (visible uniquement sur desktop/tablette) */}
          <div 
            className="hidden md:block absolute top-[50%] left-0 w-full h-[2px] -translate-y-1/2 z-0"
            style={{ backgroundColor: c.title.highlightColor }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {c.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-[24px] px-6 py-10 flex flex-col items-center text-center transition-transform hover:-translate-y-1 shadow-sm"
                style={{ backgroundColor: card.backgroundColor }}
              >
                {/* Numéro circulaire blanc découpé */}
                <div 
                  className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#FFF" }}
                >
                  <span 
                    className="text-[48px] font-black leading-none"
                    style={{ 
                      color: card.backgroundColor, // Le chiffre prend la couleur du fond (effet de découpe/masque)
                      fontFamily: fonts.body 
                    }}
                  >
                    {card.number}
                  </span>
                </div>

                <h3
                  className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold mb-3 leading-tight"
                  style={{ color: card.textColor, fontFamily: fonts.body }}
                >
                  {card.title}
                </h3>
                
                <p
                  className="text-[11px] sm:text-[12px] leading-[1.6] font-normal"
                  style={{ color: card.textColor, fontFamily: fonts.body }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
