<template>
    <div>
        <div class="header">
            <h1 style="text-align: center">US Politics Topic Detection and Demographics Analysis</h1>
            <div style="text-align: center"> Developed by Angelos Moavinis, Asterios Bampakis, Themistoklis Spanoudis and Konstantinos Giantsios</div>
        </div>
        <div class="grid-container">
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(0)">Home page</a></div>
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(1)">Demographics, sentiment and subjectivity analysis</a></div>
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(2)">Topics</a></div>
            <div class="grid-item"><a href="#" class="button" v-on:click.prevent="emitToParent(3)">User clusters</a></div>
        </div>
    </div>
</template>

<script>
export default {
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
  margin-top: 60px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  text-align: center;
  margin: 50px 0px;
}
</style>