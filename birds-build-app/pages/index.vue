<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/store'

const store = useStore()

const DataOnRender = computed(() => {
  return store.getFilteredData
})

</script>

<template>
  <div>
    <Card v-for="i in DataOnRender" :key="i._id" :objprops="i" />
  </div>
</template>