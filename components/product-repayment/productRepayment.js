import React from "react";
import { FiFileText } from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";

export default function ProductRepayment() {
  return (
    <section className="container px-4 bg-white pb-24">
      <h2 className="font-40 text-black font-bold text-center mb-12">
        Bullet Repayment Loan
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
          <div className="text-black font-16 font-bold flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#121114] font-semibold font-16  inline-flex justify-center items-center w-9 h-9 rounded-full">
                01
              </span>{" "}
              No Collateral Required
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
              Indian Citizen, 21+ years & Above
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              Fixed Monthly Re-Payments & Instant Approval
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
                <RiCheckLine size={18} />
              </span>{" "}
              Quick Access to Lump Sum Amount
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
