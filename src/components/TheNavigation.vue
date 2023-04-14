<template>
  <div id="nav">
    <router-link to="/" id="logo">Travel App</router-link>
    <router-link
      v-for="{ id, name } in destinations"
      :key="id"
      :to="{ name: 'destination.show', params: { id: id } }"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";

const destinations = sourceData.destinations;
</script>
