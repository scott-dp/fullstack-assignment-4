<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calculator from './components/Calculator.vue';
</script>

<template>
  <div class="wrapper">
      <img class="Large-grid-item" src="../public/calc.jpg" alt="Calculator" width="150" height="150">
      <h1 class="Large-grid-item">Calculator</h1>
      <Calculator modelValue=""/>
    </div>
    <RouterLink id="routerToForm" to="/form">Feedback form</RouterLink>
    <RouterView />
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
}

img {
  margin: 0 auto; /* Center the image horizontally */
}

.Large-grid-item {
  grid-column: span 4;
  align-items: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
