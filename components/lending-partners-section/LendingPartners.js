// "use client"

// import React from 'react';
// import Image from 'next/image';
// import selfin from "./assets/selfin.png";
// import styles from "./lending-partners.module.scss";
// import {
//   RiMailLine,
//   RiMapPinLine,
//   RiPhoneLine,
//   RiGlobeLine,
//   RiGlobalLine
// } from 'react-icons/ri';

// const iconMap = {
//   email: RiMailLine,
//   phone: RiPhoneLine,
//   website: RiGlobalLine,
//   location: RiMapPinLine,
//   sachet: RiGlobalLine
// };

// const LendingPartners = ({ data }) => {
//   if (!data) return null;

//   const { logo, offices } = data;
//   const delhiOffice = offices?.find(o => o.type === "Delhi Office");
//   const registeredOffice = offices?.find(o => o.type === "Registered Office");

//   return (
//     <section className={`${styles.section} pb-28 pt-28`}>
//       <div className='container mx-auto'>
//         <h1 className='text-4xl font-bold text-center pb-12'>{data?.title}</h1>

//         <div className='bg-[#afafb214] p-7 rounded-3xl'>
//           <div className="pb-8">
//             <Image src={selfin} width={150} height={50} alt="Partner Logo" />
//           </div>

//           <div className="grid lg:grid-cols-2 gap-5">
//             {/* Delhi Office */}
//             <div className="bg-white p-7 rounded-3xl space-y-6">
//               <div className="flex items-start gap-3">
//                 <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
//                   <RiMapPinLine size={24} className="text-lime-600 mt-1" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold">{delhiOffice.type}</h4>
//                   <p className="text-gray-700 mt-1">{delhiOffice.address}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {delhiOffice.contacts.map((contact, idx) => {
//                   const Icon = iconMap[contact.icon || contact.type.toLowerCase()];
//                   return (
//                     <div key={idx} className="flex items-start gap-3">
//                       {/* Icon column */}
//                       <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
//                         {Icon && <Icon size={24} className="text-lime-600" />}
//                       </div>
//                       {/* Text column */}
//                       <div className="flex flex-col justify-center">
//                         <h4 className="font-medium text-base">{contact?.type}</h4>
//                         <a
//                           href={
//                             contact.url ||
//                             (contact.type.toLowerCase() === 'email'
//                               ? `mailto:${contact.value}`
//                               : contact.type.toLowerCase() === 'phone'
//                                 ? `tel:${contact.value}`
//                                 : contact.value)
//                           }
//                           className="font-16 underline text-[#00000099] break-all"
//                         >
//                           {contact.value}
//                         </a>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Registered Office */}
//             <div className="bg-white p-7 rounded-3xl h-fit">
//               <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
//                   <RiMapPinLine size={24} className="text-lime-600 mt-1" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold">{registeredOffice.type}</h4>
//                   <p className="text-gray-700 mt-1">{registeredOffice.address}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LendingPartners;

"use client";

import React from "react";
import Image from "next/image";
import styles from "./lending-partners.module.scss";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiGlobalLine,
} from "react-icons/ri";
import useScrollFadeIn from "@/animations/useScrollFadeIn";

const iconMap = {
  email: RiMailLine,
  phone: RiPhoneLine,
  website: RiGlobalLine,
  sachetPortal: RiGlobalLine,
  address: RiMapPinLine,
};

const LendingPartners = ({ data }) => {
  const titleRef = useScrollFadeIn();
  const logoRef = useScrollFadeIn();

  if (!data || !Array.isArray(data)) return null;

  return (
    <>
      <section className={`${styles.section} pt-28`}>
        <div className="container mx-auto">
          {data?.map((partner, i) => (
            <div key={i} className="mb-14">
              <h1
                className="text-4xl font-bold text-center pb-12"
                ref={titleRef}
              >
                {partner.title}
              </h1>
 
              <div className="bg-[#afafb214] p-7 rounded-3xl">
                {/* Logo */}
                {partner.logo?.[0]?.url && (
                  <div className="pb-8" ref={logoRef}>
                    <Image
                      src={partner.logo[0].url}
                      alt={partner.logo[0].alt_name || "Partner Logo"}
                      width={150}
                      height={50}
                    />
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-5">
                  {["delhiOffice", "registeredOffice"].map((officeKey) => {
                    const office = partner[officeKey];
                    if (!office) return null;

                    return (
                      <div
                        key={officeKey}
                        className="bg-white p-7 rounded-3xl space-y-6 h-fit"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                            {iconMap.address && (
                              <RiMapPinLine
                                size={24}
                                className="text-lime-600 mt-1"
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">
                              {office.address?.label}
                            </h4>
                            <p className="text-gray-700 mt-1">
                              {office.address?.value}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Object.entries(office)
                            .filter(([key]) => key !== "address")
                            .map(([key, info], index) => {
                              const Icon = iconMap[info.key];
                              return (
                                <div
                                  key={index}
                                  className="flex items-start gap-3"
                                >
                                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                                    {Icon && (
                                      <Icon
                                        size={24}
                                        className="text-lime-600"
                                      />
                                    )}
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <h4 className="font-medium text-base">
                                      {info.label}
                                    </h4>
                                    <a
                                      href={
                                        info.key === "email"
                                          ? `mailto:${info.value}`
                                          : info.key === "phone"
                                          ? `tel:${info.value}`
                                          : info.value?.startsWith("http")
                                          ? info.value
                                          : `https://${info.value}`
                                      }
                                      className="font-16 underline text-[#00000099] break-all"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {info.value}
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* DLG Disclosure Section */}
      <div className="mt-2">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl pb-10">
          <h3 className="text-2xl font-bold mb-4">DLG Disclosure</h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-[#f8f8f8]">
                <tr>
                  <th className="text-center px-6 py-4 text-md font-semibold text-gray-700 border-b border-gray-200">
                    Total no. of portfolios
                  </th>
                  <th className="text-center px-6 py-4 text-md font-semibold text-gray-700 border-b border-gray-200">
                    Outstanding portfolio amount in which DLG has been offered
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-center border-t text-sm border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-700">Portfolio 1</td>
                  <td className="px-6 py-4 text-gray-700">
                    {/* value here */}
                    Rs.45,93,090
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LendingPartners;
