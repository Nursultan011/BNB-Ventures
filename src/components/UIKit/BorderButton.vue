<template>
  <button @click="$emit('click')" class="outline-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style></style>
