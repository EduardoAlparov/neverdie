<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import MainLayout from './components/MainLayout'

export default {
  name: "App",
  components: {
    MainLayout,
  }
}
</script>


<style lang="scss">

@import '~@/styles/main.scss';

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $orange;
  height: 100%;
}


</style>
