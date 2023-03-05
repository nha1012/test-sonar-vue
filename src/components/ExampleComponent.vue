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
import lodash from 'lodash';

const count = ref(0);
const testObject = ref({});

const increment = () => {
  if (count.value !== undefined && lodash.isEmpty(testObject.value)) {
    count.value++;
  }
};

const decrement = () => {
  if (count.value !== undefined && lodash.isEmpty(testObject.value)) {
    count.value--;
  }
};

const setCountTo5 = () => (count.value = 5);
</script>
