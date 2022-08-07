<script setup>
useHead({
  title: "I will send you to Jesus",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "description", content: "Birds Build App, oyoutuchmetralala" },
    {
      name: "my home page",
      content: "https://bit.ly/3QrZBUQ or https://urlis.net/72qky",
    },
  ],
  htmlAttrs: {
    lang: "ru",
  },
  // https://urlis.net/72qky
});

console.log(
  "My home pages: ",
  "https://bit.ly/3QrZBUQ or https://urlis.net/72qky"
);
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
    <Spacer y="30" />
  </NuxtLayout>
</template>
