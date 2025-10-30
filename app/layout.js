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

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Rapid-Money",
  description:
    "Rapid-Money is a fast, secure, and reliable digital loan platform that helps you get personal and business loans with minimal documentation and instant approvals. Trusted by thousands for hassle-free financing.",
};

export default function RootLayout({ children }) {
  const antdConfig = config(notoSans.style.fontFamily);
  return (
    <html lang="en">
      {/* <head> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GTC8M3645P"
        strategy="beforeInteractive"
      />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GTC8M3645P');`}
      </Script>
      <Script id="ms-clarity" strategy="beforeInteractive">
        {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tx6a4smv3h");`}
      </Script>
      {/* </head> */}
      <body className={`${notoSans.className}`}>
        <UserProvider>
          <AntdRegistry>
            <ConfigProvider theme={antdConfig}>
              {/* <Header /> */}
              {/* <main className="min-h-[200px] py-8"> */}
              {children}
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
