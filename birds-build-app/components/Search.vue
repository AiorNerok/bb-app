<script setup>
import { ref, watch } from "vue";
import { useStore } from "~/store";

const inputValue = ref("");

const { setSearch } = useStore();

watch(inputValue, () => setSearch(inputValue.value));
</script>

<template>
  <div
    class="h-12 min-w-[274px] border-light-border border inline-flex items-center rounded-[10px] pr-1 pl-5"
  >
    <input
      type="text"
      class="flex-1 text-[15px] outline-none"
      v-model="inputValue"
    />
    <button class="bg-dark-blue rounded-[10px] w-10 h-10">
      <img
        src="~/assets/pic/search.png"
        alt="search"
        class="w-[15px] h-[15px] mx-auto"
      />
    </button>
  </div>
</template>
