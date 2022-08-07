<script setup lang="ts">
import { IButton } from "~~/models/button.model";

const props = defineProps<IButton>();
</script>

<template>
  <button
    class="text-[15px] h-[50px] px-[35px] pt-[5px] tracking-[0.2px] flex-1 mr-3 bg-light-gray rounded-[10px]"
    :class="props.classes"
    @click="$emit('emitClickAction')"
  >
    <slot />
  </button>
</template>
