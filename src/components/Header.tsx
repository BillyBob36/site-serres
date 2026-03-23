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
            <div key={i} className="flex items-center gap-2">
              <span className="text-[14px] font-bold" style={{ fontFamily: fonts.body, color: "#111" }}>
                {item.text}
              </span>
              
              <div
                className="bg-white rounded-[6px] px-2.5 py-0.5 flex items-center justify-center"
                style={{
                  minHeight: "28px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
                }}
              >
                {item.isSecondType ? (
                  <span
                    className="text-[14px]"
                    style={{
                      fontFamily: fonts.heading,
                      fontStyle: "italic",
                      fontWeight: 500,
                      color: "#111"
                    }}
                  >
                    {item.bold}
                  </span>
                ) : (
                  <span
                    className="text-[18px] font-extrabold leading-none tracking-tight"
                    style={{ fontFamily: fonts.body, color: "#111" }}
                  >
                    {item.bold}
                  </span>
                )}
              </div>
            </div>
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
