import React from 'react';
import Image from 'next/image';
import styles from "./career.module.scss"
import career from "./assets/career.png"
import career2 from "./assets/career2.png"
import career3 from "./assets/career3.png"
import correct from "./assets/correct.svg"
import { RiCheckLine } from 'react-icons/ri';

const CareerSection = ({ data }) => {
    if (!data) return null;
    const { images, coreValues } = data;

    return (
        <section className={`${styles.section} pt-120 pb-60`}>

            <div className="container mx-auto">
                <div className="pb-[70px] w-full text-center">
                    <div className="max-w-[660px] mx-auto">
                        <h1 className="font-18 pb-6">
                            {data.title}
                        </h1>
                        <span className="block font-40 font-weight-bold">
                            {data.description}
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <span className='h-full'><Image src={career} width={580} height={350} alt="career image 1" className="rounded-xl w-full !h-full object-cover" /></span>
                    <span className='h-full'><Image src={career2} width={580} height={350} alt="career image 2" className="rounded-xl w-full !h-full object-cover" /></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Left - Core Values List */}
                    <div className="bg-[#F9F9F9] p-8 rounded-xl text-black md:col-span-1">
                        <h2 className="text-4xl font-bold mb-6">{coreValues.title}</h2>
                        <ul className="space-y-10">
                            {coreValues.values.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 min-w-[24px] text-[#6379F9] flex justify-center items-center rounded-full bg-[#4d43fe1c] self-start mt-1">
                                        <RiCheckLine size={18} />
                                    </span>
                                    <span className="font-16 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right - Image */}
                    <div className="md:col-span-2">
                        <Image
                            src={career3}
                            width={580}
                            height={350}
                            alt="career image 3"
                            className="rounded-xl w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareerSection;
