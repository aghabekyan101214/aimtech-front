<template>
    <div class="info-section">
        <div class="row p-2">
            <div class="col-md-2 pl-5">
                <p> <img src="../../assets/images/linkedin.svg" alt="Linkedin icon Aimtech"> Have any questions ?</p>
            </div>
            <div class="col-md-2">
                <p><img src="../../assets/images/reply.svg" alt="Reply Aimtech"> info@aimtech.am</p>
            </div>
            <div class="col-md-3">
                <p> <img src="../../assets/images/call.svg" alt="Phone Aimtech"> +374 33 93 93 99</p>
            </div>
            <div class="col-md-3 float-right">
                <p class="text-right text-uppercase">Sign up for free consulting</p>
            </div>
            <div class="col-md-2 float-right">
                <p class="text-right text-uppercase">Contact us</p>
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
</style>
