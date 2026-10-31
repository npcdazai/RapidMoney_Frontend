import { RiArrowDownSLine } from "react-icons/ri";

export default function LoanFaq({ heading, faqs }) {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const headingText = heading || "Questions and Answers";

  return (
    <section className="mt-12 sm:mt-16 space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
        {headingText}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const questionText = faq.question || faq.q;
          const answerText = faq.answer || faq.a;

          return (
            <details
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 focus:outline-none">
                <h3 className="text-base sm:text-lg font-bold pr-4">
                  {questionText}
                </h3>
                <RiArrowDownSLine
                  size={24}
                  className="flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {answerText}
              </p>
            </details>
          );
        })}
      </div>
    </section>
  );
}

