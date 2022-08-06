<script setup>
import { useStore } from '~/store'
const props = defineProps({
  objprops: Object
})

const { _id, implementation_type, label, address, seller, product_type, desc, price, currency, count } = props.objprops

const store = useStore()

const pullOutData = (id) => {
  const idx = store.data.findIndex(el => el._id === id)
  return store.data[idx]
}

const toDeals = (id) => store.setDeals(pullOutData(id))
const toFav = (id) => store.setFav(pullOutData(id))

</script>

<template>
  <div class="border-light-border border rounded-[20px] flex max-w-[1166px] h-[366px]">
    <div class="pt-[19px] pl-[19px] flex flex-1">
      <div class="w-64 min-w-[16rem] h-64 rounded-[10px] overflow-hidden">
        <img src="~/assets/Image.png" alt="" class="w-full h-full" />
      </div>
      <div class="pl-5">
        <p class="text-light-gray text-[13px] leading-[13px] mt-1">{{ implementation_type }}</p>
        <h4 class="font-medium text-[15px] mt-[14px] tracking-[0.05px]">{{ label }}</h4>
        <Spacer y="27" />
        <span
          class="relative text-[13px] leading-[13px] py-[5px] inline-flex items-center bg-light-gray pl-[27px] pr-2">
          <img src="~/assets/geo.png" alt="geo" class="absolute left-[7.5px]" />
          {{ address }}</span>
        <div class="mt-[9px] text-[13px]">
          <span class="text-light-gray leading-[13px] mr-[2px]">Продавец </span>
          {{ seller }}
        </div>
        <div class="bg-light-gray inline-block p-[5px] pl-[9px] pr-[7px] mt-[9px] text-[13px] rounded-[10px]">
          <span class="text-light-gray leading-[13px]">Вид товара</span>
          <p>{{ product_type }}</p>
        </div>
        <div class="text-[13px] leading-[19.5px] mt-3">
          <p class="line-clamp-3 overflow-hidden text-ellipsis">{{ desc }}</p>
        </div>
      </div>
    </div>

    <div class="min-w-[313px] border-l rounded-[20px] p-5 pr-[19px] flex flex-col justify-between">
      <div class="flex flex-col justify-between">
        <p class="text-xl leading-5 font-medium">{{ Intl.NumberFormat('ru-RU').format(price * count) }} {{ currency }}
        </p>
        <div class="flex mt-[13px] text-[13px] justify-between">
          <span class="text-light-gray leading-[13px]">Количество</span>
          <p class="leading-[1]">{{ count }} шт.</p>
        </div>
        <div class="flex justify-between mt-[11px] text-[13px]">
          <span class="text-light-gray leading-[13px]">Стоимость за штуку</span>
          <span class="leading-[13px]">{{ Intl.NumberFormat('ru-RU').format(price) }} {{ currency }}</span>
        </div>
      </div>
      <div class="flex justify-between">
        <button @click="toDeals(_id)"
          class="text-[15px] h-[50px] px-[35px] pt-[5px] tracking-[0.2px] bg-light-gray rounded-[10px]">
          Добавить в сделки
        </button>
        <button class="bg-light-gray rounded-[10px] w-[50px] flex items-center justify-center" @click="toFav(_id)">
          <img src="~/assets/fav.png" alt="" style="transform: translate(-1px, 3px)" />
        </button>
      </div>
    </div>
  </div>
</template>
