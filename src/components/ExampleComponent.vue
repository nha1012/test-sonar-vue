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

const count = ref(100);
const testObject = ref({});

const promiseFunc = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const common = async (): Promise<number> => {
  return await promiseFunc();
};
const increment = async () => {
  if (count.value == 10 && lodash.isEmpty(testObject.value)) {
    count.value += await common();
  }
};

const decrement = async () => {
  if (count.value == 10 && lodash.isEmpty(testObject.value)) {
    count.value -= await common();
  }
};

const setCountTo5 = () => (count.value = 5);
</script>
