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
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
}
</script>

<style lang="scss" scoped>
  .main-layout {
    max-width: 1000px;
    margin: 0px auto;
  }
</style>
