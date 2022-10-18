<template>
    <nav>
        <ul>
          <router-link to="/film" tag="li" activeClass="myactive"><span class="icon iconfont">&#xe6f4;</span> Film</router-link>
          <router-link to="/cinema" tag="li" activeClass="myactive"><span class="icon iconfont">&#xe621;</span> Cinama</router-link>
          <router-link to="/center" tag="li" activeClass="myactive"><span class="icon iconfont">&#xe6c2;</span> Center</router-link>
        </ul>
    </nav>
</template>

<style scoped>
    .myactive{
        color: red;
    }
    nav {
      position: fixed;
      margin: 0;
      left: 0px;
      bottom: 0px;
      height: 50px;
      width: 100%;
      background-color:#EEEEEE
    }
    nav ul li {
      float: left;
      display: block;
      text-align:center;
      width: 33%;
    }
</style>
