export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  images: string[];
  sizes: string[];
  colors: string[];
  tags: string[];
}

export const products: Product[] = [
  // TRACKSUITS (4 products)
  {
    id: "1",
    name: "Essential Zip Tracksuit",
    category: "tracksuits",
    price: 4999,
    originalPrice: 6500,
    tags: ["bestseller", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#374151", "#1e3a5f"],
    images: ["/images/products/tracksuits/Pic-1.0.png", "/images/products/tracksuits/Pic-1.1.png"],
  },
  {
    id: "2",
    name: "Minimal Slim Tracksuit",
    category: "tracksuits",
    price: 5499,
    originalPrice: null,
    tags: ["new"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#111827", "#6b7280"],
    images: ["/images/products/tracksuits/Pic-1.1.png", "/images/products/tracksuits/Pic-1.0.png"],
  },
  {
    id: "3",
    name: "Urban Fleece Co-ord",
    category: "tracksuits",
    price: 5999,
    originalPrice: 7999,
    tags: ["sale"],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["#0f172a", "#1e293b"],
    images: ["/images/products/tracksuits/Pic-1.0.png", "/images/products/tracksuits/Pic-1.1.png"],
  },
  {
    id: "4",
    name: "Classic Jogger Set",
    category: "tracksuits",
    price: 3999,
    originalPrice: null,
    tags: [],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#374151", "#9ca3af"],
    images: ["/images/products/tracksuits/Pic-1.1.png", "/images/products/tracksuits/Pic-1.0.png"],
  },

  // TROUSERS (4 products)
  {
    id: "5",
    name: "Slim Chino Trouser",
    category: "trousers",
    price: 2499,
    originalPrice: null,
    tags: ["bestseller"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["#d4b896", "#374151", "#1a1a1a"],
    images: ["/images/products/trousers/Pic-1.0.png", "/images/products/trousers/Pic-1.1.png"],
  },
  {
    id: "6",
    name: "Cargo Combat Trouser",
    category: "trousers",
    price: 2999,
    originalPrice: 3999,
    tags: ["sale"],
    sizes: ["30", "32", "34", "36"],
    colors: ["#374151", "#1a1a1a", "#4a5568"],
    images: ["/images/products/trousers/Pic-2.0.png", "/images/products/trousers/Pic-2.1.png"],
  },
  {
    id: "7",
    name: "Tailored Straight Trouser",
    category: "trousers",
    price: 3499,
    originalPrice: null,
    tags: ["new"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["#1a1a1a", "#2d3748"],
    images: ["/images/products/trousers/Pic-1.0.png", "/images/products/trousers/Pic-1.1.png"],
  },
  {
    id: "8",
    name: "Relaxed Linen Trouser",
    category: "trousers",
    price: 2799,
    originalPrice: null,
    tags: [],
    sizes: ["30", "32", "34", "36"],
    colors: ["#f5f0e8", "#d4b896", "#9ca3af"],
    images: ["/images/products/trousers/Pic-2.0.png", "/images/products/trousers/Pic-2.1.png"],
  },

  // SHIRTS (4 products)
  {
    id: "9",
    name: "Oversized Drop Shoulder Shirt",
    category: "shirts",
    price: 1999,
    originalPrice: null,
    tags: ["bestseller", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1a1a1a", "#374151"],
    images: ["/images/products/shirts/Pic-1.0.png", "/images/products/shirts/Pic-1.1.png"],
  },
  {
    id: "10",
    name: "Premium Oxford Shirt",
    category: "shirts",
    price: 2499,
    originalPrice: 3200,
    tags: ["sale"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1e3a5f", "#ffffff", "#e2e8f0"],
    images: ["/images/products/shirts/Pic-1.1.png", "/images/products/shirts/Pic-1.0.png"],
  },
  {
    id: "11",
    name: "Slim Fit Formal Shirt",
    category: "shirts",
    price: 1799,
    originalPrice: null,
    tags: [],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#1e3a5f", "#ffffff"],
    images: ["/images/products/shirts/Pic-1.0.png", "/images/products/shirts/Pic-1.1.png"],
  },
  {
    id: "12",
    name: "Casual Linen Shirt",
    category: "shirts",
    price: 2199,
    originalPrice: null,
    tags: ["new"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#f5f0e8", "#9ca3af", "#374151"],
    images: ["/images/products/shirts/Pic-1.1.png", "/images/products/shirts/Pic-1.0.png"],
  },
];
