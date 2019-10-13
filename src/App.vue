<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import header from './components/Header.vue'
import footer from './components/Footer.vue'
export default {
  components : {
    'app-header' : header,
    'app-footer' : footer
  }
}
</script>
