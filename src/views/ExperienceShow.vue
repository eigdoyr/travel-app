<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>experience.description</p>
  </section>
</template>

<script setup>
import sourceDate from "@/data.json";

const props = defineProps({
  id: { type: Number, required: true },
  experienceSlug: { type: String, required: true },
});
</script>
