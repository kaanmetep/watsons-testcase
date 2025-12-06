<template>
  <div class="p-4 gap-4">
    <SharedSectionTitle title="Featured categories" />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 justify-items-center"
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
