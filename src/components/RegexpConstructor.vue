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

        <q-scroll-area class="scroll-area">
          <div class="row">
            <div class="col-sm col-xs-12 q-pa-xs fix-standart-grid">
              <div class="q-gutter-sm">
                <q-badge outline color="primary"
                  >{{ $t('labelBeforeSearchingTextIs') }}</q-badge
                >
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="beforeSearchingTextIs"
                  dense
                />
                <q-badge outline color="primary"
                  >{{ $t('labelStartSearchingTextIs') }}</q-badge
                >
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="startSearchingTextIs"
                  dense
                />
              </div>
            </div>

            <div class="col-sm col-xs-12 q-pa-xs  fix-standart-grid">
              <div class="q-gutter-sm text-caption text-primary">
                <q-badge class="q-ml-md" outline color="primary"
                  >{{ $t('labelInTextCenter') }}</q-badge
                >
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
                <q-badge outline color="primary"
                  >{{ $t('labelAfterSearchingTextIs') }}</q-badge
                >
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="afterSearchingTextIs"
                  dense
                />
                <q-badge outline color="primary"
                  >{{ $t('labelEndSearchingTextIs') }}</q-badge
                >
                <q-input
                  class="q-mb-sm"
                  outlined
                  clearable
                  v-model="endSearchingTextIs"
                  dense
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm col-xs-12 q-pa-xs">
              <div class="q-gutter-sm">
                <q-badge outline color="primary">{{ $t('labelSourceText') }}</q-badge>
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
                <q-badge outline color="primary">{{ $t('labelMatchResult') }}</q-badge>
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
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "RegexpConstructor",
  data() {
    return {
      regexpText: ".+",
      beforeSearchingTextIs: "",
      startSearchingTextIs: "",
      afterSearchingTextIs: "",
      endSearchingTextIs: "",
      sourceText: "",
      matchResult: "",
      checkAllowHyphenation: false,
      checkShortestMatch: false
    };
  },
  watch: {
    beforeSearchingTextIs() {
      this.fillRegExp();
    },
    afterSearchingTextIs() {
      this.fillRegExp();
    },
    startSearchingTextIs() {
      this.fillRegExp();
    },
    endSearchingTextIs() {
      this.fillRegExp();
    },
    checkAllowHyphenation() {
      this.fillRegExp();
    },
    checkShortestMatch() {
      this.fillRegExp();
    }
  },
  methods: {
    testRegExp() {
      let regExp = new RegExp(this.regexpText, "g");
      this.sourceText = this.sourceText === null? "": this.sourceText;
      let matchAll = this.sourceText.matchAll(regExp);
      matchAll = Array.from(matchAll).join("\n");
      this.matchResult = matchAll;
    },
    fillRegExp() {
      let beforeSearchingTextIs = this.beforeSearchingTextIs === null? "": this.beforeSearchingTextIs;
      let startSearchingTextIs = this.startSearchingTextIs === null? "": this.startSearchingTextIs;
      let endSearchingTextIs = this.endSearchingTextIs === null? "": this.endSearchingTextIs;
      let afterSearchingTextIs = this.afterSearchingTextIs === null? "": this.afterSearchingTextIs;
      let middlePartRegExp = ".*";

      let metacharacters = [
        "\\\\",
        "\\?",
        "\\(",
        "\\[",
        "\\^",
        "\\$",
        "\\|",
        "\\)",
        "\\*",
        "\\+",
        "\\.",
        "\\{",
        "\\ ",
        "\\<",
        "\\-",
        "\\=",
        "\\!",
        "\\]",
        "\\}",
        "\\>"
      ];

      metacharacters.forEach(item => {
        let matchPattern = new RegExp(`${item}`, "g");
        beforeSearchingTextIs = beforeSearchingTextIs.replace(matchPattern, item);
        startSearchingTextIs = startSearchingTextIs.replace(matchPattern, item);
        endSearchingTextIs = endSearchingTextIs.replace(matchPattern, item);
        afterSearchingTextIs = afterSearchingTextIs.replace(matchPattern, item);
      })

      if (this.checkAllowHyphenation) {
        middlePartRegExp = "[\\w\\W]*";
      }

      if (this.checkShortestMatch) {
        middlePartRegExp = ".*?";
      }

      if (this.checkAllowHyphenation && this.checkShortestMatch) {
        middlePartRegExp = "[\\w\\W]*?";
      }

      if (beforeSearchingTextIs != "") {
        beforeSearchingTextIs = "(?<=" + beforeSearchingTextIs + ")";
      }
      if (afterSearchingTextIs != "") {
        afterSearchingTextIs = "(?=" + afterSearchingTextIs + ")";
      }

      this.regexpText =
        beforeSearchingTextIs +
        startSearchingTextIs +
        middlePartRegExp +
        endSearchingTextIs +
        afterSearchingTextIs;
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-area {
  height: 500px;
}
@media (max-width: 800px) {
  .fix-standart-grid {
    min-width: 100%;
  }
}
</style>
