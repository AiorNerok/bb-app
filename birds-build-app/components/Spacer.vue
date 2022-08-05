<script setup lang="ts">
const props = defineProps<{
  x?: string | number
  y?: string | number
}>()
</script>

<template>
  <div :style="{
    width: props.x + 'px',
    height: props.y + 'px',
  }" />
</template>
