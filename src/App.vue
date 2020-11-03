<template>
  <div class="app">
    <Header/>


    <Content>
      <router-view/>
    </Content>

  </div>

</template>

<script>
import Header from "@/components/Header";
import Content from "@/components/Content";

export default {
  components: {
    Content,
    Header,
  }
}
</script>

<style lang="scss">

</style>

