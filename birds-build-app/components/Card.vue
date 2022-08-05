<script setup>
import Img from "@assets/Image.png";
import Fav from "@assets/fav.png";
import Geo from "@assets/geo.png";
</script>

<template>
  <div
    class="border-light-border border rounded-[20px] flex max-w-[1166px] h-[366px]"
  >
    <div class="pt-[19px] pl-[19px] flex flex-1">
      <div class="w-64 min-w-[16rem] h-64 rounded-[10px] overflow-hidden">
        <img :src="Img" alt="" class="w-full h-full" />
      </div>
      <div class="pl-5">
        <p class="text-light-gray text-[13px] leading-[13px] mt-1">Аукцион</p>
        <h4 class="font-medium text-[15px] mt-[14px] tracking-[0.05px]">
          Пиломатериалы брус доска
        </h4>
        <Spacer y="27" />
        <span
          class="relative text-[13px] leading-[13px] py-[5px] inline-flex items-center bg-light-gray pl-[27px] pr-2"
        >
          <img :src="Geo" alt="geo" class="absolute left-[7.5px]" />
          Санкт-Петербург, Красное Село</span
        >
        <div class="mt-[9px] text-[13px]">
          <span class="text-light-gray leading-[13px] mr-[2px]">Продавец </span>
          Торговый Дом ГОСТ
        </div>
        <div
          class="bg-light-gray inline-block p-[5px] pl-[9px] pr-[7px] mt-[9px] text-[13px] rounded-[10px]"
        >
          <span class="text-light-gray leading-[13px]">Вид товара</span>
          <p>Стройматериалы</p>
        </div>
        <div class="text-[13px] leading-[19.5px] mt-3">
          <p class="line-clamp-3 overflow-hidden text-ellipsis">
            Пиломатериалы брус доска. Распродажа пиломатериалов в связи
            закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со скидками до
            закрытия 01.06.2022 ! Мы стараемся быть не такими как все и даем
            вам: Доставка в согласованный день, если переносим - доставка
            бесплатно за наш счет. Весь материал соответствует гостам. Вы можете
            проверить пиломатериалы на складе или на адресе. Если материал не
            соответствует заявленному качеству - бесплатно меняем его.
          </p>
        </div>
      </div>
    </div>

    <div
      class="min-w-[313px] border-l rounded-[20px] p-5 pr-[19px] flex flex-col justify-between"
    >
      <div class="flex flex-col justify-between">
        <p class="text-xl leading-5 font-medium">33 000 ₽</p>
        <div class="flex mt-[13px] text-[13px] justify-between">
          <span class="text-light-gray leading-[13px]">Количество</span>
          <p class="leading-[1]">3 шт.</p>
        </div>
        <div class="flex justify-between mt-[11px] text-[13px]">
          <span class="text-light-gray leading-[13px]">Стоимость за штуку</span>
          <span class="leading-[13px]">11 000 ₽</span>
        </div>
      </div>
      <div class="flex justify-between">
        <button
          class="text-[15px] h-[50px] px-[35px] pt-[5px] tracking-[0.2px] bg-light-gray rounded-[10px]"
        >
          Добавить в сделки
        </button>
        <button
          class="bg-light-gray rounded-[10px] w-[50px] flex items-center justify-center"
        >
          <img :src="Fav" alt="" style="transform: translate(-1px, 3px)" />
        </button>
      </div>
    </div>
  </div>
</template>
