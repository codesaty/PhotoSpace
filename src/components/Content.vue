<template>
  <div class="content">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
.content {
  max-width: 940px;
  margin-right: auto;
  margin-left: auto;
}
</style>