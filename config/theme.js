const config = (fontFamily)=>({
  "token": {
    "borderRadius": 12,
    "fontSize": 14,
   fontFamily,
    "colorPrimary": "#79CA00"
  },
  "components": {
    "Input": {
      "fontSizeLG": 14,
      "colorBgContainer": "#ffffff",
      "colorBorder": "#d9d9d9",
      "colorText": "#0a0a0a",
      "colorTextPlaceholder": "rgba(0, 0, 0, 0.45)"
    },
    "Button": {
      "primaryShadow": "none",
      "colorPrimary": "#79CA00",
      "borderRadius": 8,
      "paddingInline": 16,
      "contentFontSize": 14,
      "fontWeight": 500
    },
    "Menu": {
      "iconSize": 18,
      "itemHeight": 40,
      "itemBg": "transparent",
      "subMenuItemBg": "#f7f7f7",
      "colorSplit": "#e0e0e0",
      "itemSelectedBg": "rgba(255, 51, 102, 0.08)",
      "itemBorderRadius": 8,
      "itemColor": "#0a0a0a",
      "groupTitleColor": "rgba(0, 0, 0, 0.45)",
      "itemHoverBg": "#f0f0f0"
    },
    "Table": {
      "cellPaddingBlockSM": 8,
      "cellPaddingInlineSM": 12,
      "rowSelectedBg": "rgba(255, 51, 102, 0.08)",
      "rowHoverBg": "#f5f5f5",
      "rowSelectedHoverBg": "rgba(255, 51, 102, 0.12)",
      "cellPaddingBlockMD": 12,
      "cellPaddingInlineMD": 16,
      "colorBgContainer": "#ffffff",
      "colorBorder": "#e0e0e0"
    },
    "Select": {
      "optionSelectedBg": "rgba(255, 51, 102, 0.08)",
      "colorBgContainer": "#ffffff",
      "colorBorder": "#d9d9d9"
    },
    "Cascader": {
      "optionSelectedBg": "rgba(255, 51, 102, 0.08)",
      "colorBgContainer": "#ffffff",
      "colorBorder": "#d9d9d9"
    },
    "Pagination": {
      "itemSize": 36,
      "colorBgContainer": "#ffffff",
      "colorBorder": "#e0e0e0"
    },
    "Tooltip": {
      "colorBgSpotlight": "rgba(0, 0, 0, 0.85)"
    },
    "Card": {
      "colorBgContainer": "#ffffff",
      "colorBorder": "#e0e0e0",
      "borderRadius": 16
    },
    "Modal": {
      "colorBgElevated": "#ffffff",
      "colorBorder": "#e0e0e0",
      "borderRadius": 16
    },
    "Dropdown": {
      "borderRadiusLG": 4
    },
      "Tabs": {
      "lineWidthBold": 4
    }
  }
})

export default config