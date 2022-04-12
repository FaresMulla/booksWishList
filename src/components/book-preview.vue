<template>
  <section v-if="renderBook" class="book-preview">
    <div>{{ renderBook.title }}</div>
    <div>{{ renderBook.author }}</div>
    <div>{{ renderBook.description }}</div>
    <div>{{ renderBook.rating }}</div>
    <div>{{ renderBook.price }}</div>
    <div>page {{pageIdx+1}}</div>
  </section>
  <button @click="changePage(-1)">backwards</button>
  <button @click="changePage(1)">forward</button>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      pageIdx: 0,
    };
  },
  methods: {
    changePage(direction) {
      if (direction === -1 && this.pageIdx === 0) this.pageIdx = this.books.length - 1 ;
      else if (direction === 1 && this.pageIdx === this.books.length - 1) this.pageIdx = 0;
      else this.pageIdx += direction;
    },
  },
  computed: {
    renderBook() {
      return this.books[this.pageIdx];
    },
  },
};
</script>

<style>
</style>