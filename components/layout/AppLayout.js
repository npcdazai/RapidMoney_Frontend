'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/footer/footer';

export default function AppLayout({ children }) {
    const pathname = usePathname();

    // Add routes where footer should be hidden
    const noFooterRoutes = ['/apply'];

    const shouldHideFooter = noFooterRoutes.some((route) =>
        pathname.startsWith(route)
    );

    return (
        <>
            {children}
            {!shouldHideFooter && <Footer />}
        </>
    );
}
