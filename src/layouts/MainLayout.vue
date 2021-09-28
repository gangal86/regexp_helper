<template>
  <q-layout class="main-layout" view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          RegExp Helper
        </q-toolbar-title>
        <q-btn
          @click="selectLang('us')"
          v-if="!countryFlagStatus"
          flat
          size="xs"
          dense
        >
          <country-flag country="us" />
        </q-btn>
        <q-btn
          @click="selectLang('rus')"
          v-if="countryFlagStatus"
          flat
          size="xs"
          dense
        >
          <country-flag country="rus" />
        </q-btn>
        <q-btn flat round dense icon="more_vert" />
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
  name: "MainLayout",
  data() {
    return {
      lang: this.$i18n.locale,
      countryFlagStatus: LocalStorage.getItem("countryFlagStatus") || false
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      LocalStorage.set("locale", lang);
    }
  },
  methods: {
    selectLang(lang) {
      if (lang == "rus") {
        this.lang = "ru";
        this.countryFlagStatus = false;
        LocalStorage.set("countryFlagStatus", false);
      }
      if (lang == "us") {
        this.lang = "en-us";
        this.countryFlagStatus = true;
        LocalStorage.set("countryFlagStatus", true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 1000px;
  margin: 0px auto;
}
</style>
