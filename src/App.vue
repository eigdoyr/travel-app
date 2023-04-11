<script setup></script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Brazil">Brazil</router-link>
    <router-link to="/Hawaii">Hawaii</router-link>
    <router-link to="/Jamaica">Jamaica</router-link>
    <router-link to="/Panama">Panama</router-link>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
