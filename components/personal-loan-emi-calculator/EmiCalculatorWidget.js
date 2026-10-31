"use client";

import { useState } from "react";
import Link from "next/link";
import { RiArrowRightLine, RiInformationLine } from "react-icons/ri";

const RATE_UNIT = "per day";
const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 20000;
const STEP_AMOUNT = 500;
const DEFAULT_AMOUNT = 10000;

const MIN_RATE = 0.10;
const MAX_RATE = 0.15;
const STEP_RATE = 0.01;
const DEFAULT_RATE = 0.10;

const MIN_TENURE = 1;
const MAX_TENURE = 60;
const STEP_TENURE = 1;
const DEFAULT_TENURE = 30;

const APPLY_URL =
  "https://web.rapidmoney.in/borrower/login?utm_source=website&utm_medium=web&utm_campaign=emi_calculator";

export default function EmiCalculatorWidget({ heading, utmContent } = {}) {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [tenure, setTenure] = useState(DEFAULT_TENURE);

  // String buffers for free typing in number inputs
  const [amountInput, setAmountInput] = useState(String(DEFAULT_AMOUNT));
  const [rateInput, setRateInput] = useState(DEFAULT_RATE.toFixed(2));
  const [tenureInput, setTenureInput] = useState(String(DEFAULT_TENURE));

  // Clamping helpers on blur
  const handleAmountBlur = () => {
    let val = parseFloat(amountInput);
    if (isNaN(val) || val < MIN_AMOUNT) val = MIN_AMOUNT;
    if (val > MAX_AMOUNT) val = MAX_AMOUNT;
    val = Math.round(val / STEP_AMOUNT) * STEP_AMOUNT;
    setAmount(val);
    setAmountInput(String(val));
  };

  const handleRateBlur = () => {
    let val = parseFloat(rateInput);
    if (isNaN(val) || val < MIN_RATE) val = MIN_RATE;
    if (val > MAX_RATE) val = MAX_RATE;
    val = Math.round(val * 100) / 100;
    setRate(val);
    setRateInput(val.toFixed(2));
  };

  const handleTenureBlur = () => {
    let val = parseInt(tenureInput, 10);
    if (isNaN(val) || val < MIN_TENURE) val = MIN_TENURE;
    if (val > MAX_TENURE) val = MAX_TENURE;
    setTenure(val);
    setTenureInput(String(val));
  };

  // Calculations: Simple interest, single repayment at tenure end
  const interest = amount * (rate / 100) * tenure;
  const totalRepayment = amount + interest;
  const interestPerDay = (amount * rate) / 100;

  // Visual split percentage
  const principalPercent = totalRepayment > 0 ? (amount / totalRepayment) * 100 : 100;
  const interestPercent = 100 - principalPercent;

  const finalApplyUrl = utmContent
    ? `${APPLY_URL}&utm_content=${encodeURIComponent(utmContent)}`
    : APPLY_URL;

  return (
    <>
      {heading && typeof heading === "string" && heading.trim() !== "" ? (
        <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
          {heading}
        </h2>
      ) : null}
      <div className="my-8 rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders and Inputs */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Loan Amount */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 mb-3">
                <label
                  htmlFor="loan-amount-input"
                  className="text-sm sm:text-base font-semibold text-gray-800"
                >
                  Loan Amount (₹)
                </label>
                <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 py-1.5 shadow-sm transition focus-within:border-[#77CB02] focus-within:ring-2 focus-within:ring-[#77CB02]/20">
                  <span className="text-gray-500 font-semibold mr-1 select-none">
                    ₹
                  </span>
                  <input
                    id="loan-amount-input"
                    type="number"
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={STEP_AMOUNT}
                    value={amountInput}
                    onChange={(e) => {
                      setAmountInput(e.target.value);
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val) && val >= MIN_AMOUNT && val <= MAX_AMOUNT) {
                        setAmount(val);
                      }
                    }}
                    onBlur={handleAmountBlur}
                    aria-label="Loan Amount in Rupees"
                    className="w-20 sm:w-24 bg-transparent text-right font-bold text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
              <input
                id="loan-amount-slider"
                type="range"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={STEP_AMOUNT}
                value={amount}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setAmount(val);
                  setAmountInput(String(val));
                }}
                aria-label="Loan Amount Slider"
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#77CB02]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-medium">
                <span>₹{MIN_AMOUNT.toLocaleString("en-IN")}</span>
                <span>₹{MAX_AMOUNT.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* 2. Interest Rate */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 mb-3">
                <label
                  htmlFor="interest-rate-input"
                  className="text-sm sm:text-base font-semibold text-gray-800"
                >
                  Interest Rate ({RATE_UNIT})
                </label>
                <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 py-1.5 shadow-sm transition focus-within:border-[#77CB02] focus-within:ring-2 focus-within:ring-[#77CB02]/20">
                  <input
                    id="interest-rate-input"
                    type="number"
                    min={MIN_RATE}
                    max={MAX_RATE}
                    step={STEP_RATE}
                    value={rateInput}
                    onChange={(e) => {
                      setRateInput(e.target.value);
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val) && val >= MIN_RATE && val <= MAX_RATE) {
                        setRate(val);
                      }
                    }}
                    onBlur={handleRateBlur}
                    aria-label={`Interest Rate ${RATE_UNIT}`}
                    className="w-16 sm:w-20 bg-transparent text-right font-bold text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-gray-500 font-semibold ml-1.5 select-none">
                    %
                  </span>
                </div>
              </div>
              <input
                id="interest-rate-slider"
                type="range"
                min={MIN_RATE}
                max={MAX_RATE}
                step={STEP_RATE}
                value={rate}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setRate(val);
                  setRateInput(val.toFixed(2));
                }}
                aria-label="Interest Rate Slider"
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#77CB02]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-medium">
                <span>{MIN_RATE.toFixed(2)}%</span>
                <span>{MAX_RATE.toFixed(2)}%</span>
              </div>
            </div>

            {/* 3. Tenure (Days) */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 mb-3">
                <label
                  htmlFor="tenure-input"
                  className="text-sm sm:text-base font-semibold text-gray-800"
                >
                  Loan Tenure (Days)
                </label>
                <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 py-1.5 shadow-sm transition focus-within:border-[#77CB02] focus-within:ring-2 focus-within:ring-[#77CB02]/20">
                  <input
                    id="tenure-input"
                    type="number"
                    min={MIN_TENURE}
                    max={MAX_TENURE}
                    step={STEP_TENURE}
                    value={tenureInput}
                    onChange={(e) => {
                      setTenureInput(e.target.value);
                      const val = parseInt(e.target.value, 10);
                      if (!isNaN(val) && val >= MIN_TENURE && val <= MAX_TENURE) {
                        setTenure(val);
                      }
                    }}
                    onBlur={handleTenureBlur}
                    aria-label="Loan Tenure in Days"
                    className="w-14 sm:w-16 bg-transparent text-right font-bold text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-gray-500 text-xs font-semibold ml-1.5 select-none">
                    days
                  </span>
                </div>
              </div>
              <input
                id="tenure-slider"
                type="range"
                min={MIN_TENURE}
                max={MAX_TENURE}
                step={STEP_TENURE}
                value={tenure}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setTenure(val);
                  setTenureInput(String(val));
                }}
                aria-label="Loan Tenure Slider"
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#77CB02]"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-medium">
                <span>{MIN_TENURE} day</span>
                <span>{MAX_TENURE} days</span>
              </div>
            </div>
          </div>

          {/* Right Column: Results Summary Card */}
          <div
            aria-live="polite"
            className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111827] via-[#1a1a1a] to-[#111827] p-6 sm:p-7 text-white shadow-xl border border-white/10"
          >
            {/* Subtle green ambient glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#77CB02]/20 blur-3xl"
            />

            <div className="relative space-y-5">
              {/* Main result */}
              <div className="border-b border-white/10 pb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8ee01b]">
                  Estimated Repayment
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    ₹{Math.round(totalRepayment).toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Single repayment due after {tenure} {tenure === 1 ? "day" : "days"}
                </p>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#77CB02]" />
                    Principal Loan Amount
                  </span>
                  <span className="font-semibold text-white">
                    ₹{Math.round(amount).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8ee01b]" />
                    Total Interest ({tenure} {tenure === 1 ? "day" : "days"})
                  </span>
                  <span className="font-semibold text-[#8ee01b]">
                    ₹{Math.round(interest).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between items-center text-gray-300">
                  <span>Interest Per Day</span>
                  <span className="font-medium text-gray-200">
                    ₹{interestPerDay.toFixed(2)} / day
                  </span>
                </div>
              </div>

              {/* Visual Split Bar */}
              <div className="pt-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5 font-medium">
                  <span>Principal ({principalPercent.toFixed(1)}%)</span>
                  <span>Interest ({interestPercent.toFixed(1)}%)</span>
                </div>
                <div
                  className="h-3 w-full overflow-hidden rounded-full bg-white/10 flex"
                  role="progressbar"
                  aria-valuenow={Math.round(principalPercent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Principal vs Interest ratio"
                >
                  <div
                    style={{ width: `${principalPercent}%` }}
                    className="bg-[#77CB02] transition-all duration-300"
                  />
                  <div
                    style={{ width: `${interestPercent}%` }}
                    className="bg-[#8ee01b] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] leading-relaxed text-gray-400 pt-1 flex items-start gap-1.5">
                <RiInformationLine size={14} className="flex-shrink-0 mt-0.5 text-gray-400" />
                <span>
                  This calculator gives an estimate based on the amount, rate and tenure you select.
                  Processing fees, GST and other applicable charges are not included. Your final
                  repayment amount will be shown in the RapidMoney app before you accept the loan.
                </span>
              </p>

              {/* Apply Now Button */}
              <div className="pt-2">
                <Link
                  href={finalApplyUrl}
                  target="_blank"
                  rel="noopener"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#77CB02] py-3.5 px-6 text-base font-semibold text-[#0f1a00] shadow-[0_6px_20px_rgba(119,203,2,0.4)] transition-all duration-300 hover:bg-[#8ee01b] hover:shadow-[0_8px_28px_rgba(119,203,2,0.55)]"
                >
                  <span>Apply Now</span>
                  <RiArrowRightLine
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
