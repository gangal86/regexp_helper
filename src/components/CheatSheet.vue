<template>
  <q-scroll-area class="scroll-area">
    <q-list separator bordered>
      <q-expansion-item
        v-for="(dataItem, key) in data"
        :key="key"
        group="somegroup"
        :icon="dataItem['header']['icon']"
        :label="$t(dataItem['header']['title'])"
        header-class="text-primary text-subtitle1"
      >
        <q-card>
          <q-card-section>
            <div class="q-pa-xs">
              <q-table
                :rows="dataItem['body']"
                :columns="columns"
                :pagination="{ rowsNumber: 10 }"
                bordered
                flat
                row-key="name"
                hide-header
                hide-bottom
                :virtual-scroll="false"
              >
                <template v-slot:body="props">
                  <q-tr :class="{ 'bg-teal-1': props.pageIndex % 2 == 0 }" :props="props">
                    <q-td key="pattern" :props="props">
                      <q-badge
                        class="text-subtitle1 text-weight-regular cheat-sheet-items"
                        color="primary"
                      >
                        {{ props.row.pattern }}
                      </q-badge>
                    </q-td>
                    <q-td class="cheat-sheet-items" key="description" :props="props">
                      <div class="text-subtitle2 text-weight-regular text-primary">
                        {{ $t(props.row.description) }}
                      </div>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-scroll-area>
</template>

<script setup>
import { ref, reactive } from 'vue';

const columns = ref([
  {
    name: 'pattern',
    align: 'left',
  },
  {
    name: 'description',
    align: 'left',
  },
]);
const data = reactive({
  anchors: {
    header: {
      title: 'anchors',
      icon: 'anchor',
    },
    body: [
      {
        pattern: '^',
        description: 'anchorsItem1',
      },
      {
        pattern: '\\A',
        description: 'anchorsItem2',
      },
      {
        pattern: '$',
        description: 'anchorsItem3',
      },
      {
        pattern: '\\Z',
        description: 'anchorsItem4',
      },
      {
        pattern: '\\b',
        description: 'anchorsItem5',
      },
      {
        pattern: '\\B',
        description: 'anchorsItem6',
      },
      {
        pattern: '\\<',
        description: 'anchorsItem7',
      },
      {
        pattern: '\\>',
        description: 'anchorsItem8',
      },
    ],
  },
  characterClasses: {
    header: {
      title: 'characterClasses',
      icon: 'text_format',
    },
    body: [
      {
        pattern: '\\c',
        description: 'characterClassesItem1',
      },
      {
        pattern: '\\s',
        description: 'characterClassesItem2',
      },
      {
        pattern: '\\S',
        description: 'characterClassesItem3',
      },
      {
        pattern: '\\d',
        description: 'characterClassesItem4',
      },
      {
        pattern: '\\D',
        description: 'characterClassesItem5',
      },
      {
        pattern: '\\w',
        description: 'characterClassesItem6',
      },
      {
        pattern: '\\W',
        description: 'characterClassesItem7',
      },
      {
        pattern: '\\xhh',
        description: 'characterClassesItem8',
      },
      {
        pattern: '\\Oxxx',
        description: 'characterClassesItem9',
      },
    ],
  },
  posix: {
    header: {
      title: 'posix',
      icon: 'closed_caption',
    },
    body: [
      {
        pattern: '[:upper:]',
        description: 'posixItem1',
      },
      {
        pattern: '[:lower:]',
        description: 'posixItem2',
      },
      {
        pattern: '[:alpha:]',
        description: 'posixItem3',
      },
      {
        pattern: '[:alnum:]',
        description: 'posixItem4',
      },
      {
        pattern: '[:digit:]',
        description: 'posixItem5',
      },
      {
        pattern: '[:xdigit:]',
        description: 'posixItem6',
      },
      {
        pattern: '[:punct:]',
        description: 'posixItem7',
      },
      {
        pattern: '[:blank:]',
        description: 'posixItem8',
      },
      {
        pattern: '[:space:]',
        description: 'posixItem9',
      },
      {
        pattern: '[:cntrl:]',
        description: 'posixItem10',
      },
      {
        pattern: '[:graph:]',
        description: 'posixItem11',
      },
      {
        pattern: '[:print:]',
        description: 'posixItem12',
      },
      {
        pattern: '[:word:]',
        description: 'posixItem13',
      },
    ],
  },
  assertions: {
    header: {
      title: 'assertions',
      icon: 'change_history',
    },
    body: [
      {
        pattern: '?=',
        description: 'assertionsItem1',
      },
      {
        pattern: '?!',
        description: 'assertionsItem2',
      },
      {
        pattern: '?<=',
        description: 'assertionsItem3',
      },
      {
        pattern: '?!=',
        description: 'assertionsItem4',
      },
      {
        pattern: '?>',
        description: 'assertionsItem5',
      },
      {
        pattern: '?()',
        description: 'assertionsItem6',
      },
      {
        pattern: '?()|',
        description: 'assertionsItem7',
      },
      {
        pattern: '?#',
        description: 'assertionsItem8',
      },
    ],
  },
  quantifiers: {
    header: {
      title: 'quantifiers',
      icon: 'graphic_eq',
    },
    body: [
      {
        pattern: '*',
        description: 'quantifiersItem1',
      },
      {
        pattern: '*?',
        description: 'quantifiersItem2',
      },
      {
        pattern: '+',
        description: 'quantifiersItem3',
      },
      {
        pattern: '+?',
        description: 'quantifiersItem4',
      },
      {
        pattern: '?',
        description: 'quantifiersItem5',
      },
      {
        pattern: '??',
        description: 'quantifiersItem6',
      },
      {
        pattern: '{3}',
        description: 'quantifiersItem7',
      },
      {
        pattern: '{3,}',
        description: 'quantifiersItem8',
      },
      {
        pattern: '{3,5}',
        description: 'quantifiersItem9',
      },
      {
        pattern: '{3,5}?',
        description: 'quantifiersItem10',
      },
    ],
  },
  specialCharacters: {
    header: {
      title: 'specialCharacters',
      icon: 'push_pin',
    },
    body: [
      {
        pattern: '\\',
        description: 'specialCharactersItem1',
      },
      {
        pattern: '\\n',
        description: 'specialCharactersItem2',
      },
      {
        pattern: '\\r',
        description: 'specialCharactersItem3',
      },
      {
        pattern: '\\t',
        description: 'specialCharactersItem4',
      },
      {
        pattern: '\\v',
        description: 'specialCharactersItem5',
      },
      {
        pattern: '\\f',
        description: 'specialCharactersItem6',
      },
      {
        pattern: '\\a',
        description: 'specialCharactersItem7',
      },
      {
        pattern: '[\\b]',
        description: 'specialCharactersItem8',
      },
      {
        pattern: '\\e',
        description: 'specialCharactersItem9',
      },
      {
        pattern: '\\N{name}',
        description: 'specialCharactersItem10',
      },
    ],
  },
  stringReplacement: {
    header: {
      title: 'stringReplacement',
      icon: 'low_priority',
    },
    body: [
      {
        pattern: '$n',
        description: 'stringReplacementItem1',
      },
      {
        pattern: '$2',
        description: 'stringReplacementItem2',
      },
      {
        pattern: '$1',
        description: 'stringReplacementItem3',
      },
      {
        pattern: '$`',
        description: 'stringReplacementItem4',
      },
      {
        pattern: "$'",
        description: 'stringReplacementItem5',
      },
      {
        pattern: '$+',
        description: 'stringReplacementItem6',
      },
      {
        pattern: '$&',
        description: 'stringReplacementItem7',
      },
      {
        pattern: '$_',
        description: 'stringReplacementItem8',
      },
      {
        pattern: '$$',
        description: 'stringReplacementItem9',
      },
    ],
  },
  ranges: {
    header: {
      title: 'ranges',
      icon: 'format_line_spacing',
    },
    body: [
      {
        pattern: '.',
        description: 'rangesItem1',
      },
      {
        pattern: '(a|b)',
        description: 'rangesItem2',
      },
      {
        pattern: '(...)',
        description: 'rangesItem3',
      },
      {
        pattern: '(?:...)',
        description: 'rangesItem4',
      },
      {
        pattern: '[abc]',
        description: 'rangesItem5',
      },
      {
        pattern: '[^abc]',
        description: 'rangesItem6',
      },
      {
        pattern: '[a-q]',
        description: 'rangesItem7',
      },
      {
        pattern: '[A-Q]',
        description: 'rangesItem8',
      },
      {
        pattern: '[0-7]',
        description: 'rangesItem9',
      },
      {
        pattern: '\\n',
        description: 'rangesItem10',
      },
    ],
  },
  patternModifiers: {
    header: {
      title: 'patternModifiers',
      icon: 'auto_fix_high',
    },
    body: [
      {
        pattern: 'g',
        description: 'patternModifiersItem1',
      },
      {
        pattern: 'i',
        description: 'patternModifiersItem2',
      },
      {
        pattern: 'm',
        description: 'patternModifiersItem3',
      },
      {
        pattern: 's',
        description: 'patternModifiersItem4',
      },
      {
        pattern: 'x',
        description: 'patternModifiersItem5',
      },
      {
        pattern: 'e',
        description: 'patternModifiersItem6',
      },
      {
        pattern: 'U',
        description: 'patternModifiersItem7',
      },
    ],
  },
  metacharacters: {
    header: {
      title: 'metacharacters',
      icon: 'settings_ethernet',
    },
    body: [
      {
        pattern: '< ( [ { ^ - = $ ! | ] } ) ? * + . >',
        description: 'metacharactersItem1',
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .scroll-area {
    height: 500px;
  }
}
.scroll-area {
  height: 700px;
}
.cheat-sheet-items {
  white-space: normal;
}
</style>
