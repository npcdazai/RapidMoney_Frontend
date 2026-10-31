import defaultSEO from "@/constants/defaultSEO";

export function buildLoanMetadata(page) {
  const canonicalUrl = "https://www.rapidmoney.in" + page.path;

  return {
    metadataBase: new URL("https://www.rapidmoney.in"),
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: defaultSEO.defaultSiteName,
      locale: defaultSEO.defaultLocale,
      type: defaultSEO.defaultType,
      images: [
        {
          url: "/images/rapidmoney-logo.png",
          alt: page.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/images/rapidmoney-logo.png"],
    },
  };
}

