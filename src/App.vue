<template>
  <HeaderComponents />
  <router-view/>
</template>

<script>
import HeaderComponents from '@/components/HeaderComponents.vue'

export default {
  components: {
    HeaderComponents,
  },
}
</script>


<style lang="scss">
h1 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
