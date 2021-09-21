<template>
  <q-page class="column">
   <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="regexpConstructor" label="Конструктор" />
          <q-tab name="cheatSheet" label="Шпаргалка" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="regexpConstructor">
            <RegexpConstructor />
          </q-tab-panel>

          <q-tab-panel name="cheatSheet">
            <CheatSheet />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>
import RegexpConstructor from "components/RegexpConstructor"
import CheatSheet from "components/CheatSheet.vue"
export default {
  name: "PageMain",
  components: {
    RegexpConstructor,
    CheatSheet
  },
  data () {
    return {
      tab: 'regexpConstructor'
    }
  }
};
</script>

