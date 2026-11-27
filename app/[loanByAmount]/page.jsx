
import React, { Suspense } from "react";
import { notFound } from "next/navigation";

import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import Breadcrumb from "@/components/BreadCrumb";

import LoanByAmountPage from "@/components/loan-by-amount/LoanByAmountPage";

import { loanByAmountPages } from "@/constants/loanByAmountPages";
import { buildLoanMetadata } from "@/components/loan-landing/buildLoanMetadata";

export function generateStaticParams() {
    return loanByAmountPages.map((page) => ({
        loanByAmount: page.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { loanByAmount } = await params;

    const page = loanByAmountPages.find(
        (item) => item.slug === loanByAmount
    );

    if (!page) {
        return {};
    }

    return buildLoanMetadata(page);
}

export default async function LoanByAmountRoute({ params }) {
    const { loanByAmount } = await params;

    const page = loanByAmountPages.find(
        (item) => item.slug === loanByAmount
    );

    if (!page) {
        notFound();
    }

    return (
        <Suspense fallback={<Loading />}>
            <DynamicHead />
            <Breadcrumb />
            <LoanByAmountPage page={page} />
        </Suspense>
    );
}
