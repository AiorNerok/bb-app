<script setup>
const props = defineProps({
  class: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <button
    class="text-[15px] h-[50px] px-[35px] pt-[5px] tracking-[0.2px] flex-1 mr-3 bg-light-gray rounded-[10px]"
    :class="props.class"
    @click="$emit('emitClickAction')"
  >
    <slot />
  </button>
</template>
