import { Noto_Sans } from "next/font/google";
// import Header from "@/components/Header/Header";
import "./globals.scss";
import "./app.css"
// import { Menubar } from "@/components/Menubar/Menubar";
// import Footer from "@/components/Footer/Footer";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";
import theme from "@/config/theme.json"
import { UserProvider } from "@/contexts/user";
import Header from "@/components/head/head";
import Footer from "@/components/footer/footer";


const notoSans = Noto_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Event Booking Platform",
  description: "Book your favorite events with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${notoSans.className}`}
        >
          <AntdRegistry>
            <ConfigProvider theme={theme}>
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
