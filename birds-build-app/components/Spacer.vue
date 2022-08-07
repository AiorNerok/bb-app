<script setup lang="ts">
import { ISpacer } from "~~/models/spacer.model";

const props = defineProps<ISpacer>();
</script>

<template>
  <div
    :style="{
      width: props.x + 'px',
      height: props.y + 'px',
    }"
  />
</template>
