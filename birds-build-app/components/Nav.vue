<script setup>
import Fav from "@assets/fav.png";
import Deals from "@assets/deals.png";
import Stock from "@assets/stock.png";

const { path } = useRoute()

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
        <li v-for="{ to, icon, label } in arr_links">
          <NuxtLink :to="to" :class="{ 'bg-light-gray': path === to }"
            class="flex items-center justify-end flex-col min-w-[86px] h-[50px] text-[13px] leadind-[13px] pb-[5px] rounded-lg">
            <img :src="icon" alt="" />
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
