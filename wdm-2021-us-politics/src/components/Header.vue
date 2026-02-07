<template>
    <div class="container">
        <div class="header">
          <div>
          <div class="logo">Twitter Data Mining about 2020's United States Elections</div>
          <div class="subtitle">Developed by Angelos Moavinis, Asterios Bampakis, Themistoklis Spanoudis and Konstantinos Giantsios</div>
          </div>
          <hr>
          <div class="header-right">
            <a href="#" v-on:click.prevent="emitToParent(0)" :class="selectedTab==0?'active':'not-selected'">
              <span >
                Home page
              </span>
            </a>
            <a href="#" v-on:click.prevent="emitToParent(1)" :class="selectedTab==1?'active':'not-selected'">
              <span >
                Demographics, sentiment and subjectivity analysis
              </span>
            </a>
            <a href="#" v-on:click.prevent="emitToParent(2)" :class="selectedTab==2?'active':'not-selected'">
              <span >
                Topics
              </span>
            </a>
            <a href="#" v-on:click.prevent="emitToParent(3)" :class="selectedTab==3?'active':'not-selected'">
              <span >
                User clustering
              </span>
            </a>
            <a href="#" v-on:click.prevent="emitToParent(4)" :class="selectedTab==4?'active':'not-selected'">
              <span >
                Graph analysis
              </span>
            </a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      selectedTab: 0,
    };
  },

  title: "Twitter Data Mining about 2020's United States Elections",
  methods: {
    emitToParent(event) {
      this.$emit("event1", event);
      this.selectedTab = event;
    },
  },
};
</script>

<style scoped>
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
  border-radius: 10px;
  background-color: lightgray;
}
.container {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
}
.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  border: 0;
  outline: 0;
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.logo {
  font-size: 25px;
  font-weight: bold;
}

.header {
  font-size: 16px;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.not-selected {

}

.header-right {
  float: left;
}
</style>