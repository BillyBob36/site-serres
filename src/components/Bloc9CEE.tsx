"use client";
import { bloc9Config, fonts } from "@/data/siteConfig";

export default function Bloc9CEE() {
  const c = bloc9Config;

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="rounded-lg px-4 sm:px-6 py-1.5 border mb-4 sm:mb-5"
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

        {/* Titre — Bodoni pour "Financement intégral", Poppins bold pour le reste — 1 ligne desktop */}
        <h2 className="leading-[1.2] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-0 mb-2 sm:mb-3 w-full">
          <span
            className="text-xl sm:text-2xl lg:text-[2rem] font-medium"
            style={{ color: c.title.textColor, fontFamily: fonts.heading }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-lg sm:text-xl lg:text-[1.5rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.highlight}
          </span>
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.6] mb-5 sm:mb-6 font-light max-w-3xl whitespace-pre-line"
          style={{ color: "#333", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        {/* 2 colonnes */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 w-full items-start text-left">

          {/* ── Colonne Gauche ── */}
          <div className="flex flex-col gap-4 lg:w-[48%]">

            {/* Carte Formule (vert clair) */}
            <div
              className="rounded-[18px] px-5 py-4 flex flex-col"
              style={{ backgroundColor: c.leftCards.topCard.backgroundColor }}
            >
              <h3
                className="text-[13px] sm:text-[14px] font-bold mb-2"
                style={{ color: "#000", fontFamily: fonts.body }}
              >
                {c.leftCards.topCard.title}
              </h3>
              <p
                className="text-[1.3rem] sm:text-[1.6rem] lg:text-[1.9rem] font-bold leading-tight mb-1"
                style={{ color: "#fff", fontFamily: fonts.body }}
              >
                {c.leftCards.topCard.equation}
              </p>
              <p
                className="text-[10px] sm:text-[11px] font-medium"
                style={{ color: "#000", fontFamily: fonts.body }}
              >
                {c.leftCards.topCard.subtext}
              </p>
            </div>

            {/* Carte Exemple (vert foncé) */}
            <div
              className="rounded-[18px] px-5 py-4 flex flex-col"
              style={{ backgroundColor: c.leftCards.bottomCard.backgroundColor }}
            >
              <h3
                className="text-[13px] sm:text-[14px] font-bold mb-3 text-white"
                style={{ fontFamily: fonts.body }}
              >
                {c.leftCards.bottomCard.title}
              </h3>

              <div className="flex flex-col gap-1 mb-3">
                {c.leftCards.bottomCard.rows.map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-white border-b border-white/20 pb-1"
                  >
                    <span className="text-[11px] sm:text-[12px] font-light">{row.label}</span>
                    <span className="text-[11px] sm:text-[12px] font-bold text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center text-white mt-1 mb-1">
                <span className="text-[13px] sm:text-[14px] font-bold">
                  {c.leftCards.bottomCard.totalRow.label}
                </span>
                <span className="text-[16px] sm:text-[18px] font-black">
                  {c.leftCards.bottomCard.totalRow.value}
                </span>
              </div>
            </div>

            {/* Astérisque — HORS de la carte verte, sur le fond jaune */}
            <p
              className="text-[9px] sm:text-[10px] font-light italic leading-tight px-1"
              style={{ color: "#555", fontFamily: fonts.body }}
            >
              {c.leftCards.bottomCard.asterisk}
            </p>
          </div>

          {/* ── Colonne Droite ── */}
          <div className="flex flex-col lg:w-[52%] gap-4">

            {/* Grande carte blanche */}
            <div
              className="rounded-[20px] px-5 sm:px-7 py-5 sm:py-6 flex flex-col items-center text-center"
              style={{ backgroundColor: c.rightCard.backgroundColor }}
            >
              <img
                src="/images/agriculture.svg"
                alt=""
                aria-hidden="true"
                className="w-10 h-10 mb-3 object-contain"
              />

              <h3
                className="text-[1rem] sm:text-[1.15rem] font-bold mb-3"
                style={{ color: "#009B3A", fontFamily: fonts.body }}
              >
                {c.rightCard.title}
              </h3>

              <div className="flex flex-col gap-2 mb-5 w-full">
                {c.rightCard.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[11px] sm:text-[12px] leading-[1.6] font-light"
                    style={{ color: "#333", fontFamily: fonts.body }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>

              {/* Bouton bordé (outline), pas rempli */}
              <a
                href={c.rightCard.cta.href}
                className="rounded-lg px-6 py-2.5 text-[12px] sm:text-[13px] font-bold border-2 transition-colors hover:bg-black hover:text-white mx-auto"
                style={{
                  borderColor: "#000",
                  backgroundColor: "transparent",
                  color: "#000",
                  fontFamily: fonts.body,
                }}
              >
                {c.rightCard.cta.text}
              </a>
            </div>

            {/* Encart 0€ — EN DESSOUS, aligné à droite, pas de chevauchement */}
            <div className="flex justify-end">
              <div
                className="w-[90%] sm:w-[80%] rounded-[14px] px-4 py-3 flex items-center gap-3 border"
                style={{
                  backgroundColor: c.rightCard.bottomBadge.backgroundColor,
                  borderColor: "#E8D48B",
                }}
              >
                <span
                  className="text-[1.8rem] sm:text-[2.2rem] leading-none shrink-0 font-bold"
                  style={{ color: "#009B3A", fontFamily: fonts.heading }}
                >
                  {c.rightCard.bottomBadge.value}
                </span>
                <div className="text-left flex flex-col justify-center">
                  <span
                    className="text-[11px] sm:text-[12px] font-bold text-black leading-tight mb-0.5"
                    style={{ fontFamily: fonts.body }}
                  >
                    {c.rightCard.bottomBadge.title}
                  </span>
                  <span
                    className="text-[9px] sm:text-[10px] font-light text-black leading-[1.3] whitespace-pre-line"
                    style={{ fontFamily: fonts.body }}
                  >
                    {c.rightCard.bottomBadge.text}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
