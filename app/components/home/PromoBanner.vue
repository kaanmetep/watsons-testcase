<template>
  <div class="p-4 gap-4 bg-[#F2F0FF]">
    <div class="flex flex-col gap-2">
      <h3 class="text-[#2A2A48] font-bold font-roboto text-[20px]">
        Sign Up to newsletter
      </h3>
      <p class="text-[#2A2A4899] font-normal font-roboto text-[14px]">
        Be the first to hear about the latest offers.
      </p>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <div class="flex gap-2">
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 h-[48px] p-4 rounded-[4px] border border-[#ECECEC] bg-white text-[16px] font-roboto placeholder:text-[#2A2A4899] font-normal"
        />
        <button
          class="bg-primary text-white font-bold font-roboto text-[14px] uppercase px-4 rounded-[4px]"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  </div>
  <!-- Banner Section -->
  <div class="banner-bg w-full py-8 flex justify-center">
    <div
      class="mt-[220px] bg-white p-8 rounded-tl-[40px] rounded-br-[40px] z-[2] flex flex-col gap-3 relative"
    >
      <img
        src="/assets/Nivea.png"
        alt="Nivea"
        class="absolute w-[250px] -top-[210px] left-1/2 -translate-x-1/2 z-[3]"
      />
      <div>
        <h5 class="font-normal font-roboto text-[14px] text-[#00106B]">
          EN SEVDİĞİNİZ ÜRÜNLER
        </h5>
        <h4 class="font-bold text-[16px] font-roboto text-[#00106B]">
          TEK TIKLA KAPINIZDA!
        </h4>
      </div>
      <div>
        <h1 class="font-bold text-[34px] font-rubik text-[#00106B]">60 %</h1>
        <h2
          class="font-bold text-[24px] font-rubik tracking-[-0.2px] text-[#00106B]"
        >
          DISCOUNT
        </h2>
      </div>
      <button
        class="bg-secondary text-white font-bold font-roboto text-[14px] uppercase px-4 rounded-[4px] h-[32px] w-fit"
      >
        SHOP NOW
      </button>
      <img
        src="/assets/Wing.png"
        alt="Wing"
        class="absolute z-[3] w-[251px] h-[141px] -bottom-[10px] -right-[105px]"
      />
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
