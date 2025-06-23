"use client";

import React from 'react';
import Link from 'next/link';
// import {
//     FaLinkedin,
//     FaXTwitter,
//     FaYoutube,
//     FaInstagram,
//     FaFacebook,
//     FaGoogle,
//     FaEnvelope
// } from 'react-icons/fa6';
import footerData from '@/json/footer/footer.json';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import youtube from './assets/youtube.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import google from './assets/google-logo.svg';
import ratingStar from "./assets/rating_star.svg"
import email from './assets/email.svg';
import Image from 'next/image';
import footerLogo from "./assets/rapid_footer_logo.png"
import { Button, Col, Row } from 'antd';

// console.log(footerData)

const Footer = () => {

    const { companyInfo, sections, bottomNote, legalLinks } = footerData.footer;
    const socialIcons = {
        linkedin: linkedin,
        'x-twitter': twitter,
        youtube: youtube,
        instagram: instagram,
        facebook: facebook,
        google: google
    };

    return (
        <footer className="bg-white text-black pt-10 pb-6">
            {/* <div className="container mx-auto px-4 flex justify-between">
                <div>
                    <Link href="/">
                        <Image src={footerLogo} alt="RapidMoney Logo" width={225} height={50} />
                    </Link>
                    <p className="text-sm text-gray-600 mb-4">{companyInfo.description}</p>
                    <div className="flex items-center gap-3">
                        {companyInfo.socialLinks.map((link, idx) => {
                            if (link.icon === 'google' && link.rating) {
                                // Show Google rating button
                                return (
                                    <Link
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.platform}
                                    >
                                        <Button className="flex items-center gap-1" type="default">
                                            <Image
                                                src={ratingStar}
                                                alt="Rating Star"
                                                width={18}
                                                height={18}
                                            />
                                            <span className="ml-1 font-semibold text-yellow-600">{link.rating}</span>
                                            <Image
                                                src={socialIcons[link.icon]}
                                                alt={link.platform}
                                                width={24}
                                                height={24}
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </Button>
                                    </Link>
                                );
                            }
                            // Show normal social icon
                            return (
                                <Link
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.platform}
                                >
                                    <Image
                                        src={socialIcons[link.icon]}
                                        alt={link.platform}
                                        width={24}
                                        height={24}
                                        className="hover:scale-110 transition-transform"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                    {sections.map((section, idx) => (
                        <div key={idx} className=''>
                            <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                            {section.links && section.links.map((link, i) => (
                                <Link key={i} href={link.url} className="block text-sm text-gray-700 hover:text-green-500 mb-1">
                                    {link.label}
                                </Link>
                            ))}
                            {section.contact && (
                                <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                                    <Image src={ratingStar} width={24} height={24} alt='rating_star' />
                                    <a href={`mailto:${section.contact.label}`}>{section.contact.label}</a>
                                </div>
                            )}
                            {section.description && (
                                <p className="text-sm text-gray-600">{section.description}</p>
                            )}
                        </div>
                    ))}
            </div> */}
            <div className="container mx-auto">
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={6} lg={8}>
                        <Link href="/">
                            <Image src={footerLogo} alt="RapidMoney Logo" width={225} height={50} />
                        </Link>
                        <p className="text-sm text-gray-600 mb-4">{companyInfo.description}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                            {companyInfo.socialLinks.map((link, idx) => {
                                if (link.icon === 'google' && link.rating) {
                                    return (
                                        <Link
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.platform}
                                        >
                                            <Button className='flex items-center justify-center' type="default">
                                                <div className='flex items-center gap-2'>
                                                    <div className="flex gap-1">
                                                        <Image src={ratingStar} alt="Rating Star" width={16} height={6} />
                                                        <span className="">{link.rating}</span>
                                                    </div>
                                                    <Image
                                                        src={socialIcons[link.icon]}
                                                        alt={link.platform}
                                                        width={70}
                                                        height={24}
                                                        className="hover:scale-110 transition-transform"
                                                    />
                                                </div>
                                            </Button>
                                        </Link>
                                    );
                                }
                                return (
                                    <Link
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.platform}
                                    >
                                        <Image
                                            src={socialIcons[link.icon]}
                                            alt={link.platform}
                                            width={24}
                                            height={24}
                                            className="hover:scale-110 transition-transform"
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </Col>

                    <Col xs={0} md={3} lg={4} />

                    {sections.map((section, idx) => (
                        <Col key={idx} xs={12} md={5} lg={4}>
                            <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
                            {section.links &&
                                section.links.map((link, i) => (
                                    <Link key={i} href={link.url} className="block text-sm text-gray-700 hover:text-green-500 mb-1">
                                        {link.label}
                                    </Link>
                                ))}
                            {section.contact && (
                                <>
                                    {section.description && <p className="text-sm text-gray-600">{section.description}</p>}
                                    <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                                        <Image src={email} width={18} height={18} alt="email" />
                                        <span> <a className='break-words' href={`mailto:${section.contact.label}`}>{section.contact.label}</a></span>
                                    </div>
                                </>
                            )}
                        </Col>
                    ))}
                </Row>
                {/* Bottom Bar */}
                <div className="border-t border-[#DBDBDB] mt-6 pt-4 text-xs text-center text-gray-500 flex flex-wrap justify-between ">
                    <span>{bottomNote}</span>
                    <div className="flex flex-wrap gap-4 justify-center mt-2 md:mt-0">
                        {legalLinks.map((item, idx) => (
                            <Link key={idx} href={item.url} className="hover:text-green-500">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
