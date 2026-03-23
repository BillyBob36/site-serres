"use client";
import { bloc16Config, fonts } from "@/data/siteConfig";

export default function Bloc16Footer() {
  const c = bloc16Config;

  return (
    <footer
      id={c.id}
      className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10 lg:gap-14">
        
        {/* Ligne principale : Logo+Desc (gauche) & 3 Colonnes (droite) */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          
          {/* Colonne gauche (Logo + Description) */}
          <div className="lg:w-[40%] flex flex-col gap-5">
            <img
              src={c.logo.src}
              alt={c.logo.alt}
              className="w-[260px] sm:w-[320px] h-auto object-contain"
            />
            
            <p
              className="text-[12px] sm:text-[13px] leading-[1.6] font-medium"
              style={{ color: c.textColor, fontFamily: fonts.body }}
            >
              {c.description}
            </p>
          </div>

          {/* Colonnes de liens */}
          <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {c.columns.map((col, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3
                  className="text-[14px] sm:text-[15px] font-bold"
                  style={{ color: c.textColor, fontFamily: fonts.body }}
                >
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-[12px] sm:text-[13px] font-medium hover:opacity-70 transition-opacity"
                        style={{ color: c.textColor, fontFamily: fonts.body }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Ligne du bas (Copyright) */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-[11px] sm:text-[12px] font-medium"
            style={{ color: c.textColor, fontFamily: fonts.body }}
          >
            {c.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
