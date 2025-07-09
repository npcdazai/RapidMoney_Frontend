import { Button, Drawer, Dropdown, Flex } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowDownSLine, RiArrowDropDownLine } from 'react-icons/ri'
import lightIphone from "./assets/light_iphone.svg"
import playStore from "./assets/playstore.svg"
import styles from "./responsive-drawer.module.scss"


export default function ResponsiveDrawer({ open, onClose, data }) {
    return (
        <div>
            <Drawer
                closable={{ "aria-label": "Close Button" }}
                onClose={onClose}
                open={open}
                className="navbarDrawer"
            >
                <nav className="px-4 py-2 flex flex-col gap-2">
                    {data?.menu?.map((item, idx) =>
                        item.type === "dropdown" ? (
                            // <Dropdown
                            //     key={idx}
                            //     menu={{
                            //         items: item?.option?.map((sub) => ({
                            //             key: sub.link,
                            //             label: (
                            //                 <Link
                            //                     href={sub?.link}
                            //                     // className={styles.dropDownWithContent}
                            //                     className="font-16 font-weight-medium"
                            //                     target={
                            //                         sub?.link_type === "external" ? "_blank" : "_self"
                            //                     }
                            //                 >
                            //                     {sub?.label}
                            //                 </Link>
                            //             ),
                            //         })),
                            //     }}
                            //     placement="bottomLeft"
                            //     trigger={["click"]}
                            //     className="navBarDropDown"
                            // >
                            //     <div className="cursor-pointer flex items-center justify-between px-2 py-2 rounded">
                            //         <span className={styles.drawerDropDownLink}>
                            //             {item?.label}
                            //         </span>
                            //         <RiArrowDropDownLine size={24} />
                            //     </div>
                            // </Dropdown>
                            <Link key={idx} href={item?.link}  className={`block py-2 px-2 rounded ${styles.drawerDropDownLink}`}>
                                <Flex align="center" gap={10}>
                                    <span className={styles.dropDownLink}>{item?.label}</span>
                                    <RiArrowDownSLine
                                        className={styles.dropDownArrow}
                                        size={18}
                                        color={"#000"}
                                    />
                                </Flex>
                            </Link>
                        ) : (
                            <Link
                                key={idx}
                                href={item?.link}
                                className={`block py-2 px-2 rounded ${styles.drawerNavLink}` }
                            >
                                <span>{item?.label}</span>
                            </Link>
                        )
                    )}
                    {
                        <div className="md:hidden block">
                            <button
                                type="primary"
                                className="apply-btn apply-btn-green border-none font-semibold w-full mt-2"
                                href="/apply"
                            >
                                {data?.cta?.applyLabel}
                            </button>

                            <button
                                type="default"
                                href="/apply"
                                className="apply-btn apply-btn-light flex justify-between items-center gap-2 border w-full mt-2"
                            >
                                <span>Download</span>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={lightIphone}
                                        width={20}
                                        height={20}
                                        alt="iphone"
                                    />
                                    <Image
                                        src={playStore}
                                        width={20}
                                        height={20}
                                        alt="playstore"
                                    />
                                </div>
                            </button>
                        </div>
                    }
                </nav>
            </Drawer></div>
    )
}
