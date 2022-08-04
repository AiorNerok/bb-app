<script></script>

<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="bg-[#E0E3EE] h-10 w-full rounded-b-xl"></div>
    <Nav />
    <Spacer y=77 />
    <div class="flex justify-between">
      <Tabs />
      <Search />
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>
