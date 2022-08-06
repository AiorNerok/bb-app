<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/store'

const store = useStore()

const { data, filterKey, searchValue } = storeToRefs(store)

const DataOnRender = computed(() => {
  let arr = data.value.filter(i => i.implementation_type.includes(filterKey.value))
  return arr.filter(i => i.label.toLowerCase().includes(searchValue.value.toLowerCase()))
})

</script>

<template>
  <div>
    <div v-for="i in DataOnRender">
      {{ i }}
    </div>
  </div>
</template>