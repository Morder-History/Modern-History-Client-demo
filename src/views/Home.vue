<template>
  <div>
    {{ name }}
    <div />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref<string>("sue");
</script>

<style lang="scss">
div {
  color: $a;
}
</style>
