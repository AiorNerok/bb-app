<script setup>
import { reactive, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "~/store";

const store = useStore();
</script>

<template>
  <div>
    <Card v-for="i in store.filterDB()" :key="i._id" :ddb="i" />
  </div>
</template>
