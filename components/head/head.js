"use client"

import { useState, useEffect } from "react";
import styles from './head.module.scss'
import { Button, Drawer, Dropdown, Flex, Menu } from 'antd'
// import homePageData from "@/json/homepage/home.json";
import Link from 'next/link';
import Image from 'next/image';
import lightRapidMoneyLogo from './assets/light_rapid_money_logo.png'
import darkRapidMoneyLogo from './assets/dark_rapid_money_logo.png'
import lightIphone from "./assets/light_iphone.svg"
import darkIphone from "./assets/dark_iphone.svg"
import playStore from "./assets/playstore.svg";
import { RiAlignJustify, RiArrowDownSLine, RiArrowDropDownLine } from "react-icons/ri";
// import data from "@/json/header/header.json"

// const header = homePageData.header;
// console.log(data)

const Header = ({ isDark = false, data }) => {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY < 10);

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    console.log({ showHeader })

    return (
        // <header className={`${styles.header} ${isDark ? styles.dark : styles.light} pt-6`}>
        <header
            className={`
          ${styles.header}
          ${isDark ? styles.dark : styles.light}
          ${showHeader ? styles.visible : styles.hidden}
          ${!isAtTop ? styles.scrolled : ""}
        `}
        >
            <div className="container mx-auto flex justify-between items-center py-2">
                {/* Logo */}
                <div className="">
                    <Link href="/">
                        <Image
                            src={isDark ? darkRapidMoneyLogo : lightRapidMoneyLogo}
                            alt="RapidMoney Logo"
                            width={220}
                            height={50}
                            className={`max-w-full h-auto object-contain ${styles.headerLogo}`}
                        />

                    </Link>
                </div>

                <div className="flex items-center gap-5">
                    {/* Desktop Menu */}
                    <nav className="hidden xl:flex items-center gap-5">
                        {data?.menu?.map((item, idx) =>
                            item?.type === "dropdown" ? (
                                // <Dropdown
                                //     trigger="click"
                                //     menu={{
                                //         items: item?.option?.length > 0 && item?.option?.map((sub) => ({
                                //             key: sub?.link,
                                //             label: (
                                //                 <Link
                                //                     href={sub?.link}
                                //                     className="font-16 font-weight-medium"
                                //                     target={sub?.link_type === "external" ? "_blank" : "_self"}
                                //                 >
                                //                     {sub?.label}
                                //                 </Link>
                                //             ),
                                //         })),
                                //     }}
                                //     className={[
                                //         'navBarDropDown',
                                //         styles.dropdownWithArrow,
                                //     ].join(" ")}
                                //     key={idx}
                                // >
                                //         <Link key={idx} href={item?.link}>
                                //             <Flex align="center" gap={10}>
                                //                 <span className={styles.dropDownLink}>{item?.label}</span>
                                //                 <RiArrowDownSLine size={18} color={isDark ? "#fff" : "#000"} />
                                //             </Flex>
                                //         </Link>
                                // </Dropdown>
                                <Link key={idx} href={item?.link}>
                                    <Flex align="center" gap={10}>
                                        <span className={styles.dropDownLink}>{item?.label}</span>
                                        <RiArrowDownSLine className={styles.dropDownArrow} size={18} color={isDark ? "#fff" : "#000"} />
                                    </Flex>
                                </Link>
                            ) : (
                                <Link key={idx} className="" href={item?.link}>
                                    <span className={styles.navLink}>{item?.label}</span>
                                </Link>
                            )
                        )}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-3">
                            <Link href={"#"}>
                                <button
                                    // type="primary"
                                    className={`apply-btn apply-btn-green`}
                                // className={`apply-btn ${isDark ? 'apply-btn-green' : 'apply-btn-blue'}`}
                                >
                                    {data?.cta?.applyLabel}
                                </button>
                            </Link>
                            <Link href={"#"}>
                                <button
                                    // type="default
                                    className={`apply-btn ${isDark ? 'apply-btn-dark' : 'apply-btn-light'} flex item-center gap-3`}
                                >
                                    <span>Download</span>
                                    <Image src={isDark ? darkIphone : lightIphone} width={24} height={24} alt="iphone"></Image>
                                    <Image src={playStore} width={24} height={24} alt="playstore"></Image>
                                </button>
                            </Link>
                        </div>
                        <button
                            className="xl:hidden text-white"
                            onClick={() => showDrawer(!open)}
                        >
                            {/* Hamburger icon */}
                            <span className="material-icons">
                                <RiAlignJustify color={isDark ? "#fff" : "#000"} />
                            </span>
                        </button>

                    </div>
                </div>
                {/* Mobile Hamburger */}

            </div>
            {/* <div className={styles.navBarDrawer}> */}
            <Drawer
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
                className="navbarDrawer"
            //   rootClassName={styles.navBarDrawer} 

            >
                <nav className='px-4 py-2 flex flex-col gap-2'>
                    {data?.menu?.map((item, idx) =>
                        item.type === "dropdown" ? (
                            <Dropdown
                                key={idx}
                                menu={{
                                    items: item?.option?.map((sub) => ({
                                        key: sub.link,
                                        label: (
                                            <Link
                                                href={sub?.link}
                                                // className={styles.dropDownWithContent}
                                                className="font-16 font-weight-medium"
                                                target={sub?.link_type === "external" ? "_blank" : "_self"}
                                            >
                                                {sub?.label}
                                            </Link>
                                        ),
                                    })),
                                }}
                                placement="bottomLeft"
                                trigger={['click']}
                                className="navBarDropDown"
                            >
                                <div className="cursor-pointer flex items-center justify-between px-2 py-2 rounded">
                                    <span className={styles.drawerDropDownLink}>{item?.label}</span>
                                    <RiArrowDropDownLine size={22} />
                                </div>
                            </Dropdown>
                        ) : (
                            <Link
                                key={idx}
                                href={item?.link}
                                className="block py-2 px-2 rounded"
                            >
                                <span className={styles.drawerNavLink}>{item?.label}</span>
                            </Link>
                        )
                    )}
                    {
                        <div className="md:hidden block">
                            <Button
                                type="primary"
                                className="bg-green-400 border-none font-semibold w-full mt-2"
                                href="/apply"
                            >
                                {data?.cta?.applyLabel}
                            </Button>

                            <Button
                                type="default"
                                href="/apply"
                                className="flex justify-between items-center gap-2 border w-full mt-2"
                            >
                                <span>Download</span>
                                <div className="flex items-center gap-2">
                                    <Image src={lightIphone} width={20} height={20} alt="iphone" />
                                    <Image src={playStore} width={20} height={20} alt="playstore" />
                                </div>
                            </Button>
                        </div>
                    }

                </nav>
            </Drawer>
            {/* </div> */}
        </header>
    );
};

export default Header;