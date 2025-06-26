import Header from "@/components/head/head";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import TermCondition from "@/components/term-conditions/TermCondition";

import homePageData from "@/json/homepage/home.json";


const header = homePageData.header;

export default function Home() {

  return (
    <>
          <Header isDark={true} data={header} />
          <TermCondition />
    </>

  );
}
