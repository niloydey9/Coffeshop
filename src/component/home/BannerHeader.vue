<template>
    <header id="home" class="header-slider" v-bind:style="{backgroundImage: 'url(' + Bannerimage + ')'}">
        <div class="cover">
            <div class="container">
                <div class="content">
                    <div class="content-cover">
                        <img src="@/images/coffee-time.png" alt="icon not found">
                        <h1>Your special coffee</h1>
                        <div class="arrow-wrap">
                            <a href="#about"><img src="@/images/arraw.svg" alt="icon not found"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup>
    import Bannerimage from "@/images/header/01.jpg"
</script>


<style scoped>

</style>