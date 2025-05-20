import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const cartStore = (set) => ({
  cart: [],
  addCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
});

export const useCartStore = create(
  devtools(
    persist(cartStore, {
      name: "cart-storage",
    })
  )
);
