
"use client";

import { useState } from "react";
import Link from "next/link";
import { RiArrowDownSLine, RiArrowRightLine } from "react-icons/ri";

const amounts = Array.from(
    { length: 16 },
    (_, index) => 5000 + index * 1000
);

export default function RelatedAmountLoans({ currentSlug }) {
    const [selectedAmount, setSelectedAmount] = useState("");

    const items = amounts.filter(
        (amount) => `${amount}-instant-personal-loan` !== currentSlug
    );

    return (
        <section className="mt-12 sm:mt-16 mb-12 sm:mb-16 space-y-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
                Explore Other Loan Amounts
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="relative flex-1">
                    <select
                        value={selectedAmount}
                        onChange={(e) => setSelectedAmount(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 font-medium shadow-sm outline-none transition focus:border-[#77CB02] focus:ring-2 focus:ring-[#77CB02]/20"
                    >
                        <option value="">Select loan amount</option>

                        {items.map((amount) => (
                            <option key={amount} value={amount}>
                                ₹{amount.toLocaleString("en-IN")} Instant Personal Loan
                            </option>
                        ))}
                    </select>

                    <RiArrowDownSLine
                        size={22}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                </div>

                <Link
                    href={
                        selectedAmount
                            ? `/${selectedAmount}-instant-personal-loan`
                            : "#"
                    }
                    onClick={(e) => {
                        if (!selectedAmount) e.preventDefault();
                    }}
                    aria-disabled={!selectedAmount}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${selectedAmount
                        ? "bg-[#77CB02] text-[#0f1a00] hover:bg-[#8ee01b]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Explore
                    <RiArrowRightLine size={20} />
                </Link>
            </div>
        </section>
    );
}
