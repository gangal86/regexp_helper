<template>
  <q-layout class="main-layout" view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          RegExp Helper
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="apps"
          class="q-mr-xs"
        />
        <q-btn
          flat
          round
          dense
          icon="more_vert"
        />
        <q-select
          v-model="lang"
          :options="langOptions"
          label="Quasar Language"
          dense
          borderless
          emit-value
          map-options
          options-dense
          style="min-width: 150px"
      />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { LocalStorage } from "quasar";

export default {
  name: 'MainLayout',
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'ru', label: 'Русский' }
      ]
    }
  },
  watch: {
    lang(lang) {
        this.$i18n.locale = lang;
        LocalStorage.set("locale", lang);
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-layout {
    max-width: 1000px;
    margin: 0px auto;
  }
</style>
