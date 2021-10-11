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
        <q-btn flat round dense icon="more_vert">
          <q-menu auto-close>
            <q-list class="menu-options">
              <q-item @click="aboutProgram = !aboutProgram" clickable>
                <q-item-section class="text-caption text-weight-bold text-primary">{{
                  $t("labelMenuAbout")
                }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-dialog v-model="aboutProgram">
      <q-card>
        <q-card-section class="column q-pb-xs">
          <q-card>
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">RegExp Helper</div>
              <div class="text-subtitle2">
                {{ $t('aboutProgramDescribe') }}
              </div>
            </q-card-section>
            <q-card-actions vertical align="left">
              <div class="text-subtitle2">
                <span class="text-weight-regular">{{ $t('aboutProgramDeveloper') }} </span>
                <a href="https://gangal.pro" target="_blank" class="about-program-link">
                  <span class="text-weight-bold text-primary">Roman Gangal</span>
                </a>
              </div>
            </q-card-actions>
          </q-card>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      aboutProgram: false,
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
.menu-options {
  min-width: 120px;
}
.about-program-link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: $primary;
  }
}
</style>
