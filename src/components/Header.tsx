"use client";
import { useState } from "react";
import { headerConfig, fonts } from "@/data/siteConfig";

export default function Header() {
  const { topBar, navbar } = headerConfig;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* ── BARRE SUPÉRIEURE JAUNE ── */}
      <div
        className="w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 h-[64px] text-[13px]"
        style={{ backgroundColor: topBar.backgroundColor, color: topBar.textColor }}
      >
        {/* Badge vert */}
        <span
          className="font-bold text-[11px] px-4 py-1 rounded uppercase tracking-wider shrink-0"
          style={{
            backgroundColor: topBar.badge.backgroundColor,
            color: topBar.badge.textColor,
            fontFamily: fonts.body,
          }}
        >
          {topBar.badge.text}
        </span>

        {/* Items texte — masqués sur xs, visibles dès sm */}
        <div className="hidden sm:flex items-center gap-6">
          {topBar.items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[13px] font-medium whitespace-nowrap">
              {item.highlight ? (
                <span
                  className="px-2 py-0.5 rounded-[4px]"
                  style={{
                    fontFamily: fonts.body,
                    fontWeight: item.textBold ? 700 : 600,
                    backgroundColor: item.highlightColor || "transparent",
                    color: item.highlightColor ? "#000" : "inherit",
                    textDecoration: item.removeUnderline ? "none" : "none",
                  }}
                >
                  {item.text}
                </span>
              ) : (
                <span style={{ fontWeight: item.textBold ? 700 : 500 }}>
                  {item.text}{" "}
                  {item.bold && (
                    <strong
                      className="px-2 py-0.5 rounded-[4px]"
                      style={{
                        fontWeight: 700,
                        fontFamily: fonts.body,
                        backgroundColor: "#FFFFFF",
                        color: "#000",
                      }}
                    >
                      {item.bold}
                    </strong>
                  )}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav
        className="w-full flex items-center justify-between px-5 sm:px-10 h-[64px] border-b border-gray-100 relative"
        style={{ backgroundColor: navbar.backgroundColor }}
      >
        {/* Logo */}
        <img
          src={navbar.logo.src}
          alt={navbar.logo.alt}
          width={navbar.logo.width}
          height={navbar.logo.height}
          className="object-contain max-h-[32px] w-auto"
        />

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navbar.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-[14px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#333", fontFamily: fonts.body }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href={navbar.cta.href}
          className="hidden sm:inline-block px-7 py-2.5 rounded-lg text-[14px] font-bold transition-transform hover:scale-105"
          style={{
            backgroundColor: navbar.cta.backgroundColor,
            color: navbar.cta.textColor,
            fontFamily: fonts.body,
          }}
        >
          {navbar.cta.text}
        </a>

        {/* Burger menu mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
        </button>
      </nav>

      {/* ── MENU MOBILE DÉROULANT ── */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col items-center gap-4 py-5 px-4 border-b border-gray-100 shadow-md"
          style={{ backgroundColor: navbar.backgroundColor }}
        >
          {navbar.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#333", fontFamily: fonts.body }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={navbar.cta.href}
            onClick={() => setMenuOpen(false)}
            className="px-7 py-2.5 rounded-lg text-sm font-bold mt-2"
            style={{
              backgroundColor: navbar.cta.backgroundColor,
              color: navbar.cta.textColor,
              fontFamily: fonts.body,
            }}
          >
            {navbar.cta.text}
          </a>
        </div>
      )}
    </header>
  );
}
