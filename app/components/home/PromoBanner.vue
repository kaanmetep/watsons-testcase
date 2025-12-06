<template>
  <div class="p-4 lg:p-10 gap-4 bg-[#F2F0FF] w-full relative">
    <div
      class="w-full max-w-[1160px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div class="flex flex-col gap-2 md:gap-4">
        <h3
          class="text-[#2A2A48] font-bold font-roboto text-[20px] md:text-[24px]"
        >
          Sign Up to newsletter
        </h3>
        <p
          class="text-[#2A2A4899] font-normal font-roboto text-[14px] md:text-[16px]"
        >
          Be the first to hear about the latest offers.
        </p>
      </div>
      <div class="flex gap-2 w-full md:w-auto md:flex-shrink-0">
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 md:flex-none md:w-[412px] h-[48px] p-4 rounded-[4px] border border-[#ECECEC] bg-white text-[16px] font-roboto placeholder:text-[#2A2A4899] font-normal"
        />
        <button
          class="bg-primary hover:bg-primary-dark text-white font-bold font-roboto text-[14px] uppercase px-4 rounded-[4px] whitespace-nowrap transition-colors duration-[60ms]"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  </div>
  <!-- Banner Section -->
  <div
    class="banner-bg w-full min-h-[514px] sm:min-h-[400px] flex justify-center sm:items-center"
  >
    <div class="w-full max-w-[1160px] mx-auto flex justify-center">
      <div
        class="mt-[220px] sm:mt-0 bg-white p-8 rounded-tl-[40px] rounded-br-[40px] z-[2] flex flex-col gap-3 relative h-fit"
      >
        <div>
          <h5 class="font-normal font-roboto text-[14px] text-[#00106B]">
            EN SEVDİĞİNİZ ÜRÜNLER
          </h5>
          <h4 class="font-bold text-[16px] font-roboto text-[#00106B]">
            TEK TIKLA KAPINIZDA!
          </h4>
        </div>
        <div>
          <h1
            class="font-bold text-[34px] font-rubik text-[#00106B] mb-0 leading-none"
          >
            60 %
          </h1>
          <h2
            class="font-bold text-[24px] font-rubik tracking-[-0.2px] text-[#00106B] mt-0 leading-none"
          >
            DISCOUNT
          </h2>
        </div>
        <button
          class="bg-secondary hover:bg-secondary-dark text-white font-bold font-roboto text-[14px] uppercase px-4 rounded-[4px] h-[32px] w-fit transition-colors duration-[60ms] cursor-pointer relative z-[4]"
        >
          SHOP NOW
        </button>
        <img
          src="/assets/Nivea.png"
          alt="Nivea"
          class="absolute -top-[210px] left-[50%] -translate-x-1/2 sm:top-[10px] sm:left-[190px] sm:right-0 sm:bottom-0 sm:translate-x-0 z-[3]"
        />
        <img
          src="/assets/Wing.png"
          alt="Wing"
          class="absolute z-[3] -bottom-[10px] -right-[105px] sm:-left-[225px] sm:top-20 sm:scale-[2]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.banner-bg {
  background-color: #138a964d;
  background: linear-gradient(180deg, #10a0ae 0%, #62d6e1 50%, #15a6b5 100%),
    url("/assets/BannerBG.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.banner-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #138a964d;
  z-index: -1;
}

.banner-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/assets/BannerBG.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  z-index: 0;
}
</style>
