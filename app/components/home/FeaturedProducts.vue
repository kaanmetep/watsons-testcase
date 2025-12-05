<template>
  <div class="p-4 gap-4">
    <div class="flex gap-8 items-center justify-between">
      <div class="h-[1px] flex-1 bg-[#0099A81A]"></div>
      <h3
        class="text-secondary font-medium font-roboto text-[20px] whitespace-nowrap"
      >
        Featured products
      </h3>

      <div class="h-[1px] flex-1 bg-[#0099A81A]"></div>
    </div>
    <div v-if="pending" class="flex justify-center items-center py-8">
      Loading...
    </div>
    <div
      v-else-if="error"
      class="flex justify-center items-center py-8 text-red-500"
    >
      Error loading products
    </div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <HomeCard
        v-for="product in data?.products"
        :key="product.id"
        :image="product.thumbnail || product.images?.[0] || ''"
        :title="product.title"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
const { data, pending, error } = await useFetch<ApiResponse>(
  "https://dummyjson.com/products?limit=4"
);
</script>
