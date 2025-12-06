<template>
  <div
    class="h-[32px] md:h-[40px] w-full bg-[#505357] flex items-center justify-center"
  >
    <div
      class="w-full max-w-[1160px] px-4 lg:px-0 h-[30px] flex items-center justify-between"
    >
      <div class="flex gap-2 text-white">
        <div
          class="flex items-center justify-center gap-2 font-roboto font-medium text-[14px] px-4 cursor-pointer hover:bg-[#FFFFFF33] transition-colors duration-[60ms] rounded-[4px]"
        >
          <img src="/assets/StoresIcon.png" alt="logo" width="18" height="14" />
          <p>Stores</p>
        </div>
        <div
          class="flex items-center justify-center gap-2 font-roboto font-medium text-[14px] px-4 cursor-pointer hover:bg-[#FFFFFF33] transition-colors duration-[60ms] rounded-[4px]"
        >
          <img
            src="/assets/CatalogIcon.png"
            alt="logo"
            width="18"
            height="14"
          />
          <p>Catalog</p>
        </div>
      </div>
      <p
        class="hidden lg:block text-[#ECECEC80] font-normal text-[14px] font-roboto"
      >
        Watsons Beauty and Personal Care Awards Nominees!
      </p>
      <div class="flex items-center gap-2">
        <p class="font-medium text-[14px] text-white hidden sm:block">
          Call us:(+90) 850 123 45 67
        </p>
        <img
          src="/assets/PhoneIcon.png"
          alt="user"
          width="24"
          height="24"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
