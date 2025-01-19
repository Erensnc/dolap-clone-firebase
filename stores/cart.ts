import { defineStore } from 'pinia';

interface CartItem {
  avatar: string;
  fiyat: number;
  id: string;
  info: string;
  rate: string;
  satici: string;
  source: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  shippingFee: number;
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    shippingFee: 49.9,
  }),
  getters: {
    // Sepet toplamını hesaplar
    cartTotal(state): number {
      return state.items.reduce((total, item) => total + item.fiyat * item.quantity, 0);
    },
    // Genel toplamı hesaplar (kargo ücreti dahil)
    grandTotal(state): number {
      return state.items.reduce((total, item) => total + item.fiyat * item.quantity, 0) + state.shippingFee;
    },
  },
  actions: {
    // Ürün sepete eklenir
    addToCart(item: CartItem) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    // Ürün miktarını azaltır
    decreaseQuantity(item: CartItem) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        this.items = this.items.filter((i) => i.id !== item.id);
      }
    },
    // Ürün miktarını arttırır
    increaseQuantity(item: CartItem) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    // Sepeti temizler
    clearCart() {
      this.items = [];
    },
  },
});
