<template>
  <div id="app">
    <StartPage/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'

export default {
  name: 'App',
  components: { StartPage }
}
</script>

<style lang="scss">
#app {
  // responsibility moved to TailwindCSS with `./tailwind.config.js` and `./assets/styles/index.css`
}
</style>
