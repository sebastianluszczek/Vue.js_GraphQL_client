<template>
  <div class="books-list">
    <h1>Books List</h1>
    <div class="book" v-for="book in books" :key="book.id" @click="selectBook(book)">
      <div>{{book.name}}</div>
    </div>
    <BookDetails v-if="selected" :bookID="selected"/>
  </div>
</template>

<script>
import { allBooksQuery } from "../graphql/queries";
import BookDetails from "@/components/BookDetails";

export default {
  name: "Books-List",
  data() {
    return {
      books: [],
      selected: null
    };
  },
  components: {
    BookDetails
  },
  methods: {
    selectBook(book) {
      this.selected = book.id;
    }
  },
  apollo: {
    books: allBooksQuery
  }
};
</script>

