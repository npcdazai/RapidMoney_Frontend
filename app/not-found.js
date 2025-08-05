import Custom404Page from "@/components/custom-not-found-page/Custom404Page";
import DynamicHead from "@/components/head/dynamicHead";

export default function NotFound() {
  return <>
    <DynamicHead />
    <Custom404Page />
  </>
}