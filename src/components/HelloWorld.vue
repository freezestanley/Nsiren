<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>sb cow</div>
    <h2>Essential Links</h2>
    <div @click="cross">跨域</div>
    <div @click="local">本地</div>
  </div>
</template>
<script>
import {ILOGIN} from '@/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    cross () {
      this.axios.post(ILOGIN()).then((response) => {
        console.dir(response)
      }).catch((err) => {
        console.log(err)
        throw new Error(err)
      })
    },
    local () {
      this.axios.post(ILOGIN(true)).then((response) => {
        console.dir(response)
      }).catch((err) => {
        console.log(err)
        throw new Error(err)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' rel="stylesheet/scss"  scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
