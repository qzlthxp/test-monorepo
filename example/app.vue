/* app.vue */
<template>
  <CustomButton size="small" type="primary" @click="handleClick" />
</template>

<script setup lang="ts">
function handleClick(e) {
  console.log(e)
}
</script>
