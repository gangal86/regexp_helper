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
                :data="dataItem['body']"
                :columns="columns"
                :pagination="{ rowsNumber: 10 }"
                bordered
                flat
                row-key="name"
                hide-header
                hide-bottom
              >
                <template v-slot:body="props">
                  <q-tr
                    :class="{ 'bg-teal-1': props.pageIndex % 2 == 0 }"
                    :props="props"
                  >
                    <q-td key="pattern" :props="props">
                      <q-badge class="text-subtitle1 text-weight-regular" color="primary">
                        {{ props.row.pattern }}
                      </q-badge>
                    </q-td>
                    <q-td key="description" :props="props">
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

<script>
export default {
  name: "PageMain",
  data() {
    return {
      columns: [
        {
          name: "pattern",
          align: "left"
        },
        {
          name: "description",
          align: "center"
        }
      ],
      data: {
        anchors: {
          header: {
            title: "anchors",
            icon: "anchor"
          },
          body: [
            {
              pattern: "^",
              description: "anchorsItem1"
            },
            {
              pattern: "\\A",
              description: "anchorsItem2"
            },
            {
              pattern: "$",
              description: "anchorsItem3"
            },
            {
              pattern: "\\Z",
              description: "anchorsItem4"
            },
            {
              pattern: "\\b",
              description: "anchorsItem5"
            },
            {
              pattern: "\\B",
              description: "anchorsItem6"
            },
            {
              pattern: "\\<",
              description: "anchorsItem7"
            },
            {
              pattern: "\\>",
              description: "anchorsItem8"
            }
          ]
        },
        characterClasses: {
          header: {
            title: "characterClasses",
            icon: "text_format"
          },
          body: [
            {
              pattern: "\\c",
              description: "characterClassesItem1"
            },
            {
              pattern: "\\s",
              description: "characterClassesItem2"
            },
            {
              pattern: "\\S",
              description: "characterClassesItem3"
            },
            {
              pattern: "\\d",
              description: "characterClassesItem4"
            },
            {
              pattern: "\\D",
              description: "characterClassesItem5"
            },
            {
              pattern: "\\w",
              description: "characterClassesItem6"
            },
            {
              pattern: "\\W",
              description: "characterClassesItem7"
            },
            {
              pattern: "\\xhh",
              description: "characterClassesItem8"
            },
            {
              pattern: "\\Oxxx",
              description: "characterClassesItem9"
            }
          ]
        },
        posix: {
          header: {
            title: "posix",
            icon: "closed_caption"
          },
          body: [
            {
              pattern: "[:upper:]",
              description: "posixItem1"
            },
            {
              pattern: "[:lower:]",
              description: "posixItem2"
            },
            {
              pattern: "[:alpha:]",
              description: "posixItem3"
            },
            {
              pattern: "[:alnum:]",
              description: "posixItem4"
            },
            {
              pattern: "[:digit:]",
              description: "posixItem5"
            },
            {
              pattern: "[:xdigit:]",
              description: "posixItem6"
            },
            {
              pattern: "[:punct:]",
              description: "posixItem7"
            },
            {
              pattern: "[:blank:]",
              description: "posixItem8"
            },
            {
              pattern: "[:space:]",
              description: "posixItem9"
            },
            {
              pattern: "[:cntrl:]",
              description: "posixItem10"
            },
            {
              pattern: "[:graph:]",
              description: "posixItem11"
            },
            {
              pattern: "[:print:]",
              description: "posixItem12"
            },
            {
              pattern: "[:word:]",
              description: "posixItem13"
            }
          ]
        },
        assertions: {
          header: {
            title: "assertions",
            icon: "change_history"
          },
          body: [
            {
              pattern: "?=",
              description: "assertionsItem1"
            },
            {
              pattern: "?!",
              description: "assertionsItem2"
            },
            {
              pattern: "?<=",
              description: "assertionsItem3"
            },
            {
              pattern: "?!=",
              description: "assertionsItem4"
            },
            {
              pattern: "?>",
              description: "assertionsItem5"
            },
            {
              pattern: "?()",
              description: "assertionsItem6"
            },
            {
              pattern: "?()|",
              description: "assertionsItem7"
            },
            {
              pattern: "?#",
              description: "assertionsItem8"
            },
          ]
        },
        quantifiers: {
          header: {
            title: "quantifiers",
            icon: "graphic_eq"
          },
          body: [
            {
              pattern: "*",
              description: "0 или больше"
            },
            {
              pattern: "*?",
              description: "0 или больше, нежадный"
            },
            {
              pattern: "+",
              description: "1 или больше"
            },
            {
              pattern: "+?",
              description: "1 или большеб нежадный"
            },
            {
              pattern: "?",
              description: "0 или 1"
            },
            {
              pattern: "??",
              description: "0 или 1, нежадный"
            },
            {
              pattern: "{3}",
              description: "Ровно 3"
            },
            {
              pattern: "{3,}",
              description: "3 или больше"
            },
            {
              pattern: "{3,5}",
              description: "3,4 или 5"
            },
            {
              pattern: "{3,5}?",
              description: "3,4 или 5, нежадный"
            }
          ]
        },
        specialCharacters: {
          header: {
            title: "Специальные символы",
            icon: "push_pin"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        stringReplacement: {
          header: {
            title: "Подстановка строк",
            icon: "low_priority"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        ranges: {
          header: {
            title: "Диапазоны",
            icon: "format_line_spacing"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        patternModifiers: {
          header: {
            title: "Модификаторы шаблонов",
            icon: "auto_fix_high"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        metacharacters: {
          header: {
            title: "Мета-символы (экранируются)",
            icon: "settings_ethernet"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  .scroll-area {
    height: 500px;
  }
}
.scroll-area {
    height: 800px;
  }
</style>
