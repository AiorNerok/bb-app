<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";

const filter_tabs = [
  {
    id: 0,
    label: "Все типы",
    origin: "",
  },
  {
    id: 1,
    label: "Прямые продажи",
    origin: "Разовая продажа",
  },
  {
    id: 2,
    label: "Аукцион",
    origin: "Аукцион",
  },
];

const store = useStore();

const { Tabs } = storeToRefs(store);

const setTab = (v) => store.setTabs(v);
</script>

<template>
  <div>
    <ul
      class="inline-flex pl-[5px] rounded-[10px] border border-light-border bg-light-gray"
    >
      <li
        class="p-[0.45rem] cursor-pointer -tracking-[0.6px] transition-all duration-300 hover:shadow-lg hover:shadow-light-gray hover:rounded-b-2xl"
        v-for="{ id, label, origin } in filter_tabs"
        :data-id="id"
        :class="{ 'text-light-gray': Tabs !== origin }"
        @click="setTab(origin)"
      >
        {{ label }}
      </li>
    </ul>
  </div>
</template>
