<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";

const route = useRoute();

const destinationId = computed(() => {
  return parseInt(route.params.id);
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === destinationId.value
  );
});

// let destination = null;

// async function created() {
//   const response = await fetch(
//     `https://travel-dummy-api.netlify.app/${route.params.slug}.json`
//   );
//   destination = await response.json();
// }

// const initData = async () => {
//   const response = await fetch(
//     `https://travel-dummy-api.netlify.app/${route.params.slug}.json`
//   );
//   destination = await response.json();
// };

// const created = async () => {
//   initData();
// };

// created();

// export default {
//   computed: {
//     destinationId() {
//       return parseInt(this.$route.params.id);
//     },
//     destination() {
//       return sourceData.destinations.find(
//         (destination) => destination.id === this.destinationId
//       );
//     },
//   },
// };
</script>
