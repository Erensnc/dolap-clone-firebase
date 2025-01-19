<template>
    <q-page>
      <Header />
  
      <SubHeader />
  
      <div class="q-col">
        <div class="kategori" style="width: 40em">
          <div class="q-pa-md" style="width: 26em">
            <!-- Kategori Listesi -->
            <Categories />
  
            <!-- Fiyat Filtreleri -->
            <Price />
          </div>
        </div>
  
        <!-- Ürünler -->
        <div>
          <div class="text-h6" style="position: relative; left: 55px">
            Spor Ayakkabı <b>9.578 ürün</b>
          </div>
            <ProductCard2 />
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";

  </script>
  