<template>
    <q-page>
       <!-- header -->
      <Header />

      <SubHeader />

      <div class="q-pa-md block">
      <div class="q-gutter-md row items-start justify-center">
        <ImageLink />
      </div>
    </div>

    <div class="q-pa-s">
      <ProductCard />
    </div>

    <div class="q-ma-md">
      <MostSearched />
    </div>

    <div class="review-list-container">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>


    <Footer />
  
    </q-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  </script>
  