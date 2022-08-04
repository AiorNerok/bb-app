<script setup>
import Fav from "@assets/fav.png";
import Deals from "@assets/deals.png";
import Stock from "@assets/stock.png";

const arr_links = [
  {
    to: "/favorites",
    label: "Избранное",
    icon: Fav,
  },
  {
    to: "/",
    label: "Склад",
    icon: Stock,
  },
  {
    to: "/deals",
    label: "Сделки",
    icon: Deals,
  },
];
</script>

<template>
  <header class="mt-5 text-right">
    <nav class="inline-block">
      <ul class="flex flex-row list-none">
        <li v-for="link in arr_links">
          <NuxtLink
            :to="link.to"
            class="flex items-center justify-end flex-col min-w-[86px] h-[50px] text-[13px] leadind-[13px] bg-light-gray pb-[5px] rounded-lg"
          >
            <img :src="link.icon" alt="" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
