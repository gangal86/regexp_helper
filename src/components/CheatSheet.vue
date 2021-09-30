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
              description: "Буквы в верхнем регистре"
            },
            {
              pattern: "[:lower:]",
              description: "Буквы в нижнем регистре"
            },
            {
              pattern: "[:alpha:]",
              description: "Все буквы"
            },
            {
              pattern: "[:alnum:]",
              description: "Буквы и цифры"
            },
            {
              pattern: "[:digit:]",
              description: "Цифры"
            },
            {
              pattern: "[:xdigit:]",
              description: "Шестнадцатиричные цифры"
            },
            {
              pattern: "[:punct:]",
              description: "Пунктуация"
            },
            {
              pattern: "[:blank:]",
              description: "Пробел и табуляция"
            },
            {
              pattern: "[:space:]",
              description: "Пустые символы"
            },
            {
              pattern: "[:cntrl:]",
              description: "Управляющие символы"
            },
            {
              pattern: "[:graph:]",
              description: "Печатные символы"
            },
            {
              pattern: "[:print:]",
              description: "Печатные символы и пробелы"
            },
            {
              pattern: "[:word:]",
              description: "Буквы, цифры и подчеркивание"
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
@media (max-width: 800px) {
  .scroll-area {
    height: 500px;
  }
}
.scroll-area {
    height: 800px;
  }
</style>
