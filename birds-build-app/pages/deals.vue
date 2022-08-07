<script setup>
import { useStore } from "~/store";

const store = useStore();
</script>

<template>
  <div>
    <Card v-for="i in store.filterDB('deals')" :key="i._id" :ddb="i" />
  </div>
</template>
