import {
  PERSONAL_LOAN_MENU_LABEL,
  PERSONAL_LOAN_MENU_PATH,
  PERSONAL_LOAN_MENU_OPTIONS,
} from "../constants/personalLoanMenu.js";

export function normalizeHeaderMenus(menus) {
  if (!Array.isArray(menus)) return [];

  return menus.map((item) => {
    if (!item || typeof item !== "object") return item;

    let label = (item.item_name || item.label || "").trim();
    const path = item.redirect_path || item.link || "";

    const rawOptions = Array.isArray(item.options)
      ? item.options
      : Array.isArray(item.option)
      ? item.option
      : [];

    let options = rawOptions
      .map((o) => {
        if (!o || typeof o !== "object") return null;
        const optLabel = (o.label || o.item_name || "").trim();
        const optUrl = o.url || o.link || o.redirect_path || "";
        if (!optLabel || !optUrl) return null;
        return {
          label: optLabel,
          url: optUrl,
          external: o.link_type === "external",
        };
      })
      .filter(Boolean);

    let isDropdown =
      (item.item_type || item.type) === "dropdown" && options.length > 0;

    // Fallback (so feature works before CMS is edited):
    const normalizedLabel = label.toLowerCase();
    const isTargetLoanItem =
      path === PERSONAL_LOAN_MENU_PATH &&
      (normalizedLabel === "instant personal loan" ||
        normalizedLabel === "products");

    if (isTargetLoanItem && options.length === 0) {
      label = PERSONAL_LOAN_MENU_LABEL;
      isDropdown = true;
      options = PERSONAL_LOAN_MENU_OPTIONS.map((o) => ({
        label: o.label,
        url: o.url,
        external: o.link_type === "external",
      }));
    }

    return {
      ...item,
      label,
      isDropdown,
      path,
      options,
    };
  });
}

