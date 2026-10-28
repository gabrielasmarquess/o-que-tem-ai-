export type Category = 'Mercearia' | 'Bebidas' | 'Doces e chocolates' | 'Biscoitos e salgadinhos' | 'Higiene pessoal' | 'Limpeza' | 'Utilidades' | 'Hortifruti' | 'Frios e laticínios' | 'Ofertas';

export const initialCategories: Category[] = [
  'Mercearia', 'Bebidas', 'Doces e chocolates', 'Biscoitos e salgadinhos', 
  'Higiene pessoal', 'Limpeza', 'Utilidades', 'Hortifruti', 'Frios e laticínios', 'Ofertas'
];

export const initialProducts = [
  {
    id: '3',
    name: 'Tekitos',
    description: '1kg',
    price: 23.74,
    image: 'https://tse4.mm.bing.net/th/id/OIP.h0MCQkApU260hui9XzS5EQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Frios e laticínios',
    availability: true,
    unit: 'pacote 1kg'
  },
  {
    id: '4',
    name: 'Batata Congelada',
    description: 'Pacote de 1,5kg',
    price: 19.78,
    image: 'https://static.wixstatic.com/media/0d2428_a6eda572562643fc8840923cefa1d55e~mv2.webp/v1/fill/w_980,h_1252,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mockup_Ok%20Fries%201%2C5kg.webp',
    category: 'Frios e laticínios',
    availability: true,
    unit: 'pacote 1,5kg'
  },
  {
    id: '5',
    name: 'Margarina com sal',
    description: '500g',
    price: 7.90,
    image: 'https://ccndistribuidora.vtexassets.com/arquivos/ids/160889/MARGARINA-CREMOSY-50--COM-SAL-500G-%C2%BB.jpg?v=638201274723830000',
    category: 'Frios e laticínios',
    availability: true,
    unit: 'unidade'
  },
  {
    id: '6',
    name: 'Queijo Mussarela Fatiado Kollac',
    description: '160g',
    price: 12.52,
    image: 'https://tse2.mm.bing.net/th/id/OIP.uoJqBC2wia8YLSjx-RkliQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Frios e laticínios',
    availability: true,
    unit: '160g'
  },
  {
    id: '7',
    name: 'Requeijão Cremoso ou Light',
    description: '200g (Deixe na observação o tipo desejado)',
    price: 10.54,
    image: 'https://tse4.mm.bing.net/th/id/OIP.CwVktPc-CmdC1K6iQxs8MwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Frios e laticínios',
    availability: true,
    unit: '200g'
  },
  {
    id: '8',
    name: 'Filé de peito de frango moído',
    description: '400g',
    price: 11.84,
    image: 'https://th.bing.com/th/id/R.8d11d2938a41672a41d95b5dca3321ed?rik=f7fWT4EIdIykZQ&pid=ImgRaw&r=0',
    category: 'Frios e laticínios',
    availability: true,
    unit: '400g'
  },
  {
    id: '9',
    name: 'Coxa e sobrecoxa passarinho congelada',
    description: '800g',
    price: 13.15,
    image: 'https://www.copacol.com.br/administrativo/thumbnail/resize/500/Produto/_rgb_pacote_coxa_sobrecoxa_passarinho_iqf_1609788730600.png',
    category: 'Hortifruti',
    availability: true,
    unit: '800g'
  },
  {
    id: '10',
    name: 'Coxinha da asa',
    description: '2kg',
    price: 29.99,
    image: 'https://tse1.mm.bing.net/th/id/OIP.kjoFoaMyksEMGmuGHRglIwHaH0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Hortifruti',
    availability: true,
    unit: '2kg'
  },
  {
    id: '1',
    name: 'Coca Cola',
    description: '2L',
    price: 17.00,
    image: 'https://tse3.mm.bing.net/th/id/OIP.7xWjCo_0VPxhdhBequ-muAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Bebidas',
    availability: true,
    unit: '2L'
  },
  {
    id: '11',
    name: 'Lasanha Copacol',
    description: '600g (Sabor variado - deixe preferência na observação)',
    price: 13.84,
    image: 'https://th.bing.com/th/id/R.91851cfb5bf348796f4b15c9bd5d769a?rik=WL7G9MvUvg157Q&pid=ImgRaw&r=0',
    category: 'Frios e laticínios',
    availability: true,
    unit: '600g'
  },
  {
    id: '12',
    name: 'Café Melitta',
    description: '500g',
    price: 32.85,
    image: 'https://images.tcdn.com.br/img/img_prod/1023690/cafe_melitta_tradicional_a_vacuo_500gr_1169_1_0e62fbd7d9aa497161c40f4ed7f2503c.jpg',
    category: 'Mercearia',
    availability: true,
    unit: '500g'
  },
  {
    id: '13',
    name: 'Água Sanitária Ypê',
    description: '1 Litro',
    price: 6.58,
    image: 'https://tse4.mm.bing.net/th/id/OIP.YiRhCPv2bQv_-UU-RD_ZfQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Limpeza',
    availability: true,
    unit: 'Litro'
  },
  {
    id: '14',
    name: 'Detergente Ypê',
    description: '500ml',
    price: 4.58,
    image: 'https://beagaembalagem.com.br/wp-content/uploads/2014/09/detergente-ype-500-ml.jpg',
    category: 'Limpeza',
    availability: true,
    unit: '500ml'
  },
  {
    id: '15',
    name: 'Pão de forma',
    description: '400g',
    price: 10.08,
    image: 'https://tse4.mm.bing.net/th/id/OIP.HuZzkEmZFUhDWzryMGaYqgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'Mercearia',
    availability: true,
    unit: '400g'
  },
  {
    id: '16',
    name: 'Caixa de bombom Garoto',
    description: '220g',
    price: 19.08,
    image: 'https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/c/a/caixa-de-bombom-garoto-sortidos_1242139.jpg',
    category: 'Doces e chocolates',
    availability: true,
    unit: '220g'
  }
];

export const initialSettings = {
  storeName: 'O Que Tinha Market',
  whatsappNumber: '595994388524',
  logo: '/assets/aistudio/O_Que_Tinha_Market___Logo_Minimalista_4c09a3ea.png',
  banner: 'https://images.unsplash.com/photo-1578916171728-360742d17c0a?q=80&w=1200&auto=format&fit=crop'
};
