"use client";
import { bloc11Config, fonts } from "@/data/siteConfig";

function CardIcon({ icon }: { icon: string }) {
  const iconSrcByType: Record<string, string> = {
    plus: "/images/picto-maladies.svg",
    growth: "/images/picto-rendement.svg",
    bolt: "/images/picto-40-economies.svg",
    coins: "/images/picto-ROI-immédiat.svg",
    chart: "/images/picto-stabilite.svg",
    rocket: "/images/picto-valorisation.svg",
  };

  const src = iconSrcByType[icon] ?? "/images/picto-valorisation.svg";

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="w-10 h-10 object-contain"
    />
  );
}

export default function Bloc11Avantages() {
  const c = bloc11Config;

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center">
        <div
          className="rounded-lg px-5 sm:px-7 py-1.5 mb-5"
          style={{ backgroundColor: c.badge.backgroundColor }}
        >
          <span
            className="text-[12px] sm:text-[13px] font-medium"
            style={{ color: c.badge.textColor, fontFamily: fonts.body }}
          >
            {c.badge.text}
          </span>
        </div>

        <h2 className="leading-[1.2] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 mb-3 w-full max-w-5xl">
          <span
            className="text-[1.25rem] sm:text-[1.45rem] lg:text-[1.75rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-[1.4rem] sm:text-[1.6rem] lg:text-[2rem] font-medium"
            style={{
              color: c.title.textColor,
              fontFamily: fonts.heading,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor,
              textDecorationThickness: "0.08em",
              textUnderlineOffset: "5px",
            }}
          >
            {c.title.highlight}
          </span>
          <span
            className="text-[1.25rem] sm:text-[1.45rem] lg:text-[1.75rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.part2}
          </span>
        </h2>

        <p
          className="text-[13px] sm:text-[14px] leading-[1.5] font-light mb-6 sm:mb-8 max-w-3xl whitespace-pre-line"
          style={{ color: "#2E2E2E", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        <div className="relative w-full">
          <div
            className="hidden lg:block absolute left-0 right-0 top-[25%] h-px"
            style={{ backgroundColor: c.connectorColor }}
          />
          <div
            className="hidden lg:block absolute left-0 right-0 top-[75%] h-px"
            style={{ backgroundColor: c.connectorColor }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 relative z-10">
            {c.cards.map((card, index) => (
              <article
                key={index}
                className="rounded-[16px] px-5 py-5 sm:px-6 sm:py-6 min-h-[220px] flex flex-col items-center text-center"
                style={{ backgroundColor: card.backgroundColor }}
              >
                <div className="mb-3">
                  <CardIcon icon={card.icon} />
                </div>

                <h3
                  className="text-[1.2rem] sm:text-[1.35rem] font-bold leading-[1.25] mb-2"
                  style={{ color: card.textColor, fontFamily: fonts.body }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-[12px] sm:text-[13px] leading-[1.35] font-light"
                  style={{ color: card.textColor, fontFamily: fonts.body }}
                >
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
