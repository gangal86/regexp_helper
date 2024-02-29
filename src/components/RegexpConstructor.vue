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
            <div class="col-sm col-xs-12 q-pa-xs fix-col">
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

            <div class="col-sm col-xs-12 q-pa-xs fix-col">
              <div
                class="column q-gutter-sm q-ml-sm text-caption text-primary items-center"
              >
                <q-badge outline color="primary" style="margin-left: -10px">
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

            <div class="col-sm col-xs-12 q-pa-xs fix-col">
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
                  type="textarea"
                  input-style="min-height: 383px"
                />
              </div>
            </div>

            <div class="col-sm col-xs-12 q-pa-xs">
              <div class="q-gutter-sm">
                <q-badge outline color="primary">
                  {{ $t('labelMatchResult') }}
                </q-badge>
                <q-card flat bordered>
                  <q-tabs
                    v-model="tabResultInput"
                    dense
                    no-caps
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    :align="'justify'"
                    narrow-indicator
                  >
                    <q-tab name="сoincidences">{{ $t('labelMatchResultTab1') }}</q-tab>
                    <q-tab name="groups">{{ $t('labelMatchResultTab2') }}</q-tab>
                  </q-tabs>

                  <q-separator />

                  <q-tab-panels keep-alive v-model="tabResultInput" animated>
                    <q-tab-panel name="сoincidences" class="q-pa-none">
                      <q-scroll-area class="scroll-area">
                        <q-table
                          :rows="matchResult"
                          :columns="columns"
                          flat
                          row-key="name"
                          hide-header
                          hide-bottom
                          :pagination="{ rowsNumber: 0 }"
                        >
                          <template v-slot:body="props">
                            <q-tr
                              :class="{ 'bg-teal-1': props.pageIndex % 2 == 0 }"
                              :props="props"
                            >
                              <q-td key="match" :props="props">
                                <q-badge
                                  class="text-subtitle1 text-weight-regular cheat-sheet-items"
                                  color="primary"
                                >
                                  {{ props.row[0] }}
                                </q-badge>
                              </q-td>
                            </q-tr>
                          </template>
                        </q-table>
                      </q-scroll-area>
                    </q-tab-panel>

                    <q-tab-panel name="groups" class="q-pa-none">
                      <q-scroll-area class="scroll-area">
                        <q-table
                          :rows="matchResult"
                          :columns="columns"
                          flat
                          row-key="name"
                          hide-header
                          hide-bottom
                          :pagination="{ rowsNumber: 0 }"
                        >
                          <template v-slot:body="props">
                            <q-tr
                              :class="{ 'bg-teal-1': props.pageIndex % 2 == 0 }"
                              :props="props"
                            >
                              <q-td key="match" :props="props">
                                <q-badge
                                  v-for="(groupItem, key) in props.row"
                                  :key="key"
                                  class="q-mr-sm text-subtitle1 text-weight-regular cheat-sheet-items"
                                  color="primary"
                                >
                                  {{ groupItem }}
                                </q-badge>
                              </q-td>
                            </q-tr>
                          </template>
                        </q-table>
                      </q-scroll-area>
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card>
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
const matchResult = ref([]);
const checkAllowHyphenation = ref(false);
const checkShortestMatch = ref(false);
const tabResultInput = ref('сoincidences');
const columns = ref([
  {
    name: 'match',
    align: 'left',
  },
]);

const testRegExp = () => {
  try {
    const regExp = new RegExp(regexpText.value, 'g');
    matchResult.value = Array.from(sourceText.value.matchAll(regExp));
  } catch (error) {
    console.error('Invalid regular expression:', error.message);
  }
};

const fillRegExp = () => {
  let beforeSearchingTextFill = beforeSearchingText.value || '';
  let startSearchingTextFill = startSearchingText.value || '';
  let endSearchingTextFill = endSearchingText.value || '';
  let afterSearchingTextFill = afterSearchingText.value || '';
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
@media (max-width: 800px) {
  .fix-col {
    min-width: 100%;
  }
}

.scroll-area {
  height: 348px;
}
</style>
