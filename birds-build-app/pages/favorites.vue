<script setup>
import { useStore } from '~/store'

const store = useStore()

const { fav } = store



</script>

<template>
    <div>
        <Card v-for="i in fav" :key="i._id" :objprops="i" />
    </div>
</template>
