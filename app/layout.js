import { Noto_Sans } from "next/font/google";
// import Header from "@/components/Header/Header";
import "./globals.scss"
import "./app.css"
// import { Menubar } from "@/components/Menubar/Menubar";
// import Footer from "@/components/Footer/Footer";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";
import config from "@/config/theme"
import { UserProvider } from "@/contexts/user";
import Header from "@/components/head/head";
import Footer from "@/components/footer/footer";

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
      <UserProvider>
        <body
          className={`${notoSans.className}`}
        >
          <AntdRegistry>
            <ConfigProvider theme={antdConfig}>
              {/* <Header /> */}
          {/* <main className="min-h-[200px] py-8"> */}
                {children}
              {/* </main> */}
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </body>
      </UserProvider>
    </html>
  );
}
