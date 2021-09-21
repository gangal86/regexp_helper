<template>
  <div class="column">
    <q-card flat bordered>
      <q-card-section>
        <div class="q-pa-sm">
          <q-badge class="q-mb-sm" outline color="primary" label="Текст регулярного выражения:" />
          <div class="row q-gutter-sm">
            <q-input class="col-sm-10 col-xs-12" outlined v-model="regexpText" dense />
            <q-btn class="col-sm col-xs-12" color="primary" label="Тест" @click="testRegExp" />
          </div>
      </div>

      <div class="row">
        <div class="col-sm q-pa-sm">
          <div class="column q-gutter-sm">
            <q-badge outline  color="primary">Перед искомым текстом всегда есть:</q-badge>
            <q-input class="q-mb-sm" outlined v-model="beforeSearchingTextIs" dense />
            <q-badge outline color="primary">Искомый текст всегда начинается с:</q-badge>
            <q-input class="q-mb-sm" outlined v-model="startSearchingTextIs" dense />
          </div>
        </div>

        <div class="col-sm q-pa-sm">
          <div class="column q-gutter-sm text-caption text-primary">
            <q-badge outline color="primary">В центре искомого текста:</q-badge>
            <q-checkbox v-model="checkAllowHyphenation" label="Разрешить переносы" keep-color color="primary" dense size="sm" />
            <q-checkbox v-model="checkShortestMatch" label="Самое короткое совпадение" keep-color color="primary" dense size="sm" />
          </div>
        </div>

        <div class="col-sm q-pa-sm">
          <div class="column q-gutter-sm">
            <q-badge outline color="primary">Это идет после искомого текста:</q-badge>
            <q-input class="q-mb-sm" outlined v-model="afterSearchingTextIs" dense />
            <q-badge outline color="primary">Этим заканчивается искомый текст:</q-badge>
            <q-input class="q-mb-sm" outlined v-model="endSearchingTextIs" dense />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm q-pa-sm">
          <div class="q-gutter-sm">
            <q-badge outline color="primary">Текст для обработки:</q-badge>
            <q-input v-model="sourceText" filled type="textarea" />
          </div>
        </div>

        <div class="col-sm q-pa-sm">
          <div class="q-gutter-sm">
            <q-badge outline color="primary">Результат обработки:</q-badge>
            <q-input v-model="matchResult" filled type="textarea" />
          </div>
        </div>
      </div>
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
    beforeSearchingTextIs() {this.fillRegExp()},
    afterSearchingTextIs() {this.fillRegExp()},
    startSearchingTextIs() {this.fillRegExp()},
    endSearchingTextIs() {this.fillRegExp()},
    checkAllowHyphenation() {this.fillRegExp()},
    checkShortestMatch() {this.fillRegExp()}
  },
  methods: {
    testRegExp() {
      let regExp = new RegExp(this.regexpText, "g");
      let matchAll = this.sourceText.matchAll(regExp);
      matchAll = Array.from(matchAll).join("\n");
      this.matchResult = matchAll;
    },
    fillRegExp() {
      let beforeSearchingTextIs = this.beforeSearchingTextIs;
      let startSearchingTextIs = this.startSearchingTextIs;
      let endSearchingTextIs = this.endSearchingTextIs;
      let afterSearchingTextIs = this.afterSearchingTextIs;
      let middlePartRegExp = ".*";

      if (this.checkAllowHyphenation) {
        middlePartRegExp = "[\\w\\W]*";
      }

      if (this.checkShortestMatch) {
        middlePartRegExp = "*?";
      }

      if (this.checkAllowHyphenation && this.checkShortestMatch) {
        middlePartRegExp = "[\\w\\W]*?";
      }

      if (beforeSearchingTextIs != "") {
        beforeSearchingTextIs = "(?<=" + this.beforeSearchingTextIs + ")";
      }
      if (afterSearchingTextIs != "") {
        afterSearchingTextIs = "(?=" + this.afterSearchingTextIs + ")";
      }

      beforeSearchingTextIs = beforeSearchingTextIs.replace(/ /g, "\\ ");
      startSearchingTextIs = startSearchingTextIs.replace(/ /g, "\\ ");
      endSearchingTextIs = endSearchingTextIs.replace(/ /g, "\\ ");
      afterSearchingTextIs = afterSearchingTextIs.replace(/ /g, "\\ ");

      this.regexpText = beforeSearchingTextIs + startSearchingTextIs + middlePartRegExp + endSearchingTextIs + afterSearchingTextIs;
    }
  }
};
</script>
