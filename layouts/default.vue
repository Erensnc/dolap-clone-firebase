<template>
  <q-layout view="hHh lpR fFf">
   
    <!-- Page Container -->
    <q-page-container>
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import CartDrawer from '@/components/Sepet.vue'; // CartDrawer bileşen yolunu kontrol edin

const $q = useQuasar();
const cartDrawer = ref(false);
</script>
