<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <ExperienceCard
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :experience="experience"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";

const route = useRoute();

const destinationId = computed(() => {
  return parseInt(route.params.id);
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === destinationId.value
  );
});
</script>
