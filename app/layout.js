import { Noto_Sans } from "next/font/google";
// import Header from "@/components/Header/Header";
import "./globals.scss";
import "./app.css";
import "animate.css";
// import { Menubar } from "@/components/Menubar/Menubar";
// import Footer from "@/components/Footer/Footer";
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import config from "@/config/theme";
import { UserProvider } from "@/contexts/user";
import Header from "@/components/head/head";
import Footer from "@/components/footer/footer";
import AppLayout from "@/components/layout/AppLayout";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import StickyApplyStrip from "@/components/StickyApplyStrip";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

// The root layout renders <Footer />, and every page renders <DynamicHead />,
// both of which fetch CMS content with `cache: "no-store"`. Nothing under this
// layout can be prerendered, so opt every route out of static generation.
export const dynamic = "force-dynamic";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("admin")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://www.rapidmoney.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rapid-Money",
  description:
    "Rapid-Money is a fast, secure, and reliable digital loan platform that helps you get personal and business loans with minimal documentation and instant approvals. Trusted by thousands for hassle-free financing.",
};

export default function RootLayout({ children }) {
  const antdConfig = config(notoSans.style.fontFamily);
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WHBJC2L2');`,
          }}
        />
      </head>
      <body className={`${notoSans.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHBJC2L2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTC8M3645P"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GTC8M3645P');`}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tx6a4smv3h");`}
        </Script>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1387501912545283');
    fbq('track', 'PageView');
  `}
        </Script>
        <UserProvider>
          <AntdRegistry>
            <ConfigProvider theme={antdConfig}>
              {/* <Header /> */}
              {/* <main className="min-h-[200px] py-8"> */}
              {children}
              <ScrollToTop />
              <StickyApplyStrip />
              {/* </main> */}
              <Footer />
              {/* <AppLayout>
                {children}
              </AppLayout> */}
            </ConfigProvider>
          </AntdRegistry>
        </UserProvider>
      </body>
    </html>
  );
}
