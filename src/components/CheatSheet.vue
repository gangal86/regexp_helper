<template>
  <div class="q-pa-xs">
    <q-list
      v-if="showCategoriesNames"
      bordered
      separator
    >
      <q-item
        v-for="(category, key) in categories"
        :key="key"
        @click="chooseCategory(key)"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label class="text-center text-primary">{{ category }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
      <Anchors v-if="showAnchors" />
      <CharacterClasses v-if="showCharacterClasses" />
      <div class="row">
        <q-btn
          v-if="!showCategoriesNames"
          @click="backToCategories"
          class="col-1 q-ml-xs q-mt-md"
          color="primary"
          icon="arrow_back"
        />
      </div>
  </div>
</template>

<script>
import Anchors from "components/cheat-sheet-categories/Anchors"
import CharacterClasses from "components/cheat-sheet-categories/CharacterClasses"

  export default {
    name: "CheetSheet",
    components: {
      Anchors,
      CharacterClasses
    },
    data() {
      return {
        showCategoriesNames: true,
        showAnchors: false,
        showCharacterClasses: false,
        categories: {
          0: "ЯКОРЯ",
          1: "СИМВОЛЬНЫЕ КЛАССЫ",
          2: "СИМВОЛЬНЫЕ КЛАССЫ POSIX",
          3: "УТВЕРЖДЕНИЯ",
          4: "КВАНТОРЫ",
          5: "СПЕЦИАЛЬНЫЕ СИМВОЛЫ",
          6: "ПОДСТАНОВКА СТРОК",
          7: "ДИАПАЗОНЫ",
          8: "МОДИФИКАТОРЫ ШАБЛОНОВ",
          9: "МЕТА-СИМВОЛЫ (ЭКРАНИРУЮТСЯ)"
        }
      }
    },
    methods: {
      chooseCategory(key){
        this.showCategoriesNames = false;
        switch (+key) {
          case 0:
            this.showAnchors = true;
            break;
          case 1:
            this.showCharacterClasses = true;
            break;
        }
      },
      backToCategories(){
        this.showCategoriesNames = true;
        this.showAnchors = false;
        this.showCharacterClasses = false;
      }
    }    
  }
</script>
