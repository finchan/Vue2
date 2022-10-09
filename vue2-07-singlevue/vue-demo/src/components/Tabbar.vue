<template>
    <div>
        <ul>
            <router-link to="/film" tag="li" activeClass="myactive">Film</router-link>
            <router-link to="/cinema" tag="li" activeClass="myactive">Cinama</router-link>
            <router-link to="/center" tag="li" activeClass="myactive">Center</router-link>
        </ul>
    </div>
</template>

<style scoped>
    .myactive{
        color: red;
    }
</style>
