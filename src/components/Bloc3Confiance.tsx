"use client";
import { bloc3Config, fonts } from "@/data/siteConfig";

export default function Bloc3Confiance() {
  const c = bloc3Config;

  return (
    <section
      id={c.id}
      className="w-full py-5 sm:py-6 lg:py-8 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <div
          className="rounded-md px-3 py-1.5 border mb-3"
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

        {/* Titre Principal */}
        <h2 className="leading-[1.3] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 mb-3 w-full">
          <span 
            className="text-lg sm:text-xl lg:text-[1.5rem] font-bold"
            style={{ color: "#000", fontFamily: fonts.body }}
          >
            {c.title.part1}{c.title.part2}
          </span>
          <span
            className="text-xl sm:text-2xl lg:text-[2rem] font-medium"
            style={{
              color: "#000",
              fontFamily: fonts.heading,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor,
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
            {c.title.part3}
          </span>
        </h2>

        {/* Sous-titre */}
        <p
          className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] mb-5 font-light max-w-3xl"
          style={{ color: "#333", fontFamily: fonts.body }}
        >
          {c.subtitle.text1}
          <br className="hidden sm:block" />
          {c.subtitle.text2}
          <strong className="font-bold">{c.subtitle.bold}</strong>
          {" :"}
          <br className="hidden sm:block" />
          {c.subtitle.text3.replace(" :\n", "").replace(" :", "")}
        </p>

        {/* Liste des partenaires - Sur une ligne en desktop */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:flex-nowrap mb-6 w-full">
          {c.partners.map((partner, i) => (
            <div
              key={i}
              className="px-2.5 py-1 sm:px-4 sm:py-2 bg-white border border-gray-200 rounded-md shadow-sm"
            >
              <span
                className="text-[8px] sm:text-[10px] lg:text-[12px] font-bold tracking-wide uppercase whitespace-nowrap"
                style={{ color: "#111", fontFamily: fonts.body }}
              >
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Cartes de Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 w-full max-w-5xl mb-5">
          {c.statsCards.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-xl py-4 sm:py-5 px-4"
              style={{ backgroundColor: stat.backgroundColor }}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-2xl sm:text-4xl lg:text-[3rem] font-medium leading-none"
                  style={{ color: stat.textColor, fontFamily: fonts.body }}
                >
                  {stat.value}
                </span>
                {stat.unit && (
                  <span
                    className="text-lg sm:text-xl font-medium"
                    style={{ color: stat.textColor, fontFamily: fonts.body }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>
              <p
                className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-center leading-[1.3] whitespace-pre-line"
                style={{ color: stat.textColor, fontFamily: fonts.body }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Témoignage */}
        <div
          className="relative rounded-xl py-4 px-4 sm:py-6 sm:px-10 w-full max-w-4xl text-left shadow-sm bg-white"
        >
          {/* Guillemets en fond */}
          <div
            className="absolute top-1 left-2 sm:top-2 sm:left-4 leading-none"
            style={{
              fontSize: "80px",
              fontFamily: "serif",
              color: c.testimonial.quoteIconColor,
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <div className="relative z-10 pl-5 sm:pl-10">
            <p
              className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.5] font-normal mb-2"
              style={{ color: "#333", fontFamily: fonts.body }}
            >
              {c.testimonial.text}
            </p>
            <p
              className="text-[11px] sm:text-[12px] lg:text-[13px] italic font-medium"
              style={{ color: c.testimonial.authorColor, fontFamily: fonts.body }}
            >
              {c.testimonial.author}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
