<template>
  <footer class="text--text">
    <small>Copyright Graficiarze © 2021 - {{ curruentYear }}</small>
  </footer>
</template>
<script lang="ts" setup>
  const curruentYear = new Date().getFullYear();
</script>
<style lang='sass' >
footer
  display: flex
  justify-content: center
  padding: var(--size-2)
  background-color: hsl(var(--primary))
</style>
