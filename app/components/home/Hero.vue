<template>
  <div class="hero-wrapper w-full flex flex-col relative">
    <!-- Left Chevron -->
    <button
      class="hidden xl:block absolute left-[44px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    >
      <img src="/assets/ChevronGray.png" alt="previous" class="w-12 h-12" />
    </button>
    <!-- Right Chevron -->
    <button
      class="hidden xl:block absolute right-[44px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    >
      <img src="/assets/ChevronBlack.png" alt="next" class="w-12 h-12" />
    </button>
    <div
      class="w-full max-w-[1160px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between"
    >
      <!-- RIGHT SIDE (mobile: top, desktop: right) -->
      <div class="p-4 sm:p-0 flex justify-center sm:order-2">
        <img
          src="/assets/HeroImage.png"
          alt="hero image"
          class="w-[343px] h-[263px] sm:w-[580px] sm:h-[400px] object-contain"
        />
      </div>
      <!-- LEFT SIDE (mobile: bottom, desktop: left) -->
      <div class="flex flex-col gap-6 sm:gap-10 p-4 xl:p-0 sm:order-1">
        <div class="flex gap-4 flex-col">
          <div>
            <h6
              class="font-roboto text-[12px] sm:text-[14px] font-bold uppercase text-[#8493A8]"
            >
              Naturals By Watsons
            </h6>
            <h2
              class="font-bold text-[24px] sm:text-[34px] tracking-[-0.2px] font-rubik text-[#2A2A48]"
            >
              The new 2021 collection
            </h2>
          </div>
          <p
            class="text-[#485363] font-roboto font-normal text-[16px] leading-[24px]"
          >
            Known as "the miracle plant", Aloe Vera helps to nourish, moisturize
            and keep the hair looking smooth. Let your hair be flexible and
            fresh.
          </p>
          <button
            class="uppercase bg-primary h-[32px] rounded-[4px] px-4 text-white font-bold text-[14px] font-roboto sm:w-fit"
          >
            Shop Now
          </button>
        </div>
        <div class="flex items-center justify-center sm:justify-start gap-2">
          <div class="w-2 h-2 rounded-full bg-[#505357] cursor-pointer"></div>
          <div
            class="w-1.5 h-1.5 rounded-full bg-[#8493A866] cursor-pointer"
          ></div>
          <div
            class="w-1.5 h-1.5 rounded-full bg-[#8493A866] cursor-pointer"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-wrapper {
  background: linear-gradient(
    180deg,
    #f2f0ff 0%,
    #ffffff 72%,
    #fbfbff 77%,
    #f2f0ff 100%
  );
}
</style>
