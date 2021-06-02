<template>
    <div class="container">
        <div class="header">
            <h1 style="text-align: center">US Politics Topic Detection and Demographics Analysis</h1>
            <div style="text-align: center"> Developed by Angelos Moavinis, Asterios Bampakis, Themistoklis Spanoudis and Konstantinos Giantsios</div>
        </div>
        <div class="grid-container">
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(0)">Home page</a></div>
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(1)">Demographics, sentiment and subjectivity analysis</a></div>
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(2)">Topics</a></div>
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(3)">User clustering and Retweet graph</a></div>
        </div>
    </div>
</template>

<script>
export default {
  title: 'US Politics WDM 2021 Project',
  methods: {
    emitToParent(event) {
      this.$emit('event1', event);
    }
  },
}
</script>

<style scoped>
.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}
.grid-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: auto auto auto auto;
  text-align: center;
  margin: 50px 0px;
}
.button {
  color: purple;
  text-decoration: none;
  font-size: 18px;
  border: 2px solid purple;
  padding: 2px;
  border-radius:10px;
  background-color: lightgray;
}
.container {
  background-color: lightblue;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
}
</style>