import { defineStore } from "pinia";
import { ref } from "vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNuxtApp } from "#app";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as { email: string; name: string } | null, // Kullanıcı bilgisi
  }),
  actions: {
    login(user: { email: string; name: string }) {
      this.user = user; // Kullanıcı bilgilerini kaydet
    },
    logout() {
      this.user = null; // Kullanıcıyı çıkış yaptır
    },
    async loginUser(email: string, password: string) {
      const { $db } = useNuxtApp(); // Firestore erişimi
      const q = query(
        collection($db, "uyeler"),
        where("email", "==", email),
        where("sifre", "==", password)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        return userData; // Kullanıcı verisi
      }

      return null; // Kullanıcı bulunamadı
    },
  },
});
