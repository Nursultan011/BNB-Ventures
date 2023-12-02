<template>
  <button @click="$emit('click')" class="main-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style></style>
