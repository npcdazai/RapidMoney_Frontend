"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function EmiCalculator({
  minAmount = 50000,
  maxAmount = 500000,
  minTenure = 3,
  maxTenure = 36,
  defaultAmount = 200000,
  defaultTenure = 12,
  defaultRate = 10.5,
}) {
  const [amount, setAmount] = useState(defaultAmount);
  const [tenure, setTenure] = useState(defaultTenure);
  const [rate, setRate] = useState(defaultRate);

  const { emi, totalInterest, schedule } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    let balance = amount;
    let interestSum = 0;

    const schedule = Array.from({ length: tenure }, (_, i) => {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;
      interestSum += interest;

      return {
        month: i + 1,
        emi,
        principal,
        interest,
        balance: balance > 0 ? balance : 0,
      };
    });

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(interestSum),
      schedule,
    };
  }, [amount, tenure, rate]);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT CONTROLS */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Loan Configuration</h3>

          {/* Loan Amount */}
          <div>
            <div className="flex justify-between mb-2">
              <span>Loan Amount</span>
              <span className="text-green-600 font-medium">
                ₹ {amount.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={minAmount}
              max={maxAmount}
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className="w-full accent-lime-400"
            />
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between mb-2">
              <span>Loan Term</span>
              <span className="text-green-600 font-medium">
                {tenure} months
              </span>
            </div>
            <input
              type="range"
              min={minTenure}
              max={maxTenure}
              value={tenure}
              onChange={(e) => setTenure(+e.target.value)}
              className="w-full accent-lime-400"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between mb-2">
              <span>Interest Rate</span>
              <span className="text-green-600 font-medium">
                {rate}%
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full accent-lime-400"
            />
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between"
        >
          <div>
            <div className="bg-lime-500 text-white rounded-xl p-6 text-center">
              <p className="text-sm">Monthly Payment</p>
              <h2 className="text-3xl font-bold mt-2">
                ₹ {emi.toLocaleString()}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-gray-500">Principal</p>
                <p className="font-semibold">
                  ₹ {amount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-gray-500">Total Interest</p>
                <p className="font-semibold text-green-600">
                  ₹ {totalInterest.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-full">
            Apply Now
          </button>
        </motion.div>
      </div>

      {/* PAYMENT SCHEDULE */}
      <div className="mt-10">
        <h3 className="font-semibold mb-4">Payment Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Month</th>
                <th>EMI</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.month} className="border-t text-center">
                  <td className="p-2">{row.month}</td>
                  <td>₹ {Math.round(row.emi).toLocaleString()}</td>
                  <td>₹ {Math.round(row.principal).toLocaleString()}</td>
                  <td className="text-green-600">
                    ₹ {Math.round(row.interest).toLocaleString()}
                  </td>
                  <td>₹ {Math.round(row.balance).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
