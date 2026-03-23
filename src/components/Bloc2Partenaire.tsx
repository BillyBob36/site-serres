"use client";
import { bloc2Config, fonts } from "@/data/siteConfig";

export default function Bloc2Partenaire() {
  const c = bloc2Config;

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-14 items-center">
        {/* ── COLONNE GAUCHE : image + badge ── */}
        <div className="lg:w-[48%] flex flex-col items-center justify-center gap-4 w-full">
          {/* Image partenariat */}
          <img
            src={c.image.src}
            alt={c.image.alt}
            className="w-full object-contain rounded-lg"
          />

          {/* Badge partenariat */}
          <div
            className="rounded-xl px-5 sm:px-10 py-4 sm:py-6 text-center w-fit border"
            style={{ 
              backgroundColor: c.partnerBadge.backgroundColor,
              borderColor: c.partnerBadge.borderColor,
            }}
          >
            <p
              className="text-[13px] font-medium"
              style={{ color: c.partnerBadge.accentColor, fontFamily: fonts.body }}
            >
              {c.partnerBadge.text}
            </p>
            <p
              className="text-[2.8rem] sm:text-[4rem] font-extrabold italic mt-1 leading-none"
              style={{ color: c.partnerBadge.accentColor, fontFamily: fonts.heading }}
            >
              {c.partnerBadge.year}
            </p>
            <p
              className="text-[9px] mt-1.5 font-medium"
              style={{ color: c.partnerBadge.accentColor, fontFamily: fonts.body }}
            >
              {c.partnerBadge.subtext}
            </p>
          </div>
        </div>

        {/* ── COLONNE DROITE : texte ── */}
        <div className="lg:w-[52%] pt-2">
          {/* Titre mixte Poppins/Bodoni */}
          <h2 className="mb-4 sm:mb-5 leading-[1.2]">
            <span
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold block"
              style={{ color: "#000", fontFamily: fonts.body }}
            >
              {c.title.line1}
            </span>
            <span
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-medium italic block"
              style={{ 
                color: "#000", 
                fontFamily: fonts.heading,
                textDecoration: "underline",
                textDecorationColor: c.title.line2_highlightColor,
                textDecorationThickness: "0.08em",
                textUnderlineOffset: "0.15em",
              }}
            >
              {c.title.line2_highlight}
            </span>
            <span
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold block mt-1"
              style={{ color: "#000", fontFamily: fonts.body }}
            >
              {c.title.line3}
            </span>
          </h2>

          {/* Paragraphes */}
          <div className="flex flex-col gap-3 mb-6">
            {c.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[13px] sm:text-[14px] leading-[1.7] font-light"
                style={{ color: "#333", fontFamily: fonts.body }}
                dangerouslySetInnerHTML={{ __html: p.text }}
              />
            ))}
          </div>

          {/* Sous-titre section 2 */}
          <h3 className="mb-3 sm:mb-4 leading-[1.3] flex flex-wrap items-baseline gap-2">
            <span
              className="text-xl sm:text-2xl lg:text-[2rem] font-medium italic"
              style={{ 
                color: "#000", 
                fontFamily: fonts.heading,
                textDecoration: "underline",
                textDecorationColor: c.title.line2_highlightColor,
                textDecorationThickness: "0.08em",
                textUnderlineOffset: "6px",
              }}
            >
              {c.section2Title.prefix_highlight}
            </span>
            <span
              className="text-lg sm:text-xl lg:text-[1.5rem] font-bold"
              style={{ color: "#000", fontFamily: fonts.body }}
            >
              {c.section2Title.suffix}
            </span>
          </h3>

          {/* Texte section 2 */}
          <p
            className="text-[13px] sm:text-[14px] leading-[1.6] mb-5 sm:mb-6 font-light"
            style={{ color: "#333", fontFamily: fonts.body }}
            dangerouslySetInnerHTML={{ __html: c.section2Text }}
          />

          {/* 4 Feature boxes (grille 2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.features.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border px-5 py-6 flex items-center justify-center text-center bg-white"
                style={{ borderColor: c.featureBoxBorderColor }}
              >
                <p
                  className="text-[12.5px] font-bold leading-relaxed"
                  style={{ color: "#000", fontFamily: fonts.body }}
                >
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
