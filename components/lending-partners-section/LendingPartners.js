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

          <div className="grid md:grid-cols-2 gap-10">
            {/* Delhi Office */}
            <div className="bg-white p-8 rounded-3xl space-y-6">
              <div className="flex items-start gap-3">
                <RiMapPinLine size={22} className="text-lime-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold">{delhiOffice.type}</h4>
                  <p className="text-gray-700 mt-1">{delhiOffice.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {delhiOffice.contacts.map((contact, idx) => {
                  const Icon = iconMap[contact.icon || contact.type.toLowerCase()];
                  return (
                    <div key={idx}>
                      <div className="flex items-center gap-2 mb-1">
                        {Icon && <Icon size={20} className="text-lime-600" />}
                        <h4 className="font-medium">{contact?.type}</h4>
                      </div>
                      <a
                        href={
                          contact.url ||
                          (contact.type.toLowerCase() === 'email'
                            ? `mailto:${contact.value}`
                            : contact.type.toLowerCase() === 'phone'
                            ? `tel:${contact.value}`
                            : contact.value)
                        }
                        className="text-blue-700 underline ml-6 text-sm break-all"
                      >
                        {contact.value}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-white p-8 rounded-3xl h-fit">
              <div className="flex items-start gap-3">
                <RiMapPinLine size={22} className="text-lime-600 mt-1" />
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
