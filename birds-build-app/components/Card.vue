<script setup>
import { useStore } from "~/store";

const props = defineProps(["ddb"]);

const { updateDBItemPos } = useStore();

const editItemFromDB = (id, statusType, pos) =>
  updateDBItemPos(id, statusType, pos);
</script>

<template>
  <div
    class="border-light-border border rounded-[20px] flex max-w-[1166px] h-[366px]"
  >
    <div class="pt-[19px] pl-[19px] flex flex-1">
      <div class="w-64 min-w-[16rem] h-64 rounded-[10px] overflow-hidden">
        <img src="~/assets/pic/Image.png" alt="" class="w-full h-full" />
      </div>
      <div class="pl-5">
        <p class="text-light-gray text-[13px] leading-[13px] mt-1">
          {{ props.ddb.implementation_type }}
        </p>
        <h4 class="font-medium text-[15px] mt-[14px] tracking-[0.05px]">
          {{ props.ddb.label }}
        </h4>
        <Spacer y="27" />
        <span
          class="relative text-[13px] leading-[13px] py-[5px] inline-flex items-center bg-light-gray pl-[27px] pr-2"
        >
          <img
            src="~/assets/pic/geo.png"
            alt="geo"
            class="absolute left-[7.5px]"
          />
          {{ props.ddb.address }}</span
        >
        <div class="mt-[9px] text-[13px]">
          <span class="text-light-gray leading-[13px] mr-[2px]">Продавец </span>
          {{ props.ddb.seller }}
        </div>
        <div
          class="bg-light-gray inline-block p-[5px] pl-[9px] pr-[7px] mt-[9px] text-[13px] rounded-[10px]"
        >
          <span class="text-light-gray leading-[13px]">Вид товара</span>
          <p>{{ props.ddb.product_type }}</p>
        </div>
        <div class="text-[13px] leading-[19.5px] mt-3">
          <p class="line-clamp-3 overflow-hidden text-ellipsis">
            {{ props.ddb.desc }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="min-w-[313px] border-l rounded-[20px] p-5 pr-[19px] flex flex-col justify-between"
    >
      <div class="flex flex-col justify-between">
        <p class="text-xl leading-5 font-medium">
          {{
            Intl.NumberFormat("ru-RU").format(props.ddb.price * props.ddb.count)
          }}
          {{ props.ddb.currency }}
        </p>
        <div class="flex mt-[13px] text-[13px] justify-between">
          <span class="text-light-gray leading-[13px]">Количество</span>
          <p class="leading-[1]">{{ props.ddb.count }} шт.</p>
        </div>
        <div class="flex justify-between mt-[11px] text-[13px]">
          <span class="text-light-gray leading-[13px]">Стоимость за штуку</span>
          <span class="leading-[13px]"
            >{{ Intl.NumberFormat("ru-RU").format(props.ddb.price) }}
            {{ props.ddb.currency }}</span
          >
        </div>
      </div>

      <!-- Button --------------------- -->
      <div class="flex justify-between">
        <template v-if="props.ddb.statusType === ''">
          <Button
            @emitClickAction="editItemFromDB(props.ddb._id, 'select', 'deals')"
          >
            Добавить в сделку
          </Button>
        </template>

        <template v-if="props.ddb.statusType === 'select'">
          <Button
            class="bg-green-600 text-white"
            @emitClickAction="editItemFromDB(props.ddb._id, 'buy', 'deals')"
          >
            Оплатить
          </Button>
        </template>

        <template v-if="props.ddb.statusType === 'buy'">
          <Button class="bg-white text-[#969DC3] border border-[#E0E3EE]">
            Оплачено
          </Button>
        </template>

        <template
          v-if="props.ddb.pos !== 'fav' && props.ddb.statusType !== 'buy'"
        >
          <button
            class="bg-light-gray rounded-[10px] w-[50px] flex items-center justify-center"
            @click="editItemFromDB(props.ddb._id, 'select', 'fav')"
          >
            <img
              src="~/assets/pic/fav.png"
              alt=""
              style="transform: translate(-1px, 3px)"
            />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
