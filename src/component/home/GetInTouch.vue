<template>
    <section id="contact" class="contact-section">
        <div class="zikjak-line"><img src="@/images/line.svg" alt="images not found"></div>
        <div class="container">
            <div class="decoration-content d-none d-lg-block">
                <img class="images-1" src="@/images/landing-slider-image-12.png" alt="images not found">
                <img class="images-2" src="@/images/landing-slider-image-3.png" alt="images not found">
            </div>
            <div class="section-title">
                <span><img src="@/images/coffee-cup.svg" alt="icon not found"></span>
                <h1>Get in touch</h1>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <form action="#" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="name" id="name" name="name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" id="phone" name="phone">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                        <button><i class="ion-ios-arrow-right"></i>Send Message</button>
                    </form>
                </div>
                <div class="col-lg-6">
                    <div class="contact-images">
                        <img src="@/images/012-07.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style scoped>

</style>