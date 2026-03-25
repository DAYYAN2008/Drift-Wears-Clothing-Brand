import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;

  totalItems: () => number;
  totalPrice: () => number;
}

const key = (id: string, size: string, color: string) => `${id}__${size}__${color}`;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (incoming) => {
        set((state) => {
          const k = key(incoming.id, incoming.size, incoming.color);
          const existing = state.items.find(
            (i) => key(i.id, i.size, i.color) === k
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                key(i.id, i.size, i.color) === k
                  ? { ...i, quantity: i.quantity + (incoming.quantity ?? 1) }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { ...incoming, quantity: incoming.quantity ?? 1 }],
          };
        });
      },

      removeItem: (id, size, color) => {
        set((state) => ({
          items: state.items.filter(
            (i) => key(i.id, i.size, i.color) !== key(id, size, color)
          ),
        }));
      },

      updateQuantity: (id, size, color, quantity) => {
        if (quantity < 1) {
          get().removeItem(id, size, color);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            key(i.id, i.size, i.color) === key(id, size, color)
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: "drift-cart" }
  )
);
