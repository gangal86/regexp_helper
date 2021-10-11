<template>
<div class="row q-mb-xs q-pb-md q-gutter-md justify-center">
    <a
      href="https://github.com/gangal86/regexp_helper"
      target="_blank"
      class="btn-version-links"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Github"
        icon="fab fa-github"
      />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=gangal.pro.regexp.helper"
      target="_blank"
      class="btn-version-links native-mobile-hide"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Google Play"
        icon="fab fa-google-play"
      />
    </a>
    <a
      href="https://drive.google.com/drive/folders/1fyZmUP6dnGBHld9fA2fa-8mHtgZ5VDj5?usp=sharing"
      target="_blank"
      class="btn-version-links electron-hide mobile-hide"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Windows"
        icon="fab fa-windows"
      />
    </a>
    <a
      href="https://regexp-helper.web.app"
      target="_blank"
      class="btn-version-links desktop-hide mobile-hide"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Web-version"
        icon="fab fa-chrome"
      />
    </a>
    <a
      href="https://regexp-helper.web.app"
      target="_blank"
      class="btn-version-links native-mobile-only"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Web-version"
        icon="fab fa-chrome"
      />
    </a>
    <a
      href="https://regexp-helper.web.app"
      target="_blank"
      class="btn-version-links electron-only"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Web-version"
        icon="fab fa-chrome"
      />
    </a>
</div>
</template>

<script>
  export default {
    name: "VersionLinks"
    
  }
</script>

<style lang="scss" scoped>
  .btn-version-links {
    text-decoration: none;
  }
</style>