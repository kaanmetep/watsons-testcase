<template>
  <div
    class="bg-white rounded-[6px] border border-[#ECECEC]/50 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] w-full h-fit flex flex-col overflow-hidden"
  >
    <div class="bg-[#ECECEC29] p-4">
      <img :src="image" :alt="title" class="w-full aspect-[3/4] object-cover" />
    </div>
    <div>
      <div class="p-4 gap-2">
        <h4 class="font-bold font-roboto text-[16px] text-[#2A2A48] uppercase">
          {{ price }} TL
        </h4>
        <p class="text-[14px] font-normal color-[#485363]">{{ title }}</p>
      </div>
      <div class="h-[1px] bg-[#ECECEC]"></div>
      <div class="p-4 flex justify-center">
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
