"use client";
import { useState } from "react";
import { bloc13Config, fonts } from "@/data/siteConfig";

export default function Bloc13FAQ() {
  const c = bloc13Config;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={c.id}
      className="w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: c.backgroundColor }}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <div
          className="rounded-lg px-5 sm:px-7 py-1.5 border mb-5"
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

        <h2 className="leading-[1.2] flex flex-wrap justify-center items-baseline gap-x-2 gap-y-1 mb-3 w-full max-w-5xl">
          <span
            className="text-[1.25rem] sm:text-[1.45rem] lg:text-[1.95rem] font-medium"
            style={{
              color: c.title.textColor,
              fontFamily: fonts.heading,
              textDecoration: "underline",
              textDecorationColor: c.title.highlightColor,
              textDecorationThickness: "0.08em",
              textUnderlineOffset: "6px",
            }}
          >
            {c.title.part1}
          </span>
          <span
            className="text-[1rem] sm:text-[1.15rem] lg:text-[1.45rem] font-bold"
            style={{ color: c.title.textColor, fontFamily: fonts.body }}
          >
            {c.title.part2}
          </span>
        </h2>

        <p
          className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.45] font-light mb-7 sm:mb-8 max-w-3xl whitespace-pre-line"
          style={{ color: "#3A3A3A", fontFamily: fonts.body }}
        >
          {c.subtitle}
        </p>

        <div className="w-full max-w-[980px] flex flex-col gap-2.5 sm:gap-3 text-left">
          {c.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[14px] border overflow-hidden"
                style={{ borderColor: c.accordion.borderColor, backgroundColor: "#F7F7F7" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[0.92rem] sm:text-[1rem] font-bold leading-[1.25]"
                    style={{ color: c.accordion.questionColor, fontFamily: fonts.body }}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    style={{ color: c.accordion.chevronColor }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5">
                    <div
                      className="h-px w-full mb-4"
                      style={{ backgroundColor: c.accordion.borderColor }}
                    />

                    <div className="flex flex-col gap-3">
                      {item.answers.map((answer, answerIndex) => (
                        <p
                          key={answerIndex}
                          className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.6] font-light"
                          style={{ color: c.accordion.answerColor, fontFamily: fonts.body }}
                        >
                          {answer}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
