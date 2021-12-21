<template>
  <div>
    {{ name }}
    <div />
    <div>
      <Test />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Test from "@/Demo/test.vue";

const name = ref("sue");
</script>

<style lang="scss">
div {
  color: red;
}
</style>
