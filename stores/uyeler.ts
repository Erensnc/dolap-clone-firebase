import { defineStore } from "pinia";
import { ref } from "vue";
import {
  collection,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNuxtApp } from "#app";

export const useUyelerStore = defineStore("uyeler", () => {
  const uyeler = ref([]); // Üyeler listesi
  const { $db } = useNuxtApp(); // Firestore erişimi

  // Üyeleri yükleme
  const loadUyeler = async () => {
    uyeler.value = [];
    const q = query(collection($db, "uyeler"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const { email, isim, telefon, yas } = data;
      uyeler.value.push({ id: docSnap.id, email, isim, telefon, yas });
    });
  };

  // Üye ekleme
  const addUye = async (uye) => {
    const docRef = await addDoc(collection($db, "uyeler"), uye);
    uye.id = docRef.id;
    uyeler.value.push(uye);
  };

  // Üye silme
  const deleteUyeler = async () => {
    const qSnap = await getDocs(collection($db, "uyeler"));
    const promises = [];
    qSnap.forEach((docSnap) => {
      promises.push(deleteDoc(docSnap.ref));
    });
    await Promise.all(promises);
    uyeler.value = [];
  };

  // Üye güncelleme
  const updateUye = async (updatedUser) => {
    const userRef = doc($db, "uyeler", updatedUser.id);
    await updateDoc(userRef, {
      isim: updatedUser.isim,
      email: updatedUser.email,
      telefon: updatedUser.telefon,
      yas: updatedUser.yas,
    });
    // Listeyi yeniden yükle
    await loadUyeler();
  };

  return {
    uyeler,
    loadUyeler,
    addUye,
    deleteUyeler,
    updateUye,
  };
});
