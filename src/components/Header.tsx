import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingCart, Search, MessageCircle } from 'lucide-react';
import CartModal from './CartModal';

export default function Header() {
  const { settings, cart } = useStore();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={settings.logo} alt={settings.storeName} className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-1" />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">{settings.storeName}</h1>
            <p className="text-xs sm:text-sm text-orange-200">Seu mercadinho, pertinho de você!</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
            <a href={`https://wa.me/${settings.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 sm:gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm">
                <MessageCircle size={18} />
                <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <div className="relative cursor-pointer p-2" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart size={24} className="text-white"/>
                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {cartCount}
                    </span>
                )}
            </div>
        </div>
      </div>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="container mx-auto mt-4">
          <div className="relative">
              <input type="text" placeholder="Pesquisar produtos..." className="w-full p-2 pl-10 rounded-lg text-black bg-white"/>
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
      </div>
    </header>
  );
}
