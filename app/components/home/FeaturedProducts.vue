<template>
  <div class="w-full p-4 sm:py-10 flex flex-col items-center">
    <div class="w-full max-w-[1160px] gap-4 sm:gap-10 flex flex-col">
      <SharedSectionTitle title="Featured products" />
      <div v-if="pending" class="flex justify-center items-center py-8">
        Loading...
      </div>
      <div
        v-else-if="error"
        class="flex justify-center items-center py-8 text-red-500"
      >
        Error loading products
      </div>
      <div
        v-else
        class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 items-stretch"
      >
        <HomeFeaturedProductCard
          v-for="product in data?.products"
          :key="product.id"
          :id="product.id"
          :image="product.thumbnail || product.images?.[0] || ''"
          :title="product.title"
          :price="product.price"
        />
      </div>
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
