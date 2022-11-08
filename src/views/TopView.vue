<template>
    <CompanyHeadComponents />
    <CompanyBusinessComponents />
    <CompanyContentComponents />
    <CompanyCardComponents />
    <CompanyAccessComponents />
  </template>
  
  <script>
  import CompanyHeadComponents from '@/components/CompanyHeadComponents.vue'
  import CompanyBusinessComponents from '@/components/CompanyBusinessComponents.vue'
  import CompanyContentComponents from '@/components/CompanyContentComponents.vue'
  import CompanyCardComponents from '@/components/CompanyCardComponents.vue'
  import CompanyAccessComponents from '@/components/CompanyAccessComponents.vue'
  
  export default {
    components: {
      CompanyHeadComponents,
      CompanyBusinessComponents,
      CompanyContentComponents,
      CompanyCardComponents,
      CompanyAccessComponents,
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
  