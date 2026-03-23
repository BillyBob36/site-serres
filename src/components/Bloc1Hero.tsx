"use client";
import { bloc1Config, fonts } from "@/data/siteConfig";

export default function Bloc1Hero() {
  const c = bloc1Config;

  return (
    <section id={c.id} className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 'calc(100vh - 128px)' }}>
        {/* ── COLONNE GAUCHE (fond jaune) ── */}
        <div
          className="lg:w-[52%] px-5 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 flex flex-col justify-center"
          style={{ backgroundColor: c.backgroundColor }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold px-3.5 py-1.5 rounded-md w-fit mb-3 sm:mb-4"
            style={{
              backgroundColor: c.badge.backgroundColor,
              color: c.badge.textColor,
              fontFamily: fonts.body,
            }}
          >
            <img
              src="/images/agriculture.svg"
              alt=""
              aria-hidden="true"
              className="w-[14px] h-[14px] object-contain"
            />
            {c.badge.text}
          </span>

          {/* Titre */}
          <h1
            className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.9rem] font-bold leading-[1.15] sm:leading-[1.2] mb-3 sm:mb-4"
            style={{ color: "#000", fontFamily: fonts.body }}
          >
            {c.title.line1}
            <br />
            <em
              style={{
                fontFamily: fonts.heading,
                fontStyle: "italic",
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationColor: c.title.highlightColor,
                textDecorationThickness: "0.08em",
                textUnderlineOffset: "0.15em",
              }}
            >
              {c.title.line2_italic}
            </em>
            <br />
            {c.title.line3}
          </h1>

          {/* Sous-titre */}
          <p
            className="text-[12px] sm:text-[13px] lg:text-[14.5px] leading-[1.6] mb-4 sm:mb-5 max-w-[550px] font-medium"
            style={{ color: "#333", fontFamily: fonts.body }}
          >
            {c.subtitle}
          </p>

          {/* Encadré 0€ — cartouche crème */}
          <div
            className="rounded-xl px-4 sm:px-6 py-3 sm:py-4 mb-4 sm:mb-5 w-full max-w-[550px] flex gap-3 sm:gap-4 items-stretch"
            style={{ backgroundColor: c.priceBox.backgroundColor }}
          >
            <span
              className="text-[2.2rem] sm:text-[3.6rem] font-bold flex items-center shrink-0 leading-none"
              style={{
                color: c.priceBox.amountColor || "#000",
                fontFamily: fonts.heading,
              }}
            >
              {c.priceBox.amount}
            </span>
            <div className="flex flex-col justify-center gap-1">
              <strong className="text-[13px] sm:text-[14px] font-semibold leading-tight" style={{ fontFamily: fonts.body }}>
                {c.priceBox.text}
              </strong>
              <p
                className="text-[10px] sm:text-[11px] leading-[1.5] font-light"
                style={{ color: "#555", fontFamily: fonts.body }}
              >
                {c.priceBox.subtext}
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {c.ctas.map((cta, i) =>
              cta.variant === "filled" ? (
                <a
                  key={i}
                  href={cta.href}
                  className="px-6 py-3 rounded-md text-[13px] font-semibold transition-transform hover:scale-105 text-center shadow-sm"
                  style={{
                    backgroundColor: cta.backgroundColor,
                    color: cta.textColor,
                    fontFamily: fonts.body,
                  }}
                >
                  {cta.text}
                </a>
              ) : (
                <a
                  key={i}
                  href={cta.href}
                  className="px-6 py-3 rounded-md text-[13px] font-semibold border transition-transform hover:scale-105 text-center shadow-sm"
                  style={{
                    borderColor: (cta as any).borderColor || "transparent",
                    color: cta.textColor,
                    fontFamily: fonts.body,
                    backgroundColor: cta.backgroundColor || "transparent",
                  }}
                >
                  {cta.text}
                </a>
              )
            )}
          </div>
        </div>

        {/* ── COLONNE DROITE (illustration + stats) ── */}
        <div className="w-full lg:w-[48%] relative flex flex-col items-center justify-between bg-white p-0 overflow-hidden">
          {/* Illustration — trait de crayon style architectural */}
          <div className="flex-1 w-full flex items-center justify-center relative">
            <img
              src={c.heroImage.src}
              alt={c.heroImage.alt}
              className="w-full h-auto object-cover"
            />
            {/* Overlay léger jaune en bas pour fondre avec le fond */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: "linear-gradient(to top, rgba(255,255,255,0.9), transparent)" }}
            />
          </div>

          {/* Stats en bas */}
          <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-3 w-full justify-center lg:justify-end relative z-10 px-3 sm:px-4 pb-3 sm:pb-4">
            {c.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3.5 flex-1 min-w-[90px] sm:min-w-[140px]"
                style={{ backgroundColor: stat.bgColor }}
              >
                <span
                  className="text-xl sm:text-2xl lg:text-[1.6rem] font-bold leading-none"
                  style={{
                    color: stat.color,
                    fontFamily: fonts.heading,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[8px] sm:text-[10px] font-bold tracking-[0.08em] mt-1.5 text-center uppercase"
                  style={{ color: stat.labelColor || stat.color, fontFamily: fonts.body, opacity: 0.9 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
