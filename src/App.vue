<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  src: local('Quicksand Regular'), local('Quicksand-Regular'), url(https://fonts.gstatic.com/s/quicksand/v9/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html {
  background-image: linear-gradient(to left bottom, #cebed0, #d4c6d6, #dbcedc, #e1d6e3, #e8dee9);
  height: auto;
  background-repeat: no-repeat;
  min-height:100%;
}

#app {
  font-family: "Quicksand", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
