<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
        v-for="{ id, slug, name, image } in sourceData.destinations"
        :key="id"
        :to="slug"
      >
        <h2>{{ name }}</h2>
        <img :src="`/images/${image}`" :alt="name" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
</script>
