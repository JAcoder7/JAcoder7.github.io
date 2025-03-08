<script setup lang='ts'>
import { onMounted, useTemplateRef } from 'vue';
import { useRoute } from 'vue-router';

const btn = useTemplateRef<HTMLButtonElement>("submit")
const route = useRoute()
onMounted(() => {
  if (!route.query.manual) {
    btn.value?.click();
  }
  console.log(route.query.manifest);
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