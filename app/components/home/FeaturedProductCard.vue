<template>
  <div
    class="bg-white rounded-[6px] border border-[#ECECEC]/50 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] w-full h-full flex flex-col overflow-hidden"
  >
    <div class="bg-[#ECECEC29] p-4">
      <img
        :src="image"
        :alt="title"
        class="w-full aspect-[3/4] lg:aspect-[3/2] object-contain"
      />
    </div>

    <div class="p-4 sm:p-8 gap-2 flex flex-col flex-grow">
      <h4
        class="font-bold font-roboto text-[16px] sm:text-[20px] text-[#2A2A48] uppercase"
      >
        {{ price }} TL
      </h4>
      <p class="text-[14px] sm:text-[16px] font-normal color-[#485363]">
        {{ title }}
      </p>
    </div>
    <div class="h-[1px] bg-[#ECECEC] sm:hidden"></div>
    <div class="p-4 flex justify-center sm:hidden">
      <button
        class="uppercase bg-primary px-16 rounded-[4px] h-[32px] text-white text-[14px] font-roboto font-bold flex items-center justify-center gap-2"
      >
        <img
          src="/assets/AddToCartIcon.png"
          alt="add to cart"
          class="w-[16px] h-[14px]"
        />
        <h6>ADD</h6>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image: string;
  price?: number;
}
defineProps<Props>();
</script>
