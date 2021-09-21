<template>
  <div class="q-pa-md">
     <q-table
      title="Якоря"
      :data="data"
      :columns="columns"
      :pagination="{rowsNumber:10}"
      bordered
      flat
      row-key="name"
      hide-header
      hide-bottom
    >
      <template v-slot:body="props">
        <q-tr :class="{'bg-teal-1': props.pageIndex % 2 == 0}" :props="props">
          <q-td key="description" :props="props">
            <q-badge class="text-subtitle1" color="primary">
              {{ props.row.description }}
            </q-badge>
          </q-td>
          <q-td key="pattern" :props="props">
            <div class="text-subtitle1">
              {{ props.row.pattern}}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
  export default {
    name: "Anchors",
    data () {
    return {
      columns: [
        {
          name: 'pattern',
          align: 'center',
        },
        { name: 'description', 
          align: 'left', 
        },
      ],

      data: [
        {
          pattern: 'Начало строки',
          description: "^"
        },
        {
          pattern: 'Начало текста',
          description: "\\A"
        },
        {
          pattern: 'Конец строки',
          description: "$"
        },
        {
          pattern: 'Конец текста',
          description: "\\Z"
        },
        {
          pattern: 'Граница слова',
          description: "\\b"
        },
        {
          pattern: 'НЕ граница слова',
          description: "\\B"
        },
        {
          pattern: 'Начало слова',
          description: "\\<"
        },
        {
          pattern: 'Конец слова',
          description: "\\>"
        }
      ]
    }
  }
    
  }
</script>