<template>
  <div class="q-pa-md">
    <div class="row">
      <!-- Giyim menüsünün bulunduğu sütun -->
      <div class="col bg-deep-purple-6" style="position: relative;">
        <q-menu anchor="bottom left" self="top left">
          <template v-slot:activator="{ open }">
            <q-btn flat color="white" label="Giyim" class="full-width" @click="open" />
          </template>
          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_3073.png" alt="Üst Giyim" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>Üst Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_1.png" alt="Alt Giyim" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>Alt Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_2.png" alt="Elbise" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>Elbise</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_3.png" alt="Dış Giyim" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>Dış Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_4.png" alt="Plaj Giyim" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>Plaj Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_5.png" alt="Ev Giyim" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>Ev Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-img src="Screenshot_6.png" alt="İkili Takım" style="width:24px;height:24px;" />
              </q-item-section>
              <q-item-section>İkili Takım</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>

      <!-- Diğer butonlar -->
      <div class="col bg-teal-6">
        <q-btn flat color="white" label="Çanta" class="full-width" />
      </div>
      <div class="col bg-pink-8">
        <q-btn flat color="white" label="Ayakkabı" class="full-width" />
      </div>
      <div class="col bg-amber-6">
        <q-btn flat color="white" label="Aksesuar" class="full-width" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GiyimMenu"
}
</script>
