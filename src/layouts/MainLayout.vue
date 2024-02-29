<template>
  <q-layout class="main-layout" view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="q-ml-sm">RegExp Helper</q-toolbar-title>
        <div class="q-mr-sm">
          <q-btn
            v-if="currentLocale === 'ru'"
            @click="selectLang('en-us')"
            flat
            size="md"
            dense
            >EN</q-btn
          >
          <q-btn
            v-if="currentLocale === 'en-us'"
            @click="selectLang('ru')"
            flat
            size="md"
            dense
            >RU</q-btn
          >
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { LocalStorage } from 'quasar';
import { i18n } from 'boot/i18n';

const currentLocale = ref(LocalStorage.getItem('locale') || 'ru');

const selectLang = (lang) => {
  i18n.global.locale.value = lang;
  currentLocale.value = lang;
  LocalStorage.set('locale', lang);
};
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 1200px;
  margin: 0px auto;
}

@media (max-width: 350px) {
  .main-layout {
    width: 350px;
  }
}
</style>
