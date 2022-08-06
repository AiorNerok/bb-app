<script setup>
import { computed } from 'vue'
import { useStore } from '~/store'

const store = useStore()

const DataOnRender = computed(() => {
    return store.getFilteredDeals
})
</script>

<template>
    <div>
        <Card v-for="i in DataOnRender" :key="i._id" :objprops="i" />
    </div>
</template>
