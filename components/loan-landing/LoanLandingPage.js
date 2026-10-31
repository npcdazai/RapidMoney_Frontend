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

export default function LoanLandingPage({ page }) {
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
      {/* Structured Data Scripts */}
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

          {introParagraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              {para}
            </p>
          ))}

          <div className="pt-2">
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

        {/* Sections with optional calculator placement & trailing CTA */}
        <LoanContentSections page={page} />

        {/* FAQ Accordion */}
        <LoanFaq heading={page.faqHeading} faqs={page.faqs} />

        {/* Related Loan Cross-links */}
        <RelatedLoans currentSlug={page.slug} />
      </main>
    </>
  );
}
