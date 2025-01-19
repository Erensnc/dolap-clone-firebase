<template>
    <q-layout view="hHh lpR fFf">
      <!-- Header -->
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            Ahmet Faruk Yüksektepe 210101038 - Muhammed Eren ŞANCI 210101017
          </q-toolbar-title>
        </q-toolbar>
  
        <!-- Navigation Tabs -->
        <q-tabs align ="left">
          <q-route-tab to="/" label="Anasayfa" />
          <q-route-tab to="/Ayakkabi" label="Ayakkabı ilan sayfası" />
          <q-route-tab to="/Kaydol" label="Üye ol sayfası" />
        </q-tabs>
      </q-header>
  
      <!-- Sol Menü ve Sayfa İçeriği -->
      <q-drawer show-if-above v-model="drawerOpen" side="left" bordered>
        <q-list>
          <q-item
            v-for="component in components"
            :key="component.name"
            clickable
            v-ripple
            @click="selectComponent(component.name)"
          >
            <q-item-section>
              <q-btn flat color="primary" :label="component.name" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <!-- Dinamik Bileşenler -->
      <q-page-container>
        <q-page>
          <component v-if="currentComponent" :is="currentComponent" />
          <NuxtPage v-else /> <!-- Varsayılan olarak NuxtPage render edilir -->
        </q-page>
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  // Sol menü açma/kapatma kontrolü
  const drawerOpen = ref(true);
  
  // Dinamik bileşenler listesi
  const components = ref([
    { name: "Header" },
    { name: "SubHeader" },
    { name: "Footer" },
    { name: "ReviewCard" },
  ]);
  
  // Varsayılan render edilecek bileşen (ilk açıldığında boş bırakılabilir)
  const currentComponent = ref<string | null>(null);
  
  // Bileşen seçildiğinde dinamik olarak değiştir
  const selectComponent = (componentName: string) => {
    currentComponent.value = componentName;
  };
  </script>
  
  <style lang="scss" scoped>
  .q-drawer {
    width: 250px; /* Sol menü genişliği */
  }
  
  .q-page {
    padding: 20px; /* Sayfa içeriği boşlukları */
  }
  </style>
  