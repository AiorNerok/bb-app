<script setup>
import { useStore } from '~/store'

const store = useStore()

const { deals } = store



</script>

<template>
    <div>
        <Card v-for="i in deals" :key="i._id" :objprops="i" />
    </div>
</template>
