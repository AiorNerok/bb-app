<script setup lang="ts">
import { INav } from "~/models/nav.model";

import Fav from "@assets/pic/fav.png";
import Deals from "@assets/pic/deals.png";
import Stock from "@assets/pic/stock.png";

const route = useRoute();

const path = computed<string>(() => route.path);

const arr_links: INav[] = [
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
          <NuxtLink
            :to="to"
            :class="{ 'bg-light-gray': path === to }"
            class="flex items-center justify-end flex-col min-w-[86px] h-[50px] text-[13px] leadind-[13px] pb-[5px] rounded-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg hover:shadow-light-gray"
          >
            <img :src="icon" alt="" />
            {{ label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
