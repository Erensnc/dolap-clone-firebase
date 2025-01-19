<template>
    <q-page>
      <!-- Sayfa Başlığı -->
      <div
        class="text-h5 text-weight-bold"
        style="text-align: center; margin: 2em"
      >
        DOLAP'A ÜYE OL
      </div>
  
      <!-- Kayıt Formu ve Carousel -->
      <div
        class="column no-wrap justify-center items-center content-center"
        style="
          width: 40vw;
          overflow: auto;
          border: 0.5px solid rgba(0, 0, 0, 0.3);
          margin: 0 auto;
          border-radius: 5px;
          padding: 2em;
        "
      >
        <!-- Carousel -->
        <AppCarousel />
  
        <!-- Form -->
        <UserForm />
  
      </div>
    </q-page>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  