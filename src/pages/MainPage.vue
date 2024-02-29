<template>
  <q-page class="q-pt-md">
    <q-card flat bordered>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        :align="'justify'"
        narrow-indicator
      >
        <q-tab name="regexpConstructor">{{ $t('constructorTabTitle') }}</q-tab>
        <q-tab name="cheatSheet">{{ $t('cheatSheetTabTitle') }}</q-tab>
      </q-tabs>

      <q-separator />

      <q-tab-panels keep-alive v-model="tab" animated>
        <q-tab-panel name="regexpConstructor">
          <RegexpConstructor />
        </q-tab-panel>

        <q-tab-panel name="cheatSheet">
          <CheatSheet />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <FooterLinks />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import RegexpConstructor from 'components/RegexpConstructor.vue';
import CheatSheet from 'components/CheatSheet.vue';
import FooterLinks from 'components/FooterLinks.vue';

const tab = ref('regexpConstructor');
</script>
