<template>
    <div class="review-card">
      <!-- Sol Resim -->
      <q-img
        :src="review.image"
        style="width: 120px; height: 120px; object-fit: cover;"
        class="review-image"
      />
  
      <!-- Sağ Bilgiler -->
      <div class="review-content">
        <!-- Üst Kısım: Başlık ve Rating -->
        <div class="review-header">
          <q-rating
            v-model="review.rating"
            size="20px"
            readonly
            color="yellow"
            icon="star"
          />
          <span class="review-title">{{ review.title }}</span>
        </div>
  
        <!-- Orta Kısım: Tarih -->
        <div class="review-date">
          {{ formattedDate }}
        </div>
  
        <!-- Alt Kısım: Yorum -->
        <div class="review-text">
          {{ review.comment }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  // Bilgisayarın mevcut tarihini al ve formatla
  const currentDate = new Date();
  const formattedDate = ref(
    `${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${currentDate.getFullYear()}`
  );
  
  // Yorum bilgisi
  const review = {
    image: "/Screenshot_3050.png", // Görselin yolu
    rating: 4.5, // Yıldız puanı
    title: "Ayakkabı çok temiz", // Yorum başlığı
    comment: "Çok iyi paketlenmişti, sıfır gibiydi tertemiz çok memnun kaldım.", // Yorum metni
  };
  </script>