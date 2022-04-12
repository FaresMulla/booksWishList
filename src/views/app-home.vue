<template>
  <h1>Home Page</h1>
  <book-preview  :books="books" />
</template>

<script>
import bookPreview from "../components/book-preview.vue"
// import BookPreview from "../components/book-preview.vue"
export default {
    name:'app-home',
    computed:{
        books(){
           return this.$store.getters.books
        }
    },
    components:{
    bookPreview,
}
}
</script>

<style>

</style>