<template>
  <div class="main-layout">
    <h1>Books wish list</h1>
    <router-view />
    <app-home />
  </div>
</template>

<script>
import appHome from "./views/app-home.vue"
export default {
  components:{
    appHome
  },
  created(){
    this.$store.dispatch({ type: "loadBooks" });
  }
}
</script>

<style>

</style>