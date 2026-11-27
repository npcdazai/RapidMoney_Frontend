
import LoanLandingPage from "@/components/loan-landing/LoanLandingPage";
import RelatedAmountLoans from "./RelatedAmountLoans";

export default function LoanByAmountPage({ page }) {
    if (!page) return null;

    return (
        <>
            <LoanLandingPage page={page} isAmountPage={true} />

            <div className="container mx-auto px-4 max-w-5xl">
                <RelatedAmountLoans currentSlug={page.slug} />
            </div>
        </>
    );
}
