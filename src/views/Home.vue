<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
        v-for="{ id, name, image } in destinations"
        :key="id"
        :to="{ name: 'destination.show', params: { id: id } }"
      >
        <h2>{{ name }}</h2>
        <img :src="`/images/${image}`" :alt="name" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";

const destinations = sourceData.destinations;
</script>
