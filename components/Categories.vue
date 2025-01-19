<template>
     <q-list class="rounded-borders">
              <q-expansion-item
                expand-separator
                icon="list"
                label="KATEGORİLER"
                caption="Kadın"
                default-opened
                style="font-weight: bolder"
              >
                <q-expansion-item
                  :header-inset-level="1"
                  expand-separator
                  icon="list"
                  label="Ayakkabı"
                  default-opened
                >
                  <q-expansion-item
                    switch-toggle-side
                    dense-toggle
                    label="Spor Ayakkabı"
                    :header-inset-level="1"
                    :content-inset-level="2"
                  >
                    <q-btn
                      flat
                      class="full-width"
                      color="dark"
                      label="Az Kullanılmış"
                      style="opacity: 0.75"
                    />
                    <q-btn
                      flat
                      color="dark"
                      class="full-width"
                      label="Yeni & Etiketli"
                      style="opacity: 0.75"
                    />
                    <q-btn
                      flat
                      class="full-width"
                      color="dark"
                      label="Yeni Gibi"
                      style="opacity: 0.75"
                    />
                  </q-expansion-item>
                </q-expansion-item>
              </q-expansion-item>
  
              <!-- Lokasyonlar Listesi -->
              <q-expansion-item
                :content-inset-level="0.5"
                expand-separator
                icon="place"
                label="LOKASYONLAR"
                caption="İstanbul"
                default-opened
                style="font-weight: bolder"
              >
                <q-expansion-item
                  expand-separator
                  :content-inset-level="0.5"
                  icon="place"
                  label="Türkiye"
                >
                  <q-expansion-item label="İstanbul" :content-inset-level="0.5">
                    <q-btn
                      flat
                      color="dark"
                      label="Ümraniye"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                    <q-btn
                      flat
                      color="dark"
                      label="Ataşehir"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                    <q-btn
                      flat
                      color="dark"
                      label="Pendik"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                    <q-btn
                      flat
                      color="dark"
                      label="Bağcılar"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                    <q-btn
                      flat
                      color="dark"
                      label="Esenyurt"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                    <q-btn
                      flat
                      color="dark"
                      label="Yenikapı"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                    <q-btn
                      flat
                      color="dark"
                      label="Üsküdar"
                      style="opacity: 0.75"
                      class="full-width"
                    />
                  </q-expansion-item>
                </q-expansion-item>
              </q-expansion-item>
            </q-list>
</template>