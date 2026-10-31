"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./head.module.scss";
import { Button, Drawer, Dropdown, Flex, Menu } from "antd";
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
import { usePathname } from "next/navigation";
import { normalizeHeaderMenus } from "@/utils/normalizeHeaderMenus";

const Header = ({ isDark = false, data }) => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);

  const pathName = usePathname();
  const menus = normalizeHeaderMenus(data?.menus);

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

  // Close dropdown on route change
  useEffect(() => {
    setOpenMenu(null);
  }, [pathName]);

  // Close dropdown when header hides on scroll
  useEffect(() => {
    if (!showHeader) {
      setOpenMenu(null);
    }
  }, [showHeader]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(idx);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpenMenu(null);
    }
  };

  return (
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
            {menus.map((item, idx) => {
              if (item.isDropdown) {
                const isOpen = openMenu === idx;
                const isDropdownActive =
                  pathName === item.path ||
                  (Array.isArray(item.options) &&
                    item.options.some((opt) => opt.url === pathName));

                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setOpenMenu(idx);
                    }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setOpenMenu(null);
                      }
                    }}
                    onKeyDown={handleKeyDown}
                  >
                    {item.path ? (
                      <Link
                        href={item.path}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => {
                          setOpenMenu((prev) => (prev === idx ? null : idx));
                        }}
                      >
                        <Flex align="center" gap={10}>
                          <span
                            className={`${styles.dropDownLink} ${
                              isDropdownActive ? "!text-[#79CA00]" : ""
                            }`}
                          >
                            {item.label}
                          </span>
                          <RiArrowDownSLine
                            className={`${styles.dropDownArrow} transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            size={18}
                            color={
                              isDark && showHeader && isAtTop ? "#fff" : "#000"
                            }
                          />
                        </Flex>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => {
                          setOpenMenu((prev) => (prev === idx ? null : idx));
                        }}
                        className="bg-transparent border-none p-0 cursor-pointer flex items-center"
                      >
                        <Flex align="center" gap={10}>
                          <span
                            className={`${styles.dropDownLink} ${
                              isDropdownActive ? "!text-[#79CA00]" : ""
                            }`}
                          >
                            {item.label}
                          </span>
                          <RiArrowDownSLine
                            className={`${styles.dropDownArrow} transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            size={18}
                            color={
                              isDark && showHeader && isAtTop ? "#fff" : "#000"
                            }
                          />
                        </Flex>
                      </button>
                    )}

                    {/* Dropdown Panel - Always in DOM for SEO */}
                    <div
                      className={`absolute left-0 top-full pt-3 z-50 transition-all duration-200 ${
                        isOpen
                          ? "opacity-100 visible pointer-events-auto translate-y-0"
                          : "opacity-0 invisible pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="min-w-[260px] rounded-2xl border border-gray-100 bg-white p-2 shadow-xl">
                        {item.options.map((opt, optIdx) => {
                          const isOptionActive = pathName === opt.url;
                          return (
                            <Link
                              key={optIdx}
                              href={opt.url}
                              target={opt.external ? "_blank" : undefined}
                              rel={opt.external ? "noopener" : undefined}
                              onClick={() => setOpenMenu(null)}
                              className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                                isOptionActive
                                  ? "!text-[#4f8a00] bg-[#77CB02]/10"
                                  : "text-gray-800 hover:bg-[#77CB02]/10 hover:text-[#4f8a00]"
                              }`}
                            >
                              {opt.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathName === item.path;
              return (
                <Link key={idx} className="" href={item.path}>
                  <span
                    className={`${styles.navLink} ${
                      isActive ? "!text-[#79CA00]" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Link href={"https://web.rapidmoney.in/borrower/login?utm_source=Website&utm_extsource=Organic&utm_medium=Web"}>
                <button
                  // type="primary"
                  className={`apply-btn apply-btn-green`}
                // className={`apply-btn ${isDark ? 'apply-btn-green' : 'apply-btn-blue'}`}
                >
                  {data?.cta?.applyLabel}
                </button>
              </Link>
              <Link href={"https://play.google.com/store/apps/details?id=com.rapid_money&hl=en_IN"  } target="_blank">
                <button
                  // type="default
                  className={`apply-btn ${isDark && showHeader && isAtTop ? "apply-btn-dark" : "apply-btn-light"
                    } flex item-center gap-3`}
                >
                  <span>
                    {
                      data?.cta?.downloadLabel
                    }
                  </span>
                  {/* <Image
                    src={isDark && showHeader && isAtTop ? darkIphone : lightIphone}
               j     width={24}
                    height={24}
                    alt="iphone"
                  ></Image> */}
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

// "use client";

// import { useState, useEffect } from "react";
// import styles from "./head.module.scss";
// import { Button, Drawer, Dropdown, Flex, Menu } from "antd";
// // import homePageData from "@/json/homepage/home.json";
// import Link from "next/link";
// import Image from "next/image";
// import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
// import darkRapidMoneyLogo from "./assets/dark_rapid_money_logo.png";
// import lightIphone from "./assets/light_iphone.svg";
// import darkIphone from "./assets/dark_iphone.svg";
// import playStore from "./assets/playstore.svg";
// import {
//   RiAlignJustify,
//   RiArrowDownSLine,
//   RiArrowDropDownLine,
//   RiMenuUnfold2Fill,
//   RiMenuUnfold4Fill,
// } from "react-icons/ri";
// import ResponsiveDrawer from "../responsive-drawer/ResponsiveDrawer";
// import { usePathname } from "next/navigation";

// const Header = ({ isDark = false, data }) => {
//   const [open, setOpen] = useState(false);
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isAtTop, setIsAtTop] = useState(true);

//   const pathName = usePathname()

//   const showDrawer = () => setOpen(true);
//   const onClose = () => setOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setIsAtTop(currentScrollY < 10);

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         setShowHeader(false);
//       } else {
//         setShowHeader(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);



//   return (

//     <header
//       className={`
//           ${styles.header}
//           ${isDark ? (!isAtTop ? styles.light : styles.dark) : styles.light}
//           ${showHeader ? styles.visible : styles.hidden}
//           ${!isAtTop ? styles.scrolled : ""}
//         `}
//     >
//       <div className="container mx-auto flex justify-between items-center py-2">
//         {/* Logo */}
//         <div className="">
//           <Link href="/">
//             <Image
//               src={
//                 isDark
//                   ? !isAtTop
//                     ? lightRapidMoneyLogo
//                     : darkRapidMoneyLogo
//                   : lightRapidMoneyLogo
//               }
//               alt="RapidMoney Logo"
//               width={220}
//               height={50}
//               className={`max-w-full h-auto object-contain ${styles.headerLogo}`}
//             />
//           </Link>
//         </div>

//         <div className="flex items-center gap-5">
//           {/* Desktop Menu */}
//           <nav className="hidden xl:flex items-center gap-5">
//             {data?.menus?.map((item, idx) => {
//               const isActive = pathName === item?.redirect_path;
//               // console.log(pathName, item?.redirect_path)
//               return (
//                 item?.type === "dropdown" ? (
//                   // <Dropdown
//                   //     trigger="click"
//                   //     menu={{
//                   //         items: item?.option?.length > 0 && item?.option?.map((sub) => ({
//                   //             key: sub?.link,
//                   //             label: (
//                   //                 <Link
//                   //                     href={sub?.link}
//                   //                     className="font-16 font-weight-medium"
//                   //                     target={sub?.link_type === "external" ? "_blank" : "_self"}
//                   //                 >
//                   //                     {sub?.label}
//                   //                 </Link>
//                   //             ),
//                   //         })),
//                   //     }}
//                   //     className={[
//                   //         'navBarDropDown',
//                   //         styles.dropdownWithArrow,
//                   //     ].join(" ")}
//                   //     key={idx}
//                   // >
//                   //         <Link key={idx} href={item?.link}>
//                   //             <Flex align="center" gap={10}>
//                   //                 <span className={styles.dropDownLink}>{item?.label}</span>
//                   //                 <RiArrowDownSLine size={18} color={isDark ? "#fff" : "#000"} />
//                   //             </Flex>
//                   //         </Link>
//                   // </Dropdown>
//                   <Link key={idx} href={item?.redirect_path}>
//                     <Flex align="center" gap={10}>
//                       <span className={`${styles.dropDownLink} ${isActive ? '!text-[#79CA00]' : ''}`}>{item?.item_name}</span>
//                       <RiArrowDownSLine
//                         className={styles.dropDownArrow}
//                         size={18}
//                         color={isDark && showHeader && isAtTop ? "#fff" : "#000"}
//                       />
//                     </Flex>
//                   </Link>
//                 ) : (
//                   <Link key={idx} className="" href={item?.redirect_path}>
//                     <span className={`${styles.navLink} ${isActive ? '!text-[#79CA00]' : ''}`}>{item?.item_name}</span>
//                   </Link>
//                 )
//               )
//             }
//             )}
//           </nav>

//           {/* CTA Buttons */}
//           <div className="flex items-center gap-3">
//             <div className="hidden md:flex items-center gap-3">
//               <Link href={"https://web.rapidmoney.in/borrower/login?utm_source=Website&utm_extsource=Organic&utm_medium=Web"}>
//                 <button
//                   // type="primary"
//                   className={`apply-btn apply-btn-green`}
//                 // className={`apply-btn ${isDark ? 'apply-btn-green' : 'apply-btn-blue'}`}
//                 >
//                   {data?.cta?.applyLabel}
//                 </button>
//               </Link>
//               <Link href={"https://play.google.com/store/apps/details?id=com.rapid_money&hl=en_IN"  } target="_blank">
//                 <button
//                   // type="default
//                   className={`apply-btn ${isDark && showHeader && isAtTop ? "apply-btn-dark" : "apply-btn-light"
//                     } flex item-center gap-3`}
//                 >
//                   <span>
//                     {
//                       data?.cta?.downloadLabel
//                     }
//                   </span>
//                   {/* <Image
//                     src={isDark && showHeader && isAtTop ? darkIphone : lightIphone}
//                j     width={24}
//                     height={24}
//                     alt="iphone"
//                   ></Image> */}
//                   <Image
//                     src={playStore}
//                     width={24}
//                     height={24}
//                     alt="playstore"
//                   ></Image>
//                 </button>
//               </Link> 
//             </div>
//             <button
//               className="xl:hidden text-white"
//               onClick={() => showDrawer(!open)}
//             >
//               {/* Hamburger icon */}
//               <span className="material-icons">
//                 <RiMenuUnfold4Fill size={24} color={isDark && showHeader && isAtTop ? "#fff" : "#000"} />
//               </span>
//             </button>
//           </div>
//         </div>
//         {/* Mobile Hamburger */}
//       </div>
//       {/* <div className={styles.navBarDrawer}> */}
//       <ResponsiveDrawer data={data} open={open} onClose={onClose} />
//       {/* </div> */}
//     </header>
//   );
// };

// export default Header;
