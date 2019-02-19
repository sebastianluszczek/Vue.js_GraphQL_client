<template>
  <div class="book-details">
    <h4>Output Book details here:</h4>
    <p v-if="bookID">{{book}}</p>
    <p v-else>No book selected...</p>
  </div>
</template>

<script>
import { getBookQuery } from "../graphql/queries";
export default {
  name: "BookDetails",
  props: ["bookID"],
  data() {
    return {
      book: null
    };
  },
  mounted() {
    console.log(this.bookID);
  }
  //   apollo: {
  //     book: {
  //       query: getBookQuery,
  //       variables: {
  //         id: this.bookID
  //       }
  //     }
  //   }
};
</script>

