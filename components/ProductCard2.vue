<template>
  <div class="row justify-center q-gutter-sm">
    <q-intersection
      v-for="item in itemsStore.items"
      :key="item.id"
      class="card-item"
      style="margin-bottom: 60px; height: 290px; width: 290px"
    >
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div
            class="text-h10 q-mb-xs"
            style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
          >
            <q-avatar size="31px">
              <img :src="item.avatar" />
            </q-avatar>
            {{ item.satici }}
            <q-btn
              outline
              color="red-5"
              icon="add"
              size="8px"
              label="Takip Et"
            />
          </div>
          <div class="row no-wrap items-center">
            <q-rating
              v-model="ratingModel"
              size="1.5em"
              color="green-5"
              icon="star_border"
              icon-selected="star"
            />
            <span class="text-caption text-grey q-ml-sm">{{ item.rate }}</span>
          </div>
        </q-card-section>
        <q-img :src="item.source" width="262px" height="147px" />
        <q-card-actions>
          <div class="q-pa-md example-row-equal-width">
            <div class="row">
              <div class="col justify-start text-h7">{{ item.info }}</div>
              <div class="col absolute-bottom-right text-h5">
                {{ item.fiyat }} TL
              </div>
            </div>
          </div>
        </q-card-actions>
        <q-card-actions>
          <q-btn
            size="8px"
            unelevated
            unrounded
            color="cyan"
            icon="add"
            @click="addToCart(item)"
          />
        </q-card-actions>
      </q-card>
    </q-intersection>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useItemsStore } from "~/stores/items1"; // Yeni store'u içe aktar
import { useCartStore } from "~/stores/cart"; // Sepet için mevcut store

const ratingModel = ref(4);
const itemsStore = useItemsStore(); // Store'u kullan
const cartStore = useCartStore(); // Sepet için mevcut store

// Bileşen yüklendiğinde verileri çek
onMounted(() => {
  itemsStore.fetchItems();
});

// Sepete ürün ekleme
const addToCart = (item) => {
  cartStore.addToCart(item);
};
</script>
