import React from "react";
import { FiFileText } from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";

const data = [
  ["Bureau Score", "650", "900"],
  ["Age", "21 years", "58 years (EOT)"],
  ["Tenure", "15 Days", "9 Months"],
  ["Income-NTH", "20,000/-", "-"],
  ["Banking Norms", "3 Months", "-"],
  ["ABB to EMI Ratio", "1", "-"],
  ["Loan Amount", "3,000", "50,000"],
  ["ROI (Per Day)", "0.10%", "0.15%"],
  ["Processing Fees", "0 to 15% Excluding GST", "-"],
  ["PF", "Required for all customers", "-"]
];


export default function ProductTermLoans() {
  return (
    <section className="container px-4 bg-white pb-24">
      <h2 className="font-40 text-black font-bold text-center mb-12">
        Term Loans
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] relative">
        <div className="w-full lg:w-1/2 bg-[#F9FAFF] rounded-4xl  p-7">
          <div className="flex justify-between">
            <h3 className="text-black font-28 font-semibold">
              Document Required
            </h3>
            <span className="bg-white w-20 h-20 rounded-full text-[#6379F9] inline-flex items-center justify-center">
              <FiFileText size={28} />
            </span>
          </div>
          <div className="text-black font-16 font-bold flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#121114] font-semibold font-18  inline-flex justify-center items-center w-10 h-10 rounded-full">
                01
              </span>{" "}
              <div>
                <div className="font-18 font-bold">Proof of Identity</div>
                <span className="font-14 font-normal text-[#000000CC]">
                  Aadhar, PAN Card
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#121114] font-semibold font-18  inline-flex justify-center items-center w-10 h-10 rounded-full">
                02
              </span>{" "}
              <div>
                <div className="font-18 font-bold">Proof of Address</div>
                <span className="font-14 font-normal text-[#000000CC]">
                  Aadhar, Utility Bill, Bank/ Home Loan Statement, Rent
                  Agreement
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#121114] font-semibold font-18  inline-flex justify-center items-center w-10 h-10 rounded-full">
                03
              </span>{" "}
              <div>
                <div className="font-18 font-bold">Proof of Income</div>
                <span className="font-14 font-normal text-[#000000CC]">
                  Bank Statement, PaySlip, work Email
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#F9FAFF] rounded-4xl p-7">
          <div className="flex justify-between">
            <h3 className="text-black font-28 font-semibold">Eligibility</h3>
            <span className="bg-white w-20 h-20 rounded-full text-[#6379F9] inline-flex items-center justify-center">
              <RiShieldCheckLine size={28} />
            </span>
          </div>
          <div className="text-black font-16 font-normal flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              Indian Citizen
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              21 years of age and above
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              Minimum salary: ₹20,000/month
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              Regular salary credit to bank account
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              For Terms Loans only.
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              Loan Disbursement within 24 hrs
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] ">
        <div className="w-full lg:w-1/2 bg-[#F9FAFF] text-black rounded-4xl border border-[#DDDDDD] overflow-hidden">
          <div className="bg-[#F6FFE8] text-start p-5 font-24 font-semibold ">
            Personal Loan criteria-Salaried
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] mt-10">
        <div className="w-full bg-[#F9FAFF] text-black rounded-4xl border border-[#DDDDDD] overflow-x-auto">
          <table className="min-w-[700px] w-full  text-sm text-center">
            <thead>
              <tr className="bg-[#F6FFE8] text-black text-[18px] font-semibold">
                <th className="px-6 py-4 rounded-tl-2xl">
                  Personal Loan criteria-Salaried
                </th>
                <th className="px-6 py-4">Minimum</th>
                <th className="px-6 py-4 rounded-tr-2xl">Maximum</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {[
                ["Bureau Score", "650", "900"],
                ["Age", "21 years", "58 years (EOT)"],
                ["Tenure", "15 Days", "9 Months"],
                ["Income-NTH", "20,000/-", "-"],
                ["Banking Norms", "3 Months", "-"],
                ["ABB to EMI Ratio", "1", "-"],
                ["Loan Amount", "3,000", "50,000"],
                ["ROI (Per Day)", "0.10%", "0.15%"],
                ["Processing Fees", "0 to 15% Excluding GST", "-"],
                ["PF", "Required for all customers", "-"],
              ].map(([criteria, min, max], idx) => (
                <tr
                  key={idx}
                  // className={`border-t border-[#E5E5E5] ${
                  //   idx % 2 === 0 ? "bg-white" : "bg-[#F9FAFF]"
                  // }`}
                  className={`border-t border-[#E5E5E5] bg-white`}
                >
                  <td className="px-6 py-4 font-bold">{criteria}</td>
                  <td className="px-6 py-4">{min}</td>
                  <td className="px-6 py-4">{max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* ------------------------------------------------------------------------------------ */}

      <div className="flex flex-col mt-10">
        {/* Desktop View – 3 vertical column tables side by side */}
        <div className="hidden lg:flex gap-[30px]">
          {/* Criteria Table */}
          <div className="w-[40%] bg-[#F9FAFF] rounded-2xl border border-[#DDDDDD] overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#F6FFE8] text-black text-[18px] font-semibold">
                  <th className="px-6 py-4">Criteria</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {data.map(([criteria], idx) => (
                  <tr key={idx} className="border-t border-[#E5E5E5] bg-white">
                    <td className="px-6 py-4 font-bold">{criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Minimum Table */}
          <div className="w-[30%] bg-[#F9FAFF] border rounded-2xl border-[#DDDDDD] overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#F6FFE8] text-black text-[18px] font-semibold">
                  <th className="px-6 py-4">Minimum</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {data.map(([, min], idx) => (
                  <tr key={idx} className="border-t border-[#E5E5E5] bg-white">
                    <td className="px-6 py-4">{min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Maximum Table */}
          <div className="w-[30%] bg-[#F9FAFF] rounded-2xl border border-[#DDDDDD] overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#F6FFE8] text-black text-[18px] font-semibold">
                  <th className="px-6 py-4">Maximum</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {data.map(([, , max], idx) => (
                  <tr key={idx} className="border-t border-[#E5E5E5] bg-white">
                    <td className="px-6 py-4">{max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View – Single full table */}
        <div className="lg:hidden w-full bg-[#F9FAFF] rounded-4xl border border-[#DDDDDD] overflow-x-auto mt-8">
          <table className="min-w-[700px] w-full text-sm text-center">
            <thead>
              <tr className="bg-[#F6FFE8] text-black text-[18px] font-semibold">
                <th className="px-6 py-4 rounded-tl-2xl">Criteria</th>
                <th className="px-6 py-4">Minimum</th>
                <th className="px-6 py-4 rounded-tr-2xl">Maximum</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {data.map(([criteria, min, max], idx) => (
                <tr key={idx} className="border-t border-[#E5E5E5] bg-white">
                  <td className="px-6 py-4 font-bold">{criteria}</td>
                  <td className="px-6 py-4">{min}</td>
                  <td className="px-6 py-4">{max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------ */}

      {/* <div className="flex justify-center w-full overflow-x-auto mt-10">
        <table className="border-separate border-spacing-x-5 min-w-[700px] text-center text-sm rounded-2xl">
          <thead>
            <tr className="bg-[#F6FFE8] text-black text-[18px] font-semibold">
              <th className="px-6 py-4 rounded-tl-2xl">
                Personal Loan criteria-Salaried
              </th>
              <th className="px-6 py-4">Minimum</th>
              <th className="px-6 py-4 rounded-tr-2xl">Maximum</th>
            </tr>
          </thead>
          <tbody className="text-[15px]">
            {[
              ["Bureau Score", "650", "900"],
              ["Age", "21 years", "58 years (EOT)"],
              ["Tenure", "15 Days", "9 Months"],
              ["Income-NTH", "20,000/-", "-"],
              ["Banking Norms", "3 Months", "-"],
              ["ABB to EMI Ratio", "1", "-"],
              ["Loan Amount", "3,000", "40,000"],
              ["ROI (Per Day)", "0.10%", "0.15%"],
              ["Processing Fees", "0 to 15% Excluding GST", "-"],
              ["PF", "Required for all customers", "-"],
            ].map(([label, min, max], idx) => (
              <tr
                key={idx}
                className={`bg-white text-center text-black`}
              >
                <td className="px-6 py-4">{label}</td>
                <td className="px-6 py-4">{min}</td>
                <td className="px-6 py-4">{max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </section>
  );
}
