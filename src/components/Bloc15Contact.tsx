"use client";
import { bloc15Config, fonts } from "@/data/siteConfig";

export default function Bloc15Contact() {
  const c = bloc15Config;

  return (
    <section
      id={c.id}
      className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6 lg:gap-8 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src={c.leftIllustration.src}
            alt={c.leftIllustration.alt}
            className="w-[220px] sm:w-[260px] lg:w-[300px] h-auto object-contain"
          />
        </div>

        <div className="w-full">
          <h2 className="leading-[1.12] flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-5 sm:mb-6">
            <span
              className="text-[1.45rem] sm:text-[1.75rem] lg:text-[2rem] font-medium"
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
              className="text-[1.45rem] sm:text-[1.75rem] lg:text-[2rem] font-bold"
              style={{ color: c.title.textColor, fontFamily: fonts.body }}
            >
              {c.title.part2}
            </span>
            <span
              className="text-[1.45rem] sm:text-[1.75rem] lg:text-[2rem] font-bold"
              style={{ color: c.title.highlightColor, fontFamily: fonts.body }}
            >
              {c.title.highlight}
            </span>
            <span
              className="text-[1.45rem] sm:text-[1.75rem] lg:text-[2rem] font-bold"
              style={{ color: c.title.textColor, fontFamily: fonts.body }}
            >
              {c.title.part3}
            </span>
          </h2>

          <form className="flex flex-col gap-2.5 sm:gap-3" action="#" method="post">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {c.fields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="h-[38px] sm:h-[40px] rounded-[7px] border px-3 sm:px-3.5 text-[12px] sm:text-[13px] font-light outline-none"
                  style={{
                    borderColor: "#BCBCBC",
                    color: "#1F1F1F",
                    fontFamily: fonts.body,
                    backgroundColor: "#EFEFEF",
                  }}
                />
              ))}
            </div>

            <label className="mt-1 inline-flex items-start gap-2.5">
              <input
                type="checkbox"
                className="mt-[2px] h-[13px] w-[13px] rounded-[2px] border"
                style={{ borderColor: "#B8B8B8" }}
              />
              <span
                className="text-[10px] sm:text-[10.5px] leading-[1.35] font-light max-w-[740px]"
                style={{ color: "#202020", fontFamily: fonts.body }}
              >
                {c.consentText}
              </span>
            </label>

            <div className="pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-[8px] px-5 sm:px-6 h-[34px] text-[12px] sm:text-[12.5px] font-semibold w-fit"
                style={{
                  backgroundColor: c.title.highlightColor,
                  color: "#111111",
                  fontFamily: fonts.body,
                }}
              >
                {c.submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
