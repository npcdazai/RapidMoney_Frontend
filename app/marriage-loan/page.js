import React, { Suspense } from "react";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import Breadcrumb from "@/components/BreadCrumb";
import LoanLandingPage from "@/components/loan-landing/LoanLandingPage";
import { buildLoanMetadata } from "@/components/loan-landing/buildLoanMetadata";
import { loanLandingPages } from "@/constants/loanLandingPages";

const page = loanLandingPages.find((p) => p.slug === "marriage-loan");

export const metadata = buildLoanMetadata(page);

export default function MarriageLoanPage() {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicHead />
      <Breadcrumb />
      <LoanLandingPage page={page} />
    </Suspense>
  );
}

