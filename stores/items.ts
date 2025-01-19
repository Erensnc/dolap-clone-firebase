import { defineStore } from "pinia";
import { ref } from "vue";
import { collection, query, getDocs } from "firebase/firestore";
import { useNuxtApp } from "#app";

export const useItems2Store = defineStore("items2", () => {
  const items2 = ref([]); // Firebase'den çekilecek veriler burada tutulur

  const { $db } = useNuxtApp(); // NuxtApp bağlamından Firestore erişimi

  // Firestore'dan veri çekme işlevi
  const fetchItems = async () => {
    try {
      const q = query(collection($db, "dolap")); // Firestore koleksiyonu
      const querySnapshot = await getDocs(q);

      items2.value = []; // Önce eski verileri temizle
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        const { avatar, fiyat, id, info, rate, satici, source } = data;
        items2.value.push({
          id: docSnap.id || id,
          avatar,
          satici,
          rate,
          source,
          info,
          fiyat,
        });
      });
    } catch (error) {
      console.error("Error fetching items2:", error);
    }
  };

  return {
    items2,
    fetchItems,
  };
});
