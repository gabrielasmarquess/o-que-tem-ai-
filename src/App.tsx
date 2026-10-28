/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StoreProvider } from './context/StoreContext';
import Header from './components/Header';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="bg-orange-500 text-white text-center py-2 px-4 font-bold text-sm">
          ⚠️ Promoção válida até 28/10/2026 às 16h ou enquanto durar o estoque! Delivery amanhã a partir das 18h.
        </div>
        <main>
          <ProductCatalog />
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
