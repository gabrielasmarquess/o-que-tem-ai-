import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    promoPrice?: number;
    image: string;
    availability: boolean;
    unit: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 flex flex-col gap-2">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-500 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
        <div>
          {product.promoPrice ? (
            <div className="flex flex-col">
              <span className="text-gray-400 line-through text-sm">R$ {product.price.toFixed(2)}</span>
              <span className="text-orange-500 font-bold text-lg">R$ {product.promoPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-blue-900 font-bold text-lg">R$ {product.price.toFixed(2)}</span>
          )}
          <span className="text-xs text-gray-400">/{product.unit}</span>
        </div>
        <button
          onClick={() => addToCart(product as any)}
          disabled={!product.availability}
          className={`px-4 py-2 rounded-lg font-semibold ${product.availability ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          {product.availability ? 'Adicionar' : 'Indisponível'}
        </button>
      </div>
    </div>
  );
}
