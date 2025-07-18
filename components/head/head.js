"use client";

import { useState, useEffect } from "react";
import styles from "./head.module.scss";
import { Button, Drawer, Dropdown, Flex, Menu } from "antd";
// import homePageData from "@/json/homepage/home.json";
import Link from "next/link";
import Image from "next/image";
import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
import darkRapidMoneyLogo from "./assets/dark_rapid_money_logo.png";
import lightIphone from "./assets/light_iphone.svg";
import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import {
  RiAlignJustify,
  RiArrowDownSLine,
  RiArrowDropDownLine,
  RiMenuUnfold2Fill,
  RiMenuUnfold4Fill,
} from "react-icons/ri";
import ResponsiveDrawer from "../responsive-drawer/ResponsiveDrawer";
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
  // console.log({ showHeader });
  // console.log("s", isDark);
  // console.log(isAtTop, "isAtTop");
  return (
    // <header className={`${styles.header} ${isDark ? styles.dark : styles.light} pt-6`}>
    <header
      className={`
          ${styles.header}
          ${isDark ? (!isAtTop ? styles.light : styles.dark) : styles.light}
          ${showHeader ? styles.visible : styles.hidden}
          ${!isAtTop ? styles.scrolled : ""}
        `}
    >
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="">
          <Link href="/">
            <Image
              src={
                isDark
                  ? !isAtTop
                    ? lightRapidMoneyLogo
                    : darkRapidMoneyLogo
                  : lightRapidMoneyLogo
              }
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
                    <RiArrowDownSLine
                      className={styles.dropDownArrow}
                      size={18}
                      color={isDark && showHeader && isAtTop ? "#fff" : "#000"}
                    />
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
              <Link href={data?.cta?.applyLink || "/"}>
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
                  className={`apply-btn ${isDark && showHeader && isAtTop ? "apply-btn-dark" : "apply-btn-light"
                    } flex item-center gap-3`}
                >
                  <span>Download</span>
                  <Image
                    src={isDark && showHeader && isAtTop ? darkIphone : lightIphone}
                    width={24}
                    height={24}
                    alt="iphone"
                  ></Image>
                  <Image
                    src={playStore}
                    width={24}
                    height={24}
                    alt="playstore"
                  ></Image>
                </button>
              </Link>
            </div>
            <button
              className="xl:hidden text-white"
              onClick={() => showDrawer(!open)}
            >
              {/* Hamburger icon */}
              <span className="material-icons">
                <RiMenuUnfold4Fill size={24} color={isDark && showHeader && isAtTop ? "#fff" : "#000"} />
              </span>
            </button>
          </div>
        </div>
        {/* Mobile Hamburger */}
      </div>
      {/* <div className={styles.navBarDrawer}> */}
      <ResponsiveDrawer data={data} open={open} onClose={onClose} />
      {/* </div> */}
    </header>
  );
};

export default Header;
