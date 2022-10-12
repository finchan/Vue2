<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" activeClass="myactive">Film</router-link>
            <router-link to="/cinema" tag="li" activeClass="myactive">Cinama</router-link>
            <router-link to="/center" tag="li" activeClass="myactive">Center</router-link>
        </ul>
    </nav>
</template>

<style scoped>
    .myactive{
        color: red;
    }
    nav {
      position: fixed;
      bottom: 0px;
      height: 50px;
      width: 100%;
    }
    nav ul li {
      float: left;
      display: block;
      text-align:center;
      width: 33%;
    }
</style>
