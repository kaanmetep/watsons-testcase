<template>
  <footer
    class="w-full flex flex-col gap-6 p-4 md:py-12 md:gap-8 bg-white items-center"
  >
    <div class="w-full max-w-[1160px] flex flex-col gap-6">
      <!-- Mobile Section -->
      <div class="flex flex-col gap-6 md:hidden">
        <SharedMobileAccordion :items="accordionItems" />
        <!-- Socials -->
        <div class="flex gap-6 items-center justify-center">
          <img
            v-for="social in socials"
            :key="social.url"
            :src="social.image"
            :alt="social.url"
            class="w-8 h-8 cursor-pointer"
          />
        </div>
        <!-- Copyright Text -->
        <p
          class="text-[#8493A8] font-medium font-roboto text-[10px] text-center"
        >
          © WATSONS 2021 ALL RIGHTS RESERVED<br />
          A MEMBER OF CK HUTCHISON HOLDINGS
        </p>
      </div>
      <!-- Desktop Columns (visible only on md-768px- and above) -->
      <div class="hidden md:grid md:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-10">
        <div
          v-for="(item, index) in accordionItems"
          :key="index"
          class="flex flex-col gap-10"
        >
          <h3
            class="font-medium font-roboto text-[12px] text-[#2A2A48] uppercase"
          >
            {{ item.title }}
          </h3>
          <ul class="flex flex-col gap-4">
            <li v-for="(link, linkIndex) in item.links" :key="linkIndex">
              <a
                href="#"
                :class="[
                  'font-normal font-roboto text-[12px] text-[#485363] flex items-start gap-2',
                  item.title === 'CONTACT US' ? 'max-w-none' : '',
                ]"
              >
                <img
                  v-if="item.title === 'CONTACT US'"
                  :src="getContactIcon(linkIndex)"
                  :alt="getContactIconAlt(linkIndex)"
                  class="w-4 h-4 mt-0.5 flex-shrink-0"
                />
                <span class="break-words">{{ link }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Desktop Bottom Section -->
      <div
        class="hidden md:flex md:flex-row md:items-center md:justify-between gap-4 pt-4"
      >
        <!-- Desktop Copyright Text -->
        <p
          class="text-[#8493A8] font-medium font-roboto text-[10px] text-center"
        >
          © WATSONS 2021 ALL RIGHTS RESERVED | A MEMBER OF CK HUTCHISON HOLDINGS
        </p>
        <!-- Desktop Socials -->
        <div class="flex gap-6 items-center justify-end">
          <img
            v-for="social in socials"
            :key="social.url"
            :src="social.image"
            :alt="social.url"
            class="w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const accordionItems = [
  {
    title: "CORPORATE",
    links: ["About us", "Press", "Human resources", "News from us"],
  },
  {
    title: "SHOPPING",
    links: [
      "Order and Payment",
      "Cancellation and Refund",
      "Delivery Conditions",
      "Secure shopping",
    ],
  },
  {
    title: "LEGAL",
    links: [
      "Terms of Use",
      "Privacy Policy",
      "Membership Agreement",
      "Distance Selling Contract",
    ],
  },
  {
    title: "HELP CENTER",
    links: ["FAQ", "Contact center"],
  },
  {
    title: "CONTACT US",
    links: [
      "Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768 Ümraniye/İstanbul",
      "0850 755 9987",
      "info@watsons.com.tr",
    ],
  },
];
const socials = [
  {
    image: "/assets/FacebookIcon.png",
    url: "https://www.facebook.com/watsons.com.tr",
  },
  {
    image: "/assets/InstagramIcon.png",
    url: "https://www.instagram.com/watsons.com.tr",
  },
  {
    image: "/assets/TwitterIcon.png",
    url: "https://www.twitter.com/watsons.com.tr",
  },
  {
    image: "/assets/YoutubeIcon.png",
    url: "https://www.youtube.com/watsons.com.tr",
  },
  {
    image: "/assets/PinterestIcon.png",
    url: "https://www.linkedin.com/watsons.com.tr",
  },
];

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
