'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';

export function ConditionalHeader() {
  const pathname = usePathname();
  const isWorkPage = pathname.startsWith('/work');

  if (isWorkPage) {
    return null;
  }

  return <Header />;
}
