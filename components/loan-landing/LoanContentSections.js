
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import EmiCalculatorWidget from "@/components/personal-loan-emi-calculator/EmiCalculatorWidget";
import { buildApplyUrl } from "./applyUrl";
import React from "react";
export default function LoanContentSections({ page }) {
  if (!page?.sections || !Array.isArray(page.sections)) {
    return null;
  }

  const applyUrl = buildApplyUrl(page.slug);

  return (
    <>
      {page.sections.map((section, sIndex) => {
        const headingText = section.heading || section.h2 || section.title;
        const blocks = Array.isArray(section.content) ? section.content : [];

        return (
          <div key={sIndex}>
            <section className="mt-10 sm:mt-12 space-y-4">
              {headingText && (
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
                  {headingText}
                </h2>
              )}

              {blocks.map((block, bIndex) => {
                if (typeof block === "string") {
                  return (
                    <p key={bIndex} className="text-gray-700 leading-relaxed">
                      {block}
                    </p>
                  );
                }

                if (block.p) {
                  const linkText = block.link?.text;

                  if (linkText && block.p.includes(linkText)) {
                    const parts = block.p.split(linkText);

                    return (
                      <p key={bIndex} className="text-gray-700 leading-relaxed">
                        {parts.map((part, i) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < parts.length - 1 && (
                              <Link
                                href={block.link.href}
                                className="text-[#77CB02] font-semibold underline hover:text-[#5da000]"
                              >
                                {linkText}
                              </Link>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    );
                  }

                  return (
                    <p key={bIndex} className="text-gray-700 leading-relaxed">
                      {block.p}
                    </p>
                  );
                }

                if (block.h3) {
                  return (
                    <h3
                      key={bIndex}
                      className="text-lg font-semibold text-gray-900"
                    >
                      {block.h3}
                    </h3>
                  );
                }

                if (block.ul && Array.isArray(block.ul)) {
                  return (
                    <ul
                      key={bIndex}
                      className="list-disc list-inside space-y-1.5 text-gray-700 pl-2"
                    >
                      {block.ul.map((item, i) => {
                        const linkText = block.link?.text;

                        if (linkText && item.includes(linkText)) {
                          const parts = item.split(linkText);

                          return (
                            <li key={i}>
                              {parts[0]}
                              <Link
                                href={block.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#77CB02] font-semibold underline hover:text-[#5da000]"
                              >
                                {linkText}
                              </Link>
                              {parts.slice(1).join(linkText)}
                            </li>
                          );
                        }

                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  );
                }

                return null;
              })}
            </section>

            {section.calculatorAfter && (
              <div className="mt-8">
                <EmiCalculatorWidget
                  heading={page.calculatorHeading}
                  utmContent={page.slug}
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Trailing Call-to-Action Box */}
      <div className="mt-10 sm:mt-12 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8 flex justify-center">
        <Link
          href={applyUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-xl bg-[#77CB02] px-7 py-3 text-base font-semibold text-[#0f1a00] shadow-[0_6px_20px_rgba(119,203,2,0.4)] transition-all duration-300 hover:bg-[#8ee01b] hover:shadow-[0_8px_28px_rgba(119,203,2,0.55)]"
        >
          <span>Apply Now</span>
          <RiArrowRightLine size={20} />
        </Link>
      </div>
    </>
  );
}
