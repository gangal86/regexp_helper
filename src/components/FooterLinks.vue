<template>
  <div class="row q-pb-md q-gutter-md justify-center">
    <a
      href="https://github.com/gangal86/regexp_helper"
      target="_blank"
      class="btn-footer-links"
    >
      <q-btn color="white" text-color="primary" label="Github" icon="fab fa-github" />
    </a>
    <a
      v-if="!$q.platform.is.bex"
      href="https://chromewebstore.google.com/detail/regexp-helper/aieccklpajfdolmkkkpphhhfgbflejdj"
      target="_blank"
    >
      <q-btn
        color="white"
        text-color="primary"
        label="Chrome Extension"
        icon="fab fa-chrome"
      />
    </a>
    <a v-if="$q.platform.is.bex" href="https://regexp-helper.web.app" target="_blank">
      <q-btn color="white" text-color="primary" label="Web-version" icon="fas fa-globe" />
    </a>
  </div>
</template>
