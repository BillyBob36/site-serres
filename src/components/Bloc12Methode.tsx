"use client";
import { bloc12Config, fonts } from "@/data/siteConfig";

export default function Bloc12Methode() {
  const c = bloc12Config;

  return (
    <section
      id={c.id}
      className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${c.backgroundColor} 0%, ${c.backgroundColor} 82%, ${c.bottomStripColor} 82%, ${c.bottomStripColor} 100%)`,
      }}
    >
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
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
            className="text-[1.12rem] sm:text-[1.3rem] lg:text-[1.72rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-[1.12rem] sm:text-[1.3rem] lg:text-[1.72rem] font-medium"
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
            className="text-[1.12rem] sm:text-[1.3rem] lg:text-[1.72rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.part2}
          </span>
        </h2>

        <p
          className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.45] font-light mb-7 sm:mb-9 max-w-3xl whitespace-pre-line"
          style={{ color: "#222", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        <div className="w-full relative mb-8 sm:mb-10">
          <div
            className="hidden lg:block absolute left-[10%] right-[10%] top-[22px] border-t-4 border-dotted"
            style={{ borderColor: "#FFFFFF" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4 relative z-10">
            {c.steps.map((step, index) => (
              <article key={index} className="flex flex-col items-center text-center px-1">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#FFF" }}
                >
                  <span
                    className="text-[2.1rem] leading-none"
                    style={{ color: c.backgroundColor, fontFamily: fonts.body }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-[1.05rem] sm:text-[1.15rem] font-bold leading-[1.25] mb-2"
                  style={{ color: "#111", fontFamily: fonts.body }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-[11px] sm:text-[12px] leading-[1.35] font-light max-w-[220px]"
                  style={{ color: "#111", fontFamily: fonts.body }}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="w-full rounded-[16px] px-5 sm:px-7 lg:px-10 py-5 sm:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden"
          style={{ backgroundColor: c.bottomBanner.backgroundColor }}
        >
          <img
            src="/images/agriculture.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 w-[180px] h-[120px] opacity-20 pointer-events-none object-contain"
          />

          <div className="relative z-10 md:w-[72%] text-left">
            <h3
              className="text-[0.95rem] sm:text-[1.05rem] lg:text-[1.15rem] font-bold leading-[1.2] mb-2 md:whitespace-nowrap"
              style={{ color: "#FFFFFF", fontFamily: fonts.body }}
            >
              {c.bottomBanner.heading}
            </h3>
            <p
              className="text-[12px] sm:text-[13px] leading-[1.45] font-light mb-4"
              style={{ color: "#FFFFFF", fontFamily: fonts.body }}
            >
              {c.bottomBanner.text}
            </p>
            <a
              href={c.bottomBanner.cta.href}
              className="inline-flex rounded-md px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-bold"
              style={{
                backgroundColor: c.bottomBanner.cta.backgroundColor,
                color: c.bottomBanner.cta.textColor,
                fontFamily: fonts.body,
              }}
            >
              {c.bottomBanner.cta.text}
            </a>
          </div>

          <div className="relative z-10 md:w-[25%] w-full flex justify-start md:justify-end">
            <span
              className="text-[4.4rem] sm:text-[5.1rem] lg:text-[5.8rem] leading-none"
              style={{ color: c.bottomBanner.amountColor, fontFamily: fonts.heading }}
            >
              {c.bottomBanner.amount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
