import React from 'react';
import PromoSection from '@/components/promo-section/promoWrapper';
import DynamicHead from '@/components/head/dynamicHead';

export default function BlogsLayout({ children }) {


    return (
        <>
            <DynamicHead />
            {children}
            <PromoSection />
        </>
    );
}
