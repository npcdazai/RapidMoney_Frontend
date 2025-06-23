"use client"

import { useState } from "react";
import styles from './head.module.scss'
import { Button, Dropdown, Menu } from 'antd'
import headerData from "@/json/homepage/home.json";
import Link from 'next/link';
import Image from 'next/image';
import lightRapidMoneyLogo from './assets/light_rapid_money_logo.png'
import darkRapidMoneyLogo from './assets/dark_rapid_money_logo.png'
import iphone from "./assets/iphone.svg"
import playStore from "./assets/playstore.svg"

const header = headerData.header;

const Header = ({ isDark = false }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
            <div className="container mx-auto flex items-center py-2">
                {/* Logo */}
                <div className="flex">
                    <Link href="/">
                        <Image src={isDark ? darkRapidMoneyLogo : lightRapidMoneyLogo} alt="RapidMoney Logo" width={225} height={50} className="object-contain max-w-[225px]" />
                    </Link>
                </div>

                {/* Desktop Menu */}    
                <nav className="hidden md:flex ml-[60px] items-center gap-6 text-white">
                    {header.menu.map((item, idx) =>
                        item.submenu ? (
                            <Dropdown
                                arrow
                                key={idx}
                                overlay={
                                    <Menu>
                                        {item.submenu.map((sub, subIdx) => (
                                            <Menu.Item key={subIdx}>
                                                <a href={sub.link}>{sub.label}</a>
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                }

                            >
                                <a className="cursor-pointer">{item.label}</a>
                            </Dropdown>
                        ) : (
                            <a key={idx} className="hover:text-green-400" href={item.link}>
                                {item.label}
                            </a>
                        )
                    )}
                </nav>

                {/* CTA Buttons */}
                <div className="hidden md:flex ml-[30px] items-center gap-3">
                    <Button
                        type="primary"
                        className="bg-green-400 border-none font-semibold"
                        href="/apply"
                        size="large"
                    >
                        {header.cta.applyLabel}
                    </Button>
                    {/* <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1"> */}
                    {/* <span className="font-medium text-black">Download</span>
                        {header.cta.download.apple && (
                            <a href="#" aria-label="Download on Apple">
                     
                            </a>
                        )}
                        {header.cta.download.android && (
                            <a href="#" aria-label="Download on Android">
                       
                            </a>
                        )} */}
                    <Button
                        type="default"
                        className="bg-green-400 border-none font-semibold"
                        href="/apply"
                        size="large"
                        classNames="flex item-center"

                    >
                        Download
                        <div className="flex items-center gap-2">
                            <Image src={iphone} width={24} height={24} alt="iphone"></Image>
                            <Image src={playStore} width={24} height={24} alt="playstore"></Image>
                        </div>
                    </Button>
                    {/* </div> */}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {/* Hamburger icon */}
                    <span className="material-icons">menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <nav className="md:hidden bg-black text-white px-4 py-2">
                    {header.menu.map((item, idx) =>
                        item.submenu ? (
                            <div key={idx}>
                                <span>{item.label}</span>
                                <div className="pl-4">
                                    {item.submenu.map((sub, subIdx) => (
                                        <a key={subIdx} href={sub.link} className="block py-1">{sub.label}</a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={idx} href={item.link} className="block py-1">{item.label}</a>
                        )
                    )}
                    <Button
                        type="primary"
                        className="bg-green-400 border-none font-semibold w-full mt-2"
                        href="/apply"
                    >
                        {header.cta.applyLabel}
                    </Button>
                </nav>
            )}
        </header>
    );
};

export default Header;