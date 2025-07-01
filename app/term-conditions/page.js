import Header from "@/components/head/head";
import TermCondition from "@/components/term-conditions/TermCondition";
import termJson from "@/json/termConditions/term.json"

import homePageData from "@/json/homepage/home.json";


const header = homePageData.header;

export default function Home() {

  return (
    <>
          <Header data={header} />
          <TermCondition data={termJson}/>
    </>

  );
}
