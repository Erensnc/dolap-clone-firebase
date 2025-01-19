<template>
  <q-form @submit.prevent="onSubmit" class="q-gutter-md">
    <q-input
      filled
      v-model="email"
      type="email"
      label="E-posta *"
      lazy-rules
      :rules="[val => !!val || 'Bir e-posta giriniz!']"
    />
    <q-input
      filled
      v-model="password"
      :type="isPwd ? 'password' : 'text'"
      label="Şifre *"
      lazy-rules
      :rules="[val => !!val || 'Bir şifre giriniz']"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <div class="row justify-between q-mt-md">
      <q-btn label="Giriş Yap" type="submit" color="primary" class="full-width" />
      <q-btn
        flat
        label="Şifremi Unuttum"
        color="primary"
        @click="navigateToForgotPassword"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const password = ref("");
const isPwd = ref(true);
const $q = useQuasar();
const router = useRouter();
const authStore = useAuthStore();

const onSubmit = async () => {
  if (!email.value || !password.value) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "error",
      message: "Lütfen tüm alanları doldurun!",
    });
    return;
  }

  const userData = await authStore.loginUser(email.value, password.value);

  if (userData) {
    // Kullanıcı bilgilerini Pinia'ya kaydet
    authStore.login({ email: userData.email, name: userData.isim });

    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Giriş başarılı!",
    });

    router.push("/"); // Anasayfaya yönlendirme
  } else {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "error",
      message: "E-posta veya şifre hatalı!",
    });
  }
};

const navigateToForgotPassword = () => {
  router.push("/forgot-password");
};
</script>

<style scoped>
.q-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
