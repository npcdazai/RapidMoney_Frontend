"use client"

import React from 'react';
import Image from 'next/image';
import selfin from "./assets/selfin.png";
import styles from "./lending-partners.module.scss";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiGlobeLine,
  RiGlobalLine
} from 'react-icons/ri';

const iconMap = {
  email: RiMailLine,
  phone: RiPhoneLine,
  website: RiGlobalLine,
  location: RiMapPinLine,
  sachet: RiGlobalLine
};

const LendingPartners = ({ data }) => {
  if (!data) return null;

  const { logo, offices } = data;
  const delhiOffice = offices?.find(o => o.type === "Delhi Office");
  const registeredOffice = offices?.find(o => o.type === "Registered Office");

  return (
    <section className={`${styles.section} pb-28 pt-28`}>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center pb-12'>{data?.title}</h1>

        <div className='bg-[#afafb214] p-7 rounded-3xl'>
          <div className="pb-8">
            <Image src={selfin} width={150} height={50} alt="Partner Logo" />
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Delhi Office */}
            <div className="bg-white p-7 rounded-3xl space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                  <RiMapPinLine size={24} className="text-lime-600 mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{delhiOffice.type}</h4>
                  <p className="text-gray-700 mt-1">{delhiOffice.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {delhiOffice.contacts.map((contact, idx) => {
                  const Icon = iconMap[contact.icon || contact.type.toLowerCase()];
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      {/* Icon column */}
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                        {Icon && <Icon size={24} className="text-lime-600" />}
                      </div>
                      {/* Text column */}
                      <div className="flex flex-col justify-center">
                        <h4 className="font-medium text-base">{contact?.type}</h4>
                        <a
                          href={
                            contact.url ||
                            (contact.type.toLowerCase() === 'email'
                              ? `mailto:${contact.value}`
                              : contact.type.toLowerCase() === 'phone'
                                ? `tel:${contact.value}`
                                : contact.value)
                          }
                          className="font-16 underline text-[#00000099] break-all"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-white p-7 rounded-3xl h-fit">
              <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                  <RiMapPinLine size={24} className="text-lime-600 mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{registeredOffice.type}</h4>
                  <p className="text-gray-700 mt-1">{registeredOffice.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LendingPartners;
