<template>
  <q-scroll-area class="scroll-area">
    <q-list separator bordered>
      <q-expansion-item
        v-for="(dataItem, key) in data"
        :key="key"
        group="somegroup"
        :icon="dataItem['header']['icon']"
        :label="dataItem['header']['title']"
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
                      <q-badge class="text-subtitle1" color="primary">
                        {{ props.row.pattern }}
                      </q-badge>
                    </q-td>
                    <q-td key="description" :props="props">
                      <div class="text-subtitle1">
                        {{ props.row.description }}
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
            title: "Якоря",
            icon: "anchor"
          },
          body: [
            {
              pattern: "^",
              description: "Начало строки"
            },
            {
              pattern: "\\A",
              description: "Начало текста"
            },
            {
              pattern: "$",
              description: "Конец строки"
            },
            {
              pattern: "\\Z",
              description: "Конец текста"
            },
            {
              pattern: "\\b",
              description: "Граница слова"
            },
            {
              pattern: "\\B",
              description: "НЕ граница слова"
            },
            {
              pattern: "\\<",
              description: "Начало слова"
            },
            {
              pattern: "\\>",
              description: "Конец слова"
            }
          ]
        },
        characterClasses: {
          header: {
            title: "Символьные классы",
            icon: "text_format"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        posix: {
          header: {
            title: "POSIX",
            icon: "closed_caption"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        assertions: {
          header: {
            title: "Утверждения",
            icon: "change_history"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
            }
          ]
        },
        quantifiers: {
          header: {
            title: "Кванторы",
            icon: "graphic_eq"
          },
          body: [
            {
              pattern: "pattern",
              description: "description"
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
.scroll-area {
  height: 500px;
}
</style>
