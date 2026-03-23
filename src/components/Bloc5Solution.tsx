"use client";
import { bloc5Config, fonts } from "@/data/siteConfig";

export default function Bloc5Solution() {
  const c = bloc5Config;
  const r = c.rightColumn;

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-stretch">

        {/* ── COLONNE GAUCHE (fond jaune) ── */}
        <div className="lg:w-[52%] flex flex-col justify-center">

          {/* Badge */}
          <span
            className="inline-block rounded-md px-4 py-1.5 text-[12px] sm:text-[13px] font-semibold w-fit mb-4"
            style={{
              backgroundColor: c.badge.backgroundColor,
              color: c.badge.textColor,
              fontFamily: fonts.body,
            }}
          >
            {c.badge.text}
          </span>

          {/* Titre */}
          <h2 className="mb-4 leading-[1.15]">
            <span
              className="text-[1.6rem] sm:text-[2rem] lg:text-[2.3rem] font-bold block"
              style={{ color: "#000", fontFamily: fonts.body }}
            >
              {c.title.line1}
            </span>
            <em
              className="text-[1.8rem] sm:text-[2.3rem] lg:text-[2.7rem] block italic"
              style={{
                fontFamily: fonts.heading,
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: "#FFF", // Souligné en blanc
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
                color: "#000",
              }}
            >
              {c.title.line2_italic}
            </em>
            <span
              className="text-[1.2rem] sm:text-[1.5rem] lg:text-[1.7rem] font-bold block mt-1"
              style={{ color: "#000", fontFamily: fonts.body }}
            >
              {c.title.line3}
            </span>
          </h2>

          {/* Paragraphes */}
          <div className="flex flex-col gap-3 mb-4">
            {c.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[12px] sm:text-[13px] leading-[1.7] font-light"
                style={{ color: "#222", fontFamily: fonts.body }}
                dangerouslySetInnerHTML={{ __html: p.text }}
              />
            ))}
          </div>

          {/* Liste d'avantages */}
          <ul className="flex flex-col gap-1.5">
            {c.checkList.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="text-[16px] leading-none mt-0.5 shrink-0"
                  style={{ color: c.checkColor }}
                >
                  ✔️
                </span>
                <span
                  className="text-[12px] sm:text-[13px] font-bold leading-[1.5]"
                  style={{ color: "#222", fontFamily: fonts.body }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COLONNE DROITE (fond blanc, arrondi) ── */}
        <div
          className="lg:w-[48%] rounded-2xl px-5 sm:px-7 py-5 sm:py-6 flex flex-col justify-center"
          style={{ backgroundColor: r.backgroundColor }}
        >
          {/* Titre colonne droite */}
          <h3
            className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] font-bold mb-4 text-left"
            style={{ color: r.titleColor, fontFamily: fonts.body }}
          >
            {r.title}
          </h3>

          {/* 3 étapes + Encart 0€ */}
          <div className="flex flex-col gap-3.5">
            {r.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-[22px] px-5 sm:px-6 py-3.5 border-2"
                style={{ borderColor: step.borderColor, backgroundColor: "#FFF" }}
              >
                <p
                  className="text-[13px] sm:text-[14px] font-bold mb-1 leading-tight"
                  style={{ color: "#000", fontFamily: fonts.body }}
                >
                  {step.title}
                </p>
                <p
                  className="text-[11px] sm:text-[12px] leading-[1.6] font-light"
                  style={{ color: "#555", fontFamily: fonts.body }}
                >
                  {step.text}
                </p>
              </div>
            ))}

            {/* Encart 0€ */}
            <div
              className="rounded-[22px] px-5 sm:px-6 py-3.5 flex items-center gap-4 border-2"
              style={{
                borderColor: r.priceBox.borderColor,
                backgroundColor: r.priceBox.backgroundColor,
              }}
            >
              <span
                className="text-[2.5rem] sm:text-[3rem] font-medium leading-none shrink-0"
                style={{
                  color: r.priceBox.amountColor,
                  fontFamily: fonts.heading,
                }}
              >
                {r.priceBox.amount}
              </span>
              <div>
                <p
                  className="text-[13px] sm:text-[14px] font-bold leading-tight mb-1"
                  style={{ color: "#000", fontFamily: fonts.body }}
                >
                  {r.priceBox.title}
                </p>
                <p
                  className="text-[11px] sm:text-[12px] font-normal leading-[1.5]"
                  style={{ color: "#555", fontFamily: fonts.body }}
                >
                  {r.priceBox.text}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
