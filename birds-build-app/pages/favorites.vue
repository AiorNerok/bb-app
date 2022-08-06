<script setup>
import { useStore } from '~/store'

const store = useStore()

const DataOnRender = computed(() => {
    return store.getFilteredFav
})

</script>

<template>
    <div>
        <Card v-for="i in DataOnRender" :key="i._id" :objprops="i" />
    </div>
</template>
