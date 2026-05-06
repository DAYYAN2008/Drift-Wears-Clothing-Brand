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
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  // ── Tracksuits ──────────────────────────────────────────────────────────────
  {
    id: "dw-001",
    name: "Aura Heavyweight Tracksuit",
    category: "Tracksuits",
    price: 285,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Obsidian", "Ash Grey", "Bone"],
    isNew: true,
    isBestseller: false,
  },
  {
    id: "dw-002",
    name: "Nocturne Slim Tracksuit",
    category: "Tracksuits",
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Jet Black", "Slate"],
    isNew: false,
    isBestseller: true,
  },
  {
    id: "dw-003",
    name: "Phantom Zip-Through Set",
    category: "Tracksuits",
    price: 295,
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Carbon", "Washed Black", "Cream"],
    isNew: true,
    isBestseller: false,
  },
  {
    id: "dw-004",
    name: "Void Relaxed Tracksuit",
    category: "Tracksuits",
    price: 260,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Stone", "Matte Black"],
    isNew: false,
    isBestseller: true,
  },

  // ── Trousers ─────────────────────────────────────────────────────────────────
  {
    id: "dw-005",
    name: "Vanguard Cargo Trousers",
    category: "Trousers",
    price: 175,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Olive", "Black", "Sand"],
    isNew: false,
    isBestseller: true,
  },
  {
    id: "dw-006",
    name: "Cipher Tapered Joggers",
    category: "Trousers",
    price: 145,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Heather Black", "Charcoal", "Oatmeal"],
    isNew: true,
    isBestseller: false,
  },
  {
    id: "dw-007",
    name: "Grid Techwear Trousers",
    category: "Trousers",
    price: 210,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["28", "30", "32", "34"],
    colors: ["Matte Black", "Deep Navy"],
    isNew: true,
    isBestseller: false,
  },
  {
    id: "dw-008",
    name: "Meridian Wide-Leg Trousers",
    category: "Trousers",
    price: 190,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Ecru", "Black", "Slate"],
    isNew: false,
    isBestseller: true,
  },

  // ── Shirts ───────────────────────────────────────────────────────────────────
  {
    id: "dw-009",
    name: "Solace Oversized Tee",
    category: "Shirts",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Obsidian", "Washed Grey"],
    isNew: true,
    isBestseller: true,
  },
  {
    id: "dw-010",
    name: "Luxe Boxy Fit Shirt",
    category: "Shirts",
    price: 130,
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Black", "Sage"],
    isNew: false,
    isBestseller: false,
  },
  {
    id: "dw-011",
    name: "Emblem Premium Cotton Tee",
    category: "Shirts",
    price: 110,
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Bone", "Carbon", "Washed Black"],
    isNew: false,
    isBestseller: true,
  },
  {
    id: "dw-012",
    name: "Stratum Dropped-Shoulder Shirt",
    category: "Shirts",
    price: 155,
    images: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=600&h=800",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=600&h=800",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off-White", "Charcoal", "Sand"],
    isNew: true,
    isBestseller: false,
  },
];
