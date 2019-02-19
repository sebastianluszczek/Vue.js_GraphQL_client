<template>
  <div id="app">
    <BooksList/>
    <AddBook/>
  </div>
</template>

<script>
import BooksList from "@/components/BooksList";
import AddBook from "@/components/AddBook";

export default {
  name: "App",
  components: {
    BooksList,
    AddBook
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
