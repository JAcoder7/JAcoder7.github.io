<script setup lang='ts'>
</script>

<template>
  <main class="flex-center">
    <button onclick="location.href=location.href">{{ $route.query.btnText || $route.params.name || 'Redirect' }}</button>
  </main>
</template>

<style scoped lang='scss'></style>