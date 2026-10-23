"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowRightLine, RiFlashlightFill } from "react-icons/ri";

export default function StickyApplyStrip() {
  const [showStrip, setShowStrip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStrip(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5 transition-all duration-500 ease-out ${showStrip
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
        }`}
    >
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#111827] via-[#1a1a1a] to-[#111827] px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
          {/* soft glow accent */}
          <span className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#77CB02]/20 blur-3xl" />
          <span className="pointer-events-none absolute -right-10 -bottom-16 h-40 w-40 rounded-full bg-[#77CB02]/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="hidden sm:flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#77CB02]/15 text-[#8ee01b] ring-1 ring-[#77CB02]/30">
                <RiFlashlightFill size={22} />
              </span>
              <div>
                <p className="m-0 text-xs font-medium uppercase tracking-wider text-[#8ee01b]">
                  Instant Approval
                </p>
                <p className="m-0 text-base font-bold text-white sm:text-lg">
                  Get a Personal Loan up to{" "}
                  <span className="text-[#8ee01b]">₹20,000</span>
                </p>
              </div>
            </div>

            <Link
              href="https://web.rapidmoney.in/borrower/login?utm_source=Website&utm_extsource=Organic&utm_medium=Web"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <button className="group flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#77CB02] px-7 py-3 text-base font-semibold text-[#0f1a00] shadow-[0_6px_20px_rgba(119,203,2,0.4)] transition-all duration-300 hover:bg-[#8ee01b] hover:shadow-[0_8px_28px_rgba(119,203,2,0.55)] sm:w-auto">
                Apply Now
                <RiArrowRightLine
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
