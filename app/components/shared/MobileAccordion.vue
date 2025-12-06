<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-[#ECECEC]"
    >
      <button
        @click="toggle(index)"
        class="w-full flex items-center justify-between py-4 text-left"
      >
        <span class="font-medium font-roboto text-[12px] text-[#2A2A48]">
          {{ item.title }}
        </span>
        <img
          v-if="openIndex === index"
          src="/assets/ChevronUp.png"
          alt="chevron up"
          class="w-6 h-6"
        />
        <img
          v-else
          src="/assets/ChevronDown.png"
          alt="chevron down"
          class="w-6 h-6"
        />
      </button>
      <div v-show="openIndex === index" class="pb-4 pl-4 flex flex-col gap-2">
        <a
          v-for="(link, linkIndex) in item.links"
          :key="linkIndex"
          href="#"
          class="font-normal font-roboto text-[12px] text-[#485363] flex items-center gap-2"
        >
          <img
            v-if="item.title === 'CONTACT US'"
            :src="getContactIcon(linkIndex)"
            :alt="getContactIconAlt(linkIndex)"
            class="w-4 h-4"
          />
          {{ link }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface AccordionItem {
  title: string;
  links: string[];
}

interface Props {
  items: AccordionItem[];
}

defineProps<Props>();

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
};

const getContactIcon = (index: number) => {
  const icons = [
    "/assets/LocationIcon.png",
    "/assets/FooterPhoneIcon.png",
    "/assets/MailIcon.png",
  ];
  return icons[index] || "";
};

const getContactIconAlt = (index: number) => {
  const alts = ["location", "phone", "mail"];
  return alts[index] || "";
};
</script>
