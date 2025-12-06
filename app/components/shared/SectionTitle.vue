<template>
  <div class="flex gap-8 items-center justify-between">
    <div class="h-[1px] flex-1 bg-[#0099A81A]"></div>
    <h3
      class="text-secondary font-medium font-roboto text-[20px] whitespace-nowrap"
    >
      {{ title }}
    </h3>
    <div class="h-[1px] flex-1 bg-[#0099A81A]"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>
