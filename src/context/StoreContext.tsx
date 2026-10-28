import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialProducts, initialSettings, Category } from '../data/mockData';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice?: number;
  image: string;
  category: Category;
  availability: boolean;
  unit: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreSettings {
  storeName: string;
  whatsappNumber: string;
  logo: string;
  banner: string;
}

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  settings: StoreSettings;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    const storedProducts: Product[] = saved ? JSON.parse(saved) : [];
    
    // Merge initialProducts with storedProducts, prioritizing updated initialProducts
    const mergedProducts = [...initialProducts];
    storedProducts.forEach(stored => {
        if (!mergedProducts.find(p => p.id === stored.id)) {
            mergedProducts.push(stored);
        }
    });
    return mergedProducts;
  });
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [settings] = useState<StoreSettings>(initialSettings);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prev) => prev.map((item) => item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  return (
    <StoreContext.Provider value={{ products, cart, settings, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};
