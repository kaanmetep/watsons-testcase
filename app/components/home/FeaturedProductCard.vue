<template>
  <div
    class="bg-white rounded-[6px] border border-[#ECECEC]/50 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] w-full h-full flex flex-col overflow-hidden group cursor-pointer"
  >
    <div class="bg-[#ECECEC29] p-4 sm:p-0 relative">
      <img
        :src="image"
        :alt="title"
        class="w-full aspect-[3/4] lg:aspect-[3/2] object-contain"
      />
      <!-- Hover Buttons (bottom of image div) -->
      <div
        class="hidden sm:flex absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[60ms] ease-in-out bg-[#000000CC] items-center justify-center h-[48px] gap-4"
      >
        <button
          class="flex items-center justify-center gap-2 hover:bg-[#FFFFFF33] transition-colors duration-[60ms] px-4 rounded-[4px]"
        >
          <img
            src="/assets/EyeIcon.png"
            alt="quick view"
            class="w-4 h-[14px] brightness-0 invert"
          />
          <span class="text-[14px] font-roboto font-medium text-white"
            >Quick View</span
          >
        </button>
        <div class="w-[1px] h-[16px] bg-white/20"></div>
        <button
          class="flex items-center justify-center gap-2 hover:bg-[#FFFFFF33] transition-colors duration-[60ms] px-4 rounded-[4px]"
        >
          <img
            src="/assets/AddToCartIcon.png"
            alt="add to cart"
            class="w-4 h-[14px] brightness-0 invert"
          />
          <span class="text-[14px] font-roboto font-medium text-white"
            >Add</span
          >
        </button>
      </div>
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
    <!-- Mobile ADD Button -->
    <div class="h-[1px] bg-[#ECECEC] sm:hidden"></div>
    <div class="p-4 flex justify-center sm:hidden">
      <button
        class="uppercase bg-primary hover:bg-primary-dark px-16 rounded-[4px] h-[32px] text-white text-[14px] font-roboto font-bold flex items-center justify-center gap-2 transition-colors duration-[60ms]"
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
