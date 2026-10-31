import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { loanLandingPages } from "@/constants/loanLandingPages";

function getCleanLabel(h1) {
  if (!h1 || typeof h1 !== "string") return "";
  const parts = h1.split(/\s+[–—-]\s+/);
  return parts[0].trim();
}

export default function RelatedLoans({ currentSlug }) {
  const items = [];

  // Add pages from loanLandingPages (excluding currentSlug)
  if (Array.isArray(loanLandingPages)) {
    for (const page of loanLandingPages) {
      if (page && page.slug && page.slug !== currentSlug) {
        items.push({
          slug: page.slug,
          label: page.navLabel || getCleanLabel(page.h1) || page.slug,
          path: page.path,
        });
      }
    }
  }

  // Add fixed entry if currentSlug is not instant-personal-loan
  if (currentSlug !== "instant-personal-loan") {
    items.push({
      slug: "instant-personal-loan",
      label: "Instant Personal Loan",
      path: "/instant-personal-loan",
    });
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 sm:mt-16 space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
        Explore other loans
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={item.path}
            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#77CB02] hover:shadow-md"
          >
            <span className="font-semibold text-gray-900 group-hover:text-[#77CB02] transition">
              {item.label}
            </span>
            <RiArrowRightLine
              size={20}
              className="text-gray-400 group-hover:text-[#77CB02] group-hover:translate-x-1 transition"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

