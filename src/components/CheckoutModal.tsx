import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, MapPin } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, settings } = useStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    number: '',
    neighborhood: '',
    paymentMethod: 'Pix'
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.promoPrice || item.price) * item.quantity, 0);

  const generateWhatsAppMessage = () => {
    const items = cart.map(item => `${item.name} (${item.quantity} x R$ ${(item.promoPrice || item.price).toFixed(2)})`).join('\n');
    return `NOVO PEDIDO - ${settings.storeName}\n\n` +
      `DADOS DO CLIENTE\n` +
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n\n` +
      `ENDEREÇO\n` +
      `${formData.address}, ${formData.number}\n` +
      `${formData.neighborhood}\n\n` +
      `ITENS\n${items}\n\n` +
      `Total: R$ ${subtotal.toFixed(2)}\n` +
      `Pagamento: ${formData.paymentMethod}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full md:w-96 p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Finalizar Pedido</h2>
            <button onClick={onClose}><X /></button>
        </div>
        
        {step === 1 && (
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl text-gray-900">Dados de Entrega</h3>
                <input type="text" placeholder="Nome Completo" className="border-2 border-gray-300 p-3 rounded-lg w-full text-gray-900 placeholder-gray-500" onChange={e => setFormData({...formData, name: e.target.value})} />
                <input type="tel" placeholder="Telefone" className="border-2 border-gray-300 p-3 rounded-lg w-full text-gray-900 placeholder-gray-500" onChange={e => setFormData({...formData, phone: e.target.value})} />
                <input type="text" placeholder="Endereço" className="border-2 border-gray-300 p-3 rounded-lg w-full text-gray-900 placeholder-gray-500" onChange={e => setFormData({...formData, address: e.target.value})} />
                <input type="text" placeholder="Número" className="border-2 border-gray-300 p-3 rounded-lg w-full text-gray-900 placeholder-gray-500" onChange={e => setFormData({...formData, number: e.target.value})} />
                <input type="text" placeholder="Bairro" className="border-2 border-gray-300 p-3 rounded-lg w-full text-gray-900 placeholder-gray-500" onChange={e => setFormData({...formData, neighborhood: e.target.value})} />
                <div className="flex gap-3">
                    <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors">Continuar Comprando</button>
                    <button onClick={() => setStep(2)} className="flex-[2] bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">Continuar</button>
                </div>
            </div>
        )}

        {step === 2 && (
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl text-gray-900">Forma de Pagamento</h3>
                <select className="border-2 border-gray-300 p-3 rounded-lg w-full bg-white text-gray-900 text-lg" onChange={e => setFormData({...formData, paymentMethod: e.target.value})}>
                    <option value="Pix">Pix</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="Dinheiro">Dinheiro</option>
                </select>
                <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep(1)} className="flex-1 bg-gray-200 text-gray-900 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-300 transition-colors">Voltar</button>
                    <button 
                        onClick={() => window.open(`https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`, '_blank')}
                        className="flex-[2] bg-orange-500 text-white py-4 rounded-lg text-center font-bold text-base sm:text-lg hover:bg-orange-600 transition-colors shadow-lg">
                        Enviar Pedido
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
