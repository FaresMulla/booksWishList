<template>
  <h1>Home Page</h1>
  <pre v-if="tasks">Tasks: {{tasks}}</pre>
</template>

<script>
export default {
    name:'app-home',
    computed:{
        tasks(){
           return this.$store.getters.books
        }
    }
}
</script>

<style>

</style>