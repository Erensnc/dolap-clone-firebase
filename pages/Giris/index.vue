<template>
    <q-page>
      
    <Header />
    <SubHeader />
  
      <!-- Giriş Formu ve Carousel -->
      <div
        class="column no-wrap justify-center items-center content-center"
        style="
          width: 40vw;
          overflow: auto;
          border: 0.5px solid rgba(0, 0, 0, 0.3);
          margin: 0 auto;
          border-radius: 5px;
          padding: 1em;
        "
      >
        <!-- Carousel -->
        <div
      class="text-h5 text-weight-bold"
      style="text-align: center; margin: 1em"
    >
      DOLAP'A GİRİŞ YAP
    </div>
        <!-- Giriş Formu -->
        <Login />
      </div>
      <Footer />
    </q-page>
  </template>
  
  <script setup lang="ts">
  </script>
  