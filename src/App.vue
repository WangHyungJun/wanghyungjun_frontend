<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
import header from './components/all/header';
import footer from './components/all/footer';

export default {
  components: {
    appheader: header,
    appfooter: footer
  }
};
</script>

<style lang="scss">
</style>
