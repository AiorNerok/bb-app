<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '~/store'

const store = useStore()

const { data, filterKey, searchValue } = storeToRefs(store)

const dataOnRender = data.value

const DataOnRender = computed(() => {

  let arr = [...dataOnRender]
  if (!!filterKey.value) {
    arr = arr.filter(el => el.implementation_type.toLowerCase() === filterKey.value.toLowerCase())
    console.log(arr, filterKey.value.toLowerCase())
  }

  if (!!searchValue.value) {
    arr = arr.filter(el => el.label.toLowerCase().includes(searchValue.value.toLowerCase()))
  }
  return arr
})

</script>

<template>
  <div>
    <Card v-for="i in DataOnRender" :key="i._id" :objprops="i" />
  </div>
</template>