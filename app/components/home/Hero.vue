<template>
  <div class="hero-wrapper flex flex-col">
    <!-- TOP SIDE(mobile) , RIGHT SIDE(desktop)  -->
    <div class="p-4 flex justify-center">
      <img
        src="/assets/HeroImage.png"
        alt="hero image"
        width="343"
        height="263"
      />
    </div>
    <!-- BOTTOM SIDE(mobile) , LEFT SIDE(desktop)  -->
    <div class="flex flex-col gap-6 p-4">
      <div class="flex gap-4 flex-col">
        <div>
          <h6
            class="font-roboto text-[12px] font-bold uppercase text-[#8493A8]"
          >
            Naturals By Watsons
          </h6>
          <h2
            class="font-bold text-[24px] tracking-[-0.2px] font-rubik text-[#2A2A48]"
          >
            The new 2021 collection
          </h2>
        </div>
        <p
          class="text-[#485363] font-roboto font-normal text-[16px] leading-[24px]"
        >
          Known as "the miracle plant", Aloe Vera helps to nourish, moisturize
          and keep the hair looking smooth. Let your hair be flexible and fresh.
        </p>
        <button
          class="uppercase bg-primary h-[32px] rounded-[4px] px-4 text-white font-bold text-[14px] font-roboto"
        >
          Shop Now
        </button>
      </div>
      <div class="flex items-center justify-center gap-2">
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
