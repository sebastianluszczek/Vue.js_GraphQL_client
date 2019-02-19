<template>
  <div class="add-book">
    <h2>Add Book</h2>
    <form>
      <div class="input-wrapper">
        <label>Book name:</label>
        <input type="text" v-model="newBook.name">
      </div>
      <div class="input-wrapper">
        <label>Genre:</label>
        <input type="text" v-model="newBook.genre">
      </div>
      <div class="input-wrapper">
        <label>Author:</label>
        <select v-model="newBook.author_id">
          <option v-for="author in authors" :key="author.id" :value="author.id">{{author.name}}</option>
        </select>
      </div>
      <button @click.prevent="addBook" class="btn">+</button>
    </form>
  </div>
</template>

<script>
import {
  allAuthorsQuery,
  addBookMutation,
  allBooksQuery
} from "../graphql/queries";

export default {
  name: "Add-Book",
  data() {
    return {
      authors: [],
      newBook: {
        name: null,
        genre: null,
        author_id: null
      }
    };
  },
  methods: {
    addBook() {
      this.$apollo.mutate({
        mutation: addBookMutation,
        variables: {
          name: this.newBook.name,
          genre: this.newBook.genre,
          author_id: this.newBook.author_id
        },
        refetchQueries: [{ query: allBooksQuery }]
      });
    }
  },
  apollo: {
    authors: allAuthorsQuery
  }
};
</script>

