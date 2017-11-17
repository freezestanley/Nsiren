<template>
  <div class="allSort">
   bb
    <div @click="gotoaa">this is bb</div>
    </div>
</template>

<script>

export default {
  name: 'aa',
  methods: {
    gotoaa () {
      this.$router.push({path: "/bb"})
    }
  },
  data () {
    return {
      sortMenu: [
        { sortname: '全部' },
        { sortname: '家用电器' },
        // { sortname: '大家电' },
        // { sortname: '生活用品' },
        // { sortname: '食品' },
        // { sortname: '美妆' },
        // { sortname: '书籍' },
        // { sortname: '洗护用品' },
        // { sortname: '母婴用品' },
        { sortname: '家居' }
      ],
      sortName: [
        { sortname: '家用电器' },
        { sortname: '母婴' },
        { sortname: '百货' },
        { sortname: '珠宝配饰' },
        { sortname: '运动户外' },
        { sortname: '食品' },
        { sortname: '美妆' },
        { sortname: '家装' },
        { sortname: '家居家纺' },
        { sortname: '鲜花宠物' },
        { sortname: '图书乐器' },
        { sortname: '生活服务' },
        { sortname: '游戏动漫' }
      ],
      subitemsExpanded: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' rel="stylesheet/scss"  scoped>
.sortMenu{
  width: 100%; 
  background-color:#ccc; 
  overflow-x: scroll; 
  -webkit-overflow-x: scroll;
}
.sortMenu::-webkit-scrollbar{ 
  width: 0; 
  height: 0;   
  background-color: #fff;  
}
.sortMenu-ul { 
  min-width:500px; 
  display: flex;
  justify-content: flex-start;
}
.sortMenu .cell{ 
  display: inline-block; 
  font-size: 12px;
  margin: 0px 1em;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
      text-overflow: ellipsis;
    word-break: keep-all;
}
.sortMenu .cell.special a{
  color: #ff474c;
}
.sortMenu .cell.special:before {
  content: '';
  height: 2px;
  width: 100%;
  background: #ff474c;
  position: absolute;
  bottom: 0px;
}
.sortMenu .all{
  right: 0;
  top: 0;
  height: 35px;
  width: 35px;
  position: absolute;
  background: #fff;
  z-index: 10;
  display: flex;
  justify-content:center;
  align-items:center;
}
.sortMenu .all:before{
  content: '';
  height: 25px;
  width: 1px;
  position: absolute;
  box-shadow: 1px 0px 1px #e0e0e0;
  left: 0px;
}
.sortMenu .all img{
  display: block;
  width: 16px;
}
.sortMenu .pull-down{
  position: absolute;
  top: 40px;
  height:auto;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-top: 1px solid #f2f2f2;

}
.pull-down-sort{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row
}
.pull-down-sort li{
  float: left;
  padding: .1rem
}
.pull-down-sort li a:hover{
  color: #ff474c;
}
</style>
