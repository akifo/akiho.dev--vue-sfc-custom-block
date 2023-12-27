<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld />
  {{ HelloWorld.i18n.message }}
  {{ HelloWorld.i18n.fullWord }}
</template>
