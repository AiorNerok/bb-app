<script setup>
import { useStore } from "~/store";

const store = useStore();
</script>

<template>
  <div>
    <Card v-for="i in store.filterDB('fav')" :key="i._id" :ddb="i" />
  </div>
</template>
