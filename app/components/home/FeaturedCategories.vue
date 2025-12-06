<template>
  <div class="w-full p-4 sm:py-10 gap-4 flex flex-col items-center">
    <div class="flex flex-col lg:gap-10 w-full max-w-[760px]">
      <SharedSectionTitle title="Featured categories" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 justify-items-center"
      >
        <HomeFeaturedCategoryCard
          v-for="(category, index) in categories"
          :key="index"
          :image="category.image"
          :title="category.title"
          :description="category.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    image: "/assets/FeaturedCategory-1.jpg",
    title: "Personal Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
  },
  {
    image: "/assets/FeaturedCategory-2.jpg",
    title: "Skin Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
  },
  {
    image: "/assets/FeaturedCategory-3.jpg",
    title: "Make - Up",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
  },
  {
    image: "/assets/FeaturedCategory-4.jpg",
    title: "Mother & Baby",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
  },
];
</script>
