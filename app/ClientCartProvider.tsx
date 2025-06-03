'use client';

import { CartProvider } from 'react-use-cart';

export default function ClientCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
