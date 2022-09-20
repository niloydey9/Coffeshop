<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container pr-0">
            <router-link v-bind:to="{name: 'HomePage'}" class="navbar-brand">
                Coffee.
            </router-link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#coffee-shop">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="coffee-shop">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'HomePage'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'AboutPage'}" class="nav-link">About us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'MenuPage'}" class="nav-link">Menu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'BlogPage'}" class="nav-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'ContactPage'}" class="nav-link">Contact Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>

</script>


<style scoped>

</style>