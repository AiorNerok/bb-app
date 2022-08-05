
<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '~/store'

const store = useStore()

const { filterKey } = storeToRefs(store)

const filter_tabs = [
  {
    id: 0,
    label: "Все типы",
    origin: ''
  },
  {
    id: 1,
    label: "Прямые продажи",
    origin: "Прямые продажи"
  },
  {
    id: 2,
    label: "Аукцион",
    origin: "Аукцион"
  },
];


function setFilterKey(id) {
  const idx = filter_tabs.findIndex(i => i.id === id);
  
  store.$patch((store) => {
    store.filterKey = filter_tabs[idx].origin
  })
}

</script>

<template>
  <div>
    <ul class="inline-flex pl-[5px] rounded-[10px] border border-light-border bg-light-gray">
      <li v-for="{ id, label, origin } in filter_tabs" :data-id="id"
        class="p-[0.45rem] cursor-pointer -tracking-[0.6px]" :class="{ 'text-light-gray': filterKey !== origin }"
        @click="setFilterKey(id)">
        {{ label }}
      </li>
    </ul>
  </div>
</template>


