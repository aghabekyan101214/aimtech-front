<template>
    <div class="info-section d-none d-lg-block">
        <div class="row p-2">
            <div class="col-md-3 pl-5">
                <p class="d-flex"> <img src="../../assets/images/linkedin.svg" alt="Linkedin icon Aimtech"> Have any questions ?</p>
            </div>
            <div class="col-md-2">
                <p class="d-flex"><img src="../../assets/images/reply.svg" alt="Reply Aimtech"> info@aimtech.am</p>
            </div>
            <div class="col-md-3">
                <p> <img src="../../assets/images/call.svg" alt="Phone Aimtech"> +374 55 02 34 20</p>
            </div>
<!--            <div class="col-md-3 float-right">-->
<!--                <p class="text-right text-uppercase">Sign up for free consulting</p>-->
<!--            </div>-->
            <div class="col-md-4 float-right text-right pr-5">
                <router-link to="/get-quote" class="rounded-btn text-right text-white text-uppercase">Get a Quote</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "LittleSection",

    }
</script>

<style scoped>
    p{
        color: white;
        font-size: 14px;
        letter-spacing: 1px;
    }
    .row > div {
        margin-bottom: 0;
    }
    .row > div p {
        margin-bottom: 0;
    }
    .info-section p img {
        height: 15px;
        padding-right: 15px;
    }
    .rounded-btn.text-right{
        padding: 5px 15px;
    }
</style>
