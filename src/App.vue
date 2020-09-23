<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/AppGeneral/TheHeader'
import TheFooter from '@/components/AppGeneral/TheFooter'

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 2;
  max-width: 1170px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
}


</style>
