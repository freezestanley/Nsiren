<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>sb cow</div>
    <h2>Essential Links</h2>
    <div @click="cross">跨域</div>
    <div @click="local">本地</div>
    <div @click="language">i18n</div>
    <div @click="gotoaa">aa</div>
    <div @click="gotobb">bb</div>
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
      this.axios.post(ILOGIN).then((response) => {
        console.dir(response)
      }).catch((err) => {
        console.log(err)
        throw new Error(err)
      })
    },
    local () {
      this.axios.post(ILOGIN).then((response) => {
        console.dir(response)
      }).catch((err) => {
        console.log(err)
        throw new Error(err)
      })
    },
    language () {
      console.dir(window.app.i18n)
      window.app.i18n.locale = window.app.i18n.locale == 'en' ? 'ja' : 'en'
      console.log('fff')
    },
    gotoaa () {
      this.$router.push({path: "/aa"})
    },
    gotobb () {
      this.$router.push({path: "/bb"})
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
