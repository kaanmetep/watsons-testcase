<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 bg-white lg:hidden">
    <!-- Header -->
    <div
      class="w-full h-[56px] bg-[#F2F0FF] flex items-center justify-center p-4"
    >
      <div class="w-full flex items-center justify-between">
        <button @click="closeMenu" class="flex-shrink-0">
          <img
            src="/assets/XIcon.png"
            alt="close"
            width="24"
            height="24"
            class="cursor-pointer"
          />
        </button>
        <h2 class="font-medium text-[#2A2A48] text-[20px]">Menu</h2>
      </div>
    </div>

    <!-- Menu Content -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-4">
        <SharedMobileAccordion
          :items="menuItems"
          chevron-position="left"
          chevron-icon="/assets/ChevronBlack.png"
          :chevron-rotate-on-open="true"
          content-align="right"
          font-size="16px"
          :is-hamburger-menu="true"
        />
      </div>
    </div>
    <div class="bg-[#ECECEC4D]">
      <ul class="flex flex-col items-end p-4 gap-4">
        <li class="flex flex-col items-end gap-2 w-full cursor-pointer">
          <div class="flex items-center gap-2">
            <p class="font-roboto font-medium text-[#485363] text-[14px]">
              My Profile
            </p>
            <img
              src="/assets/ProfileIcon.png"
              alt="profile"
              width="24"
              height="24"
            />
          </div>
          <hr class="w-full border-[#ECECEC] h-[1px]" />
        </li>
        <li class="flex flex-col items-end gap-2 w-full cursor-pointer">
          <div class="flex items-center gap-2">
            <p class="font-roboto font-medium text-[#485363] text-[14px]">
              Order History
            </p>
            <img
              src="/assets/HistoryIcon.png"
              alt="profile"
              width="24"
              height="24"
            />
          </div>
          <hr class="w-full border-[#ECECEC] h-[1px]" />
        </li>
        <li class="flex flex-col items-end gap-2 w-full cursor-pointer">
          <div class="flex items-center gap-2">
            <p class="font-roboto font-medium text-[#485363] text-[14px]">
              Help Center
            </p>
            <img
              src="/assets/QuestionmarkIcon.png"
              alt="profile"
              width="24"
              height="24"
            />
          </div>
          <hr class="w-full border-[#ECECEC] h-[1px]" />
        </li>
        <li class="flex flex-col items-end gap-2 w-full cursor-pointer">
          <div class="flex items-center gap-2">
            <p class="font-roboto font-medium text-[#485363] text-[14px]">
              Log out
            </p>
            <img
              src="/assets/LogoutIcon.png"
              alt="profile"
              width="24"
              height="24"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  title: string;
  links: string[];
}

interface UserLink {
  label: string;
  icon: string;
}

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const closeMenu = () => {
  emit("close");
};

// Prevent body scroll when menu is open
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);

onUnmounted(() => {
  document.body.style.overflow = "";
});

const menuItems: MenuItem[] = [
  {
    title: "Campaigns",
    links: ["Special Offers", "Buy 2 Get 1", "Flash Sales"],
  },
  {
    title: "Personal Care",
    links: ["Hair Care", "Body Care", "Oral Care"],
  },
  {
    title: "Skin Care",
    links: ["Facial Treatment", "Hand and Face Care", "Natural Skin Products"],
  },
  {
    title: "Make-up",
    links: ["Face Makeup", "Eye Makeup", "Lip Products"],
  },
  {
    title: "Mother & Baby",
    links: ["Baby Care", "Maternity Care", "Baby Safety"],
  },
  {
    title: "Healthy Life",
    links: ["Vitamins", "Supplements", "Wellness Products"],
  },
  {
    title: "Brands",
    links: ["Popular Brands", "New Arrivals", "Brand Offers"],
  },
];

const userLinks: UserLink[] = [
  {
    label: "My profile",
    icon: "/assets/Avatar.webp",
  },
  {
    label: "Order history",
    icon: "/assets/ShoppingCartIcon.png",
  },
  {
    label: "Help center",
    icon: "/assets/StoresIcon.png",
  },
  {
    label: "Log out",
    icon: "/assets/ChevronBlack.png",
  },
];
</script>
