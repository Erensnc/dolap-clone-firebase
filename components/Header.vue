<template>
  <div class="q-mt-none">
    <div class="row items-center justify-center q-gutter-md">
      <q-img
        src="https://cdn.dolap.com/web/images/logo-5.svg"
        style="max-width: 140px; height: 68px"
        @click="navigateToHome"
      />

      <div class="col-5">
        <q-input
          v-model="arama"
          filled
          type="search"
          placeholder="Ürün, @üye, #etiket ara"
          class="col-5"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row items-center">
        <q-btn flat color="black" label="Markalar" />
        <!-- Giriş Yap veya Kullanıcı Adı -->
        <q-btn
          v-if="!authStore.user"
          flat
          color="black"
          label="Giriş Yap"
          @click="navigateToSignup"
        />
        <q-btn
          v-else
          flat
          color="black"
          :label="`Merhaba, ${authStore.user?.name}`"
          @click="logout"
        />
        <!-- Sepet Tuşu -->
        <q-btn
          flat
          color="black"
          icon="shopping_cart"
          @click="openCart"
        />
      </div>
    </div>

    <!-- CartDrawer -->
    <CartDrawer v-model="cartDrawer" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth";
import CartDrawer from '@/components/Sepet.vue'; // CartDrawer bileşen yolunu kontrol edin

const arama = ref('');
const cartDrawer = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const navigateToSignup = () => {
  router.push('/Kaydol');
};

const navigateToHome = () => {
  router.push('/');
};

const openCart = () => {
  cartDrawer.value = true;
};
// Çıkış Yapma
const logout = () => {
  authStore.logout();
};
</script>
