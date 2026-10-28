import { useStore } from '../context/StoreContext';
import ProductCard from './ProductCard';
import { useState } from 'react';

export default function ProductCatalog() {
  const { products } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
        <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === null ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}
        >
            Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === cat ? 'bg-blue-900 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
