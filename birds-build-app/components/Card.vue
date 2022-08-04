<script setup>
import Img from "@assets/Image.png";
import Fav from "@assets/fav.png";
</script>

<template>
  <div class="border-light-border border rounded-[20px] flex">
    <div class="pt-[19px] pl-[19px] flex">
      <div class="w-64 min-w-[16rem] h-64 rounded-[10px] overflow-hidden">
        <img :src="Img" alt="" class="w-full h-full" />
      </div>
      <div class="pl-5">
        <p class="text-light-gray text-[13px] leading-[13px] mt-1">Аукцион</p>
        <h4 class="font-medium text-[15px] mt-[14px] tracking-[0.05px]">
          Пиломатериалы брус доска
        </h4>
        <span class="text-[13px] leading-[13px]">Санкт-Петербург, Красное Село</span>
        <div>
          <span class="text-light-gray text-[13px] leading-[13px]"
            >Продавец
          </span>
          Торговый Дом ГОСТ
        </div>
        <div>
          <span class="text-light-gray text-[13px] leading-[13px]"
            >Вид товара</span
          >
          <p>Стройматериалы</p>
        </div>
        <p class="text-[13px] leading-[19.5px]">
          Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием
          ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со скидками до закрытия
          01.06.2022 ! Мы стараемся быть не такими как все и даем вам: Доставка
          в согласованный день, если переносим - доставка бесплатно за наш счет.
          Весь материал соответствует гостам. Вы можете проверить пиломатериалы
          на складе или на адресе. Если материал не соответствует заявленному
          качеству - бесплатно меняем его.
        </p>
      </div>
    </div>

    <div class="min-w-[314px]">
      <div>
        <p class="text-5 leading-5 font-medium">33 000 ₽</p>
        <div>
          <span class="text-light-gray text-[13px] leading-[13px]"
            >Количество</span
          >
          <p>3 шт.</p>
        </div>
        <div>
          <span class="text-light-gray text-[13px] leading-[13px]"
            >Стоимость за штуку</span
          >
          <p>11 000 ₽</p>
        </div>
      </div>
      <div>
        <button>Добавить в сделки</button>
        <button><img :src="Fav" alt="" /></button>
      </div>
    </div>
  </div>
</template>
