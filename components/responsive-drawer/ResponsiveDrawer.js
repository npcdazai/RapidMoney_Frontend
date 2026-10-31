"use client";

import { useState, useEffect, useMemo } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { normalizeHeaderMenus } from "@/utils/normalizeHeaderMenus";
import styles from "./responsive-drawer.module.scss";

export default function ResponsiveDrawer({ open, onClose, data }) {
  const pathName = usePathname();
  const menus = useMemo(() => normalizeHeaderMenus(data?.menus), [data?.menus]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // If a sub-item matches the current pathName, expand it by default when drawer opens
  useEffect(() => {
    if (open) {
      const activeDropdownIdx = menus.findIndex(
        (m) =>
          m.isDropdown &&
          Array.isArray(m.options) &&
          m.options.some((o) => o.url === pathName)
      );
      if (activeDropdownIdx !== -1) {
        setExpandedIndex(activeDropdownIdx);
      }
    }
  }, [pathName, open, menus]);

  const toggleExpand = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div>
      <Drawer
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        className="navbarDrawer"
      >
        <nav className="px-4 py-2 flex flex-col gap-2 h-full">
          {menus.map((item, idx) => {
            if (item.isDropdown) {
              const isExpanded = expandedIndex === idx;
              const isDropdownActive =
                pathName === item.path ||
                (Array.isArray(item.options) &&
                  item.options.some((opt) => opt.url === pathName));

              return (
                <div key={idx} className="flex flex-col">
                  <div
                    onClick={() => toggleExpand(idx)}
                    className={`cursor-pointer flex items-center justify-between py-2 px-2 rounded ${
                      styles.drawerDropDownLink
                    } ${isDropdownActive ? "!text-[#79CA00]" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleExpand(idx);
                      }
                    }}
                  >
                    <span className="font-medium text-base">{item.label}</span>
                    <RiArrowDownSLine
                      className={`transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      size={20}
                      color={"#000"}
                    />
                  </div>

                  {/* Accordion panel - always in DOM */}
                  <div
                    className={`flex flex-col pl-4 space-y-1 transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? "max-h-[500px] opacity-100 py-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.options.map((opt, optIdx) => {
                      const isOptionActive = pathName === opt.url;
                      return (
                        <Link
                          key={optIdx}
                          href={opt.url}
                          target={opt.external ? "_blank" : undefined}
                          rel={opt.external ? "noopener" : undefined}
                          onClick={onClose}
                          className={`block py-2 px-2 text-sm rounded font-medium transition-colors ${
                            isOptionActive
                              ? "!text-[#79CA00] bg-gray-50"
                              : "text-gray-700 hover:text-[#79CA00] hover:bg-gray-50"
                          }`}
                        >
                          {opt.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isActive = pathName === item.path;
            return (
              <Link
                key={idx}
                href={item.path}
                onClick={onClose}
                className={`block py-2 px-2 rounded ${styles.drawerNavLink} ${
                  isActive ? "!text-[#79CA00]" : ""
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="md:hidden block flex-1 content-end">
            <Link
              href="https://web.rapidmoney.in/borrower/login"
              target="_blank"
              onClick={onClose}
            >
              <button
                type="button"
                className="apply-btn apply-btn-green border-none font-semibold w-full mt-2"
              >
                {data?.cta?.applyLabel || "Apply Now"}
              </button>
            </Link>
          </div>
        </nav>
      </Drawer>
    </div>
  );
}
