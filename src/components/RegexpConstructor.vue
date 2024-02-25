<template>
  <div class="column q-pa-xs">
    <q-card flat bordered>
      <q-card-section>
        <div class="q-pa-xs q-mb-sm">
          <q-badge
            class="q-mb-sm"
            outline
            color="primary"
            :label="$t('labelRegexpText')"
          />
          <div class="row q-gutter-sm">
            <q-input
              class="col-sm-10 col-xs-12"
              outlined
              clearable
              v-model="regexpText"
              dense
            />
            <q-btn
              class="col-sm col-xs-12 text-weight-regular"
              color="primary"
              :label="$t('btnTestRegExp')"
              @click="testRegExp"
            />
          </div>
        </div>

        <component
          :is="$q.platform.is.mobile ? 'q-scroll-area' : 'div'"
          :class="$q.platform.is.mobile ? 'scroll-area' : 'desktop-only'"
        >
          <div class="row">
            <div class="col-sm col-xs-12 q-pa-xs fix-standart-grid">
              <div class="q-gutter-sm">
                <q-badge outline color="primary">
                  {{ $t('labelBeforeSearchingText') }}
                </q-badge>
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="beforeSearchingText"
                  dense
                />
                <q-badge outline color="primary">
                  {{ $t('labelStartSearchingText') }}
                </q-badge>
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="startSearchingText"
                  dense
                />
              </div>
            </div>

            <div class="col-sm col-xs-12 q-pa-xs fix-standart-grid">
              <div class="q-gutter-sm text-caption text-primary">
                <q-badge class="q-ml-md" outline color="primary">
                  {{ $t('labelInTextCenter') }}
                </q-badge>
                <div class="column">
                  <q-checkbox
                    v-model="checkAllowHyphenation"
                    :label="$t('labelAllowHyphenation')"
                    keep-color
                    color="primary"
                    size="md"
                  />
                  <q-checkbox
                    v-model="checkShortestMatch"
                    :label="$t('labelShortestMatch')"
                    keep-color
                    color="primary"
                    size="md"
                  />
                </div>
              </div>
            </div>

            <div class="col-sm col-xs-12 q-pa-xs fix-standart-grid">
              <div class="q-gutter-sm">
                <q-badge outline color="primary">
                  {{ $t('labelAfterSearchingText') }}
                </q-badge>
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="afterSearchingText"
                  dense
                />
                <q-badge outline color="primary">
                  {{ $t('labelEndSearchingText') }}
                </q-badge>
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="endSearchingText"
                  dense
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm col-xs-12 q-pa-xs">
              <div class="q-gutter-sm">
                <q-badge outline color="primary">
                  {{ $t('labelSourceText') }}
                </q-badge>
                <q-input
                  v-model="sourceText"
                  outlined
                  clearable
                  rows="14"
                  type="textarea"
                />
              </div>
            </div>

            <div class="col-sm col-xs-12 q-pa-xs">
              <div class="q-gutter-sm">
                <q-badge outline color="primary">
                  {{ $t('labelMatchResult') }}
                </q-badge>
                <q-input
                  v-model="matchResult"
                  outlined
                  clearable
                  rows="14"
                  type="textarea"
                />
              </div>
            </div>
          </div>
        </component>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const regexpText = ref('.+');
const beforeSearchingText = ref('');
const startSearchingText = ref('');
const afterSearchingText = ref('');
const endSearchingText = ref('');
const sourceText = ref('');
const matchResult = ref('');
const checkAllowHyphenation = ref(false);
const checkShortestMatch = ref(false);

const testRegExp = () => {
  try {
    const regExp = new RegExp(regexpText.value, 'g');
    matchResult.value = Array.from(sourceText.value.matchAll(regExp)).join('\n');
  } catch (error) {
    console.error('Invalid regular expression:', error.message);
  }
};

const fillRegExp = () => {
  let beforeSearchingTextFill = beforeSearchingText.value;
  let startSearchingTextFill = startSearchingText.value;
  let endSearchingTextFill = endSearchingText.value;
  let afterSearchingTextFill = afterSearchingText.value;
  let middlePartRegExp = '.*';

  const metacharacters = [
    '\\\\',
    '\\?',
    '\\(',
    '\\[',
    '\\^',
    '\\$',
    '\\|',
    '\\)',
    '\\*',
    '\\+',
    '\\.',
    '\\{',
    '\\ ',
    '\\<',
    '\\-',
    '\\=',
    '\\!',
    '\\]',
    '\\}',
    '\\>',
  ];

  metacharacters.forEach((item) => {
    const matchPattern = new RegExp(item, 'g');
    beforeSearchingTextFill = beforeSearchingTextFill.replace(matchPattern, item);
    startSearchingTextFill = startSearchingTextFill.replace(matchPattern, item);
    endSearchingTextFill = endSearchingTextFill.replace(matchPattern, item);
    afterSearchingTextFill = afterSearchingTextFill.replace(matchPattern, item);
  });

  if (checkAllowHyphenation.value) {
    middlePartRegExp = '[\\w\\W]*';
  }

  if (checkShortestMatch.value) {
    middlePartRegExp = '.*?';
  }

  if (checkAllowHyphenation.value && checkShortestMatch.value) {
    middlePartRegExp = '[\\w\\W]*?';
  }

  if (beforeSearchingTextFill !== '') {
    beforeSearchingTextFill = `(?<=${beforeSearchingTextFill})`;
  }
  if (afterSearchingTextFill !== '') {
    afterSearchingTextFill = `(?=${afterSearchingTextFill})`;
  }

  regexpText.value =
    beforeSearchingTextFill +
    startSearchingTextFill +
    middlePartRegExp +
    endSearchingTextFill +
    afterSearchingTextFill;
};

watch(
  [
    beforeSearchingText,
    afterSearchingText,
    startSearchingText,
    endSearchingText,
    checkAllowHyphenation,
    checkShortestMatch,
  ],
  fillRegExp,
);
</script>

<style lang="scss" scoped>
.scroll-area {
  height: 66vh;
}
@media (max-width: 730px) {
  .fix-standart-grid {
    min-width: 100%;
  }
}
</style>
