<template>
  <div class="markdown-body">
    <Demo />
  </div>
</template>

<script lang="ts" setup>
import Demo from "@/Demo/demo.md";
</script>

<style lang="scss" scoped>
// 这里可以约束解析出来后的 markdown 标签样式，如设置 h1{...}
div {
  color: $redColor;
}
</style>
