<script setup lang='ts'>
import { onMounted, useTemplateRef } from 'vue';

const btn = useTemplateRef<HTMLButtonElement>("submit")
onMounted(() => {
  btn.value?.click();
})
</script>

<template>
  <main class="flex-center">
    <form action="https://github.com/settings/apps/new" method="post">
      <input type="hidden" name="manifest" :value="$route.query.manifest" required>
      <button type="submit" ref="submit">Register Github App</button>
    </form>
  </main>
</template>

<style scoped lang='scss'></style>