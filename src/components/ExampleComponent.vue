<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="setCountTo5">5</button>
    {{ count }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  if (count.value !== undefined) count.value++;
};

const decrement = () => {
  if (count.value !== undefined) count.value--;
};

const setCountTo5 = () => (count.value = 5);
</script>
