import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart } = useStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.promoPrice || item.price) * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
      <div className="bg-white w-full md:w-96 h-[100dvh] flex flex-col shadow-2xl">
        {/* Header - Fixed Height */}
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900">Seu Carrinho</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 p-2"><X size={24} /></button>
        </div>
        
        {/* Scrollable Content - Flex-1 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
              <p className="text-gray-600 text-center py-10">Seu carrinho está vazio.</p>
          ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100 w-full">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-grow min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-700">R$ {(item.promoPrice || item.price).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"><Minus size={20}/></button>
                    <span className="font-bold text-gray-900 w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"><Plus size={20}/></button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2 hover:text-red-700 p-1"><Trash2 size={20}/></button>
                  </div>
                </div>
              ))
          )}
        </div>
        
        {/* Footer - Fixed Height */}
        <div className="border-t p-6 flex-shrink-0 bg-white">
            <div className="flex justify-between font-bold text-xl text-gray-900 mb-6">
                <span>Total:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <button 
              disabled={cart.length === 0}
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 disabled:bg-gray-300 transition-colors shadow-lg text-lg">
                Finalizar Pedido
            </button>
        </div>
        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      </div>
    </div>
  );
}
