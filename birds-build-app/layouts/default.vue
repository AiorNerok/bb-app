<script setup>

</script>

<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="bg-[#E0E3EE] h-10 w-full rounded-b-xl"></div>
    <Nav />
    <Spacer y="77" />
    <div class="flex justify-between items-center -translate-x-4">
      <Tabs />
      <Search />
    </div>
    <Spacer y="40" />
    <main>
      <slot />
    </main>
  </div>
</template>
