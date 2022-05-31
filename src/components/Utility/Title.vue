<template>
  <h2 class="h2 bg--primary title--header p--md"><slot /></h2>
</template>
<style lang="sass">
.title--header
  text-align: center
  width: var(--size-fluid-10)
  margin-left: auto
  margin-right: auto
  border-radius: var(--size-3)
  transform: rotate(-2deg)
  box-shadow: var(--shadow-3)
</style>