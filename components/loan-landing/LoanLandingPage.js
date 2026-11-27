
import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { schemaToJsonLd } from "@/utils/structuredData";
import { buildApplyUrl } from "./applyUrl";
import LoanContentSections from "./LoanContentSections";
import LoanFaq from "./LoanFaq";
import RelatedLoans from "./RelatedLoans";

function getBreadcrumbName(h1) {
  if (!h1 || typeof h1 !== "string") return "Personal Loan";
  const parts = h1.split(/\s+[–—-]\s+/);
  return parts[0].trim();
}

export default function LoanLandingPage({ page, isAmountPage = false }) {
  if (!page) return null;

  const applyUrl = buildApplyUrl(page.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rapidmoney.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumbName || getBreadcrumbName(page.h1),
        item: "https://www.rapidmoney.in" + page.path,
      },
    ],
  };

  const faqSchema =
    page.faqs && Array.isArray(page.faqs) && page.faqs.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question || item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer || item.a,
          },
        })),
      }
      : null;

  const introParagraphs = Array.isArray(page.intro)
    ? page.intro
    : page.intro
      ? [page.intro]
      : [];

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(breadcrumbSchema) }}
      />

      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
        {/* Header & Single H1 */}
        <div className="text-center md:text-left mb-6 sm:mb-8 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            {page.h1}
          </h1>

          {introParagraphs.map((item, idx) => (
            <div key={idx}>
              {typeof item === "string" ? (
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item}
                </p>
              ) : item?.text ? (
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item.text.split(item.link?.text || "").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <Link
                          href={item.link.href}
                          className="text-[#77CB02] font-semibold underline hover:text-[#5da000]"
                        >
                          {item.link.text}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              ) : item?.ul ? (
                <ul className="mt-4 space-y-2 text-base sm:text-lg text-gray-700 list-disc list-inside text-left max-w-3xl mr-auto ml-0">
                  {item.ul.map((point, pointIdx) => {
                    const linkText = item.link?.text;

                    if (linkText && point.includes(linkText)) {
                      const parts = point.split(linkText);

                      return (
                        <li key={pointIdx}>
                          {parts[0]}
                          <Link
                            href={item.link.href}
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

                    return <li key={pointIdx}>{point}</li>;
                  })}
                </ul>
              ) : null}
            </div>
          ))}

          <div className="pt-2 flex justify-center">
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
        </div>

        {/* Divider only for amount-based pages */}
        {isAmountPage && (
          <div className="mt-8 sm:mt-10 mb-8 sm:mb-10">
            <div className="h-1 w-20 rounded-full bg-[#77CB02] mx-auto mb-4" />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
        )}

        {/* Main Content */}
        <LoanContentSections page={page} />

        {/* FAQ */}
        <LoanFaq heading={page.faqHeading} faqs={page.faqs} />

        {/* Existing Related Loans */}
        <RelatedLoans currentSlug={page.slug} />
      </main>
    </>
  );
}
