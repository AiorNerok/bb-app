<template>
  <div>
    <ul
      class="inline-flex pl-[5px] rounded-[10px] border border-light-border bg-light-gray"
    >
      <li
        v-for="tab in filter_tabs"
        :data-id="tab.id"
        class="p-[0.45rem] cursor-pointer -tracking-[0.6px]"
        :class="{ 'text-light-gray': !tab.isCheck }"
      >
        {{ tab.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const filter_tabs = [
  {
    id: 0,
    label: "Все типы",
    isCheck: true,
  },
  {
    id: 2,
    label: "Прямые продажи",
    isCheck: false,
  },
  {
    id: 2,
    label: "Аукцион",
    isCheck: false,
  },
];
</script>
