const amounts = Array.from({ length: 16 }, (_, index) => 5000 + index * 1000);

const formatAmount = (amount) =>
    `₹${amount.toLocaleString("en-IN")}`;

const getSections = (amount, formattedAmount) => [
    {
        heading: `What Is a ${formattedAmount} Personal Loan?`,
        content: [
            {
                p: `A ${formattedAmount} personal loan is a small-ticket unsecured loan that borrowers can use to manage short-term financial requirements. It can assist with unforeseen costs, so you don’t have to break into all your savings at once.`,
            },
            {
                h3: `A ${formattedAmount} personal loan online may be useful for:`,
            },
            {
                ul: [
                    "Medical bills and healthcare expenses",
                    "Emergency household expenses",
                    "Grocery and utility payments",
                    "Travel and transportation",
                    "Education-related expenses",
                    "Mobile phone or appliance repairs",
                    "Expenses before your next salary",
                    "Other urgent financial requirements",
                ],
            },
        ],
    },
    {
        heading: `Features and Benefits of a ${formattedAmount} Personal Loan`,
        content: [
            {
                p: `A small personal loan helps you meet a specific financial requirement without having to borrow more than you actually need.`,
            },
            {
                h3: "Key features",
            },
            {
                ul: [
                    `Small loan amount: Explore loan options for a specific requirement of ${formattedAmount}`,
                    "Online application: Submit your application through a digital platform.",
                    "Convenient access: Apply using a smartphone or computer.",
                    "Flexible repayment options: Repayment tenure depends on the lending partner.",
                    "No collateral requirement: Unlike secured loans, personal loans normally don’t require you to put up assets as collateral.",
                    "Digital verification: Complete verification online, subject to lender requirements.",
                    "Transparent terms: Review the interest rates, processing fees and payback plans and costs that apply before you accept an offer.",
                ],
            },
        ],
    },
    {
        heading: `Why Consider a ${formattedAmount} Loan?`,
        content: [
            {
                ul: [
                    "Handle unforeseen spending without falling behind on important bills.",
                    "For a specific financial need, choose a lower amount.",
                    "Explore digital loan application options.",
                    "Before you decide to borrow, compare repayment choices.",
                ],
                link: {
                    text: "digital loan application",
                    href: "https://play.google.com/store/apps/details?id=com.rapid_money&hl=en_IN",
                },
            },
        ],
    },
    {
        heading: `Why Choose RapidMoney for a ${formattedAmount} Personal Loan?`,
        content: [
            {
                p: `RapidMoney is a digital lending platform that connects borrowers with lending partners to explore instant personal loan options.`,
                link: {
                    text: `instant personal loan`,
                    href: "/instant-personal-loan",
                },
            },
            {
                h3: "Why Borrowers Prefer RapidMoney",
            },
            {
                ul: [
                    "100% Online Application: Apply for a personal loan using a simple digital application process.",
                    "Easy Accessibility: Access the platform conveniently through your smartphone or computer.",
                    "Multiple Lending Partners: Explore loan options from registered lending partners based on your eligibility and financial profile.",
                    "Digital Verification: Complete the required online application processes and verification stages.",
                    "Transparent Loan Details: Review applicable interest rates, repayment tenure, loan amounts, fees, and charges before proceeding.",
                    "Hassle-Free Process: Explore loan options without the need to visit multiple physical branches.",
                    "Quick Application Process: Submit your details online and get updates on your application status on the digital platform.",
                ],
            },
        ],
    },
    {
        heading: `How to Apply for a ${formattedAmount} Personal Loan?`,
        content: [
            {
                p: `You can explore the application process for a ${formattedAmount} personal loan online. The steps may vary depending on the lender and the loan option available to you.`,
            },
            {
                ul: [
                    "Step 1: Visit RapidMoney – Open the website or application and begin your application.",
                    "Step 2: Enter your details – Provide the required personal, contact, and financial information.",
                    "Step 3: Complete verification – Submit the required documents and information for verification.",
                    "Step 4: Explore loan options – See what offers are available from lending partners depending on your eligibility.",
                    "Step 5: Review the loan offer – Understand the interest rate, EMI, tenure, processing fee, and total repayment amount.",
                    "Step 6: Accept the offer – Proceed only after reviewing the loan agreement.",
                    "Step 7: Disbursal – Once all the requisite requirements are completed, the lending partner can disburse the approved loan amount.",
                ],
            },
        ],
    },
    {
        heading: `${formattedAmount} Personal Loan EMI Calculator`,
        content: [
            {
                p: `A personal loan EMI calculator allows you to calculate your monthly payments amount before applying for a personal loan.`,
                link: {
                    text: `A personal loan EMI calculator`,
                    href: "/personal-loan-emi-calculator",
                },
            },
            {
                p: `Your EMI depends on:`,
            },
            {
                ul: [
                    "Loan amount",
                    "Annual interest rate",
                    "Repayment tenure",
                ],
            },
        ],
        calculatorAfter: true,
    },
    {
        heading: `Eligibility Criteria ${formattedAmount} Personal Loan`,
        content: [
            {
                p: `Depending on your financial history and the lending partner's policies, you may be eligible for a personal loan of ${formattedAmount}.`,
            },
            {
                p: `Applicants may generally need to:`,
            },
            {
                ul: [
                    "Be an Indian citizen.",
                    "Age: 22 years and above",
                    "Have a valid PAN card",
                    "Regular salary credit to bank account",
                    "Meet applicable income requirements",
                    "Credit Score : A credit score of 650 or above",
                    "For Terms Loans only",
                ],
            },
        ],
    },
    {
        heading: `Documents Required for a ${formattedAmount} Personal Loan`,
        content: [
            {
                p: "Depending on the lending partner's requirements, applicants may need:",
            },
            {
                ul: [
                    "PAN card",
                    "Aadhaar or other accepted identity verification",
                    "Bank account details",
                    "Income or employment information, if required",
                ],
            },
        ],
    },
    {
        heading: `Things to Consider Before Applying for an Urgent ${formattedAmount} Loan`,
        content: [
            {
                p: `Before applying for a ${formattedAmount} loan, consider the following:`,
            },
            {
                ul: [
                    "Borrow responsibly: Apply only for the amount you need.",
                    "Check the APR: Understand the total annual borrowing cost.",
                    "Calculate your EMI: Keep your repayments affordable on a monthly basis.",
                    "Review the tenure: Understand when your repayments are due.",
                    "Check processing fees: Consider applicable fees and taxes.",
                    "Read the loan agreement: Review all terms and conditions carefully.",
                    "Understand late payment charges: Check penalties for missed or delayed payments.",
                    "Evaluate your repayment capacity: Only take a loan if you can pay it back without financial difficulty.",
                ],
            },
        ],
    },
];

const getFaqs = (formattedAmount) => [
    {
        q: `Can I get a ${formattedAmount} personal loan online?`,
        a: `Yes, you can get a personal loan of ${formattedAmount} online via digital lending platforms. Your approval will depend on the lending partner’s eligibility requirements and how they verify and evaluate your application.`,
    },
    {
        q: `How can I get an urgent ${formattedAmount} loan?`,
        a: `Apply online with RapidMoney and check out lending possibilities for urgent cash requirements. You will need to provide the needed information and finish the verification process. The lending partner determines approval and disbursal dates.`,
    },
    {
        q: `What is the EMI for a ${formattedAmount} personal loan?`,
        a: `The EMI depends on the interest rate and repayment tenure. Use the EMI calculator on the page to estimate your monthly instalment before applying.`,
    },
    {
        q: `Can I get a ${formattedAmount} loan without collateral?`,
        a: `Personal loans are usually unsecured and don’t require collateral. But the lending partner might look at your income, credit record and ability to repay the loan before sanctioning your application.`,
    },
    {
        q: `Can I get a ${formattedAmount} loan with a low CIBIL score?`,
        a: `A low credit score can impact your loan eligibility, interest rate and loan possibilities. Lending partners might also look at other things, like income, repayment history, and current financial responsibilities.`,
    },
    {
        q: `How quickly can a ${formattedAmount} personal loan be disbursed?`,
        a: `The disbursal period depends on the processing, verification, approval and completion of relevant procedures by the loan partner. Instant approval/disbursal is not guaranteed.`,
    },
    {
        q: `What documents are required for a ${formattedAmount} personal loan?`,
        a: `The lender may ask for identity details, address proof, PAN details, bank account information, and income or employment information. Exact requirements vary by lender.`,
    },
    {
        q: `Can I repay my ${formattedAmount} loan early?`,
        a: `Depending on the terms and conditions of your loan partner, you may be able to repay early. Check your loan contract for any applicable foreclosure conditions or penalties.`,
    },
    {
        q: `Is a ${formattedAmount} personal loan safe?`,
        a: `Before you take a loan, check out the details of the lending partner. Read the loan agreement, understand the interest rate and charges and ensure that you will be able to pay the amount on time.`,
    },
    {
        q: `Can I apply for a ${formattedAmount} loan if I am salaried?`,
        a: `Salaried individuals can explore Personal Loan options, based on the qualifying criteria, income, credit evaluation and verification process of the lending partner.`,
    },
];

export const loanByAmountPages = amounts.map((amount) => {
    const formattedAmount = formatAmount(amount);

    return {
        amount,
        slug: `${amount}-instant-personal-loan`,
        path: `/${amount}-instant-personal-loan`,

        metaTitle: `${formattedAmount} Instant Personal Loan Online – Apply Now | RapidMoney`,

        metaDescription: `Apply for a ${formattedAmount} personal loan online through RapidMoney. Explore loan options, eligibility, EMI, repayment terms and documents required.`,

        h1: `Get ${formattedAmount} Instant Personal Loan Online`,

        intro: [
            {
                text: `Get a ${formattedAmount} personal loan online to manage unexpected expenses, medical bills, travel costs, or urgent financial needs. Apply through Rapidmoney loan app and get funds instantly.`,
                link: {
                    text: "Rapidmoney",
                    href: "/",
                },
            },
            {
                ul: [
                    "Simple online loan application process",
                    "No collateral required",
                    "Quick digital processing and verification",
                ],
            },
        ],

        sections: getSections(amount, formattedAmount),

        calculatorHeading: `${formattedAmount} Personal Loan EMI Calculator`,

        faqHeading: `Frequently Asked Questions About ${formattedAmount} Personal Loans`,

        faqs: getFaqs(formattedAmount),
    };
});