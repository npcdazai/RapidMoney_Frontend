import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Col, Divider, Row } from 'antd';
import styles from './footer.module.scss';

import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import youtube from './assets/youtube.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import google from './assets/google-logo.svg';
import ratingStar from './assets/rating_star.svg';
import emailIcon from './assets/email.svg';
import footerLogo from './assets/dark_rapid_money_logo.png';
import endpoints from '@/constants/endpoints';

const getCMSPageBySlug = async () => {
    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL +
            endpoints.get_cms_page +
            '/footer',
            {
                next: { revalidate: 3600 }, // 300 seconds = 5 minutes
            }
        );
        return await response.json();
    } catch (error) {
        console.log('API call failed: ', error);
        return null;
    }
};

const Footer = async () => {
    const response = await getCMSPageBySlug();
    const { company_links = [], product_links = [], copyright = {}, social_link = {}, support = {} } =
        response?.data?.pageData || {};

    const socialIcons = {
        linkedin,
        twitter,
        youtube,
        instagram,
        facebook,
        google,
    };

    const socialData = [
        { icon: 'linkedin', url: social_link.linkdin_link },
        { icon: 'twitter', url: social_link.twitter_link },
        { icon: 'youtube', url: social_link.youtube_link },
        { icon: 'instagram', url: social_link.instagram_link },
        { icon: 'facebook', url: social_link.facebook_link },
        { icon: 'google', url: social_link.google_link?.url, rating: social_link.google_link?.rating },
    ];

    return (
        <footer className={`pt-10 pb-6 ${styles.section} dark-bg`}>
            <div className="container mx-auto md:pb-8 pb-6">
                <Row gutter={[24, 24]}>
                    <Col xl={8} xs={24}>
                        <div>
                            <div className="flex gap-1 flex-col">
                                <Link href="/">
                                    <Image src={footerLogo} alt="RapidMoney Logo" width={225} height={50} />
                                </Link>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap pt-6 xl:pt-[100px]">
                                {socialData.map((link, idx) => {
                                    if (!link.url) return null;

                                    if (link.icon === 'google' && link.rating) {
                                        return (
                                            <Link key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <Button className="flex items-center justify-center !bg-transparent !border-[#FFFFFF3B]" type="default">
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex gap-1">
                                                            <Image src={ratingStar} alt="Rating Star" width={16} height={6} />
                                                            <span className="light-color">{link.rating}</span>
                                                        </div>
                                                        <Image src={socialIcons[link.icon]} alt={link.icon} width={70} height={24} />
                                                    </div>
                                                </Button>
                                            </Link>
                                        );
                                    }
                                    return (
                                        <Link key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={socialIcons[link.icon]}
                                                alt={link.icon}
                                                width={24}
                                                height={24}
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>

                    <Col xs={0} lg={0} xl={3} />

                    <Col xs={12} md={8} xl={4}>
                        <h4 className={`${styles.footerHeader} xl:pb-7 pb-4`}>Company</h4>
                        {company_links.map((link, i) => (
                            <Link key={i} href={link.redirect_path} className={styles.footerLink}>
                                {link.link_name}
                            </Link>
                        ))}
                    </Col>

                    <Col xs={12} md={8} xl={4}>
                        <h4 className={`${styles.footerHeader} xl:pb-7 pb-4`}>Products</h4>
                        {product_links.map((link, i) => (
                            <Link key={i} href={link.redirect_path} className={styles.footerLink}>
                                {link.link_name}
                            </Link>
                        ))}
                    </Col>

                    <Col xs={24} md={8} xl={5}>
                        <h4 className={`${styles.footerHeader} xl:pb-7 pb-4`}>Support</h4>
                        {support?.description && <p className={styles.contactDesc}>{support.description}</p>}
                        <div className="flex items-center gap-2 mt-2">
                            <Image src={emailIcon} width={18} height={18} alt="email" />
                            <span>
                                <a className={styles.footerEmail} href={`mailto:${support.email}`}>
                                    {support.email}
                                </a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>

            <Divider style={{ borderColor: '#FFFFFF3B' }} />

            <div
                className={`border-[#DBDBDB] gap-3 container text-center md:text-left mx-auto flex flex-wrap justify-center md:justify-between items-center ${styles.footerLastBottom}`}
            >
                <span className={styles.notes}>{copyright.description}</span>
                <div className="flex flex-wrap gap-4 justify-center mt-3 md:mt-0">
                    {copyright.copyright_links?.map((item, idx) => (
                        <Link key={idx} href={item.redirect_path || '#'} className={styles.copyRight}>
                            {item.link_name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;



// import React from 'react';
// import Link from 'next/link';
// // import {
// //     FaLinkedin,
// //     FaXTwitter,
// //     FaYoutube,
// //     FaInstagram,
// //     FaFacebook,
// //     FaGoogle,
// //     FaEnvelope
// // } from 'react-icons/fa6';
// import footerData from '@/json/footer/footer.json';
// import linkedin from './assets/linkedin.svg';
// import twitter from './assets/twitter.svg';
// import youtube from './assets/youtube.svg';
// import instagram from './assets/instagram.svg';
// import facebook from './assets/facebook.svg';
// import google from './assets/google-logo.svg';
// import ratingStar from "./assets/rating_star.svg"
// import email from './assets/email.svg';
// import Image from 'next/image';
// import footerLogo from "./assets/dark_rapid_money_logo.png"
// import { Button, Col, Divider, Row } from 'antd';
// import styles from "./footer.module.scss"
// import endpoints from '@/constants/endpoints';

// // console.log(footerData)

// const getCMSPageBySlug = async () => {
//   try {
//     const response = await fetch(
//       process.env.NEXT_PUBLIC_API_URL +
//       endpoints.get_cms_page +
//       "/footer",
//       { next: { revalidate: 3600 } }
//     );

//     return await response.json();
//   } catch (error) {
//     console.log("API call failed: ", error);
//     return null;
//   }
// };

// const Footer = async () => {

//     const response =  await getCMSPageBySlug();
//     console.log(response);


//     const { companyInfo, sections, bottomNote, legalLinks } = footerData.footer;

//     const {company_links,copyright,product_links,social_link,support} = response?.data?.pageData;

//     const socialIcons = {
//         linkedin: linkedin,
//         'x-twitter': twitter,
//         youtube: youtube,
//         instagram: instagram,
//         facebook: facebook,
//         google: google
//     };

//     return (
//         <footer className={`pt-10 pb-6 ${styles.section} dark-bg`}>
//             <div className="container mx-auto md:pb-8 pb-6">
//                 <Row gutter={[24, 24]}>
//                 {/* <Row
//                     gutter={{
//                         xs: [24, 24],
//                         xl: [48, 48],
//                     }}
//                 > */}
//                     <Col xl={8} xs={24}>
//                         {/* <Col xs={24} md={6} lg={8}> */}
//                         <div>
//                             <div className='flex gap-1 flex-col'>
//                                 <Link href="/">
//                                     <Image src={footerLogo} alt="RapidMoney Logo" width={225} height={50} />
//                                 </Link>
//                                 {/* <p className={styles.footerDesc}>{companyInfo.description}</p> */}
//                             </div>
//                             <div className="flex items-center gap-3 flex-wrap pt-6 xl:pt-[100px]">
//                                 {companyInfo.socialLinks.map((link, idx) => {
//                                     if (link.icon === 'google' && link.rating) {
//                                         return (
//                                             <Link
//                                                 key={idx}
//                                                 href={link.url}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 aria-label={link.platform}
//                                             >
//                                                 <Button className='flex items-center justify-center !bg-transparent !border-[#FFFFFF3B]' type="default">
//                                                     <div className='flex items-center gap-2'>
//                                                         <div className="flex gap-1">
//                                                             <Image src={ratingStar} alt="Rating Star" width={16} height={6} color='#79CA01' className='!text-[#79CA01]' />
//                                                             <span className="light-color">{link.rating}</span>
//                                                         </div>
//                                                         <Image
//                                                             src={socialIcons[link.icon]}
//                                                             alt={link.platform}
//                                                             width={70}
//                                                             height={24}

//                                                         />
//                                                     </div>
//                                                 </Button>
//                                             </Link>
//                                         );
//                                     }
//                                     return (
//                                         <Link
//                                             key={idx}
//                                             href={link.url}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             aria-label={link.platform}
//                                         >
//                                             <Image
//                                                 src={socialIcons[link.icon]}
//                                                 alt={link.platform}
//                                                 width={24}
//                                                 height={24}
//                                                 className="hover:scale-110 transition-transform"

//                                             />
//                                         </Link>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </Col>

//                     <Col xs={0} lg={0} xl={3} />
//                     {/* <Col xs={0} md={0} lg={3} /> */}

//                     {sections.map((section, idx) => {
//                         const isLast = idx === sections.length - 1;
//                         // {console.log(sections.length, "section lenght")}
//                         return (
//                             <Col
//                                 key={idx}
//                                 xs={isLast ? 24 : 12}
//                                 md={8}
//                                 xl={isLast ? 5 : 4}
//                             >
//                                 {/* <Col
//                                 key={idx}
//                                 xs={isLast ? 24 : 12}
//                                 md={5}
//                                 lg={isLast ? 5 : 4}
//                             > */}
//                                 <h4 className={`${styles.footerHeader} xl:pb-7 pb-4`}>{section.title}</h4>
//                                 {section.links &&
//                                     section.links.map((link, i) => (
//                                         <Link key={i} href={link.url} className={styles.footerLink}>
//                                             {link.label}
//                                         </Link>
//                                     ))}
//                                 {section.contact && (
//                                     <>
//                                         {section.description && <p className={styles.contactDesc}>{section.description}</p>}
//                                         <div className="flex items-center gap-2 mt-2">
//                                             <Image src={email} width={18} height={18} alt="email" />
//                                             <span> <a className={styles.footerEmail} href={`mailto:${section.contact.label}`}>{section.contact.label}</a></span>
//                                         </div>
//                                     </>
//                                 )}
//                             </Col>
//                         )
//                     }
//                     )}
//                 </Row>
//             </div>
//             <Divider style={{borderColor:"#FFFFFF3B"}}/>
//             <div className={`border-[#DBDBDB] gap-3 container text-center md:text-left mx-auto flex flex-wrap justify-center md:justify-between ${styles.footerLastBottom}`}>
//                 <span className={styles.notes}>{bottomNote}</span>
//                 <div className="flex flex-wrap gap-4 justify-center mt-3 md:mt-0">
//                     {legalLinks.map((item, idx) => (
//                         <Link key={idx} href={item.url} className={styles.copyRight}>
//                             {item.label}
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//         </footer>
//     );
// };

// export default Footer;
