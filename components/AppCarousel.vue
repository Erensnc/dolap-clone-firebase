<template>
    <Splide :options="{ type: 'loop', perPage: 1, autoplay: true }">
      <!-- 1. Slide -->
      <SplideSlide>
        <div class="carousel-slide">
          <q-img
            src="https://cdn.dolap.com/web/images/logo-5.svg"
            style="max-width: 125px; height: 58px"
          />
          <p class="slide-text">Dolap'a üye ol ve ayrıcalıklarından yararlan</p>
        </div>
      </SplideSlide>
  
      <!-- 2. Slide -->
      <SplideSlide>
        <div class="carousel-slide">
          <q-img
            src="https://cdn.dolap.com/web/images/logo-5.svg"
            style="max-width: 125px; height: 58px"
          />
          <p class="slide-text">Dolap'ı daha güvenli bir hale getirmeye sen de destek ol</p>
        </div>
      </SplideSlide>
  
      <!-- 3. Slide -->
      <SplideSlide>
        <div class="carousel-slide">
          <q-img
            src="https://cdn.dolap.com/web/images/logo-5.svg"
            style="max-width: 125px; height: 58px"
          />
          <p class="slide-text">İletişime geç ve daha hızlı anlaşmaya var</p>
        </div>
      </SplideSlide>
  
      <!-- 4. Slide -->
      <SplideSlide>
        <div class="carousel-slide">
          <q-img
            src="https://cdn.dolap.com/web/images/logo-5.svg"
            style="max-width: 125px; height: 58px"
          />
          <p class="slide-text">Tüm favori ürünlerini tek bir yerde kaydet</p>
        </div>
      </SplideSlide>
    </Splide>
  </template>
  
  <script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'
  </script>
  