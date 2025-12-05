<template>
  <div class="h-[32px] w-full bg-[#505357] flex items-center">
    <div class="px-4 h-[30px] flex items-center justify-between w-full">
      <div class="flex gap-2 text-white">
        <div
          class="flex items-center justify-center gap-2 font-roboto font-medium text-[14px] px-4 cursor-pointer"
        >
          <img src="/assets/StoresIcon.png" alt="logo" width="18" height="14" />
          <p>Stores</p>
        </div>
        <div
          class="flex items-center justify-center gap-2 font-roboto font-medium text-[14px] px-4 cursor-pointer"
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
      <img
        src="/assets/PhoneIcon.png"
        alt="user"
        width="24"
        height="24"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
