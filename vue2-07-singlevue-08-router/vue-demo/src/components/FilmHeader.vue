<template>
  <ul>
    <router-link to="/film/nowplaying" activeClass="current-display" tag="li">正在热映</router-link>
    <router-link to="/film/comingsoon" activeClass="current-display" tag="li">即将播放</router-link>
  </ul>
</template>
<style scoped>
  ul{
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
  }
  ul li {
    flex:1;
    height: 40px;
    line-height: 40px;
    text-align:center;
  }
  .current-display{
    color: red;
    border-bottom: 2px solid darkred;
  }
  .fixed{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40px;
    background-color: #FFF;
  }
</style>
