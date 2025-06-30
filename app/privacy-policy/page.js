import Header from "@/components/head/head";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import homePageData from "@/json/homepage/home.json";
import privacyData from "@/json/privacy/privacy.json"


const header = homePageData.header;

export default function Home() {

  return (
    <>
      <Header data={header} />
      <PrivacyPolicy data={privacyData} />
    </>

  );
}
