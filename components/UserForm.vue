<template>
  <q-form @submit.prevent="onSubmit" @reset="resetForm" class="q-gutter-md">
    <q-input
      filled
      v-model="name"
      label="Adınız ve Soyadınız *"
      lazy-rules
      :rules="[val => !!val || 'Lütfen bir şey giriniz']"
    />
    <q-input
      filled
      type="number"
      v-model="age"
      label="Yaşınız *"
      lazy-rules
      :rules="[val => !!val || 'Yaşınızı yazınız', val => (val > 0 && val < 100) || 'Geçerli bir yaş giriniz']"
    />
    <q-input
      v-model="email"
      filled
      type="email"
      label="Email *"
      lazy-rules
      :rules="[val => !!val || 'Bir email giriniz!']"
    />
    <q-input
      filled
      v-model="phone"
      label="Telefon *"
      mask="(###) ### - ####"
      lazy-rules
      :rules="[val => !!val || 'Bir numara giriniz']"
    />
    <q-input
      v-model="password"
      filled
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

    <q-toggle
      v-model="accept"
      label="Kullanım lisans ve koşullarını kabul ediyorum"
    />
    <q-separator />

    <div>
      <q-btn label="Kaydol" type="submit" color="teal-5" />
      <q-btn label="Giriş Yap" color="teal-5" @click="navigateToLogin" />
      <q-btn
        size="15px"
        elevated
        rounded
        color="teal-5"
        label="Üyelikleri Görüntüle"
        @click="toggleDialog"
      />

      <!-- Üyelikleri görüntüleme diyaloğu -->
      <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Üyelikler</div>
            <q-space />
            <q-btn icon="delete" flat round color="teal-5" label="Tümünü Sil" @click="deleteUyeler" />
            <q-btn flat round color="teal-5" label="Yenile" @click="loadUyeler" />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <div class="q-pa-md flex justify-center">
            <div style="max-width: 90%; width: 300px">
              <q-item
                v-for="item in uyelerStore.uyeler"
                :key="item.id"
                clickable
                v-ripple
                class="q-mb-sm"
              >
                <q-item-section>
                  <q-item-label>İsim: {{ item.isim }}</q-item-label>
                  <q-item-label caption lines="1">Email: {{ item.email }}</q-item-label>
                  <q-item-label caption lines="1">Yaş: {{ item.yas }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn icon="edit" flat round color="teal-5" @click="editUye(item)" />
                </q-item-section>
              </q-item>
            </div>
          </div>
        </q-card>
      </q-dialog>

      <!-- Üye düzenleme diyaloğu -->
      <q-dialog v-model="editDialog">
        <q-card style="min-width: 300px; max-width: 400px;">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Üyeyi Düzenle</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <q-input v-model="editingUser.isim" label="İsim" filled />
            <q-input v-model="editingUser.email" label="Email" filled type="email" />
            <q-input v-model="editingUser.telefon" label="Telefon" filled mask="(###) ### - ####" />
            <q-input v-model.number="editingUser.yas" label="Yaş" filled type="number" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn label="Kaydet" color="teal-5" @click="updateUye" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useUyelerStore } from "~/stores/uyeler";

const $q = useQuasar();
const router = useRouter();
const uyelerStore = useUyelerStore();

// Form alanları
const name = ref("");
const age = ref(null);
const email = ref("");
const phone = ref("");
const password = ref("");
const isPwd = ref(true);
const accept = ref(false);

// Düzenleme ile ilgili alanlar
const editDialog = ref(false);
const editingUser = ref({
  id: null,
  isim: "",
  email: "",
  telefon: "",
  yas: null,
});

// Giriş yap butonu için yönlendirme
const navigateToLogin = () => {
  router.push("/Giris");
};

// Dialog işlemleri
const icon = ref(false);
const toggleDialog = async () => {
  icon.value = !icon.value;
  if (icon.value) {
    await uyelerStore.loadUyeler();
  }
};

// CRUD işlemleri
const onSubmit = async () => {
  if (!accept.value) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Kullanım lisans ve koşullarını kabul etmelisiniz",
    });
    return;
  }

  await uyelerStore.addUye({
    email: email.value,
    isim: name.value,
    sifre: password.value,
    telefon: phone.value,
    yas: age.value,
  });

  resetForm();
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Kaydolundu!",
  });
};

const deleteUyeler = async () => {
  await uyelerStore.deleteUyeler();
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Üyelikleriniz silindi!",
  });
};

const editUye = (user) => {
  editingUser.value = { ...user };
  editDialog.value = true;
};

const updateUye = async () => {
  await uyelerStore.updateUye(editingUser.value);
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Üye başarıyla güncellendi!",
  });
  editDialog.value = false;
};

const resetForm = () => {
  name.value = "";
  age.value = null;
  email.value = "";
  phone.value = "";
  password.value = "";
  accept.value = false;
  isPwd.value = true;
};
</script>
