<script setup>
import { useStore } from "~/store";

const store = useStore();
</script>

<template>
  <div class="flex flex-col gap-10">
    <Card v-for="i in store.filterDB('fav')" :key="i._id" :ddb="i" />
  </div>
</template>
