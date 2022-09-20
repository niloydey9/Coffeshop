<template>
    <div class="">
        <NavBar/>
        <BannerHeader />
        <OurSecret />
        <OurMenu />
        <OurBlog />
        <GetInTouch />
        <FooterSec />
    </div>
</template>


<script setup>
    import NavBar from '@/component/NavBar.vue';
    import BannerHeader from '@/component/home/BannerHeader.vue';
    import GetInTouch from '@/component/home/GetInTouch.vue';
    import OurBlog from '@/component/home/OurBlog.vue';
    import OurMenu from '@/component/home/OurMenu.vue';
    import OurSecret from '@/component/home/OurSecret.vue';
    import FooterSec from '@/component/FooterSec.vue';
</script>

<style scoped>

</style>