<template>
    <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              icon="money"
              label="FİYAT"
              default-opened
              style="font-weight: bolder"
            >
              Bir aralık seç:
              <br />
              <input
                v-model="text"
                placeholder="En Az"
                style="
                  width: 5em;
                  height: 2em;
                  border: 1px solid black;
                  margin: 1em;
                "
              />
              -
              <input
                v-model="text"
                placeholder="En Fazla"
                style="
                  width: 5em;
                  height: 2em;
                  border: 1px solid black;
                  margin: 1em;
                "
              />
              <q-btn flat rounded color="teal-5" label="Uygula" />
            </q-expansion-item>
</template>

<script>

</script>
  

  