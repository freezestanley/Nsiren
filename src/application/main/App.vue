<template>
  <div id="app">
    this is main
    <img src="~@/assets/logo.png" style="display:block;">
    {{ $t('message.hello', { msg: 'hello' }) }}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.$vux.toast.text('hello', 'top')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
