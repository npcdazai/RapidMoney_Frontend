"use client";

import Loading from '@/app/loading';
import dynamic from 'next/dynamic';


const PromoSection = dynamic(() => import('./promoSection'), {
  ssr: false,
  loading: () => <Loading />
});

export default PromoSection;

