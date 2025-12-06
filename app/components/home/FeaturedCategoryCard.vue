<template>
  <div
    class="p-[40px] w-full rounded-[6px] border border-[#ECECEC]/50 relative overflow-hidden"
  >
    <img
      :src="image"
      :alt="title"
      class="w-full h-full absolute inset-0 object-cover"
    />
    <div class="relative">
      <div
        class="bg-white/90 rounded-[6px] p-4 flex flex-col gap-2 items-center"
      >
        <h4
          class="font-bold font-roboto text-[20px] text-[#2A2A48] text-center"
        >
          {{ title }}
        </h4>
        <p
          v-if="description"
          class="font-normal font-roboto text-[14px] text-[#485363] text-center"
        >
          {{ description }}
        </p>
        <button
          class="bg-secondary hover:bg-secondary-dark text-white font-bold font-roboto text-[14px] uppercase px-4 rounded-[4px] h-[32px] transition-colors duration-[60ms]"
        >
          BROWSE
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image: string;
  description?: string;
}

defineProps<Props>();
</script>
