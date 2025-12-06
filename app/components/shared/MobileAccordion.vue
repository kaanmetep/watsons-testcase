<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'flex flex-col gap-4 pb-2',
        !(isHamburgerMenu && index === items.length - 1)
          ? 'border-b border-[#ECECEC]'
          : '',
      ]"
    >
      <button
        @click="toggle(index)"
        :class="[
          'w-full flex items-center text-left',
          !isHamburgerMenu && chevronPosition === 'left'
            ? 'justify-between gap-3'
            : 'justify-between',
          isHamburgerMenu
            ? 'rounded-[6px] transition-all duration-[100ms] ease-in-out'
            : '',
          isHamburgerMenu && openIndex === index ? 'bg-[#ECECEC4D] p-2' : '',
        ]"
      >
        <img
          v-if="
            chevronPosition === 'left' &&
            (!isHamburgerMenu || openIndex !== index)
          "
          :src="chevronIcon"
          alt="chevron"
          class="w-6 h-6 flex-shrink-0 transition-all duration-[100ms] ease-in-out rotate-180"
        />
        <span
          class="font-medium font-roboto text-[#2A2A48]"
          :style="{ fontSize: fontSize }"
          :class="[
            isHamburgerMenu ? 'ml-auto' : '',
            isHamburgerMenu && openIndex === index ? 'mr-3' : '',
          ]"
        >
          {{ item.title }}
        </span>
        <img
          v-if="
            (chevronPosition === 'left' &&
              isHamburgerMenu &&
              openIndex === index) ||
            chevronPosition === 'right'
          "
          :src="
            chevronPosition === 'right'
              ? openIndex === index
                ? chevronIconOpen
                : chevronIcon
              : chevronIcon
          "
          alt="chevron"
          class="w-6 h-6 flex-shrink-0 transition-all duration-[100ms] ease-in-out"
        />
      </button>
      <div
        v-show="openIndex === index"
        :class="[
          'flex flex-col gap-2 w-full pb-4',
          contentAlign === 'right' ? 'pr-4 items-end' : 'pl-4 items-start',
        ]"
      >
        <a
          v-for="(link, linkIndex) in item.links"
          :key="linkIndex"
          href="#"
          :class="[
            'font-normal font-roboto text-[#485363]',
            contentAlign === 'right'
              ? 'text-right block'
              : 'text-left flex items-center gap-2',
          ]"
          :style="{ fontSize: fontSize }"
        >
          <img
            v-if="item.title === 'CONTACT US' && contentAlign === 'left'"
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
  chevronPosition?: "left" | "right";
  chevronIcon?: string;
  chevronIconOpen?: string;
  chevronRotateOnOpen?: boolean;
  contentAlign?: "left" | "right";
  fontSize?: string;
  isHamburgerMenu?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  chevronPosition: "right",
  chevronIcon: "/assets/ChevronDown.png",
  chevronIconOpen: "/assets/ChevronUp.png",
  chevronRotateOnOpen: false,
  contentAlign: "left",
  fontSize: "12px",
  isHamburgerMenu: false,
});

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
