<template>
  <list-page/>
</template>

<script>
import ListPage from "./components/ListPage.vue";

export default {
  name: "App",
  components: {
    ListPage,
    
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400&display=swap');

#app {
  font-family: 'Heebo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
}
body{
background-color: #000000;
background-image: url("https://www.transparenttextures.com/patterns/black-paper.png");
}
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

</style>
