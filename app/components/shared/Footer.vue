<template>
  <footer class="flex flex-col gap-6 p-4 bg-white">
    <!-- Links -->
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
      class="text-[#8493A8] font-medium font-roboto text-[12px] text-center uppercase"
    >
      © Watsons 2021 all rıghts reserved <br />
      a member of ck hutchıson holdıngs
    </p>
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
</script>
