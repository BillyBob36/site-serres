"use client";
import { bloc14Config, fonts } from "@/data/siteConfig";

function ArrowSquare({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-md"
      style={{ backgroundColor: dark ? "#1E1E1E" : "#F3D21A" }}
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M9 7h8v8"
          stroke={dark ? "#FFFFFF" : "#111111"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Bloc14Ressources() {
  const c = bloc14Config;

  return (
    <section
      id={c.id}
      className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <div
          className="rounded-lg px-5 sm:px-7 py-1.5 mb-6"
          style={{ backgroundColor: c.badge.backgroundColor }}
        >
          <span
            className="text-[12px] sm:text-[13px] font-medium"
            style={{ color: c.badge.textColor, fontFamily: fonts.body }}
          >
            {c.badge.text}
          </span>
        </div>

        <h2 className="leading-[1.18] flex flex-wrap justify-center items-baseline gap-x-1.5 gap-y-1 mb-7 sm:mb-8 w-full max-w-5xl">
          <span
            className="text-[1.28rem] sm:text-[1.45rem] lg:text-[1.7rem] font-medium"
            style={{
              color: c.title.textColor,
              fontFamily: fonts.heading,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor,
              textDecorationThickness: "0.08em",
              textUnderlineOffset: "4px",
            }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-[1.16rem] sm:text-[1.32rem] lg:text-[1.62rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.part2}
          </span>
        </h2>

        <div className="w-full flex flex-col gap-4 sm:gap-5 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            <article className="relative lg:col-span-2 h-[210px] sm:h-[250px] lg:h-[355px] rounded-[16px] overflow-hidden">
              <img src={c.featuredMain.image} alt="Actualité principale" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A5F6FB3] via-[#054E67A8] to-[#111111D4]" />

              <div className="absolute inset-x-0 top-0 p-5 sm:p-7 flex items-start justify-between gap-4">
                <h3
                  className="text-[1.35rem] sm:text-[1.8rem] lg:text-[2.15rem] font-bold leading-[1.08] max-w-[78%] text-white"
                  style={{ fontFamily: fonts.body }}
                >
                  {c.featuredMain.title}
                </h3>
                <ArrowSquare />
              </div>

              <p
                className="absolute left-5 sm:left-7 right-5 sm:right-7 bottom-5 text-[11px] sm:text-[13px] lg:text-[14px] font-light leading-[1.3] text-white"
                style={{ fontFamily: fonts.body }}
              >
                {c.featuredMain.text}
              </p>
            </article>

            <article className="relative h-[210px] sm:h-[250px] lg:h-[355px] rounded-[16px] overflow-hidden">
              <img src={c.featuredSide.image} alt="Actualité secondaire" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000036] via-[#11111152] to-[#111111C9]" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3
                  className="text-[1.1rem] sm:text-[1.5rem] lg:text-[1.9rem] font-bold leading-[1.08] mb-2"
                  style={{ color: "#F3D21A", fontFamily: fonts.body }}
                >
                  {c.featuredSide.title}
                </h3>
                <p
                  className="text-[10px] sm:text-[12px] lg:text-[13px] font-light leading-[1.2] text-white mb-3 sm:mb-4"
                  style={{ fontFamily: fonts.body }}
                >
                  {c.featuredSide.text}
                </p>
                <div className="flex justify-end">
                  <ArrowSquare />
                </div>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {c.cards.map((card, index) => (
              <article
                key={index}
                className={`rounded-[16px] bg-white px-5 sm:px-6 pt-7 sm:pt-8 pb-4 sm:pb-5 flex flex-col ${
                  index === 1 || index === 2
                    ? "h-[176px] sm:h-[188px] lg:h-[198px]"
                    : "h-[186px] sm:h-[200px] lg:h-[212px]"
                }`}
              >
                <div className="mt-auto">
                  <h3
                    className="text-[1.2rem] sm:text-[1.35rem] lg:text-[1.55rem] font-bold leading-[1.1] mb-2"
                    style={{ color: "#F3D21A", fontFamily: fonts.body }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[10px] sm:text-[11px] lg:text-[14px] font-light leading-[1.25] text-[#1E1E1E] mb-3"
                    style={{ fontFamily: fonts.body }}
                  >
                    {card.text}
                  </p>
                  <div className="flex justify-end">
                    <ArrowSquare />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="pt-3 sm:pt-4 flex justify-center">
            <a
              href={c.cta.href}
              className="inline-flex items-center gap-3 rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-[1rem] sm:text-[1.08rem] lg:text-[1.12rem] font-bold"
              style={{
                backgroundColor: c.cta.backgroundColor,
                color: c.cta.textColor,
                fontFamily: fonts.body,
              }}
            >
              <span>{c.cta.text}</span>
              <ArrowSquare dark />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
