<template>
  <div>
    <div
      class="w-full px-4 h-[56px] lg:h-[72px] flex items-center justify-center"
    >
      <div class="w-full max-w-[1160px] flex items-center gap-4">
        <!-- Logo -->
        <img
          src="/assets/WatsonsLogo.png"
          alt="header"
          width="120"
          height="24.15"
          class="cursor-pointer flex-shrink-0"
        />
        <!-- Right Side -->
        <div class="flex items-center gap-4 lg:gap-6 ml-auto flex-shrink-0">
          <!-- Mobile Icons -->
          <img
            src="/assets/SearchIcon.png"
            alt="search"
            width="32"
            height="32"
            class="cursor-pointer lg:hidden"
          />
          <!-- Search Bar (desktop only) -->
          <div class="hidden lg:flex items-center w-[560px]">
            <div
              class="relative w-full h-[42px] flex items-center rounded-[4px] bg-white"
            >
              <img
                src="/assets/SearchIcon.png"
                alt="search"
                width="24"
                height="24"
                class="absolute left-4 opacity-60"
              />
              <input
                type="text"
                placeholder="Write the product or category you are looking for"
                class="w-full h-full px-2 pl-12 text-[14px] font-roboto placeholder:text-[#8493A8] text-[#2A2A48] rounded-[32px] bg-[#ECECEC4D]"
              />
            </div>
          </div>
          <!-- Desktop Avatar Section -->
          <div class="hidden lg:flex items-center gap-4">
            <p class="text-[#2A2A48] font-medium text-[14px]">
              <span class="text-[#8493A8] font-normal">Hello</span>, Clara Clara
            </p>
            <img
              src="/assets/Avatar.webp"
              alt="avatar"
              class="w-9 h-9 rounded-full object-cover border-2 border-white"
              style="box-shadow: 0px 2px 16px 0px rgba(42, 42, 72, 0.06)"
            />
            <img
              src="/assets/ChevronDown.png"
              alt="dropdown"
              width="24"
              height="24"
              class="cursor-pointer opacity-60"
            />
          </div>
          <!-- Divider (desktop only) -->
          <div class="hidden lg:block w-[0.5px] h-[24px] bg-[#ECECEC]"></div>
          <!-- Shopping Cart -->
          <img
            src="/assets/ShoppingCartIcon.png"
            alt="shopping cart"
            width="25"
            height="56"
            class="cursor-pointer"
          />
          <!-- Menu Icon (mobile only) -->
          <img
            src="/assets/MenuIcon.png"
            alt="menu"
            width="32"
            height="32"
            class="cursor-pointer lg:hidden"
            @click="openMenu"
          />
        </div>
      </div>
    </div>
    <!-- Navigation Menu -->
    <div class="hidden lg:flex w-full h-[48px] items-center justify-center">
      <div class="w-full max-w-[1160px] mx-auto">
        <nav class="flex items-center justify-between">
          <a
            v-for="item in menuItems"
            :key="item"
            href="#"
            class="text-[#2A2A48] font-roboto text-[14px] font-bold uppercase px-4 cursor-pointer hover:bg-[#ECECEC4D] rounded-t-[4px] transition-colors duration-[60ms]"
          >
            {{ item }}
          </a>
        </nav>
      </div>
    </div>
    <!-- Mobile Menu -->
    <SharedMobileMenu :is-open="isMobileMenuOpen" @close="closeMenu" />
  </div>
</template>
<script setup lang="ts">
const menuItems = [
  "Campaigns",
  "Personal Care",
  "Skin Care",
  "Make-Up",
  "Mother & Baby",
  "Men Care",
  "Healthy Life",
  "Brands",
];

const isMobileMenuOpen = ref(false);

const openMenu = () => {
  isMobileMenuOpen.value = true;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
