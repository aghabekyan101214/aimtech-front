<template>
    <div class="section rounded-section">
        <div class="container pt-5 pb-5">
            <div class="row">
                <div class="col-md-6 pl-xl-0 pl-md-0">
                    <h2 class="section-title mb-3">Product Development For <br> Better <span class="text-blue">Business</span></h2>
                    <p> The fact that we create user friendly and scalable software with clean and optimized code is not something we emphasize as this is the standard for us. Hence we go the extra mile focusing on providing highly effective customer service and adding value to our partner’s businesses. We believe that in the complicated software world where so much resource waste is caused because of mismanagement, improper planning, communication and disengagement of development teams we are here to provide a different approach and create real value, give support and results beyond expectations. </p>
<!--                    <h2 class="section-title2 p-2">-->
<!--                        <img class="mr-2" src="../../assets/images/about/target-icon.svg" alt="Target Icon">-->
<!--                        OUR Target-->
<!--                    </h2>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur impedit iusto odio repellendus!</p>-->
                </div>
                <div class="col-md-6 pr-md-0 pr-xl-0 text-lg-right text-md-right">
                    <img class="img-fluid" src="../../assets/images/about/main-img-min.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product_Development"
    }
</script>

<style scoped>
    p, h2{
        letter-spacing: 2px;
    }
    .section {
        background: #fff;
    }
    .section-title{
        font-size: 25px;
        font-family: robotolight, sans-serif;
    }
    .section-title2{
        font-size: 22px;
        font-family: robotolight, sans-serif;
    }
    @media all and (max-width: 460px) {
        .section-title{
            font-size: 26px;
        }
    }
</style>
