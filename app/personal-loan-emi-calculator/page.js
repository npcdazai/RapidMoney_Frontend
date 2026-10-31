import React, { Suspense } from "react";
import Link from "next/link";
import Script from "next/script";
import { RiArrowRightLine, RiArrowDownSLine } from "react-icons/ri";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import Breadcrumb from "@/components/BreadCrumb";
import defaultSEO from "@/constants/defaultSEO";
import { schemaToJsonLd } from "@/utils/structuredData";
import EmiCalculatorWidget from "@/components/personal-loan-emi-calculator/EmiCalculatorWidget";

const CANONICAL_URL = "https://www.rapidmoney.in/personal-loan-emi-calculator";
const APPLY_URL =
  "https://web.rapidmoney.in/borrower/login?utm_source=website&utm_medium=web&utm_campaign=emi_calculator";

export const metadata = {
  metadataBase: new URL("https://www.rapidmoney.in"),
  title: "Personal Loan EMI Calculator | Calculate Your EMI | RapidMoney",
  description:
    "Wondering how much your personal loan will cost each month? Calculate your estimated EMI online with RapidMoney. Plan your repayments today!",
  alternates: {
    canonical: CANONICAL_URL,
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Personal Loan EMI Calculator | Calculate Your EMI | RapidMoney",
    description:
      "Wondering how much your personal loan will cost each month? Calculate your estimated EMI online with RapidMoney. Plan your repayments today!",
    url: CANONICAL_URL,
    siteName: defaultSEO.defaultSiteName,
    locale: defaultSEO.defaultLocale,
    type: defaultSEO.defaultType,
    images: [
      {
        url: "/images/rapidmoney-logo.png",
        alt: "Personal Loan EMI Calculator – RapidMoney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan EMI Calculator | Calculate Your EMI | RapidMoney",
    description:
      "Wondering how much your personal loan will cost each month? Calculate your estimated EMI online with RapidMoney. Plan your repayments today!",
    images: ["/images/rapidmoney-logo.png"],
  },
  other: {
    keywords:
      "personal loan EMI calculator, EMI calculator, loan EMI calculator, personal loan calculator, calculate EMI online",
  },
};

const FAQ_ITEMS = [
  {
    question: "How precise is a calculator for personal loan EMIs?",
    answer:
      "A personal loan EMI calculator gives you a pretty good idea of what your monthly payment will be based on the interest rate and the length of the loan. Depending on the lender's rules, the final EMI may be a little different.",
  },
  {
    question: "Can I use an EMI calculator for loans of different amounts?",
    answer:
      "Yes. You can easily compare options with a loan EMI calculator personal loan by changing the loan amount, term, and interest rate.",
  },
  {
    question: "Can I use the personal loan EMI calculator for free?",
    answer:
      "Yes. You can use an online personal loan EMI calculator for free at any time.",
  },
  {
    question: "Does EMI stay the same from month to month?",
    answer:
      "Most personal loans with fixed interest rates have an EMI that stays the same for the whole term.",
  },
  {
    question: "Why do I need to figure out EMI before I apply?",
    answer:
      "Using a personal loan EMI calculator to work out your monthly EMI helps you pick a loan that fits your income and keeps your finances in order.",
  },
];

export default function PersonalLoanEmiCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        name: "Personal Loan EMI Calculator",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts (SSR rendered for search crawlers & Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(breadcrumbSchema) }}
      />

      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <Breadcrumb />

        <main className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
          {/* Main H1 Heading */}
          <div className="text-center md:text-left mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Personal Loan EMI Calculator – Calculate Your Monthly EMI Instantly
            </h1>
            <div className="mt-4 space-y-3 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Knowing exactly how much you need to pay back each month makes it easier to keep track
                of your money. You can use a personal loan EMI calculator to figure out how much your
                monthly EMI will be ahead of time, which will help you plan your budget before you apply
                for a loan.
              </p>
              <p>
                Using an online personal loan EMI calculator makes sure that you don&#39;t have any
                surprises later, whether you&#39;re planning a wedding, paying for medical bills,
                going on vacation, or combining debts. If you need urgent financing with minimum
                documentation, explore our{" "}
                <Link
                  href="/instant-personal-loan"
                  className="text-[#77CB02] font-semibold underline hover:text-[#8ee01b] transition"
                >
                  instant personal loan
                </Link>{" "}
                options today.
              </p>
            </div>
          </div>

          {/* Calculator Widget */}
          <EmiCalculatorWidget />

          {/* Section 1: What is a Personal Loan EMI Calculator */}
          <section className="mt-12 sm:mt-16 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
              What Is a Personal Loan EMI Calculator?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A personal loan EMI calculator is an online tool that figures out how much you need to
              pay back each month based on three simple pieces of information:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 pl-2">
              <li>The amount of the loan</li>
              <li>Rate of interest</li>
              <li>Length of loan</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              With a personal loan EMI calculator, you can quickly find out how much you need to pay
              back and pick a loan that fits your budget.
            </p>
          </section>

          {/* Section 2: How Does the Calculator Work */}
          <section className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
              How Does the Personal Loan EMI Calculator Work?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The personal loan interest EMI calculator uses a standard formula to figure out the EMI.
              You just need to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 pl-2">
              <li>Enter how much money you want to borrow.</li>
              <li>Add the right interest rate.</li>
              <li>Choose the length of time you want to pay back the loan (in months or years).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The personal loan monthly EMI calculator quickly gives you an estimate of your EMI, the
              total interest you&#39;ll have to pay, and the total cost of the loan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This makes it very easy to figure out how to calculate EMI for a personal loan even if
              you don&#39;t know much about money.
            </p>
            <p className="text-sm text-gray-500 italic mt-3 bg-gray-50 border-l-4 border-[#77CB02] p-3 rounded-r-lg">
              On RapidMoney the tenure is set in days (1 to 60 days), so the calculator above shows a
              single repayment amount.
            </p>
          </section>

          {/* Section 3: Why Use a Personal Loan EMI Calculator */}
          <section className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
              Why Use a Personal Loan EMI Calculator?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Using an EMI calculator for an online personal loan helps you understand and control your
              finances before you sign the loan.
            </p>
            <p className="text-gray-700 font-medium">Here&#39;s why it&#39;s helpful:</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 pl-2">
              <li>Helps you pick the right amount of money to borrow</li>
              <li>Makes sure EMIs fit into your monthly budget</li>
              <li>Lets you compare different interest rates</li>
              <li>Stops people from borrowing too much</li>
              <li>Saves time and stops you from having to guess</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              A personal loan EMI calculator shows you how your monthly payment changes when the
              interest rate goes up or down by even a small amount.
            </p>
          </section>

          {/* Section 4: Benefits of Calculating EMI */}
          <section className="mt-10 sm:mt-12 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
              Benefits of Calculating EMI Before Applying for a Personal Loan
            </h2>
            <p className="text-gray-700 leading-relaxed">
              There are a number of benefits to calculating EMI ahead of time:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700 pl-2">
              <li>
                <strong className="text-gray-900">Better planning for your money:</strong> know how
                much you have to pay each month ahead of time.
              </li>
              <li>
                <strong className="text-gray-900">Choose the right loan:</strong> Change the length
                of the loan to lower the EMI.
              </li>
              <li>
                <strong className="text-gray-900">Save money on interest:</strong> by comparing loan
                options and making the right choice.
              </li>
              <li>
                <strong className="text-gray-900">Paying back is easy:</strong> don&#39;t take out
                EMIs that are too big for your budget.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Using an online personal loan EMI calculator makes sure you choose a loan that you can
              comfortably repay over time.
            </p>
          </section>

          {/* Section 5: Apply for a Personal Loan After Calculating EMI */}
          <section className="mt-10 sm:mt-12 rounded-2xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
              Apply for a Personal Loan After Calculating EMI
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can confidently move forward with your application once you are happy with the
              amount of your EMI. You already know what to expect when you use a personal loan EMI
              calculator. This makes the application process easier and more open.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Knowing your EMI ahead of time also makes it more likely that you&#39;ll get approved
              because you apply for a loan that you can afford to pay back. If you have any further
              queries about our process, check our{" "}
              <Link
                href="/faqs"
                className="text-[#77CB02] font-semibold underline hover:text-[#8ee01b] transition"
              >
                FAQs
              </Link>{" "}
              for detailed answers.
            </p>

            <div className="pt-3">
              <Link
                href={APPLY_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-[#77CB02] px-7 py-3 text-base font-semibold text-[#0f1a00] shadow-[0_6px_20px_rgba(119,203,2,0.4)] transition-all duration-300 hover:bg-[#8ee01b] hover:shadow-[0_8px_28px_rgba(119,203,2,0.55)]"
              >
                <span>Apply Now</span>
                <RiArrowRightLine size={20} />
              </Link>
            </div>
          </section>

          {/* Section 6: Questions and Answers (FAQ) */}
          <section className="mt-12 sm:mt-16 space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
              Questions and Answers
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-300 open:shadow-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 focus:outline-none">
                    <h3 className="text-base sm:text-lg font-bold pr-4">
                      {faq.question}
                    </h3>
                    <RiArrowDownSLine
                      size={24}
                      className="flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </main>
      </Suspense>
    </>
  );
}

