<template>
  <h1>Home Page</h1>
  <book-preview v-for="book in books" :key="book._id" :book="book" />
  <pre v-if="tasks">Tasks: {{tasks}}</pre>

</template>

<script>
import bookPreview from "../components/book-preview.vue"
import BookPreview from "../components/book-preview.vue"
export default {
    name:'app-home',
    computed:{
        books(){
           return this.$store.getters.books
        }
    },
    components:{
    bookPreview,
    BookPreview
}
}
</script>

<style>

</style>